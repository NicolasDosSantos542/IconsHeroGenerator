/**
 * Helpers to read / plan / apply origin effects (schema A).
 */
const OriginEffects = (() => {
  const MENTAL_ATTRIBUTES = ["Intellect", "Eveil", "Volonté"];

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function effectsOf(origin) {
    return Array.isArray(origin && origin.effects) ? origin.effects : [];
  }

  function flagsOf(origin) {
    return (origin && origin.flags) || {};
  }

  function labelForOption(option) {
    if (!option || !option.type) {
      return "Option";
    }
    switch (option.type) {
      case "bonus":
        return `+${option.amount || 2} sur ${option.count || 1} ${
          option.target === "power"
            ? "pouvoir(s)"
            : option.target === "mental_attribute"
              ? "attribut(s) mental/aux"
              : "capacité(s)"
        }`;
      case "extra_power":
        return option.innate
          ? "Pouvoir additionnel (inné)"
          : "Pouvoir additionnel";
      case "reroll_origin":
        return `Tirer ${option.picks || 2} autres origines (ignore ${
          (option.ignore || []).join(", ") || "—"
        })`;
      case "extra_specialities":
        return `+${option.count || 1} spécialité(s)`;
      default:
        return option.type;
    }
  }

  function resolvePlan(origin, decisions = {}) {
    const plan = {
      originName: origin && origin.name,
      flags: flagsOf(origin),
      autoBonuses: [],
      pendingBonuses: [],
      extraSpecialities: 0,
      optionalTrades: [],
      freePowers: [],
      extraPowers: [],
      rerollOrigin: null,
      substituteOrigins: null,
      unresolvedChoices: [],
    };

    effectsOf(origin).forEach((effect, index) => {
      applyEffectToPlan(plan, effect, decisions, String(index));
    });

    return plan;
  }

  function applyEffectToPlan(plan, effect, decisions, path) {
    if (!effect || !effect.type) {
      return;
    }

    switch (effect.type) {
      case "bonus": {
        const entry = {
          amount: effect.amount || 2,
          max: effect.max ?? 10,
          target: effect.target || "any_capacity",
          targetName: effect.targetName || null,
          count: effect.count || 1,
          path,
        };
        if (effect.target === "fixed" && effect.targetName) {
          for (let i = 0; i < entry.count; i += 1) {
            plan.autoBonuses.push({ ...entry, count: 1 });
          }
        } else {
          for (let i = 0; i < entry.count; i += 1) {
            plan.pendingBonuses.push({ ...entry, count: 1 });
          }
        }
        break;
      }
      case "extra_specialities":
        plan.extraSpecialities += effect.count || 1;
        break;
      case "optional_trade": {
        const key = `${path}.accepted`;
        const hasDecision = Object.prototype.hasOwnProperty.call(decisions, key);
        const accepted = decisions[key] === true;
        plan.optionalTrades.push({
          path,
          give: effect.give,
          gain: effect.gain,
          accepted,
          decided: hasDecision,
        });
        if (!hasDecision) {
          plan.unresolvedChoices.push({
            path: key,
            kind: "optional_trade",
            trade: { give: effect.give, gain: effect.gain },
          });
          break;
        }
        if (accepted && effect.gain) {
          applyEffectToPlan(plan, effect.gain, decisions, `${path}.gain`);
        }
        break;
      }
      case "choice": {
        const picked = decisions[path];
        if (
          typeof picked !== "number" ||
          !effect.options ||
          !effect.options[picked]
        ) {
          plan.unresolvedChoices.push({
            path,
            kind: "choice",
            options: (effect.options || []).map((option, index) => ({
              index,
              option,
              label: labelForOption(option),
            })),
          });
          break;
        }
        applyEffectToPlan(
          plan,
          effect.options[picked],
          decisions,
          `${path}.options.${picked}`
        );
        break;
      }
      case "extra_power":
        plan.extraPowers.push({
          innate: !!effect.innate,
          path,
        });
        break;
      case "free_power":
        plan.freePowers.push({
          name: effect.name,
          level: effect.level || "roll",
          path,
        });
        break;
      case "reroll_origin": {
        const picks = effect.picks || 2;
        const rolledKey = `${path}.rolled`;
        const rolled = decisions[rolledKey];
        if (Array.isArray(rolled) && rolled.length >= picks) {
          const chosen = rolled.slice(0, picks);
          plan.substituteOrigins = chosen.map((sub) => ({
            name: sub && sub.name,
            description: sub && sub.description,
          }));
          // Les effets des origines tirées remplacent ceux de « Venu d'ailleurs ».
          plan.flags = {};
          chosen.forEach((subOrigin, i) => {
            Object.assign(plan.flags, flagsOf(subOrigin));
            effectsOf(subOrigin).forEach((subEffect, j) => {
              applyEffectToPlan(
                plan,
                subEffect,
                decisions,
                `${path}.sub.${i}.${j}`
              );
            });
          });
        } else {
          plan.rerollOrigin = {
            picks,
            ignore: effect.ignore || [],
            path,
          };
        }
        break;
      }
      default:
        break;
    }
  }

  function rollOriginIgnoring(ignore = []) {
    const ignoreSet = new Set(ignore || []);
    const origins = (typeof table !== "undefined" && table.origin) || [];
    if (!origins.length) {
      return null;
    }
    let origin = null;
    let guard = 0;
    while (!origin && guard < 200) {
      guard += 1;
      const dice =
        Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
      if (ignoreSet.has(dice)) {
        continue;
      }
      origin =
        origins.find(
          (entry) =>
            Array.isArray(entry.number) && entry.number.includes(dice)
        ) || null;
    }
    return origin ? clone(origin) : null;
  }

  function poolForTarget(target, characterLike) {
    const attributes = (characterLike && characterLike.attributes) || [];
    const powers = (characterLike && characterLike.powers) || [];
    switch (target) {
      case "attribute":
        return attributes.map((attr) => ({
          kind: "attribute",
          name: attr.name,
        }));
      case "power":
        return powers.map((power) => ({ kind: "power", name: power.name }));
      case "mental_attribute":
        return attributes
          .filter((attr) => MENTAL_ATTRIBUTES.includes(attr.name))
          .map((attr) => ({ kind: "attribute", name: attr.name }));
      case "any_capacity":
        return [
          ...attributes.map((attr) => ({
            kind: "attribute",
            name: attr.name,
          })),
          ...powers.map((power) => ({ kind: "power", name: power.name })),
        ];
      case "fixed":
        return [];
      default:
        return [];
    }
  }

  function pendingBonusTokens(plan) {
    return (plan.pendingBonuses || []).reduce(
      (sum, bonus) => sum + (bonus.amount === 2 ? bonus.count || 1 : 0),
      0
    );
  }

  function rollDeterminationLevel() {
    const levelTable = [false, false, 1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 8];
    const roll =
      Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
    return levelTable[roll];
  }

  function rollExtraPower(existingPowers) {
    const shell = Object.create(Character.prototype);
    shell.powers = clone(existingPowers || []);
    const kind = shell.whatKindOf("power");
    if (!kind) {
      return null;
    }
    shell.whatPower(kind);
    return shell.powers[shell.powers.length - 1] || null;
  }

  /**
   * Build a personnage sheet from a rolled character + origin decisions.
   */
  function bootstrapPersonnage(character, decisions = {}, options = {}) {
    const origin = character && character.origin;
    const plan = resolvePlan(origin, decisions);
    let data = HeroSheet.createPersonnageData(character);

    data.mods.origin = {
      decisions: clone(decisions),
      flags: plan.flags,
      unresolved: plan.unresolvedChoices.length > 0,
      bonusQueue: [],
      freePowerQueue: [],
      extraPowerQueue: [],
      rerollOrigin: null,
      substituteOrigins: plan.substituteOrigins || null,
      needsSacrifice: null,
      seed: clone(character),
      unresolvedChoices: plan.unresolvedChoices,
      optionalTrades: plan.optionalTrades,
    };
    data.mods.originExtraSpecialitySlots = plan.extraSpecialities || 0;

    if (plan.unresolvedChoices.length) {
      return {
        ok: true,
        incomplete: true,
        data: HeroSheet.normalizePersonnageData(data),
        plan,
      };
    }

    const acceptedTrade = plan.optionalTrades.find((trade) => trade.accepted);
    if (acceptedTrade && acceptedTrade.give && acceptedTrade.give.type === "power") {
      const sacrificed = options.sacrificedPowerName;
      if (!sacrificed) {
        data.mods.origin.needsSacrifice = {
          path: acceptedTrade.path,
          count: acceptedTrade.give.count || 1,
        };
        data.mods.origin.unresolved = true;
        return {
          ok: true,
          incomplete: true,
          data: HeroSheet.normalizePersonnageData(data),
          plan,
        };
      }
      data.base.powers = (data.base.powers || []).filter(
        (power) => power.name !== sacrificed
      );
    }

    plan.autoBonuses.forEach((bonus) => {
      data.mods.appliedBonuses.push({
        kind: "attribute",
        name: bonus.targetName,
        amount: bonus.amount || 2,
        source: HeroSheet.SOURCE_ORIGIN,
        removalId: null,
        max: bonus.max ?? 10,
      });
    });

    plan.pendingBonuses.forEach((bonus) => {
      data.mods.origin.bonusQueue.push({
        amount: bonus.amount || 2,
        max: bonus.max ?? 10,
        target: bonus.target,
        path: bonus.path,
      });
    });
    data.mods.pendingBySource[HeroSheet.SOURCE_ORIGIN] =
      data.mods.origin.bonusQueue.length;

    data.mods.originExtraSpecialitySlots = plan.extraSpecialities || 0;

    plan.freePowers.forEach((free) => {
      if (free.level === "roll_or_sacrifice_for_10") {
        data.mods.origin.freePowerQueue.push(free);
      } else {
        const level =
          free.level === "roll" || !Number(free.level)
            ? rollDeterminationLevel()
            : Number(free.level);
        data.base.powers.push({
          name: free.name,
          level,
          page: null,
          freeFromOrigin: true,
        });
      }
    });

    plan.extraPowers.forEach((extra) => {
      data.mods.origin.extraPowerQueue.push(extra);
    });

    if (plan.rerollOrigin) {
      data.mods.origin.rerollOrigin = plan.rerollOrigin;
    }
    if (plan.substituteOrigins) {
      data.mods.origin.substituteOrigins = plan.substituteOrigins;
    }

    data.mods.origin.unresolved =
      data.mods.origin.freePowerQueue.length > 0 ||
      data.mods.origin.extraPowerQueue.length > 0 ||
      !!data.mods.origin.rerollOrigin;
    data.mods.origin.unresolvedChoices = [];
    data.mods.origin.optionalTrades = plan.optionalTrades;

    return {
      ok: true,
      incomplete:
        data.mods.origin.unresolved || data.mods.origin.bonusQueue.length > 0,
      data: HeroSheet.normalizePersonnageData(data),
      plan,
    };
  }

  function rebootstrapFromSeed(data, decisions, options = {}) {
    const seed =
      (data.mods && data.mods.origin && data.mods.origin.seed) ||
      {
        attributes: data.base.attributes,
        powers: data.base.powers,
        origin: data.base.origin,
        specialities: data.base.specialities,
      };
    return bootstrapPersonnage(seed, decisions, options);
  }

  function applyOriginBonus(data, kind, name) {
    const locked = HeroSheet.isFinished(data)
      ? { ok: false, reason: "finished" }
      : null;
    if (locked) {
      return locked;
    }
    const next = HeroSheet.normalizePersonnageData(data);
    const queue = next.mods.origin && next.mods.origin.bonusQueue;
    if (!queue || !queue.length) {
      return { ok: false, reason: "no_pending" };
    }
    const spec = queue[0];
    const pool = poolForTarget(spec.target, {
      attributes: next.base.attributes,
      powers: HeroSheet.resolvedPowers(next),
    });
    const allowed = pool.some(
      (entry) => entry.kind === kind && entry.name === name
    );
    if (!allowed) {
      return { ok: false, reason: "invalid_target" };
    }

    const currentLevel =
      kind === "attribute"
        ? (
            HeroSheet.resolvedAttributes(next).find((attr) => attr.name === name) ||
            {}
          ).level
        : (
            HeroSheet.resolvedPowers(next).find((power) => power.name === name) ||
            {}
          ).level;
    const amount = spec.amount || 2;
    if (spec.max != null && currentLevel + amount > spec.max) {
      return { ok: false, reason: "max" };
    }

    next.mods.appliedBonuses.push({
      kind,
      name,
      amount,
      source: HeroSheet.SOURCE_ORIGIN,
      removalId: null,
      max: spec.max,
    });
    queue.shift();
    next.mods.pendingBySource[HeroSheet.SOURCE_ORIGIN] = Math.max(
      0,
      (next.mods.pendingBySource[HeroSheet.SOURCE_ORIGIN] || 0) - 1
    );
    next.mods.origin.bonusQueue = queue;
    return { ok: true, data: next };
  }

  function resolveFreePower(data, mode, sacrificedPowerName) {
    const next = HeroSheet.normalizePersonnageData(data);
    const queue = next.mods.origin && next.mods.origin.freePowerQueue;
    if (!queue || !queue.length) {
      return { ok: false, reason: "empty" };
    }
    const free = queue[0];
    let level = rollDeterminationLevel();
    if (mode === "sacrifice") {
      if (!sacrificedPowerName) {
        return { ok: false, reason: "need_sacrifice" };
      }
      const before = next.base.powers.length;
      next.base.powers = next.base.powers.filter(
        (power) => power.name !== sacrificedPowerName
      );
      if (next.base.powers.length === before) {
        return { ok: false, reason: "missing_power" };
      }
      level = 10;
    }
    if (
      next.base.powers.some((power) => power.name === free.name)
    ) {
      return { ok: false, reason: "duplicate" };
    }
    next.base.powers.push({
      name: free.name,
      level,
      page: null,
      freeFromOrigin: true,
    });
    queue.shift();
    next.mods.origin.freePowerQueue = queue;
    next.mods.origin.unresolved =
      queue.length > 0 ||
      (next.mods.origin.extraPowerQueue || []).length > 0 ||
      !!next.mods.origin.rerollOrigin;
    return { ok: true, data: next };
  }

  function resolveExtraPower(data) {
    const next = HeroSheet.normalizePersonnageData(data);
    const queue = next.mods.origin && next.mods.origin.extraPowerQueue;
    if (!queue || !queue.length) {
      return { ok: false, reason: "empty" };
    }
    const rolled = rollExtraPower(next.base.powers);
    if (!rolled) {
      return { ok: false, reason: "roll_failed" };
    }
    rolled.innateFromOrigin = true;
    next.base.powers.push(rolled);
    queue.shift();
    next.mods.origin.extraPowerQueue = queue;
    next.mods.origin.unresolved =
      (next.mods.origin.freePowerQueue || []).length > 0 ||
      queue.length > 0 ||
      !!next.mods.origin.rerollOrigin;
    return { ok: true, data: next, power: rolled };
  }

  function rollSubstituteOrigins(data) {
    const next = HeroSheet.normalizePersonnageData(data);
    const reroll = next.mods.origin && next.mods.origin.rerollOrigin;
    if (!reroll || !reroll.path) {
      return { ok: false, reason: "no_reroll" };
    }
    const picks = reroll.picks || 2;
    const rolled = [];
    for (let i = 0; i < picks; i += 1) {
      const origin = rollOriginIgnoring(reroll.ignore || []);
      if (!origin) {
        return { ok: false, reason: "roll_failed" };
      }
      rolled.push(origin);
    }
    const decisions = {
      ...(next.mods.origin.decisions || {}),
      [`${reroll.path}.rolled`]: rolled,
    };
    const result = rebootstrapFromSeed(next, decisions);
    if (!result.ok) {
      return result;
    }
    return {
      ...result,
      origins: rolled.map((origin) => ({
        name: origin.name,
        description: origin.description,
      })),
    };
  }

  /**
   * Undo the origin choice that queued a double origin roll, before or after roll
   * only while still on the pending reroll step (before substitutes are applied).
   */
  function undoPendingRerollChoice(data) {
    const next = HeroSheet.normalizePersonnageData(data);
    const reroll = next.mods.origin && next.mods.origin.rerollOrigin;
    if (!reroll || !reroll.path) {
      return { ok: false, reason: "empty" };
    }
    const path = reroll.path;
    const decisionKey = path.includes(".options.")
      ? path.split(".options.")[0]
      : path;
    if (!decisionKey) {
      return { ok: false, reason: "missing_path" };
    }
    const decisions = {
      ...(next.mods.origin.decisions || {}),
    };
    delete decisions[decisionKey];
    delete decisions[`${path}.rolled`];
    return rebootstrapFromSeed(next, decisions);
  }

  function dismissRerollOrigin(data) {
    return undoPendingRerollChoice(data);
  }

  /**
   * Undo the origin choice that queued an extra power, only before it is rolled.
   */
  function undoPendingExtraPowerChoice(data) {
    const next = HeroSheet.normalizePersonnageData(data);
    const queue = next.mods.origin && next.mods.origin.extraPowerQueue;
    if (!queue || !queue.length) {
      return { ok: false, reason: "empty" };
    }
    const pending = queue[0];
    const path = pending.path || "";
    const decisionKey = path.includes(".options.")
      ? path.split(".options.")[0]
      : path;
    if (!decisionKey) {
      return { ok: false, reason: "missing_path" };
    }
    const decisions = {
      ...(next.mods.origin.decisions || {}),
    };
    delete decisions[decisionKey];
    return rebootstrapFromSeed(next, decisions);
  }

  return {
    MENTAL_ATTRIBUTES,
    effectsOf,
    flagsOf,
    labelForOption,
    resolvePlan,
    poolForTarget,
    pendingBonusTokens,
    bootstrapPersonnage,
    rebootstrapFromSeed,
    applyOriginBonus,
    resolveFreePower,
    resolveExtraPower,
    undoPendingExtraPowerChoice,
    rollSubstituteOrigins,
    undoPendingRerollChoice,
    dismissRerollOrigin,
    rollDeterminationLevel,
    rollOriginIgnoring,
  };
})();
