/**
 * Helpers for Icons personnages (tenacity + editable mods until finished).
 *
 * Bonus sources:
 * - removal: +2 granted by deleting a power (unlimited, undoable while editable)
 * - origin: +2 from origin effects
 * - history: reserved for later (historiques)
 */
const HeroSheet = (() => {
  const MAX_EXTRA_SPECIALITIES = 1;
  const STATUS_EDITABLE = "editable";
  const STATUS_FINISHED = "finished";
  const SOURCE_REMOVAL = "removal";
  const SOURCE_ORIGIN = "origin";
  const SOURCE_HISTORY = "history";

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function createId() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return `mod_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  }

  function emptyOriginState() {
    return {
      decisions: {},
      flags: {},
      unresolved: false,
      bonusQueue: [],
      freePowerQueue: [],
      extraPowerQueue: [],
      rerollOrigin: null,
      substituteOrigins: null,
      needsSacrifice: null,
    };
  }

  function emptyMods() {
    return {
      swap: null,
      removedPowers: [],
      pendingBySource: {
        [SOURCE_REMOVAL]: 0,
        [SOURCE_ORIGIN]: 0,
        [SOURCE_HISTORY]: 0,
      },
      appliedBonuses: [],
      addedSpecialities: [],
      originExtraSpecialitySlots: 0,
      origin: emptyOriginState(),
    };
  }

  function normalizePendingBySource(raw) {
    const pending = {
      [SOURCE_REMOVAL]: 0,
      [SOURCE_ORIGIN]: 0,
      [SOURCE_HISTORY]: 0,
    };
    if (raw && typeof raw === "object") {
      pending[SOURCE_REMOVAL] = Math.max(0, Number(raw[SOURCE_REMOVAL]) || 0);
      pending[SOURCE_ORIGIN] = Math.max(0, Number(raw[SOURCE_ORIGIN]) || 0);
      pending[SOURCE_HISTORY] = Math.max(0, Number(raw[SOURCE_HISTORY]) || 0);
    }
    return pending;
  }

  function normalizeOriginSource(source) {
    if (source === SOURCE_ORIGIN) {
      return SOURCE_ORIGIN;
    }
    if (source === SOURCE_HISTORY) {
      return SOURCE_HISTORY;
    }
    return SOURCE_REMOVAL;
  }

  function normalizeMods(mods) {
    const base = emptyMods();
    if (!mods || typeof mods !== "object") {
      return base;
    }

    base.swap = mods.swap || null;
    base.removedPowers = Array.isArray(mods.removedPowers)
      ? mods.removedPowers.map((power) => ({
          id: power.id || createId(),
          name: power.name,
          level: power.level,
          page: power.page ?? null,
        }))
      : [];
    base.originExtraSpecialitySlots = Math.max(
      0,
      Number(mods.originExtraSpecialitySlots) || 0
    );
    const maxSpecs = MAX_EXTRA_SPECIALITIES + base.originExtraSpecialitySlots;
    base.addedSpecialities = Array.isArray(mods.addedSpecialities)
      ? mods.addedSpecialities.slice(0, maxSpecs)
      : [];

    if (Array.isArray(mods.appliedBonuses)) {
      base.appliedBonuses = mods.appliedBonuses.map((bonus) => ({
        kind: bonus.kind,
        name: bonus.name,
        amount: bonus.amount || 2,
        source: normalizeOriginSource(bonus.source),
        removalId: bonus.removalId || null,
        max: bonus.max ?? null,
      }));
    }

    if (mods.origin && typeof mods.origin === "object") {
      base.origin = {
        ...emptyOriginState(),
        ...mods.origin,
        decisions: mods.origin.decisions || {},
        flags: mods.origin.flags || {},
        bonusQueue: Array.isArray(mods.origin.bonusQueue)
          ? mods.origin.bonusQueue
          : [],
        freePowerQueue: Array.isArray(mods.origin.freePowerQueue)
          ? mods.origin.freePowerQueue
          : [],
        extraPowerQueue: Array.isArray(mods.origin.extraPowerQueue)
          ? mods.origin.extraPowerQueue
          : [],
      };
    }

    if (mods.pendingBySource) {
      base.pendingBySource = normalizePendingBySource(mods.pendingBySource);
    } else if (typeof mods.pendingBonuses === "number") {
      base.pendingBySource[SOURCE_REMOVAL] = Math.max(0, mods.pendingBonuses);
    } else {
      const appliedRemoval = base.appliedBonuses.filter(
        (bonus) => bonus.source === SOURCE_REMOVAL
      ).length;
      base.pendingBySource[SOURCE_REMOVAL] = Math.max(
        0,
        base.removedPowers.length - appliedRemoval
      );
    }

    base.pendingBySource[SOURCE_ORIGIN] = Math.max(
      base.pendingBySource[SOURCE_ORIGIN],
      base.origin.bonusQueue.length
    );

    return base;
  }

  function normalizeStatus(status) {
    return status === STATUS_FINISHED ? STATUS_FINISHED : STATUS_EDITABLE;
  }

  function createPersonnageData(character) {
    return {
      base: {
        attributes: clone(character.attributes || []),
        powers: clone(character.powers || []),
        origin: clone(character.origin || null),
        specialities: clone(character.specialities || []),
      },
      mods: emptyMods(),
      status: STATUS_EDITABLE,
    };
  }

  function normalizePersonnageData(data) {
    if (!data || !data.base) {
      return null;
    }
    return {
      base: clone(data.base),
      mods: normalizeMods(data.mods),
      status: normalizeStatus(data.status),
    };
  }

  function isFinished(data) {
    return normalizeStatus(data && data.status) === STATUS_FINISHED;
  }

  function isEditable(data) {
    return !isFinished(data);
  }

  function maxExtraSpecialities(mods) {
    return (
      MAX_EXTRA_SPECIALITIES +
      Math.max(0, Number(mods.originExtraSpecialitySlots) || 0)
    );
  }

  function pendingTotal(mods) {
    const pending = normalizePendingBySource(mods.pendingBySource);
    return (
      pending[SOURCE_REMOVAL] +
      pending[SOURCE_ORIGIN] +
      pending[SOURCE_HISTORY]
    );
  }

  function hasOpenOriginSteps(mods) {
    const origin = mods.origin || emptyOriginState();
    return !!(
      origin.unresolved ||
      (origin.bonusQueue && origin.bonusQueue.length) ||
      (origin.freePowerQueue && origin.freePowerQueue.length) ||
      (origin.extraPowerQueue && origin.extraPowerQueue.length) ||
      origin.rerollOrigin ||
      origin.needsSacrifice
    );
  }

  function bonusTotalFor(mods, kind, name) {
    return (mods.appliedBonuses || [])
      .filter((bonus) => bonus.kind === kind && bonus.name === name)
      .reduce((sum, bonus) => sum + (bonus.amount || 2), 0);
  }

  function resolvedAttributes(data) {
    const mods = normalizeMods(data.mods);
    const attributes = clone(data.base.attributes || []);
    if (mods.swap && mods.swap.a && mods.swap.b) {
      const first = attributes.find((attr) => attr.name === mods.swap.a);
      const second = attributes.find((attr) => attr.name === mods.swap.b);
      if (first && second) {
        const temp = first.level;
        first.level = second.level;
        second.level = temp;
      }
    }
    attributes.forEach((attr) => {
      attr.level += bonusTotalFor(mods, "attribute", attr.name);
      attr.bonus = bonusTotalFor(mods, "attribute", attr.name);
    });
    return attributes;
  }

  function isOriginGrantedPower(power) {
    return !!(power && (power.innateFromOrigin || power.freeFromOrigin));
  }

  function resolvedPowers(data) {
    const mods = normalizeMods(data.mods);
    const removedNames = new Set(
      (mods.removedPowers || []).map((power) => power.name)
    );
    return clone(data.base.powers || [])
      .filter((power) => !removedNames.has(power.name))
      .map((power) => {
        const bonus = bonusTotalFor(mods, "power", power.name);
        const fromOrigin = isOriginGrantedPower(power);
        return {
          ...power,
          level: power.level + bonus,
          bonus,
          innateFromOrigin: !!power.innateFromOrigin,
          freeFromOrigin: !!power.freeFromOrigin,
          fromOrigin,
          canRemoveForBonus: !fromOrigin,
        };
      });
  }

  function resolvedSpecialities(data) {
    const mods = normalizeMods(data.mods);
    return [
      ...(data.base.specialities || []),
      ...(mods.addedSpecialities || []),
    ];
  }

  function powerCostForTenacity(data) {
    const powers = resolvedPowers(data);
    const attributes = resolvedAttributes(data);
    const highAttributes = attributes.filter((attr) => attr.level > 6).length;
    return powers.length + highAttributes;
  }

  function tenacity(data) {
    return Math.max(1, 6 - powerCostForTenacity(data));
  }

  function nextClone(data) {
    return normalizePersonnageData(data);
  }

  function guardEditable(data) {
    if (isFinished(data)) {
      return { ok: false, reason: "finished" };
    }
    return null;
  }

  function view(data) {
    const normalized = normalizePersonnageData(data);
    const mods = normalized.mods;
    const finished = isFinished(normalized);
    const pending = pendingTotal(mods);
    const maxSpecs = maxExtraSpecialities(mods);
    const originBonus =
      mods.origin && mods.origin.bonusQueue
        ? mods.origin.bonusQueue[0]
        : null;
    return {
      attributes: resolvedAttributes(normalized),
      powers: resolvedPowers(normalized),
      origin: normalized.base.origin,
      specialities: resolvedSpecialities(normalized),
      tenacity: tenacity(normalized),
      mods,
      status: normalized.status,
      isFinished: finished,
      isEditable: !finished,
      canSwap: !finished && !mods.swap,
      canRemovePower: !finished && resolvedPowers(normalized).length > 0,
      canRestorePower: !finished && mods.removedPowers.length > 0,
      removedPowers: mods.removedPowers,
      pendingBonuses: pending,
      pendingBySource: mods.pendingBySource,
      originBonusNext: originBonus,
      canAddSpeciality: !finished && mods.addedSpecialities.length < maxSpecs,
      maxExtraSpecialities: maxSpecs,
      hasOpenOriginSteps: hasOpenOriginSteps(mods),
    };
  }

  function swapAttributes(data, nameA, nameB) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    const next = nextClone(data);
    if (next.mods.swap) {
      return { ok: false, reason: "already_swapped" };
    }
    if (!nameA || !nameB || nameA === nameB) {
      return { ok: false, reason: "invalid" };
    }
    const names = (next.base.attributes || []).map((attr) => attr.name);
    if (!names.includes(nameA) || !names.includes(nameB)) {
      return { ok: false, reason: "missing" };
    }
    next.mods.swap = { a: nameA, b: nameB };
    return { ok: true, data: next };
  }

  function clearSwap(data) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    const next = nextClone(data);
    next.mods.swap = null;
    return { ok: true, data: next };
  }

  function removePower(data, powerName) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    const next = nextClone(data);
    const already = next.mods.removedPowers.some(
      (power) => power.name === powerName
    );
    if (already) {
      return { ok: false, reason: "already" };
    }
    const power = (next.base.powers || []).find(
      (entry) => entry.name === powerName
    );
    if (!power) {
      return { ok: false, reason: "missing" };
    }
    if (isOriginGrantedPower(power)) {
      return { ok: false, reason: "locked_origin_roll" };
    }
    const removalId = createId();
    next.mods.removedPowers.push({
      id: removalId,
      name: power.name,
      level: power.level,
      page: power.page ?? null,
    });
    next.mods.pendingBySource[SOURCE_REMOVAL] += 1;
    return { ok: true, data: next, removalId };
  }

  function restorePower(data, removalIdOrName) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    const next = nextClone(data);
    const index = next.mods.removedPowers.findIndex(
      (power) =>
        power.id === removalIdOrName || power.name === removalIdOrName
    );
    if (index === -1) {
      return { ok: false, reason: "missing" };
    }
    const removed = next.mods.removedPowers[index];
    next.mods.removedPowers.splice(index, 1);

    const appliedIndex = next.mods.appliedBonuses.findIndex(
      (bonus) =>
        bonus.source === SOURCE_REMOVAL && bonus.removalId === removed.id
    );
    if (appliedIndex !== -1) {
      next.mods.appliedBonuses.splice(appliedIndex, 1);
    } else if (next.mods.pendingBySource[SOURCE_REMOVAL] > 0) {
      next.mods.pendingBySource[SOURCE_REMOVAL] -= 1;
    } else {
      for (let i = next.mods.appliedBonuses.length - 1; i >= 0; i -= 1) {
        if (next.mods.appliedBonuses[i].source === SOURCE_REMOVAL) {
          next.mods.appliedBonuses.splice(i, 1);
          break;
        }
      }
    }

    return { ok: true, data: next, restored: removed };
  }

  function pickPendingSource(mods) {
    if (mods.pendingBySource[SOURCE_ORIGIN] > 0) {
      return SOURCE_ORIGIN;
    }
    if (mods.pendingBySource[SOURCE_HISTORY] > 0) {
      return SOURCE_HISTORY;
    }
    if (mods.pendingBySource[SOURCE_REMOVAL] > 0) {
      return SOURCE_REMOVAL;
    }
    return null;
  }

  function oldestUnspentRemovalId(mods) {
    const spent = new Set(
      mods.appliedBonuses
        .filter((bonus) => bonus.source === SOURCE_REMOVAL && bonus.removalId)
        .map((bonus) => bonus.removalId)
    );
    const pendingRemoval = mods.removedPowers.find(
      (power) => !spent.has(power.id)
    );
    return pendingRemoval ? pendingRemoval.id : null;
  }

  function applyBonus(data, kind, name) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    const next = nextClone(data);
    if (
      next.mods.pendingBySource[SOURCE_ORIGIN] > 0 &&
      next.mods.origin &&
      next.mods.origin.bonusQueue &&
      next.mods.origin.bonusQueue.length
    ) {
      return OriginEffects.applyOriginBonus(next, kind, name);
    }
    const source = pickPendingSource(next.mods);
    if (!source) {
      return { ok: false, reason: "no_pending" };
    }
    if (kind === "attribute") {
      const exists = (next.base.attributes || []).some(
        (attr) => attr.name === name
      );
      if (!exists) {
        return { ok: false, reason: "missing" };
      }
    } else if (kind === "power") {
      const available = resolvedPowers(next).some(
        (power) => power.name === name
      );
      if (!available) {
        return { ok: false, reason: "missing" };
      }
    } else {
      return { ok: false, reason: "invalid" };
    }

    const bonus = {
      kind,
      name,
      amount: 2,
      source,
      removalId:
        source === SOURCE_REMOVAL ? oldestUnspentRemovalId(next.mods) : null,
    };
    next.mods.appliedBonuses.push(bonus);
    next.mods.pendingBySource[source] -= 1;
    return { ok: true, data: next };
  }

  function addSpeciality(data, specialityName) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    const next = nextClone(data);
    const maxSpecs = maxExtraSpecialities(next.mods);
    if (next.mods.addedSpecialities.length >= maxSpecs) {
      return { ok: false, reason: "quota" };
    }
    const trimmed = (specialityName || "").trim();
    if (!trimmed) {
      return { ok: false, reason: "name" };
    }
    const all = resolvedSpecialities(next);
    if (all.includes(trimmed)) {
      return { ok: false, reason: "duplicate" };
    }
    next.mods.addedSpecialities.push(trimmed);
    return { ok: true, data: next };
  }

  function markFinished(data) {
    const next = nextClone(data);
    if (pendingTotal(next.mods) > 0) {
      return { ok: false, reason: "pending_bonuses" };
    }
    if (hasOpenOriginSteps(next.mods)) {
      return { ok: false, reason: "origin_pending" };
    }
    next.status = STATUS_FINISHED;
    return { ok: true, data: next };
  }

  function reopen(data) {
    const next = nextClone(data);
    next.status = STATUS_EDITABLE;
    return { ok: true, data: next };
  }

  function grantHistoryBonus(data, count = 1) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    const next = nextClone(data);
    const amount = Math.max(0, Number(count) || 0);
    next.mods.pendingBySource[SOURCE_HISTORY] += amount;
    return { ok: true, data: next };
  }

  return {
    MAX_EXTRA_SPECIALITIES,
    STATUS_EDITABLE,
    STATUS_FINISHED,
    SOURCE_REMOVAL,
    SOURCE_ORIGIN,
    SOURCE_HISTORY,
    emptyMods,
    normalizeMods,
    normalizePersonnageData,
    createPersonnageData,
    isFinished,
    isEditable,
    view,
    tenacity,
    swapAttributes,
    clearSwap,
    removePower,
    restorePower,
    applyBonus,
    addSpeciality,
    markFinished,
    reopen,
    grantHistoryBonus,
    resolvedAttributes,
    resolvedPowers,
    resolvedSpecialities,
    isOriginGrantedPower,
  };
})();
