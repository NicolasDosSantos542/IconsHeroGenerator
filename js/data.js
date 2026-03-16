let table = {
  attributes: [
    "Vaillance",
    "Coordination",
    "Force",
    "Intellect",
    "Eveil",
    "Volonté",
  ],
  power: [
    {
      number: [2, 3],
      name: "Esprit",
    },
    {
      name: "Contrôle",
      number: [4, 5],
    },
    {
      name: "Défense",
      number: [6],
    },
    {
      name: "Attaque",
      number: [7],
    },
    {
      name: "Mouvement",
      number: [8],
    },
    {
      name: "Altération",
      number: [9, 10],
    },
    {
      name: "Perception",
      number: [11, 12],
    },
  ],

  alteration: [
    {
      name: "Augmentation de Capacité",
      first: [1, 2],
      second: [1],
    },
    {
      name: "Renforcement de Capacité",
      first: [1, 2],
      second: [2],
    },
    {
      name: "Alter-ego",
      first: [1, 2],
      second: [3],
    },
    {
      name: "Forme alternative",
      first: [1, 2],
      second: [4],
    },
    {
      name: "Amphibie",
      first: [1, 2],
      second: [5],
    },
    {
      name: "Densité",
      first: [1, 2],
      second: [6],
    },
    {
      name: "Duplication",

      first: [3, 4],
      second: [1],
    },
    {
      name: "Membres additionnels",

      first: [3, 4],
      second: [2],
    },
    {
      name: "Gigantisme",

      first: [3, 4],
      second: [3],
    },
    {
      name: "Invisibilité",

      first: [3, 4],
      second: [4],
    },
    {
      name: "Immatérialité",

      first: [3, 4],
      second: [5],
    },
    {
      name: "Diminution",

      first: [3, 4],
      second: [6],
    },
    {
      name: "Mimétisme animal",

      first: [5, 6],
      second: [1],
    },
    {
      name: "Mimétisme matériel",

      first: [5, 6],
      second: [2],
    },
    {
      name: "Mimétisme végétal",

      first: [5, 6],
      second: [3],
    },
    {
      name: "Mimétisme de pouvoir",

      first: [5, 6],
      second: [4],
    },
    {
      name: "Élasticité",

      first: [5, 6],
      second: [5],
    },
    {
      name: "Métamorphose",

      first: [5, 6],
      second: [6],
    },
  ],
  alteration_bis: [
    {
      name: "Augmentation de Capacité (groupe)",
      first: [1, 2],
      second: [1],
      page: 34,
    },
    {
      name: "Renforcement de Capacité (groupe)",
      first: [1, 2],
      second: [2],
      page: 99,
    },
    {
      name: "Alter-ego",
      first: [1, 2],
      second: [3],
      page: 32,
    },
    {
      name: "Forme alternative (groupe)",
      first: [1, 2],
      second: [4],
      page: 72,
    },
    {
      name: "Amphibie",
      first: [1, 2],
      second: [5],
      page: 32,
    },
    {
      name: "Densité",
      first: [1, 2],
      second: [6],
      page: 64,
    },

    {
      name: "Contrôle dimensionnel",
      first: [3, 4],
      second: [1],
      page: 56,
    },
    {
      name: "Duplication",
      first: [3, 4],
      second: [2],
      page: 68,
    },
    {
      name: "Évolution",
      first: [3, 4],
      second: [3],
      page: 72,
    },
    {
      name: "Membres additionnels (groupe)",
      first: [3, 4],
      second: [4],
      page: 84,
    },
    {
      name: "Gestalt",
      first: [3, 4],
      second: [5],
      page: 76,
    },
    {
      name: "Gigantisme",
      first: [3, 4],
      second: [6],
      page: 77,
    },

    {
      name: "Invisibilité",
      first: [5, 6],
      second: [1],
      page: 83,
    },
    {
      name: "Mimétisme (groupe)",
      first: [5, 6],
      second: [2],
      page: 87,
    },
    {
      name: "Immatérialité",
      first: [5, 6],
      second: [3],
      page: 80,
    },
    {
      name: "Diminution",
      first: [5, 6],
      second: [4],
      page: 65,
    },
    {
      name: "Élasticité",
      first: [5, 6],
      second: [5],
      page: 70,
    },
    {
      name: "Métamorphose",
      first: [5, 6],
      second: [6],
      page: 85,
    },
  ],

  control: [
    {
      name: "Rayon altérant",
      first: [1, 2],
      second: [1, 2],
    },
    {
      name: "Contrôle élémentaire",
      first: [1, 2],
      second: [3, 4],
    },
    {
      name: "Contrôle des probabilités",
      first: [1, 2],
      second: [5],
    },
    {
      name: "Contrôle du temps",
      first: [1, 2],
      second: [6],
    },
    {
      name: "Contrôle de l’énergie",
      first: [3, 4],
      second: [1, 2],
    },
    {
      name: "Guérison",
      first: [3, 4],
      second: [3],
    },
    {
      name: "Télékinésie",
      first: [3, 4],
      second: [4, 5],
    },
    {
      name: "Transmutation",
      first: [3, 4],
      second: [6],
    },
    {
      name: "Pouvoir cosmique",
      first: [5, 6],
      second: [1],
    },
    {
      name: "Gadgets",
      first: [5, 6],
      second: [2, 3],
    },
    {
      name: "Sorcellerie",
      first: [5, 6],
      second: [4],
    },
    {
      name: "Nullification",
      first: [5, 6],
      second: [5],
    },
    {
      name: "Serviteur",
      first: [5, 6],
      second: [6],
    },
  ],

  defense: [
    {
      name: "Absorption",
      first: [1, 2],
      second: [1, 2],
    },
    {
      name: "Adaptation",
      first: [1, 2],
      second: [3],
    },
    {
      name: "Champ de Force",
      first: [1, 2],
      second: [4, 5, 6],
    },
    {
      name: "Immortalité",
      first: [3, 4],
      second: [1],
    },
    {
      name: "Vitalité",
      first: [3, 4],
      second: [2, 3, 4],
    },
    {
      name: "Miroir",
      first: [3, 4],
      second: [5, 6],
    },
    {
      name: "Régénération",
      first: [5, 6],
      second: [1, 2],
    },
    {
      name: "Résistance",
      first: [5, 6],
      second: [3, , 4, 5, 6],
    },
  ],
  control_bis: [
    {
      name: "Rayon altérant (groupe)",
      first: [1, 2],
      second: [1, 2],
      page: 98,
    },
    {
      name: "Contrôle du Continuum (groupe)",
      first: [3, 4],
      second: [3, 4],
      page: 57,
    },
    {
      name: "Contrôle élémentaire (groupe)",
      first: [5, 6],
      second: [5, 6],
      page: 59,
    },
    {
      name: "Contrôle de l’énergie (groupe)",
      first: [3, 4],
      second: [1, 2],
      page: 46,
    },
    {
      name: "Guérison",
      first: [3],
      second: [3],
      page: 78,
    },
    {
      name: "Contrôle des machines",
      first: [4],
      second: [4],
      page: 50,
    },
    {
      name: "Contrôle de la matière (groupe)",
      first: [5, 6],
      second: [5, 6],
      page: 43,
    },
    {
      name: "Contrôle de pouvoir (groupe)",
      first: [5, 6],
      second: [1, 2],
      page: 47,
    },
    {
      name: "Serviteur",
      first: [3],
      second: [3],
      page: 101,
    },
    {
      name: "Contrôle des esprits",
      first: [4],
      second: [4],
      page: 49,
    },
    {
      name: "Arcanes (groupe)",
      first: [5, 6],
      second: [5, 6],
      page: 33,
    },
  ],
  defense_bis: [
    {
      name: "Absorption",
      first: [1, 2],
      second: [1, 2],
      page: 29,
    },
    {
      name: "Adaptation",
      first: [3],
      second: [3],
      page: 30,
    },
    {
      name: "Champ de force",
      first: [4, 5, 6],
      second: [4, 5, 6],
      page: 38,
    },
    {
      name: "Immortalité",
      first: [3, 4],
      second: [1],
      page: 81,
    },
    {
      name: "Vitalité",
      first: [2, 3, 4],
      second: [2, 3, 4],
      page: 110,
    },
    {
      name: "Miroir",
      first: [5, 6],
      second: [5, 6],
      page: 90,
    },
    {
      name: "Régénération",
      first: [5, 6],
      second: [1, 2],
      page: 99,
    },
    {
      name: "Résistance (groupe)",
      first: [3, 4, 5, 6],
      second: [3, 4, 5, 6],
      page: 100,
    },
  ],
  spirit: [
    {
      name: "Projection astrale",
      first: [1, 2, 3],
      second: [1],
    },
    {
      name: "Contrôle des rêves",
      first: [1, 2, 3],
      second: [2],
    },
    {
      name: "Contrôle des émotions",
      first: [1, 2, 3],
      second: [3, 4],
    },
    {
      name: "Illusion",
      first: [1, 2, 3],
      second: [5],
    },
    {
      name: "Images",
      first: [1, 2, 3],
      second: [6],
    },
    {
      name: "Décharge mentale",
      first: [4, 5, 6],
      second: [1, 2],
    },
    {
      name: "Domination",
      first: [4, 5, 6],
      second: [3],
    },
    {
      name: "Bouclier mental",
      first: [4, 5, 6],
      second: [4],
    },
    {
      name: "Télépathie",
      first: [4, 5, 6],
      second: [5, 6],
    },
  ],
  spirit_bis: [
    {
      name: "Projection astrale",
      first: [1, 2, 3],
      second: [1],
      page: 97,
    },
    {
      name: "Contrôle des rêves",
      first: [2],
      second: [2],
      page: 54,
    },
    {
      name: "Contrôle des émotions",
      first: [3, 4],
      second: [3, 4],
      page: 48,
    },
    {
      name: "Illusion ou Images",
      first: [5, 6],
      second: [5, 6],
      page: 79,
    },
    {
      name: "Décharge mentale",
      first: [4, 5, 6],
      second: [1, 2],
      page: 63,
    },
    {
      name: "Domination",
      first: [3],
      second: [3],
      page: 66,
    },
    {
      name: "Bouclier mental",
      first: [4],
      second: [4],
      page: 38,
    },
    {
      name: "Télépathie",
      first: [5, 6],
      second: [5, 6],
      page: 106,
    },
  ],
  movement: [
    {
      name: "Fouissage",

      first: [1, 2, 3],
      second: [1],
    },
    {
      name: "Voyage dimensionnel",

      first: [1, 2, 3],
      second: [2],
    },
    {
      name: "Vol",

      first: [1, 2, 3],
      second: [3, 4],
    },
    {
      name: "Bonds",

      first: [1, 2, 3],
      second: [5, 6],
    },
    {
      name: "Toupie",

      first: [4, 5, 6],
      second: [1],
    },
    {
      name: "Super-vitesse",

      first: [4, 5, 6],
      second: [2, 3],
    },
    {
      name: "Voltige",

      first: [4, 5, 6],
      second: [4],
    },
    {
      name: "Téléportation",

      first: [4, 5, 6],
      second: [5],
    },
    {
      name: "Accroches",
      first: [4, 5, 6],
      second: [6],
    },
  ],
  movement_bis: [
    {
      name: "Fouissage",
      first: [1, 2, 3],
      second: [1],
      page: 74,
    },
    {
      name: "Voyage dimensionnel",
      first: [2],
      second: [2],
      page: 112,
    },
    {
      name: "Vol",
      first: [3, 4],
      second: [3, 4],
      page: 111,
    },
    {
      name: "Bonds",
      first: [5, 6],
      second: [5, 6],
      page: 37,
    },
    {
      name: "Toupie",
      first: [4, 5, 6],
      second: [1],
      page: 108,
    },
    {
      name: "Super-vitesse",
      first: [2, 3],
      second: [2, 3],
      page: 105,
    },
    {
      name: "Voltige",
      first: [4],
      second: [4],
      page: 111,
    },
    {
      name: "Téléportation",
      first: [5],
      second: [5],
      page: 107,
    },
    {
      name: "Accroches",
      first: [6],
      second: [6],
      page: 29,
    },
  ],
  attack: [
    {
      name: "Affliction",
      first: [1, 2, 3],
      second: [1],
    },
    {
      name: "Immobilisation",
      first: [1, 2, 3],
      second: [2],
    },
    {
      name: "Décharge",
      first: [1, 2, 3],
      second: [3, 4],
    },
    {
      name: "Frappe",
      first: [1, 2, 3],
      second: [5, 6],
    },
    {
      name: "Aura",
      first: [4, 5, 6],
      second: [1],
    },
    {
      name: "Aveuglement",
      first: [4, 5, 6],
      second: [2, 3],
    },
    {
      name: "Drain de vie",
      first: [4, 5, 6],
      second: [4],
    },
    {
      name: "Attaque rapide",
      first: [4, 5, 6],
      second: [5],
    },
    {
      name: "Paralysie",
      first: [4, 5, 6],
      second: [6],
    },
  ],
  attack_bis: [
    {
      name: "Affliction",
      first: [1, 2, 3],
      second: [1],
      page: 30,
    },
    {
      name: "Aura",
      first: [2],
      second: [2],
      page: 36,
    },
    {
      name: "Immobilisation",
      first: [3],
      second: [2],
      page: 81,
    },
    {
      name: "Décharge",
      first: [4, 5],
      second: [3, 4],
      page: 63,
    },
    {
      name: "Corrosion",
      first: [6],
      second: [3, 4],
      page: 62,
    },
    {
      name: "Aveuglement",
      first: [4, 5, 6],
      second: [2, 3],
      page: 37,
    },
    {
      name: "Drain d’énergie",
      first: [2],
      second: [4],
      page: 68,
    },
    {
      name: "Attaque rapide",
      first: [3],
      second: [5],
      page: 34,
    },
    {
      name: "Frappe",
      first: [4, 5],
      second: [5, 6],
      page: 75,
    },
    {
      name: "Paralysie",
      first: [6],
      second: [6],
      page: 93,
    },
  ],
  perception: [
    {
      name: "Détection",
      first: [1, 2, 3],
      second: [1, 2],
    },
    {
      name: "Perception extrasensorielle",
      first: [1, 2, 3],
      second: [3],
    },
    {
      name: "Super-sens",
      first: [1, 2, 3],
      second: [4, 5, 6],
    },
    {
      name: "Sens du danger",
      first: [4, 5, 6],
      second: [1, 2],
    },
    {
      name: "Interface",
      first: [4, 5, 6],
      second: [3],
    },
    {
      name: "Post-cognition",
      first: [4, 5, 6],
      second: [4],
    },
    {
      name: "Précognition",
      first: [4, 5, 6],
      second: [5, 6],
    },
  ],
  perception_bis: [
    {
      name: "Sens du danger",
      first: [1, 2, 3],
      second: [1, 2],
      page: 100,
    },
    {
      name: "Détection (groupe)",
      first: [3, 4],
      second: [1, 2],
      page: 64,
    },
    {
      name: "Conscience environnementale",
      first: [5],
      second: [1, 2],
      page: 39,
    },
    {
      name: "Perception extrasensorielle",
      first: [6],
      second: [3],
      page: 94,
    },
    {
      name: "Interface",
      first: [4, 5, 6],
      second: [1, 2],
      page: 82,
    },
    {
      name: "Post-cognition",
      first: [2],
      second: [4],
      page: 95,
    },
    {
      name: "Précognition",
      first: [3],
      second: [5, 6],
      page: 96,
    },
    {
      name: "Super-sens (groupe)",
      first: [4, 5, 6],
      second: [4, 5, 6],
      page: 103,
    },
  ],
  origin: [
    {
      number: [2, 3, 4],
      name: "Entrainé",
      description:
        "le héros est un humain très talentueux ; tous ses  'pouvoirs' proviennent en réalité d'un entraînement supérieur ou d’équipements spécialisés (voir Accessoires dans le chapitre Pouvoirs). Le personnage gagne deux spécialités supplémentaires et peut choisir d’échanger un pouvoir contre deux spécialités de plus.",
    },

    {
      number: [5, 6],
      name: "Transformé",
      description:
        "le héros était un humain normal mais il est devenu surhumain à cause d’une influence extérieure, généralement un accident ou une expérience scientifique. Une capacité de votre choix (attribut ou pouvoir) est augmentée de +2, pour un maximum de 10.",
    },

    {
      number: [7],
      name: "Destiné",
      description:
        "le héros est né pour développer des pouvoirs surhumains. Il gagne, au choix, un pouvoir additionnel – qui doit être inné et pas un accessoire – ou un bonus de +2 au niveau de l’un des pouvoirs déjà tirés, pour un maximum de 10.",
    },
    ,
    {
      number: [8, 9],
      name: "Amélioré",
      description:
        "tous les pouvoirs du personnage proviennent d’objets ou d’appareils (voir Accessoires dans le chapitre Pouvoirs). L’un de ses attributs mentaux, au choix, est augmenté de +2, pour un maximum de 10.",
    },

    {
      number: [10],
      name: "Articifiel",
      description:
        "le personnage est un robot ou une autre chose construite, comme un golem. Sa Force est augmentée de +2 et vous pouvez prendre le pouvoir Vitalité gratuitement en plus des pouvoirs déjà tirés. Lancez sur la table de détermination pour connaitre le niveau de Vitalité ou renoncez à un pouvoir tiré et augmentez Vitalité à 10.",
    },
    ,
    {
      number: [11, 12],
      name: "Venu d'ailleurs",
      description:
        "le personnage est un être venu d’un autre monde, d’une autre dimension, comme un extra-terrestre, un élémentaire, un ange, un démon ou même un dieu. Augmentez deux capacités de votre choix (attribut ou pouvoir) de +2. Vous pouvez choisir à la place de tirer deux fois sur cette table, en ignorant tout nouveau 11 ou 12. Vous gagnez alors les effets des deux origines. Appliquez leurs modificateurs à la place de ceux de l’origine « Venu d’ailleurs ».",
    },
    ,
  ],

  specialities: [
    [
      "Combat aérien",
      "Art",
      "Athlétisme",
      "Athlétisme",
      "Affaires",
      "Conduite",
    ],
    [
      "Investigation",
      "Investigation",
      "Droit",
      "Commandement",
      "Commandement",
      "Linguistique",
    ],
    [
      "Arts Martiaux",
      "Arts Martiaux",
      "Médecine",
      "Résistance mentale",
      "Résistance mentale",
      "Entraînement militaire",
      "Entraînement militaire",
    ],
    ["Occultisme", "Spectacle", "Pilotage", "Pouvoir", "Pouvoir", "Pouvoir"],
    [
      "Psychiatrie",
      "Science",
      "Science",
      "Prestidigitation",
      "Discrétion",
      "Discrétion",
    ],
    [
      "Technologie",
      "Technologie",
      "Combat sous-marin",
      "Armes",
      "Armes",
      "Lutte",
    ],
  ],
};
