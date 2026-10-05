#!/usr/bin/env python3
"""Build js/data/pouvoirs.js (Option B catalog) from js/data/pouvoirs.ocr.txt."""

from pathlib import Path
import re
import json

ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / "js/data/pouvoirs.ocr.txt"
OUT = ROOT / "js/data/pouvoirs.js"

PRIMARY_CATS = {
    "DÉFENSE",
    "ATTAQUE",
    "MOUVEMENT",
    "PERCEPTION",
    "ALTÉRATION",
    "CONTRÔLE",
    "ESPRIT",
    "MIMÉTISME",
    "VARIANTE",
    "VARIATION",
    "GROUPE DE POUVOIRS",
}
CONTINUATION_RE = re.compile(
    r"^(?:"
    r"GROUPE DE POUVOIRS|GROUPE CONTRÔLE|"
    r"POUVOIR DU GROUPE(?:\s+\S+)?|POUVOIR DU|"
    r"DE POUVOIR|DE LA MATIÈRE|DU CONTINUUM|ÉLÉMENTAIRE|"
    r"CONTRÔLE ÉLÉMENTAIRE|DE L[’']ÉNERGIE|"
    r"ARCANES|MIMÉTISME|CONTRÔLE"
    r")$"
)
CAT_LABEL = {
    "DÉFENSE": "Défense",
    "ATTAQUE": "Attaque",
    "MOUVEMENT": "Mouvement",
    "PERCEPTION": "Perception",
    "ALTÉRATION": "Altération",
    "CONTRÔLE": "Contrôle",
    "ESPRIT": "Esprit",
    "MIMÉTISME": "Mimétisme",
}
PAGE_RE = re.compile(
    r"^(?:(\d+)\s+Description des Pouvoirs|Description des Pouvoirs\s+(\d+))$"
)
SECTION_HEADERS = {"Extras", "Limites", "Limite"}
PROSE_START = re.compile(
    r"^(?:vous |nous |le meneur|lorsque |quand |après |avec |pour |comme |"
    r"reportez|voir |voyez |cette |ce |ces |tout |toute |tous |"
    r"si |mais |donc |ainsi |puisque |contrairement |"
    r"dont |que |qui |ni |car |"
    r"l’exacte |l'exacte |votre |vos |leur |leurs |son |sa |ses |"
    r"affecté |donnant |ce pouvoir|un bouclier|les griffes|"
    r"fais |faites |touchez |choisissez |lancez )",
    re.I,
)
GROUP_OF_MAP = {
    "CONTRÔLE": "Contrôle",
    "ARCANES": "Arcanes",
    "MIMÉTISME": "Mimétisme",
    "CONTRÔLE ÉLÉMENTAIRE": "Contrôle élémentaire",
    "CONTRÔLE DE L’ÉNERGIE": "Contrôle de l'énergie",
    "CONTRÔLE DE L'ÉNERGIE": "Contrôle de l'énergie",
    "DE L’ÉNERGIE": "Contrôle de l'énergie",
    "DE L'ÉNERGIE": "Contrôle de l'énergie",
    "ÉLÉMENTAIRE": "Contrôle élémentaire",
    "DU CONTINUUM": "Contrôle du continuum",
    "DE POUVOIR": "Contrôle de pouvoir",
    "DE LA MATIÈRE": "Contrôle de la matière",
}


def is_page(s: str) -> bool:
    return bool(PAGE_RE.match(s))


def page_num(s: str) -> int:
    m = PAGE_RE.match(s)
    return int(m.group(1) or m.group(2))


def is_allcaps_cat(s: str) -> bool:
    if s in PRIMARY_CATS or CONTINUATION_RE.match(s):
        return True
    return bool(
        re.fullmatch(r"[A-ZÀÂÄÉÈÊËÎÏÔÙÛÜÇ’'\s\-]+", s or "") and 0 < len(s) < 45
    )


def is_name_atom(s: str) -> bool:
    if not s or len(s) > 42:
        return False
    if s in PRIMARY_CATS or CONTINUATION_RE.match(s) or s in SECTION_HEADERS:
        return False
    if is_page(s) or s.startswith("•"):
        return False
    # Allow trailing ellipsis for names like "Corps de…"
    core = s.rstrip("…")
    if core.endswith("..."):
        core = core[:-3]
    if not core:
        return False
    if core.endswith((".", ":", ";", ",", "!", "?")):
        return False
    if re.match(r"^\d", core):
        return False
    if "(" in core or ")" in core:
        return False
    if PROSE_START.match(core):
        return False
    words = core.split()
    if len(words) > 5:
        return False
    # Mid-sentence lowercase prose (but allow de/des/du continuations)
    if (
        len(words) >= 3
        and core[0].islower()
        and not re.match(r"^(?:de|des|du|d'|d’|la|le|les|l'|l’)\b", core, re.I)
    ):
        return False
    return True


