/**
 * Helpers for Icons personnages (tenacity + editable mods until finished).
 *
 * Bonus sources:
 * - removal: +2 granted by deleting a power (unlimited, undoable while editable)
 * - origin: +2 from origin effects
 * - history: reserved for later (historiques)
 */
const HeroSheet = (() => {
  const MAX_EXTRA_SPECIALITIES = 0;
  const MAX_SPECIALITY_RANK = 3;
  const SPECIALITY_RANK_LABELS = {
    1: "spécialiste",
    2: "expert",
    3: "maître",
  };
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
      pendingRemovalRewards: [],
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
    base.pendingRemovalRewards = Array.isArray(mods.pendingRemovalRewards)
      ? mods.pendingRemovalRewards.map((reward) => ({
          id: reward.id || createId(),
          removedName: reward.removedName || "",
        }))
      : [];
    base.originExtraSpecialitySlots = Math.max(
      0,
      Number(mods.originExtraSpecialitySlots) || 0
    );
    const maxSpecs = MAX_EXTRA_SPECIALITIES + base.originExtraSpecialitySlots;
    base.addedSpecialities = Array.isArray(mods.addedSpecialities)
      ? normalizeSpecialityList(mods.addedSpecialities).slice(0, maxSpecs)
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
        powers: normalizePowerList(character.powers || []),
        origin: clone(character.origin || null),
        specialities: normalizeSpecialityList(character.specialities || []),
        languages: normalizeLanguageList(character.languages || []),
      },
      mods: emptyMods(),
      status: STATUS_EDITABLE,
    };
  }

  function normalizePersonnageData(data) {
    if (!data || !data.base) {
      return null;
    }
    const base = clone(data.base);
    base.powers = normalizePowerList(base.powers);
    base.specialities = normalizeSpecialityList(base.specialities);
    base.languages = normalizeLanguageList(base.languages);
    return {
      base,
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

  const LIMIT_BENEFITS = {
    extra: "extra",
    tenacity: "tenacity",
    level: "level",
  };

  function modifierNeedsDetail(name) {
    return /\bX\b/.test((name || "").trim());
  }

  function formatModifierLabel(entry) {
    if (!entry || !entry.name) {
      return "";
    }
    const detail = (entry.detail || "").trim();
    if (detail && modifierNeedsDetail(entry.name)) {
      return entry.name.replace(/\bX\b/g, detail);
    }
    if (detail) {
      return `${entry.name} (${detail})`;
    }
    return entry.name;
  }

  function normalizeModifierEntry(raw, kind) {
    if (!raw) {
      return null;
    }
    if (typeof raw === "string") {
      const name = raw.trim();
      if (!name) {
        return null;
      }
      if (kind === "limit") {
        return {
          id: createId(),
          name,
          detail: null,
          benefit: LIMIT_BENEFITS.extra,
        };
      }
      return {
        id: createId(),
        name,
        detail: null,
        source: "limit",
        removalId: null,
        limitId: null,
      };
    }
    const name = (raw.name || "").trim();
    if (!name) {
      return null;
    }
    const detail =
      raw.detail == null || String(raw.detail).trim() === ""
        ? null
        : String(raw.detail).trim();
    if (kind === "limit") {
      const benefit = LIMIT_BENEFITS[raw.benefit] || LIMIT_BENEFITS.extra;
      return {
        id: raw.id || createId(),
        name,
        detail,
        benefit,
      };
    }
    return {
      id: raw.id || createId(),
      name,
      detail,
      source: raw.source === "removal" ? "removal" : "limit",
      removalId: raw.removalId || null,
      limitId: raw.limitId || null,
    };
  }

  function normalizePowerEntry(raw) {
    if (!raw || typeof raw !== "object") {
      return null;
    }
    const name = (raw.name || "").trim();
    if (!name) {
      return null;
    }
    const comment =
      typeof raw.comment === "string" ? raw.comment.trim() : "";
    const choice =
      typeof raw.choice === "string" ? raw.choice.trim() : "";
    const choiceSource =
      choice && (raw.choiceSource === "roll" || raw.choiceSource === "pick")
        ? raw.choiceSource
        : choice
          ? "pick"
          : null;
    return {
      name,
      level: Number(raw.level) || 0,
      page: raw.page ?? null,
      comment,
      choice,
      choiceSource,
      innateFromOrigin: !!raw.innateFromOrigin,
      freeFromOrigin: !!raw.freeFromOrigin,
      extras: (Array.isArray(raw.extras) ? raw.extras : [])
        .map((entry) => normalizeModifierEntry(entry, "extra"))
        .filter(Boolean),
      limites: (Array.isArray(raw.limites) ? raw.limites : [])
        .map((entry) => normalizeModifierEntry(entry, "limit"))
        .filter(Boolean),
    };
  }

  function normalizePowerList(list) {
    return (list || []).map(normalizePowerEntry).filter(Boolean);
  }

  function limitLevelBonus(power) {
    return (power.limites || [])
      .filter((limit) => limit.benefit === LIMIT_BENEFITS.level)
      .reduce((sum) => sum + 2, 0);
  }

  function tenacityLimitCredits(powers) {
    return (powers || []).reduce((sum, power) => {
      const credits = (power.limites || []).filter(
        (limit) => limit.benefit === LIMIT_BENEFITS.tenacity
      ).length;
      return sum + credits;
    }, 0);
  }

  function availableLimitExtraSlots(power) {
    const granted = (power.limites || []).filter(
      (limit) => limit.benefit === LIMIT_BENEFITS.extra
    ).length;
    const used = (power.extras || []).filter(
      (extra) => extra.source === "limit"
    ).length;
    return Math.max(0, granted - used);
  }

  function findPower(data, powerName) {
    return (data.base.powers || []).find((power) => power.name === powerName);
  }

  function resolvedPowers(data) {
    const mods = normalizeMods(data.mods);
    const removedNames = new Set(
      (mods.removedPowers || []).map((power) => power.name)
    );
    return clone(data.base.powers || [])
      .filter((power) => !removedNames.has(power.name))
      .map((power) => {
        const normalized = normalizePowerEntry(power);
        const bonus = bonusTotalFor(mods, "power", normalized.name);
        const fromLimitLevel = limitLevelBonus(normalized);
        const fromOrigin = isOriginGrantedPower(normalized);
        const level = Math.min(10, normalized.level + bonus + fromLimitLevel);
        return {
          ...normalized,
          level,
          bonus: bonus + fromLimitLevel,
          limitLevelBonus: fromLimitLevel,
          innateFromOrigin: !!normalized.innateFromOrigin,
          freeFromOrigin: !!normalized.freeFromOrigin,
          fromOrigin,
          canRemoveForBonus: !fromOrigin,
          availableLimitExtraSlots: availableLimitExtraSlots(normalized),
          canAddLimitExtra: availableLimitExtraSlots(normalized) > 0,
          isGroup: isGroupPowerName(normalized.name),
          groupOptions: groupOptionsFor(normalized.name),
          needsGroupChoice:
            isGroupPowerName(normalized.name) && !normalized.choice,
          ...groupChoicePresentation(normalized),
        };
      });
  }

  function groupChoicePresentation(power) {
    const empty = {
      displayName: power.name,
      viaGroup: null,
      choicePower: null,
      resolvesToPower: false,
    };
    if (!power || !power.choice || !isGroupPowerName(power.name)) {
      return empty;
    }
    const choiceDef = resolveGroupChoicePower(power.name, power.choice);
    if (!choiceDef) {
      return {
        displayName: power.name,
        viaGroup: null,
        choicePower: null,
        resolvesToPower: false,
      };
    }
    const groupLabel =
      typeof pouvoirs !== "undefined" &&
      pouvoirs &&
      typeof pouvoirs.definitionOf === "function"
        ? (pouvoirs.definitionOf(power.name) || {}).name || power.name
        : power.name;
    return {
      displayName: choiceDef.name,
      viaGroup: groupLabel,
      choicePower: {
        name: choiceDef.name,
        page: choiceDef.page ?? null,
        value: choiceDef.value || "",
        extras: choiceDef.extras || [],
        limites: choiceDef.limites || [],
        kind: choiceDef.kind || "power",
        category: choiceDef.category || null,
      },
      resolvesToPower: true,
    };
  }

  function resolveGroupChoicePower(groupName, choice) {
    if (
      typeof pouvoirs === "undefined" ||
      !pouvoirs ||
      typeof pouvoirs.definitionOf !== "function"
    ) {
      return null;
    }
    const trimmed = (choice || "").trim();
    if (!trimmed) {
      return null;
    }
    const choiceDef = pouvoirs.definitionOf(trimmed);
    if (!choiceDef) {
      return null;
    }
    const groupDef = pouvoirs.definitionOf(groupName);
    if (!groupDef || groupDef.kind !== "group") {
      return null;
    }
    const same =
      typeof pouvoirs.normalizeName === "function"
        ? pouvoirs.normalizeName(choiceDef.name) ===
          pouvoirs.normalizeName(groupDef.name)
        : choiceDef.name === groupDef.name;
    if (same) {
      return null;
    }
    return choiceDef;
  }

  function specialityRankLabel(rank) {
    return SPECIALITY_RANK_LABELS[rank] || SPECIALITY_RANK_LABELS[1];
  }

  function isGroupSpecialityName(name) {
    const trimmed = (name || "").trim();
    if (
      typeof specialites !== "undefined" &&
      specialites &&
      typeof specialites.isGroup === "function"
    ) {
      return specialites.isGroup(trimmed);
    }
    return ["Armes", "Art", "Spectacle", "Pouvoir"].includes(trimmed);
  }

  function normalizeSpecialityEntry(raw) {
    if (raw == null) {
      return null;
    }
    if (typeof raw === "string") {
      const name = raw.trim();
      if (!name) {
        return null;
      }
      if (isGroupSpecialityName(name)) {
        return { name, focus: null };
      }
      return { name };
    }
    if (typeof raw === "object") {
      const name = (raw.name || "").trim();
      if (!name) {
        return null;
      }
      if (isGroupSpecialityName(name)) {
        const focus =
          raw.focus == null || String(raw.focus).trim() === ""
            ? null
            : String(raw.focus).trim();
        return { name, focus };
      }
      return { name };
    }
    return null;
  }

  function normalizeSpecialityList(list) {
    return (list || []).map(normalizeSpecialityEntry).filter(Boolean);
  }

  function specialityKey(entry) {
    const normalized = normalizeSpecialityEntry(entry);
    if (!normalized) {
      return null;
    }
    const focus =
      normalized.focus == null ? "" : String(normalized.focus).trim().toLowerCase();
    return `${normalized.name}|${focus}`;
  }

  function specializeEntries(list) {
    const order = [];
    const counts = {};
    const samples = {};
    normalizeSpecialityList(list).forEach((entry) => {
      const key = specialityKey(entry);
      if (!key) {
        return;
      }
      if (!Object.prototype.hasOwnProperty.call(counts, key)) {
        order.push(key);
        samples[key] = entry;
        counts[key] = 0;
      }
      counts[key] += 1;
    });
    return order.map((key) => {
      const entry = samples[key];
      const rank = Math.min(MAX_SPECIALITY_RANK, counts[key]);
      const label = specialityRankLabel(rank);
      const needsFocus =
        isGroupSpecialityName(entry.name) && !entry.focus;
      let display;
      if (needsFocus) {
        display = `${entry.name} — focus à choisir (${label})`;
      } else if (entry.focus) {
        display = `${entry.name} — ${entry.focus} (${label})`;
      } else {
        display = `${entry.name} (${label})`;
      }
      return {
        name: entry.name,
        focus: entry.focus || null,
        key,
        rank,
        label,
        needsFocus,
        display,
      };
    });
  }

  function resolvedSpecialityNames(data) {
    const mods = normalizeMods(data.mods);
    return normalizeSpecialityList([
      ...(data.base.specialities || []),
      ...(mods.addedSpecialities || []),
    ]);
  }

  function resolvedSpecialities(data) {
    return specializeEntries(resolvedSpecialityNames(data));
  }

  function specialityRankOf(data, name, focus) {
    const target = normalizeSpecialityEntry({
      name,
      focus: focus == null || focus === "" ? null : focus,
    });
    if (!target) {
      return 0;
    }
    const key = specialityKey(target);
    const count = resolvedSpecialityNames(data).filter(
      (entry) => specialityKey(entry) === key
    ).length;
    return Math.min(MAX_SPECIALITY_RANK, count);
  }

  function hasPendingSpecialityFocus(list) {
    return normalizeSpecialityList(list).some(
      (entry) => isGroupSpecialityName(entry.name) && !entry.focus
    );
  }

  function pendingSpecialityFocusSlots(list) {
    return normalizeSpecialityList(list)
      .map((entry, index) => {
        if (!isGroupSpecialityName(entry.name) || entry.focus) {
          return null;
        }
        return { index, name: entry.name };
      })
      .filter(Boolean);
  }

  function applyFocusToSpecialityList(list, index, focus) {
    const next = normalizeSpecialityList(list);
    if (!next[index] || !isGroupSpecialityName(next[index].name)) {
      return { ok: false, reason: "invalid" };
    }
    const trimmedFocus = (focus || "").trim();
    if (!trimmedFocus) {
      return { ok: false, reason: "need_focus" };
    }
    next[index] = { name: next[index].name, focus: trimmedFocus };
    return { ok: true, list: next };
  }

  function setSpecialityFocus(data, source, index, focus) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    const next = nextClone(data);
    if (source === "added") {
      const result = applyFocusToSpecialityList(
        next.mods.addedSpecialities,
        index,
        focus
      );
      if (!result.ok) {
        return result;
      }
      next.mods.addedSpecialities = result.list;
      return { ok: true, data: next };
    }
    const result = applyFocusToSpecialityList(
      next.base.specialities,
      index,
      focus
    );
    if (!result.ok) {
      return result;
    }
    next.base.specialities = result.list;
    return { ok: true, data: next };
  }

  function powerCostForTenacity(data) {
    const powers = resolvedPowers(data);
    const attributes = resolvedAttributes(data);
    const highAttributes = attributes.filter((attr) => attr.level > 6).length;
    const credits = tenacityLimitCredits(powers);
    return Math.max(0, powers.length + highAttributes - credits);
  }

  function tenacity(data) {
    return Math.max(1, 6 - powerCostForTenacity(data));
  }

  function linguisticsRankFromList(specialities) {
    const entry = specializeEntries(specialities).find(
      (item) => item.name === "Linguistique"
    );
    return entry ? entry.rank : 0;
  }

  function intellectFromAttributes(attributes) {
    const intellect = (attributes || []).find(
      (attr) => attr.name === "Intellect"
    );
    return intellect ? Math.max(0, Number(intellect.level) || 0) : 0;
  }

  /**
   * ICONS languages: native + 2^(effectiveIntellect - 4) additional when effective >= 4.
   * Linguistics specialty ranks count as Intellect levels for this count.
   */
  function normalizeLanguageList(list) {
    const seen = new Set();
    const result = [];
    (list || []).forEach((raw) => {
      const name = typeof raw === "string" ? raw.trim() : "";
      if (!name) {
        return;
      }
      const key = name.toLowerCase();
      if (seen.has(key)) {
        return;
      }
      seen.add(key);
      result.push(name);
    });
    return result;
  }

  function computeLanguages(intellect, linguisticsRank, knownList) {
    const intLevel = Math.max(0, Number(intellect) || 0);
    const lingRank = Math.max(0, Number(linguisticsRank) || 0);
    const effectiveIntellect = intLevel + lingRank;
    const native = 1;
    const additional =
      effectiveIntellect >= 4 ? Math.pow(2, effectiveIntellect - 4) : 0;
    const total = native + additional;
    const known = normalizeLanguageList(knownList);
    return {
      native,
      additional,
      total,
      known,
      remaining: Math.max(0, total - known.length),
      intellect: intLevel,
      linguisticsRank: lingRank,
      effectiveIntellect,
      display:
        additional > 0
          ? `${total} (1 natale + ${additional})`
          : "1 (langue natale)",
    };
  }

  function languagesFromParts(attributes, specialities, knownList) {
    return computeLanguages(
      intellectFromAttributes(attributes),
      linguisticsRankFromList(specialities),
      knownList
    );
  }

  function languages(data) {
    const normalized = data && data.base ? data : null;
    return languagesFromParts(
      resolvedAttributes(data),
      resolvedSpecialityNames(data),
      (normalized && normalized.base && normalized.base.languages) || []
    );
  }

  function addKnownLanguage(data, languageName) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    const next = nextClone(data);
    const trimmed = (languageName || "").trim();
    if (!trimmed) {
      return { ok: false, reason: "name" };
    }
    const info = languages(next);
    if (info.known.some((name) => name.toLowerCase() === trimmed.toLowerCase())) {
      return { ok: false, reason: "duplicate" };
    }
    if (info.known.length >= info.total) {
      return { ok: false, reason: "quota" };
    }
    next.base.languages = [...info.known, trimmed];
    return { ok: true, data: next };
  }

  function removeKnownLanguage(data, languageName) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    const next = nextClone(data);
    const trimmed = (languageName || "").trim();
    const before = normalizeLanguageList(next.base.languages);
    next.base.languages = before.filter(
      (name) => name.toLowerCase() !== trimmed.toLowerCase()
    );
    if (next.base.languages.length === before.length) {
      return { ok: false, reason: "missing" };
    }
    return { ok: true, data: next };
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
      languages: languages(normalized),
      mods,
      status: normalized.status,
      isFinished: finished,
      isEditable: !finished,
      canSwap: !finished && !mods.swap,
      canRemovePower: !finished && resolvedPowers(normalized).length > 0,
      canRestorePower: !finished && mods.removedPowers.length > 0,
      removedPowers: mods.removedPowers,
      pendingRemovalRewards: mods.pendingRemovalRewards || [],
      pendingBonuses: pending,
      pendingBySource: mods.pendingBySource,
      originBonusNext: originBonus,
      canAddSpeciality: !finished && mods.addedSpecialities.length < maxSpecs,
      maxExtraSpecialities: maxSpecs,
      hasOpenOriginSteps: hasOpenOriginSteps(mods),
      hasPendingRemovalRewards:
        !finished && (mods.pendingRemovalRewards || []).length > 0,
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
    const power = findPower(next, powerName);
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
    next.mods.pendingRemovalRewards.push({
      id: removalId,
      removedName: power.name,
    });
    return { ok: true, data: next, removalId };
  }

  function spendRemovalAsBonus(data, rewardId) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    const next = nextClone(data);
    const index = next.mods.pendingRemovalRewards.findIndex(
      (reward) => reward.id === rewardId
    );
    if (index === -1) {
      return { ok: false, reason: "missing_reward" };
    }
    next.mods.pendingRemovalRewards.splice(index, 1);
    next.mods.pendingBySource[SOURCE_REMOVAL] += 1;
    return { ok: true, data: next };
  }

  function spendRemovalAsExtra(data, rewardId, powerName, extraName, detail) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    const next = nextClone(data);
    const index = next.mods.pendingRemovalRewards.findIndex(
      (reward) => reward.id === rewardId
    );
    if (index === -1) {
      return { ok: false, reason: "missing_reward" };
    }
    const power = findPower(next, powerName);
    if (!power) {
      return { ok: false, reason: "missing_power" };
    }
    const trimmed = (extraName || "").trim();
    if (!trimmed) {
      return { ok: false, reason: "name" };
    }
    const trimmedDetail = (detail || "").trim();
    if (modifierNeedsDetail(trimmed) && !trimmedDetail) {
      return { ok: false, reason: "need_detail" };
    }
    if ((power.extras || []).some((extra) => extra.name === trimmed && (extra.detail || "") === (trimmedDetail || ""))) {
      return { ok: false, reason: "duplicate" };
    }
    const reward = next.mods.pendingRemovalRewards[index];
    next.mods.pendingRemovalRewards.splice(index, 1);
    power.extras = power.extras || [];
    power.extras.push({
      id: createId(),
      name: trimmed,
      detail: trimmedDetail || null,
      source: "removal",
      removalId: reward.id,
      limitId: null,
    });
    return { ok: true, data: next };
  }

  function addPowerLimit(data, powerName, limitName, benefit, detail) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    const next = nextClone(data);
    const power = findPower(next, powerName);
    if (!power) {
      return { ok: false, reason: "missing_power" };
    }
    const trimmed = (limitName || "").trim();
    if (!trimmed) {
      return { ok: false, reason: "name" };
    }
    const trimmedDetail = (detail || "").trim();
    if (modifierNeedsDetail(trimmed) && !trimmedDetail) {
      return { ok: false, reason: "need_detail" };
    }
    const resolvedBenefit = LIMIT_BENEFITS[benefit] || LIMIT_BENEFITS.extra;
    if (resolvedBenefit === LIMIT_BENEFITS.level) {
      const current =
        power.level +
        bonusTotalFor(next.mods, "power", power.name) +
        limitLevelBonus(power);
      if (current + 2 > 10) {
        return { ok: false, reason: "max" };
      }
    }
    if (
      (power.limites || []).some(
        (limit) =>
          limit.name === trimmed &&
          (limit.detail || "") === (trimmedDetail || "")
      )
    ) {
      return { ok: false, reason: "duplicate" };
    }
    power.limites = power.limites || [];
    power.limites.push({
      id: createId(),
      name: trimmed,
      detail: trimmedDetail || null,
      benefit: resolvedBenefit,
    });
    return { ok: true, data: next };
  }

  function addPowerExtraFromLimit(data, powerName, extraName, detail) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    const next = nextClone(data);
    const power = findPower(next, powerName);
    if (!power) {
      return { ok: false, reason: "missing_power" };
    }
    if (availableLimitExtraSlots(power) <= 0) {
      return { ok: false, reason: "no_slot" };
    }
    const trimmed = (extraName || "").trim();
    if (!trimmed) {
      return { ok: false, reason: "name" };
    }
    const trimmedDetail = (detail || "").trim();
    if (modifierNeedsDetail(trimmed) && !trimmedDetail) {
      return { ok: false, reason: "need_detail" };
    }
    if (
      (power.extras || []).some(
        (extra) =>
          extra.name === trimmed &&
          (extra.detail || "") === (trimmedDetail || "")
      )
    ) {
      return { ok: false, reason: "duplicate" };
    }
    const unusedLimit = (power.limites || []).find(
      (limit) =>
        limit.benefit === LIMIT_BENEFITS.extra &&
        !(power.extras || []).some((extra) => extra.limitId === limit.id)
    );
    power.extras = power.extras || [];
    power.extras.push({
      id: createId(),
      name: trimmed,
      detail: trimmedDetail || null,
      source: "limit",
      removalId: null,
      limitId: unusedLimit ? unusedLimit.id : null,
    });
    return { ok: true, data: next };
  }

  function removePowerLimit(data, powerName, limitId) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    const next = nextClone(data);
    const power = findPower(next, powerName);
    if (!power) {
      return { ok: false, reason: "missing_power" };
    }
    const before = (power.limites || []).length;
    power.limites = (power.limites || []).filter(
      (limit) => limit.id !== limitId
    );
    if (power.limites.length === before) {
      return { ok: false, reason: "missing" };
    }
    // Drop extras that were unlocked by this limit.
    power.extras = (power.extras || []).filter(
      (extra) => extra.limitId !== limitId
    );
    // If slots are now exceeded, drop oldest unlinked limit-sourced extras.
    while (availableLimitExtraSlots(power) < 0) {
      const idx = power.extras.findIndex((extra) => extra.source === "limit");
      if (idx === -1) {
        break;
      }
      power.extras.splice(idx, 1);
    }
    return { ok: true, data: next };
  }

  function removePowerExtra(data, powerName, extraId) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    const next = nextClone(data);
    const power = findPower(next, powerName);
    if (!power) {
      return { ok: false, reason: "missing_power" };
    }
    const extra = (power.extras || []).find((entry) => entry.id === extraId);
    if (!extra) {
      return { ok: false, reason: "missing" };
    }
    power.extras = power.extras.filter((entry) => entry.id !== extraId);
    if (extra.source === "removal" && extra.removalId) {
      // Give the removal reward back if the removed power is still gone.
      const stillRemoved = next.mods.removedPowers.some(
        (removed) => removed.id === extra.removalId
      );
      const alreadyPending = next.mods.pendingRemovalRewards.some(
        (reward) => reward.id === extra.removalId
      );
      if (stillRemoved && !alreadyPending) {
        next.mods.pendingRemovalRewards.push({
          id: extra.removalId,
          removedName:
            (
              next.mods.removedPowers.find(
                (removed) => removed.id === extra.removalId
              ) || {}
            ).name || "",
        });
      }
    }
    return { ok: true, data: next };
  }

  function isGroupPowerName(name) {
    const trimmed = (name || "").trim();
    if (
      typeof pouvoirs !== "undefined" &&
      pouvoirs &&
      typeof pouvoirs.isGroup === "function"
    ) {
      return pouvoirs.isGroup(trimmed);
    }
    return false;
  }

  function groupOptionsFor(powerName) {
    if (
      typeof pouvoirs === "undefined" ||
      !pouvoirs ||
      typeof pouvoirs.definitionOf !== "function"
    ) {
      return [];
    }
    const def = pouvoirs.definitionOf(powerName);
    if (!def || def.kind !== "group" || !def.table) {
      return [];
    }
    return (def.table.entries || [])
      .filter((entry) => entry && entry.name && entry.special !== "reroll")
      .map((entry) => entry.name);
  }

  function setPowerGroupChoice(data, powerName, choice, source) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    const next = nextClone(data);
    const power = findPower(next, powerName);
    if (!power) {
      return { ok: false, reason: "missing_power" };
    }
    if (!isGroupPowerName(power.name)) {
      return { ok: false, reason: "not_group" };
    }
    const trimmed = (choice || "").trim();
    if (!trimmed) {
      power.choice = "";
      power.choiceSource = null;
      return { ok: true, data: next };
    }
    const options = groupOptionsFor(power.name);
    if (options.length && !options.includes(trimmed)) {
      return { ok: false, reason: "invalid_choice" };
    }
    power.choice = trimmed;
    power.choiceSource = source === "roll" ? "roll" : "pick";
    return { ok: true, data: next };
  }

  function rollPowerGroupChoice(data, powerName) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    if (!isGroupPowerName(powerName)) {
      return { ok: false, reason: "not_group" };
    }
    if (
      typeof pouvoirs === "undefined" ||
      !pouvoirs ||
      typeof pouvoirs.rollGroup !== "function"
    ) {
      return { ok: false, reason: "roll" };
    }
    const rolled = pouvoirs.rollGroup(powerName);
    if (!rolled || !rolled.name) {
      return { ok: false, reason: "roll" };
    }
    return setPowerGroupChoice(data, powerName, rolled.name, "roll");
  }

  function setPowerComment(data, powerName, comment) {
    const locked = guardEditable(data);
    if (locked) {
      return locked;
    }
    const next = nextClone(data);
    const power = findPower(next, powerName);
    if (!power) {
      return { ok: false, reason: "missing_power" };
    }
    power.comment = (comment || "").trim();
    return { ok: true, data: next };
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

    // Cancel unspent reward for this removal.
    next.mods.pendingRemovalRewards = (
      next.mods.pendingRemovalRewards || []
    ).filter((reward) => reward.id !== removed.id);

    // Remove extras granted by this removal.
    (next.base.powers || []).forEach((power) => {
      power.extras = (power.extras || []).filter(
        (extra) => extra.removalId !== removed.id
      );
    });

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

  function addSpeciality(data, specialityName, focus) {
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
    const isGroup = isGroupSpecialityName(trimmed);
    const trimmedFocus = (focus || "").trim();
    if (isGroup && !trimmedFocus) {
      return { ok: false, reason: "need_focus" };
    }
    const entry = isGroup
      ? { name: trimmed, focus: trimmedFocus }
      : { name: trimmed };
    if (
      specialityRankOf(next, trimmed, isGroup ? trimmedFocus : null) >=
      MAX_SPECIALITY_RANK
    ) {
      return { ok: false, reason: "max_rank" };
    }
    next.mods.addedSpecialities.push(entry);
    return { ok: true, data: next };
  }

  function markFinished(data) {
    const next = nextClone(data);
    if (pendingTotal(next.mods) > 0) {
      return { ok: false, reason: "pending_bonuses" };
    }
    if ((next.mods.pendingRemovalRewards || []).length > 0) {
      return { ok: false, reason: "removal_reward" };
    }
    if (hasOpenOriginSteps(next.mods)) {
      return { ok: false, reason: "origin_pending" };
    }
    if (hasPendingSpecialityFocus(resolvedSpecialityNames(next))) {
      return { ok: false, reason: "speciality_focus" };
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
    MAX_SPECIALITY_RANK,
    SPECIALITY_RANK_LABELS,
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
    languages,
    languagesFromParts,
    computeLanguages,
    normalizeLanguageList,
    addKnownLanguage,
    removeKnownLanguage,
    swapAttributes,
    clearSwap,
    removePower,
    restorePower,
    spendRemovalAsBonus,
    spendRemovalAsExtra,
    addPowerLimit,
    addPowerExtraFromLimit,
    removePowerLimit,
    removePowerExtra,
    setPowerComment,
    setPowerGroupChoice,
    rollPowerGroupChoice,
    isGroupPowerName,
    groupOptionsFor,
    resolveGroupChoicePower,
    applyBonus,
    addSpeciality,
    setSpecialityFocus,
    markFinished,
    reopen,
    grantHistoryBonus,
    resolvedAttributes,
    resolvedPowers,
    resolvedSpecialities,
    resolvedSpecialityNames,
    specializeEntries,
    specialityRankLabel,
    specialityRankOf,
    normalizeSpecialityEntry,
    normalizeSpecialityList,
    specialityKey,
    isGroupSpecialityName,
    hasPendingSpecialityFocus,
    pendingSpecialityFocusSlots,
    applyFocusToSpecialityList,
    isOriginGrantedPower,
    normalizePowerList,
    LIMIT_BENEFITS,
    modifierNeedsDetail,
    formatModifierLabel,
  };
})();
