/**
 * Local library: brouillons + personnages (max 5 each) + working session.
 */
const IconsStorage = (() => {
  const STORAGE_KEY = "icons_storage";
  const LEGACY_SLOTS = ["character_slot_1", "character_slot_2"];
  const MAX_PER_TYPE = 5;
  const VERSION = 2;
  const KIND_BROUILLON = "brouillon";
  const KIND_PERSONNAGE = "personnage";

  function nowIso() {
    return new Date().toISOString();
  }

  function createId() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return `save_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function emptyStore() {
    return {
      version: VERSION,
      working: null,
      brouillons: [],
      personnages: [],
    };
  }

  function listFor(store, kind) {
    return kind === KIND_PERSONNAGE ? store.personnages : store.brouillons;
  }

  function setListFor(store, kind, list) {
    if (kind === KIND_PERSONNAGE) {
      store.personnages = list;
    } else {
      store.brouillons = list;
    }
  }

  function normalizeEntry(entry, kind) {
    if (!entry || typeof entry !== "object") {
      return null;
    }
    const stamp = nowIso();
    if (kind === KIND_PERSONNAGE) {
      if (!entry.data || !entry.data.base) {
        if (entry.character) {
          return {
            id: entry.id || createId(),
            name: entry.name || "Personnage",
            createdAt: entry.createdAt || stamp,
            updatedAt: entry.updatedAt || stamp,
            data: HeroSheet.createPersonnageData(entry.character),
          };
        }
        return null;
      }
      return {
        id: entry.id || createId(),
        name: entry.name || "Personnage",
        createdAt: entry.createdAt || stamp,
        updatedAt: entry.updatedAt || stamp,
        data: HeroSheet.normalizePersonnageData(entry.data),
      };
    }
    if (!entry.character) {
      return null;
    }
    return {
      id: entry.id || createId(),
      name: entry.name || "Brouillon",
      createdAt: entry.createdAt || stamp,
      updatedAt: entry.updatedAt || stamp,
      character: clone(entry.character),
    };
  }

  function normalizeStore(raw) {
    const store = emptyStore();
    if (!raw || typeof raw !== "object") {
      return store;
    }

    // v1 migration shape
    if (raw.version === 1 || (Array.isArray(raw.saves) && !raw.brouillons)) {
      store.brouillons = (raw.saves || [])
        .map((entry) =>
          normalizeEntry(
            {
              id: entry.id,
              name: entry.name,
              createdAt: entry.createdAt,
              updatedAt: entry.updatedAt,
              character: entry.character,
            },
            KIND_BROUILLON
          )
        )
        .filter(Boolean)
        .slice(0, MAX_PER_TYPE);
      if (raw.draft && raw.draft.character) {
        store.working = {
          kind: KIND_BROUILLON,
          id: raw.currentId || null,
          updatedAt: raw.draft.updatedAt || nowIso(),
          character: clone(raw.draft.character),
        };
      }
      return store;
    }

    store.brouillons = (raw.brouillons || [])
      .map((entry) => normalizeEntry(entry, KIND_BROUILLON))
      .filter(Boolean)
      .slice(0, MAX_PER_TYPE);
    store.personnages = (raw.personnages || [])
      .map((entry) => normalizeEntry(entry, KIND_PERSONNAGE))
      .filter(Boolean)
      .slice(0, MAX_PER_TYPE);

    if (raw.working && typeof raw.working === "object") {
      if (raw.working.kind === KIND_PERSONNAGE && raw.working.data) {
        store.working = {
          kind: KIND_PERSONNAGE,
          id: raw.working.id || null,
          updatedAt: raw.working.updatedAt || nowIso(),
          data: HeroSheet.normalizePersonnageData(raw.working.data),
        };
      } else if (raw.working.character) {
        store.working = {
          kind: KIND_BROUILLON,
          id: raw.working.id || null,
          updatedAt: raw.working.updatedAt || nowIso(),
          character: clone(raw.working.character),
        };
      }
    }
    return store;
  }

  function readRaw() {
    try {
      const text = localStorage.getItem(STORAGE_KEY);
      if (!text) {
        return null;
      }
      return JSON.parse(text);
    } catch (err) {
      console.warn("IconsStorage: unable to parse store", err);
      return null;
    }
  }

  function writeStore(store) {
    const normalized = normalizeStore(store);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    return normalized;
  }

  function migrateLegacySlots(store) {
    let migrated = false;
    LEGACY_SLOTS.forEach((key, index) => {
      if (store.brouillons.length >= MAX_PER_TYPE) {
        return;
      }
      const text = localStorage.getItem(key);
      if (!text) {
        return;
      }
      try {
        const character = JSON.parse(text);
        if (!character) {
          return;
        }
        const stamp = nowIso();
        store.brouillons.push({
          id: createId(),
          name: `Slot ${index + 1} (migré)`,
          createdAt: stamp,
          updatedAt: stamp,
          character: clone(character),
        });
        migrated = true;
      } catch (err) {
        console.warn(`IconsStorage: legacy ${key} invalid`, err);
      }
    });

    if (!store.working && store.brouillons.length) {
      const first = store.brouillons[0];
      store.working = {
        kind: KIND_BROUILLON,
        id: first.id,
        updatedAt: first.updatedAt,
        character: clone(first.character),
      };
    }

    if (migrated) {
      LEGACY_SLOTS.forEach((key) => localStorage.removeItem(key));
    }
    return migrated;
  }

  function load() {
    const raw = readRaw();
    let store = normalizeStore(raw);
    const migratedLegacy = migrateLegacySlots(store);
    const needsWrite =
      migratedLegacy ||
      !localStorage.getItem(STORAGE_KEY) ||
      (raw && raw.version !== VERSION);
    if (needsWrite) {
      store = writeStore(store);
    }
    return store;
  }

  function getStore() {
    return load();
  }

  function list(kind) {
    return listFor(getStore(), kind).map((entry) => ({
      id: entry.id,
      name: entry.name,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
      kind,
    }));
  }

  function getEntry(kind, id) {
    return listFor(getStore(), kind).find((entry) => entry.id === id) || null;
  }

  function getWorking() {
    return getStore().working;
  }

  function canCreate(kind) {
    return listFor(getStore(), kind).length < MAX_PER_TYPE;
  }

  function count(kind) {
    return listFor(getStore(), kind).length;
  }

  function writeWorkingBrouillon(character, options = {}) {
    const store = getStore();
    store.working = {
      kind: KIND_BROUILLON,
      id: Object.prototype.hasOwnProperty.call(options, "id")
        ? options.id
        : store.working && store.working.kind === KIND_BROUILLON
          ? store.working.id
          : null,
      updatedAt: nowIso(),
      character: clone(character),
    };
    return writeStore(store);
  }

  function writeWorkingPersonnage(data, options = {}) {
    const store = getStore();
    store.working = {
      kind: KIND_PERSONNAGE,
      id: Object.prototype.hasOwnProperty.call(options, "id")
        ? options.id
        : store.working && store.working.kind === KIND_PERSONNAGE
          ? store.working.id
          : null,
      updatedAt: nowIso(),
      data: HeroSheet.normalizePersonnageData(data),
    };
    return writeStore(store);
  }

  function createBrouillon(name, character) {
    const store = getStore();
    if (store.brouillons.length >= MAX_PER_TYPE) {
      return { ok: false, reason: "quota", max: MAX_PER_TYPE };
    }
    const trimmed = (name || "").trim();
    if (!trimmed) {
      return { ok: false, reason: "name" };
    }
    const stamp = nowIso();
    const entry = {
      id: createId(),
      name: trimmed,
      createdAt: stamp,
      updatedAt: stamp,
      character: clone(character),
    };
    store.brouillons.push(entry);
    store.working = {
      kind: KIND_BROUILLON,
      id: entry.id,
      updatedAt: stamp,
      character: clone(character),
    };
    writeStore(store);
    return { ok: true, entry };
  }

  function createPersonnage(name, characterOrData) {
    const store = getStore();
    if (store.personnages.length >= MAX_PER_TYPE) {
      return { ok: false, reason: "quota", max: MAX_PER_TYPE };
    }
    const trimmed = (name || "").trim();
    if (!trimmed) {
      return { ok: false, reason: "name" };
    }
    const data =
      characterOrData && characterOrData.base
        ? HeroSheet.normalizePersonnageData(characterOrData)
        : HeroSheet.createPersonnageData(characterOrData);
    const stamp = nowIso();
    const entry = {
      id: createId(),
      name: trimmed,
      createdAt: stamp,
      updatedAt: stamp,
      data,
    };
    store.personnages.push(entry);
    store.working = {
      kind: KIND_PERSONNAGE,
      id: entry.id,
      updatedAt: stamp,
      data: clone(data),
    };
    writeStore(store);
    return { ok: true, entry };
  }

  function overwrite(kind, id, payload) {
    const store = getStore();
    const list = listFor(store, kind);
    const index = list.findIndex((entry) => entry.id === id);
    if (index === -1) {
      return { ok: false, reason: "missing" };
    }
    const stamp = nowIso();
    if (kind === KIND_PERSONNAGE) {
      list[index] = {
        ...list[index],
        updatedAt: stamp,
        data: HeroSheet.normalizePersonnageData(payload),
      };
      store.working = {
        kind: KIND_PERSONNAGE,
        id,
        updatedAt: stamp,
        data: clone(list[index].data),
      };
    } else {
      list[index] = {
        ...list[index],
        updatedAt: stamp,
        character: clone(payload),
      };
      store.working = {
        kind: KIND_BROUILLON,
        id,
        updatedAt: stamp,
        character: clone(payload),
      };
    }
    setListFor(store, kind, list);
    writeStore(store);
    return { ok: true, entry: list[index] };
  }

  function rename(kind, id, name) {
    const store = getStore();
    const list = listFor(store, kind);
    const index = list.findIndex((entry) => entry.id === id);
    if (index === -1) {
      return { ok: false, reason: "missing" };
    }
    const trimmed = (name || "").trim();
    if (!trimmed) {
      return { ok: false, reason: "name" };
    }
    list[index].name = trimmed;
    list[index].updatedAt = nowIso();
    setListFor(store, kind, list);
    writeStore(store);
    return { ok: true, entry: list[index] };
  }

  function remove(kind, id) {
    const store = getStore();
    const list = listFor(store, kind);
    const next = list.filter((entry) => entry.id !== id);
    if (next.length === list.length) {
      return { ok: false, reason: "missing" };
    }
    setListFor(store, kind, next);
    if (store.working && store.working.kind === kind && store.working.id === id) {
      store.working.id = null;
    }
    writeStore(store);
    return { ok: true };
  }

  function loadIntoWorking(kind, id) {
    const store = getStore();
    const entry = listFor(store, kind).find((item) => item.id === id);
    if (!entry) {
      return { ok: false, reason: "missing" };
    }
    if (kind === KIND_PERSONNAGE) {
      store.working = {
        kind: KIND_PERSONNAGE,
        id,
        updatedAt: nowIso(),
        data: clone(entry.data),
      };
      writeStore(store);
      return { ok: true, kind, entry, data: clone(entry.data) };
    }
    store.working = {
      kind: KIND_BROUILLON,
      id,
      updatedAt: nowIso(),
      character: clone(entry.character),
    };
    writeStore(store);
    return { ok: true, kind, entry, character: clone(entry.character) };
  }

  function isDirty() {
    const store = getStore();
    const working = store.working;
    if (!working) {
      return false;
    }
    if (!working.id) {
      return true;
    }
    const entry = listFor(store, working.kind).find(
      (item) => item.id === working.id
    );
    if (!entry) {
      return true;
    }
    if (working.kind === KIND_PERSONNAGE) {
      return JSON.stringify(entry.data) !== JSON.stringify(working.data);
    }
    return JSON.stringify(entry.character) !== JSON.stringify(working.character);
  }

  function buildExportPayload() {
    const store = getStore();
    return {
      version: VERSION,
      exportedAt: nowIso(),
      brouillons: clone(store.brouillons),
      personnages: clone(store.personnages),
      working: store.working ? clone(store.working) : null,
    };
  }

  function downloadExport(filename) {
    const payload = buildExportPayload();
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    const stamp = new Date().toISOString().slice(0, 10);
    anchor.href = url;
    anchor.download = filename || `icons-saves-${stamp}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
    return payload;
  }

  function importEntries(targetList, incoming, kind, max) {
    let imported = 0;
    let skipped = 0;
    for (const entry of incoming) {
      if (targetList.length >= max) {
        skipped += 1;
        continue;
      }
      const normalized = normalizeEntry(
        {
          ...entry,
          name: `${(entry.name || "Import").trim()} (import)`,
        },
        kind
      );
      if (!normalized) {
        skipped += 1;
        continue;
      }
      normalized.id = createId();
      targetList.push(normalized);
      imported += 1;
    }
    return { imported, skipped };
  }

  function importPayload(payload, mode = "merge") {
    if (!payload || typeof payload !== "object") {
      return { ok: false, reason: "invalid" };
    }

    const store = mode === "replace" ? emptyStore() : getStore();
    let imported = 0;
    let skipped = 0;

    const brouillonsIncoming = Array.isArray(payload.brouillons)
      ? payload.brouillons
      : Array.isArray(payload.saves)
        ? payload.saves
        : [];
    const personnagesIncoming = Array.isArray(payload.personnages)
      ? payload.personnages
      : [];

    if (
      !brouillonsIncoming.length &&
      !personnagesIncoming.length &&
      !payload.working &&
      !payload.draft
    ) {
      return { ok: false, reason: "empty" };
    }

    const b = importEntries(
      store.brouillons,
      brouillonsIncoming,
      KIND_BROUILLON,
      MAX_PER_TYPE
    );
    imported += b.imported;
    skipped += b.skipped;

    const p = importEntries(
      store.personnages,
      personnagesIncoming,
      KIND_PERSONNAGE,
      MAX_PER_TYPE
    );
    imported += p.imported;
    skipped += p.skipped;

    if (!store.working) {
      if (payload.working) {
        store.working = normalizeStore({ working: payload.working }).working;
      } else if (payload.draft && payload.draft.character) {
        store.working = {
          kind: KIND_BROUILLON,
          id: null,
          updatedAt: nowIso(),
          character: clone(payload.draft.character),
        };
      }
    }

    writeStore(store);
    return {
      ok: true,
      imported,
      skipped,
      brouillons: store.brouillons.length,
      personnages: store.personnages.length,
      max: MAX_PER_TYPE,
    };
  }

  function clearAll() {
    localStorage.removeItem(STORAGE_KEY);
    LEGACY_SLOTS.forEach((key) => localStorage.removeItem(key));
    return writeStore(emptyStore());
  }

  function formatTime(iso) {
    if (!iso) {
      return "";
    }
    try {
      return new Date(iso).toLocaleString("fr-FR", {
        dateStyle: "short",
        timeStyle: "short",
      });
    } catch (err) {
      return iso;
    }
  }

  // Back-compat aliases used by older UI snippets
  function listSaves() {
    return list(KIND_BROUILLON);
  }

  return {
    VERSION,
    MAX_PER_TYPE,
    MAX_SAVES: MAX_PER_TYPE,
    KIND_BROUILLON,
    KIND_PERSONNAGE,
    STORAGE_KEY,
    load,
    getStore,
    list,
    listSaves,
    getEntry,
    getWorking,
    canCreate,
    count,
    writeWorkingBrouillon,
    writeWorkingPersonnage,
    createBrouillon,
    createPersonnage,
    overwrite,
    rename,
    remove,
    loadIntoWorking,
    isDirty,
    buildExportPayload,
    downloadExport,
    importPayload,
    clearAll,
    formatTime,
  };
})();