def collect_title(lines, cat_idx):
    frags = []
    j = cat_idx - 1
    while j >= 0 and not lines[j].strip():
        j -= 1
    while j >= 0 and len(frags) < 4:
        s = lines[j].strip()
        if not s:
            j -= 1
            continue
        if not is_name_atom(s):
            break
        frags.append(s)
        j -= 1
    frags.reverse()
    if not frags:
        return "", cat_idx
    # Trim leading junk: start at first uppercase fragment
    start = 0
    for idx, f in enumerate(frags):
        if re.match(r"^[A-ZÀÂÄÉÈÊËÎÏÔÙÛÜÇÆŒ]", f):
            start = idx
            break
    else:
        return "", cat_idx
    frags = frags[start:]
    name = re.sub(r"\s+", " ", " ".join(frags)).strip()
    return name, cat_idx - len(frags)


def merge_categories(lines, i):
    cats = [lines[i].strip()]
    k = i + 1
    while k < len(lines):
        s = lines[k].strip()
        if not s:
            k += 1
            continue
        if s in {"VARIANTE", "VARIATION"}:
            break
        if s in PRIMARY_CATS and s != "GROUPE DE POUVOIRS":
            break
        if s == "GROUPE DE POUVOIRS" or (
            is_allcaps_cat(s) and s not in PRIMARY_CATS - {"GROUPE DE POUVOIRS"}
        ):
            cats.append(s)
            k += 1
            continue
        break
    return cats, k


def classify(cats, name):
    kind = "power"
    category = None
    group_of = None

    if any(c in ("VARIANTE", "VARIATION") for c in cats):
        kind = "variant"
    if "GROUPE DE POUVOIRS" in cats:
        kind = "group"

    for c in cats:
        if c in CAT_LABEL:
            category = CAT_LABEL[c]
            break

    joined = " ".join(cats)
    if any("POUVOIR DU" in c for c in cats) or "POUVOIR DU GROUPE" in joined:
        if "DE POUVOIR" in cats or joined.endswith("DE POUVOIR"):
            group_of = "Contrôle de pouvoir"
        elif "DE LA MATIÈRE" in cats or "MATIÈRE" in joined:
            group_of = "Contrôle de la matière"
        elif any("ÉNERGIE" in c for c in cats) or "ÉNERGIE" in joined:
            group_of = "Contrôle de l'énergie"
        elif "DU CONTINUUM" in cats or "CONTINUUM" in joined:
            group_of = "Contrôle du continuum"
        elif "ÉLÉMENTAIRE" in cats or "ÉLÉMENTAIRE" in joined:
            group_of = "Contrôle élémentaire"
        elif any("ARCANES" in c for c in cats):
            group_of = "Arcanes"
        elif any("MIMÉTISME" in c for c in cats):
            group_of = "Mimétisme"
        else:
            m = re.search(r"POUVOIR DU GROUPE\s+(.+)", joined)
            if m:
                raw_g = re.sub(r"\s+", " ", m.group(1).strip())
                group_of = GROUP_OF_MAP.get(raw_g, raw_g)
            elif "CONTRÔLE" in joined:
                group_of = "Contrôle"
        if kind == "group":
            kind = "power"

    if not category and kind == "group":
        n = name.lower()
        if n.startswith("contrôle"):
            category = "Contrôle"
        elif n.startswith("mimétisme"):
            category = "Altération"
        elif "détection" in n or "sens" in n:
            category = "Perception"

    return kind, category, group_of


def reflow(text_lines):
    parts = []
    for ln in text_lines:
        s = ln.strip()
        if not s or is_page(s):
            continue
        if parts and parts[-1].endswith("-"):
            parts[-1] = parts[-1][:-1] + s
        else:
            parts.append(s)
    text = re.sub(r"\s+", " ", " ".join(parts)).strip()
    return (
        text.replace("reportezvous", "reportez-vous").replace(
            "Reportezvous", "Reportez-vous"
        )
    )


def parse_bullets(block_lines):
    items, buf = [], []
    for ln in block_lines:
        s = ln.strip()
        if not s or is_page(s):
            continue
        if s.startswith("•"):
            if buf:
                items.append(" ".join(buf))
            buf = [s.lstrip("•").strip()]
        elif buf:
            buf.append(s)
    if buf:
        items.append(" ".join(buf))
    out = []
    for it in items:
        it = re.sub(r"\s+", " ", it).strip()
        if " : " in it:
            name, value = it.split(" : ", 1)
        elif ":" in it:
            name, value = it.split(":", 1)
        else:
            name, value = it, ""
        out.append({"name": name.strip().rstrip("."), "value": value.strip()})
    return out


def extract_variant_of(text):
    patterns = [
        r"[Rr]eportez[- ]vous (?:à|au|aux) (?:l[’']extra |la description du |la description de |aux descriptions des )?pouvoirs? ([^.,;(]+?)(?:\s*\(|\s*,|\s*\.|$)",
        r"[Vv]oyez (?:plutôt )?(?:le |la |les )?pouvoirs? ([^.,;(]+?)(?:\s*\(|\s*,|\s*\.|$)",
        r"[Vv]oir (?:le |la |les )?pouvoirs? ([^.,;(]+?)(?:\s*\(|\s*,|\s*\.|$)",
        r"sous (?:le )?pouvoir ([^.,;(]+?)(?:\s*\(|\s*,|\s*\.|$)",
        r"du pouvoir ([^.,;(]+?)(?:\s*\(|\s*,|\s*\.|$)",
        r"variante de ([^.,;(]+?)(?:\s*\(|\s*,|\s*\.|$)",
        r"à Forme alternative",
    ]
    for p in patterns:
        m = re.search(p, text)
        if not m:
            continue
        if p == r"à Forme alternative":
            return "Forme alternative"
        name = re.sub(r"\s+", " ", m.group(1)).strip(" .")
        name = re.sub(r"\s+page\s+\d+.*$", "", name, flags=re.I).strip()
        name = re.sub(r"\s+pour plus de détails.*$", "", name, flags=re.I).strip()
        if 1 < len(name) < 50:
            return name
    return None


def build():
    lines = RAW.read_text(encoding="utf-8").splitlines()

    page_at = []
    cur = 30
    for ln in lines:
        s = ln.strip()
        if is_page(s):
            cur = page_num(s)
        page_at.append(cur)

    starts = []
    i = 0
    consumed_until = -1
    while i < len(lines):
        if i < consumed_until:
            i += 1
            continue
        s = lines[i].strip()
        if s in PRIMARY_CATS:
            cats, body_start = merge_categories(lines, i)
            name, title_start = collect_title(lines, i)
            if name:
                starts.append(
                    {
                        "title_start": title_start,
                        "cat_idx": i,
                        "cats": cats,
                        "body_start": body_start,
                        "name": name,
                    }
                )
                consumed_until = body_start
                i = body_start
                continue
        i += 1

    powers = []
    for n, st in enumerate(starts):
        end = starts[n + 1]["title_start"] if n + 1 < len(starts) else len(lines)
        body_lines = lines[st["body_start"] : end]
        kind, category, group_of = classify(st["cats"], st["name"])

        extras_idx = limites_idx = None
        for bi, ln in enumerate(body_lines):
            t = ln.strip()
            if t == "Extras" and extras_idx is None:
                extras_idx = bi
            elif t in ("Limites", "Limite") and limites_idx is None:
                limites_idx = bi

        desc_end = len(body_lines)
        if extras_idx is not None:
            desc_end = min(desc_end, extras_idx)
        if limites_idx is not None:
            desc_end = min(desc_end, limites_idx)
        desc = reflow(body_lines[:desc_end])

        extras, limites = [], []
        if extras_idx is not None:
            e_end = (
                limites_idx
                if (limites_idx is not None and limites_idx > extras_idx)
                else len(body_lines)
            )
            extras = parse_bullets(body_lines[extras_idx + 1 : e_end])
        if limites_idx is not None:
            if extras_idx is not None and extras_idx > limites_idx:
                l_end = extras_idx
            else:
                l_end = len(body_lines)
            limites = parse_bullets(body_lines[limites_idx + 1 : l_end])

        variant_of = extract_variant_of(desc) if kind == "variant" else None

        entry = {
            "name": st["name"],
            "category": category,
            "page": page_at[st["cat_idx"]],
            "kind": kind,
            "variantOf": variant_of,
            "value": desc,
            "extras": extras,
            "limites": limites,
        }
        if group_of:
            entry["groupOf"] = group_of
        powers.append(entry)

    return powers


# Roll tables for kind === "group" (from the ICONS power descriptions).
# dice: "1d6" | "2d6" (sum) | "d6xd6" (two independent dice) | null (choose / pick random)
GROUP_TABLES = {
    "Arcanes": {
        "dice": "1d6",
        "label": "Pouvoir",
        "entries": [
            {"name": "Pouvoir cosmique", "roll": [1, 2]},
            {"name": "Gadgets", "roll": [3, 4]},
            {"name": "Sorcellerie", "roll": [5, 6]},
        ],
    },
    "Augmentation de capacité": {
        "dice": "1d6",
        "label": "Capacité",
        "entries": [
            {"name": "Vaillance", "roll": [1]},
            {"name": "Coordination", "roll": [2]},
            {"name": "Force", "roll": [3]},
            {"name": "Intellect", "roll": [4]},
            {"name": "Éveil", "roll": [5]},
            {"name": "Volonté", "roll": [6]},
        ],
    },
    "Contrôle de la matière": {
        "dice": "1d6",
        "label": "Pouvoir",
        "entries": [
            {"name": "Télékinésie", "roll": [1, 2, 3, 4]},
            {"name": "Transmutation", "roll": [5, 6]},
        ],
    },
    "Contrôle de l’énergie": {
        "dice": "d6xd6",
        "label": "Pouvoir",
        "entries": [
            {"name": "Contrôle du froid", "first": [1, 2, 3], "second": [1]},
            {"name": "Contrôle des ténèbres", "first": [1, 2, 3], "second": [2]},
            {"name": "Contrôle de l’électricité", "first": [1, 2, 3], "second": [3]},
            {"name": "Contrôle de la force", "first": [1, 2, 3], "second": [4, 5]},
            {"name": "Contrôle de la lumière", "first": [1, 2, 3], "second": [6]},
            {"name": "Contrôle magnétique", "first": [4, 5, 6], "second": [1, 2]},
            {"name": "Contrôle des radiations", "first": [4, 5, 6], "second": [3]},
            {"name": "Contrôle sonique", "first": [4, 5, 6], "second": [4, 5]},
            {"name": "Contrôle des vibrations", "first": [4, 5, 6], "second": [6]},
        ],
    },
    "Contrôle de pouvoir": {
        "dice": "1d6",
        "label": "Pouvoir",
        "entries": [
            {"name": "Octroi de pouvoir", "roll": [1, 2]},
            {"name": "Augmentation de pouvoir", "roll": [3, 4]},
            {"name": "Nullification", "roll": [5, 6]},
        ],
    },
    "Contrôle du continuum": {
        "dice": "1d6",
        "label": "Pouvoir",
        "entries": [
            {"name": "Contrôle de la friction", "roll": [1]},
            {"name": "Contrôle de la gravité", "roll": [2]},
            {"name": "Contrôle des probabilités", "roll": [3]},
            {"name": "Contrôle de l’espace", "roll": [4]},
            {"name": "Contrôle temporel", "roll": [5]},
            {
                "name": "Choisissez ou relancez",
                "roll": [6],
                "special": "reroll",
            },
        ],
    },
    "Contrôle élémentaire": {
        "dice": "1d6",
        "label": "Pouvoir",
        "entries": [
            {"name": "Contrôle de l’air", "roll": [1]},
            {"name": "Contrôle de la terre", "roll": [2]},
            {"name": "Contrôle du feu", "roll": [3]},
            {"name": "Contrôle des plantes", "roll": [4]},
            {"name": "Contrôle de l’eau", "roll": [5]},
            {"name": "Contrôle du climat", "roll": [6]},
        ],
    },
    "Détection": {
        "dice": "2d6",
        "label": "Type",
        "entries": [
            {
                "name": "Cosmique",
                "roll": [2],
                "value": "Vous pouvez détecter les êtres de niveau cosmique, l’énergie cosmique et les événements susceptibles d’affecter l’univers.",
            },
            {
                "name": "Émotions",
                "roll": [3, 4],
                "value": "Vous pouvez détecter les états émotionnels ou des émotions particulières, comme la peur ou l’amour.",
            },
            {
                "name": "Énergie",
                "roll": [5],
                "value": "Vous pouvez détecter différents types d’énergie et suivre des traces d’énergie. Vous pouvez identifier différents types d’énergie avec un test de pouvoir.",
            },
            {
                "name": "Magie",
                "roll": [6],
                "value": "Vous pouvez détecter l’énergie magique : sorts, artefacts, êtres capables d’utiliser la sorcellerie…",
            },
            {
                "name": "Magnétisme",
                "roll": [7],
                "value": "Vous pouvez détecter les champs magnétiques, ce qui inclut l’utilisation de Contrôle magnétique.",
            },
            {
                "name": "Pouvoir",
                "roll": [8, 9],
                "value": "Vous pouvez détecter l’utilisation de certains pouvoirs – quand un pouvoir est utilisé ou quand quelqu’un possède un type de pouvoir, comme les pouvoirs mutants ou mentaux.",
            },
            {
                "name": "Radiation",
                "roll": [10, 11],
                "value": "Vous pouvez détecter l’énergie radioactive et les sources de radiation, ce qui inclut l’utilisation de Contrôle des radiations.",
            },
            {
                "name": "Astrale",
                "roll": [12],
                "value": "Vous pouvez détecter l’activité spirituelle, comme celle des fantômes ou des formes astrales.",
            },
        ],
    },
    "Forme alternative": {
        "dice": "1d6",
        "label": "Forme",
        "entries": [
            {"name": "Forme énergétique", "roll": [1]},
            {"name": "Forme explosive", "roll": [2]},
            {"name": "Forme fluide", "roll": [3]},
            {"name": "Forme gazeuse", "roll": [4]},
            {"name": "Forme d’ombre", "roll": [5]},
            {"name": "Forme solide", "roll": [6]},
        ],
    },
    "Membres additionnels": {
        "dice": "2d6",
        "label": "Membre",
        "entries": [
            {
                "name": "Carapace",
                "roll": [2, 3],
                "value": "Vous avez une épaisse coquille, ce qui vous donne une Résistance aux dégâts égale au niveau de votre pouvoir.",
            },
            {
                "name": "Griffes",
                "roll": [4, 5],
                "value": "Vous avez le pouvoir Frappe (Taillader) à un niveau égal au niveau de votre pouvoir.",
            },
            {
                "name": "Bras supplémentaires",
                "roll": [6],
                "value": "Vous disposez d’une Force ou du pouvoir Attaque Rapide à un niveau égal au niveau de votre pouvoir.",
            },
            {
                "name": "Jambes supplémentaires",
                "roll": [7],
                "value": "Vous pouvez vous déplacer plus vite et utiliser le niveau de votre pouvoir pour déterminer votre vitesse, comme avec le pouvoir Bonds.",
            },
            {
                "name": "Queue",
                "roll": [8],
                "value": "Vous pouvez utiliser votre queue comme s’il s’agissait d’un bras supplémentaire. Vous gagnez le pouvoir Attaque Rapide à un niveau égal au niveau de votre pouvoir.",
            },
            {
                "name": "Tentacules",
                "roll": [9, 10],
                "value": "Vous avez de puissants tentacules. Ils vous font bénéficier du pouvoir Élasticité ou d’une Force égale au niveau de votre pouvoir.",
            },
            {
                "name": "Ailes",
                "roll": [11, 12],
                "value": "Vous avez des ailes fonctionnelles. Vous gagnez le pouvoir Vol à un niveau égal au niveau de votre pouvoir.",
            },
        ],
    },
    "Mimétisme": {
        "dice": "1d6",
        "label": "Pouvoir",
        "entries": [
            {"name": "Mimétisme animal", "roll": [1]},
            {"name": "Mimétisme matériel", "roll": [2]},
            {"name": "Némésis", "roll": [3]},
            {"name": "Mimétisme végétal", "roll": [4]},
            {"name": "Mimétisme de pouvoir", "roll": [5, 6]},
        ],
    },
    "Rayon altérant": {
        "dice": "1d6",
        "label": "Type",
        "entries": [
            {
                "name": "Rayon de Densité",
                "roll": [1],
                "value": "Vous augmentez la densité de votre cible.",
            },
            {
                "name": "Rayon de Gigantisme",
                "roll": [2],
                "value": "Vous faites grandir votre cible.",
            },
            {
                "name": "Rayon d’Invisibilité",
                "roll": [3],
                "value": "Vous rendez votre cible invisible.",
            },
            {
                "name": "Rayon d’Immatérialité",
                "roll": [4],
                "value": "Vous rendez votre cible intangible.",
            },
            {
                "name": "Rayon de Diminution",
                "roll": [5],
                "value": "Vous faites rétrécir votre cible.",
            },
            {
                "name": "Rayon de Métamorphose",
                "roll": [6],
                "value": "Vous transformez votre cible en une différente forme ou substance.",
            },
        ],
    },
    "Renforcement de capacité": {
        "dice": "1d6",
        "label": "Capacité",
        "entries": [
            {"name": "Vaillance", "roll": [1]},
            {"name": "Coordination", "roll": [2]},
            {"name": "Force", "roll": [3]},
            {"name": "Intellect", "roll": [4]},
            {"name": "Éveil", "roll": [5]},
            {"name": "Volonté", "roll": [6]},
        ],
    },
    "Résistance": {
        "dice": None,
        "label": "Type",
        "entries": [
            {"name": "Résistance à une capacité"},
            {"name": "Résistance à l’Altération"},
            {"name": "Résistance à l’Immobilisation"},
            {"name": "Résistance aux dégâts"},
            {"name": "Résistance à la Détection"},
            {"name": "Résistance mentale"},
            {"name": "Résistance sensorielle"},
        ],
    },
    "Super-sens": {
        "dice": "1d6",
        "label": "Type",
        "entries": [
            {
                "name": "Additionnel",
                "roll": [1, 2],
                "value": "Vous avez plus de sens que les cinq communs : chaque niveau vous offre une nouvelle capacité sensorielle dans la liste des sens additionnels.",
            },
            {
                "name": "Amélioré",
                "roll": [3, 4],
                "value": "Chaque niveau vous donne un bonus de +1 aux tests d’Éveil lié à un sens particulier, un peu comme une spécialité : vision améliorée, ouïe améliorée…",
            },
            {
                "name": "Étendu",
                "roll": [5, 6],
                "value": "Chaque niveau vous permet d’améliorer la portée utile du sens utilisé, en décalant d’un rang les effets de la table des portées.",
            },
        ],
        "senses": [
            {
                "name": "Vision circulaire",
                "value": "Vous pouvez voir autour de vous à 360 degrés, rendant difficile toute tentative de vous surprendre.",
            },
            {
                "name": "Communication",
                "value": "Vous pouvez communiquer par un medium autre que la parole, comme les ondes radio, le super-ventriloquisme ou la transmission télépathique.",
            },
            {
                "name": "Compréhension des langages",
                "value": "Vous pouvez comprendre et communiquer dans n’importe quelle langue. Le MJ peut toutefois demander un test d’Intellect pour comprendre des langues particulièrement obscures ou extraterrestres.",
            },
            {
                "name": "Sens des dimensions",
                "value": "Vous pouvez détecter l’énergie ou la signature vibratoire de chaque dimension, et savoir lorsque vous vous retrouvez dans un plan méconnu.",
            },
            {
                "name": "Sens de la direction",
                "value": "Vous ne vous perdez jamais et vous pouvez retrouver votre chemin vers tout endroit où vous vous êtes déjà rendu.",
            },
            {
                "name": "Sens du temps",
                "value": "Comme une horloge particulièrement précise, vous savez toujours quelle heure il est et combien de temps s’est écoulé.",
            },
            {
                "name": "Sens de la chasse",
                "value": "Vous pouvez suivre les traces ou la piste d’un sujet, ce qui peut requérir un test d’Éveil sur un terrain ou des conditions difficiles.",
            },
            {
                "name": "Vision infrarouge",
                "value": "Vous pouvez voir les sources de chaleur, vous permettant de voir dans le noir en détectant les différences de température.",
            },
            {
                "name": "Vision microscopique",
                "value": "Vous pouvez voir les objets trop petits pour qu’on puisse normalement les distinguer à l’œil nu.",
            },
            {
                "name": "Vision pénétrante",
                "value": "Vous pouvez voir au travers des objets solides, comme un rayon X. Choisissez au moins une substance que votre vision ne peut traverser.",
            },
            {
                "name": "Sens de l’espace",
                "value": "Grâce à un radar, un sonar ou une capacité similaire, vous gagnez une vision tridimensionnelle de l’environnement jusqu’à portée visuelle.",
            },
            {
                "name": "Télé-localisation",
                "value": "Vous pouvez localiser un ou plusieurs individus connus, où qu’ils soient, avec un test d’Éveil réussi.",
            },
            {
                "name": "Vision véritable",
                "value": "Vous pouvez voir la véritable apparence d’un objet ou d’une personne, faisant fi des déguisements ou des camouflages.",
            },
            {
                "name": "Vision de l’ultraviolet",
                "value": "Vous pouvez discerner les radiations ultraviolettes, vous permettant de voir dans le noir tant qu’il y a au minimum une source de lumière UV.",
            },
        ],
    },
}


def attach_group_tables(powers):
    """Attach roll tables to group powers; also match curly/straight apostrophes."""
    by_norm = {}
    for key, table in GROUP_TABLES.items():
        by_norm[key] = table
        by_norm[key.replace("'", "’")] = table
        by_norm[key.replace("’", "'")] = table

    missing = []
    for p in powers:
        if p.get("kind") != "group":
            continue
        table = by_norm.get(p["name"])
        if not table:
            missing.append(p["name"])
            continue
        p["table"] = table
    if missing:
        raise SystemExit(f"Missing GROUP_TABLES for: {missing}")
    return powers


TABLE_EMBED_RE = re.compile(
    r"\s+(?:"
    r"1[Dd]6\s+(?:Pouvoir|Capacité|Type|Taille|Forme|Transformation|Membre)\b"
    r"|2[Dd]6\s+(?:Type|Membre|Emotion|Émotion|Emotion)\b"
    r"|[Dd]6\s+[Dd]6\s+\S*"
    r"|[Dd]6\s+(?:Pouvoir|Capacité|Type|Taille|Forme|Transformation)\b"
    r").*$",
    re.S,
)


def polish_power_value(value, table=None):
    """Strip embedded OCR tables and restore readable paragraph/bullet layout."""
    if not value:
        return value
    text = value
    if table:
        text = TABLE_EMBED_RE.sub("", text).strip()
        if table.get("senses"):
            for marker in ("Sens additionnels", "Sens additionnel"):
                idx = text.find(marker)
                if idx > 0:
                    text = text[:idx].strip()
                    break
    # Restore bullet list line breaks
    text = re.sub(r"\s*•\s*", "\n• ", text)
    # Paragraph breaks between sentences
    text = re.sub(
        r"([.!?…])\s+(?=[A-ZÀÂÄÉÈÊËÎÏÔÙÛÜÇ«\"])",
        r"\1\n\n",
        text,
    )
    # Collapse excess blank lines
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def polish_powers(powers):
    for p in powers:
        p["value"] = polish_power_value(p.get("value") or "", p.get("table"))
    return powers


def write_js(powers):
    def js_str(s):
        return json.dumps(s, ensure_ascii=False)

    def emit_json_field(key, value, indent=6):
        pad = " " * indent
        raw = json.dumps(value, ensure_ascii=False, indent=2)
        lines = raw.splitlines()
        block = [f"{pad}{key}: {lines[0]}"]
        for line in lines[1:]:
            block.append(f"{pad}{line}")
        block[-1] = block[-1] + ","
        return block

    out = ["let pouvoirs = {", "  list: ["]
    for i, p in enumerate(powers):
        out.append("    {")
        out.append(f'      name: {js_str(p["name"])},')
        out.append(f'      category: {js_str(p["category"])},')
        out.append(f'      page: {p["page"]},')
        out.append(f'      kind: {js_str(p["kind"])},')
        out.append(f'      variantOf: {js_str(p["variantOf"])},')
        if p.get("groupOf"):
            out.append(f'      groupOf: {js_str(p["groupOf"])},')
        out.append(f'      value: {js_str(p["value"])},')
        if p.get("table"):
            out.extend(emit_json_field("table", p["table"], indent=6))
        if p["extras"]:
            out.append("      extras: [")
            for e in p["extras"]:
                out.append(
                    f'        {{ name: {js_str(e["name"])}, value: {js_str(e["value"])} }},'
                )
            out.append("      ],")
        else:
            out.append("      extras: [],")
        if p["limites"]:
            out.append("      limites: [")
            for e in p["limites"]:
                out.append(
                    f'        {{ name: {js_str(e["name"])}, value: {js_str(e["value"])} }},'
                )
            out.append("      ],")
        else:
            out.append("      limites: [],")
        out.append("    }," if i < len(powers) - 1 else "    }")
    out.extend(
        [
            "  ],",
            "};",
            "",
            "pouvoirs.byName = {};",
            "pouvoirs.list.forEach((entry) => {",
            "  pouvoirs.byName[entry.name] = entry;",
            "});",
            "",
            "pouvoirs.normalizeName = function normalizeName(name) {",
            '  return (name || "")',
            "    .trim()",
            '    .replace(/\\s*\\(groupe\\)\\s*$/i, "")',
            "    .replace(/['’]/g, \"'\")",
            '    .replace(/\\s+/g, " ")',
            '    .normalize("NFD")',
            "    .replace(/[\\u0300-\\u036f]/g, \"\")",
            "    .toLowerCase();",
            "};",
            "",
            "pouvoirs.definitionOf = function definitionOf(name) {",
            '  const key = (name || "").trim();',
            "  if (!key) return null;",
            "  if (pouvoirs.byName[key]) return pouvoirs.byName[key];",
            "",
            '  const stripped = key.replace(/\\s*\\(groupe\\)\\s*$/i, "").trim();',
            "  if (stripped !== key && pouvoirs.byName[stripped]) {",
            "    return pouvoirs.byName[stripped];",
            "  }",
            "",
            "  const needle = pouvoirs.normalizeName(key);",
            "  for (const entry of pouvoirs.list) {",
            "    if (pouvoirs.normalizeName(entry.name) === needle) return entry;",
            "  }",
            "  return null;",
            "};",
            "",
            "pouvoirs.isVariant = function isVariant(name) {",
            "  const entry = pouvoirs.definitionOf(name);",
            '  return !!(entry && entry.kind === "variant");',
            "};",
            "",
            "pouvoirs.isGroup = function isGroup(name) {",
            "  const entry = pouvoirs.definitionOf(name);",
            '  return !!(entry && entry.kind === "group");',
            "};",
            "",
            "pouvoirs.rollGroup = function rollGroup(name) {",
            "  const entry = pouvoirs.definitionOf(name);",
            '  if (!entry || entry.kind !== "group" || !entry.table) return null;',
            "  const table = entry.table;",
            "  const entries = table.entries || [];",
            "  if (!entries.length) return null;",
            "",
            "  const d6 = () => Math.ceil(Math.random() * 6);",
            "  const pickRandom = () => entries[Math.floor(Math.random() * entries.length)];",
            "",
            "  if (!table.dice) {",
            "    const chosen = pickRandom();",
            "    return { name: chosen.name, value: chosen.value || null, rolls: null, entry: chosen };",
            "  }",
            "",
            "  if (table.dice === \"1d6\") {",
            "    let guard = 0;",
            "    while (guard < 20) {",
            "      guard += 1;",
            "      const roll = d6();",
            "      const match = entries.find((e) => (e.roll || []).includes(roll));",
            '      if (!match) continue;',
            '      if (match.special === "reroll") continue;',
            "      return { name: match.name, value: match.value || null, rolls: [roll], entry: match };",
            "    }",
            "    return null;",
            "  }",
            "",
            "  if (table.dice === \"2d6\") {",
            "    const a = d6();",
            "    const b = d6();",
            "    const total = a + b;",
            "    const match = entries.find((e) => (e.roll || []).includes(total));",
            "    if (!match) return null;",
            "    return { name: match.name, value: match.value || null, rolls: [a, b], total, entry: match };",
            "  }",
            "",
            '  if (table.dice === "d6xd6") {',
            "    const first = d6();",
            "    const second = d6();",
            "    const match = entries.find(",
            "      (e) => (e.first || []).includes(first) && (e.second || []).includes(second)",
            "    );",
            "    if (!match) return null;",
            "    return { name: match.name, value: match.value || null, rolls: [first, second], entry: match };",
            "  }",
            "",
            "  return null;",
            "};",
            "",
        ]
    )
    OUT.write_text("\n".join(out) + "\n", encoding="utf-8")


if __name__ == "__main__":
    powers = polish_powers(attach_group_tables(build()))
    write_js(powers)
    print(f"Wrote {len(powers)} powers → {OUT}")
    from collections import Counter

    print("kinds:", dict(Counter(p["kind"] for p in powers)))
    groups_with_table = [p for p in powers if p.get("kind") == "group" and p.get("table")]
    print(f"group tables: {len(groups_with_table)}")
    for p in groups_with_table:
        t = p["table"]
        print(
            f"  - {p['name']}: dice={t.get('dice')} entries={len(t.get('entries') or [])}"
        )
