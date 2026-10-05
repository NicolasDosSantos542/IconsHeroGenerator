let pouvoirs = {
  list: [
    {
      name: "Absorption",
      category: "Défense",
      page: 30,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez absorber un type particulier d’attaque, comme Impacter ou un type d’énergie (voir Contrôle de l’énergie pour des exemples) que vous devez choisir lors de l’acquisition de ce pouvoir. Vous pourriez donc avoir Absorption d’Impact, Absorption de feu ou des radiations et ainsi de suite… Soustrayez votre niveau d’Absorption au niveau de l’attaque. Si celle-ci est réduite à 0 ou moins, elle n’a aucun effet sur vous. Tout niveau restant vous affecte normalement et vous pouvez appliquer toute Résistance dont vous disposez à ces dégâts résiduels (voir Résistance, page 100). Une fois absorbée, vous pouvez employer l’énergie captée. Choisissez l’un des effets suivants pour utiliser l’énergie absorbée : Augmentation de capacité, Décharge ou Guérison. Vous pouvez acquérir les autres en tant qu’extras.",
      extras: [
        { name: "Augmentation de capacité", value: "sur la case suivant l’absorption d’énergie, en réaction, vous pouvez utiliser l’énergie absorbée sous la forme d’une Augmentation de capacité, avec un niveau égal aux dégâts absorbés. La capacité concernée doit être choisie à l’acquisition de ce pouvoir, et toute autre capacité concernée compte comme un extra séparé." },
        { name: "Décharge", value: "sur la case suivant l’absorption d’énergie, vous pouvez relâcher celle-ci sous la forme d’une Décharge avec un niveau égal aux dégâts absorbés." },
        { name: "Guérison", value: "vous récupérez immédiatement, sous forme de réaction, un nombre de points d’Endurance égal au niveau de dégâts absorbé, jusqu’à concurrence de votre Endurance maximum. Pour le coût d’un second extra, vous pouvez gagner de l’Endurance au-delà de ce maximum, jusqu’à deux fois celui-ci." },
        { name: "Large", value: "votre absorption vous protège contre tout type de dégâts physiques ou énergétiques, plutôt que contre un type spécifique de dommages." },
      ],
      limites: [],
    },
    {
      name: "Accroches",
      category: "Mouvement",
      page: 30,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez vous déplacer normalement sur les surfaces verticales ou inversées, murs et plafonds par exemple. Le Meneur de Jeu peut exiger un test de pouvoir quand vous tentez de vous déplacer sur une surface particulièrement visqueuse ou lisse, avec une Difficulté dépendant de cette surface.",
      extras: [],
      limites: [],
    },
    {
      name: "Acide",
      category: null,
      page: 30,
      kind: "variant",
      variantOf: "Corrosion",
      value: "Vous êtes capables d’exsuder ou de projeter une substance corrosive qui inflige des dégâts. Reportez-vous au pouvoir Corrosion, page 62. L’acide exsude de vos mains ou vous pouvez avoir un crachat acide. Si l’acide est exsudé par vos pores (ou votre corps tout entier), affectant tout ce qui peut vous toucher, reportez-vous au pouvoir Aura (page 36).",
      extras: [],
      limites: [],
    },
    {
      name: "Adaptation",
      category: "Défense",
      page: 30,
      kind: "power",
      variantOf: null,
      value: "Vous êtes capables de vous transformer pour vous adapter à des environnements hostiles. Après une planche de préparation, vos traits physiques – votre apparence, votre peau, votre capacité pulmonaire – et votre résistance aux dégâts naturels changent. Vous pouvez par exemple augmenter votre Force pour supporter la forte gravité d’un monde extraterrestre ou bénéficier du pouvoir Vitalité pour être capable de respirer du méthane. Ce pouvoir s’adapte aux conditions, pas aux menaces : vous ne pouvez pas voir des ailes pousser si on vous jette du haut d’une falaise, mais vous pouvez développer des ouïes et devenir Amphibie lorsque vous êtes plongés dans l’eau. De la même façon, vous ne gagnez aucune résistance aux attaques, mais vous pouvez gagner une Résistance à la chaleur dans le domaine des Hommes de Lave. Les bénéfices maximums sont limités au niveau du Pouvoir et durent aussi longtemps que votre exposition à cet environnement. Le MJ a le dernier mot pour décider comment vous vous adaptez – et quels pouvoirs vous obtenez – pour survivre à un environnement, ainsi que pour déterminer quelles conditions ou menaces sont affectées par votre pouvoir.",
      extras: [
        { name: "Pouvoirs", value: "Sens du danger, Régénération, Résistance." },
        { name: "Standard", value: "Affecte les autres." },
        { name: "Défensif", value: "Un test d’Adaptation contre le niveau d’une menace vous permet de vous adapter à une menace (comme une attaque) plutôt qu’à une condition. Une planche de préparation est toujours nécessaire sauf si vous disposez de l’extra Instantané. De telles adaptations volontaires durent pour tout un chapitre, sauf si vous décidez de vous adapter à un danger différent ou jusqu’à ce que vous soyez incapable de vous concentrer." },
        { name: "Instantané", value: "votre corps s’adapte sous la forme d’une réaction, sans avoir besoin de préparation, ce qui signifie que vous pouvez même vous adapter à de multiples conditions successives sur une seule planche." },
      ],
      limites: [
        { name: "Standard", value: "Exclusif, Temporaire." },
        { name: "Seulement dans l’environnement X", value: "votre Adaptation ne fonctionne que dans un environnement hostile donné, plutôt que dans tous. Par exemple : aquatique, extraterrestre (autres planètes), vide, souterrain, terrestre (environnements trouvés à la surface de la terre), pour n’en citer que quelques-uns…" },
      ],
    },
    {
      name: "Affliction",
      category: "Attaque",
      page: 30,
      kind: "power",
      variantOf: null,
      value: "Vous êtes la cause d’une Affliction à développement rapide, fonctionnant comme une maladie ou une toxine, en touchant une cible. Effectuez un test de Vaillance pour toucher votre cible, puis un test d’Affliction contre une Difficulté égale au plus élevé de la Force ou de la Régénération de la victime. • Un échec massif ou majeur n’entraîne aucun effet et met fin à tout effet continu d’Affliction. • Un échec modéré n’entraîne aucun effet sur cette planche, mais l’Affliction se poursuit et un nouveau test est requis à la planche suivante, au début de votre case. • Un succès marginal réduit l’Endurance de la moitié du niveau d’Affliction, ignorant la Résistance aux dégâts. L’Affliction se poursuit et un nouveau test est requis à la planche suivante, au début de votre case. • Un succès modéré, majeur ou massif réduit l’Endurance du niveau d’Affliction, ignorant la Résistance aux dégâts. L’Affliction se poursuit et un nouveau test est requis à la planche suivante, au début de votre case. Vous décidez ce que votre Affliction entraîne lorsque l’Endurance de votre victime est réduite à 0 : reste-t-elle inconsciente (comme sur un succès majeur d’Etourdir) ou commence-telle à perdre de la Force (comme sur un succès majeur de Tuer) ?",
      extras: [
        { name: "Pouvoirs", value: "Drain d’énergie." },
        { name: "Standard", value: "A Distance, Contagieux, Récupération lente, Réversible, Salve." },
        { name: "Aura", value: "Vous pouvez affliger toute personne vous touchant, sous la forme d’une réaction, en plus d’affecter ceux que vous touchez." },
        { name: "Influence", value: "Plutôt que d’infliger des pertes d’Endurance, votre Affliction peut exercer une Domination sur votre cible, au même niveau." },
        { name: "Transformation", value: "une fois l’Endurance de votre cible ramenée à 0, votre Affliction l’affecte comme le pouvoir Métamorphose (page 85)." },
        { name: "Vieillissement", value: "vous êtes capable d’accélérer ou d’inverser le processus de vieillissement. Cela ajoute ou soustrait un nombre d’années à l’âge de la victime égal au niveau du pouvoir par degré de succès. Au prix d’un second extra, vous pouvez accélérer et inverser le vieillissement." },
      ],
      limites: [
        { name: "Standard", value: "Constant, Dégradation." },
        { name: "Effet lent", value: "Votre Affliction ne prend pas effet immédiatement. Elle affecte votre cible plus tard dans le même chapitre, puis une fois par chapitre suivant plutôt qu’à chaque planche suivante. En cela, elle se rapproche d’un empoisonnement lent ou d’une maladie naturelle." },
      ],
    },
    {
      name: "Ailes",
      category: null,
      page: 31,
      kind: "variant",
      variantOf: "Membres additionnels",
      value: "Vous disposez d’ailes fonctionnelles, vous permettant de voler. Voyez les pouvoirs Membres additionnels (page 84) et Vol (page 111) pour plus de détails.",
      extras: [],
      limites: [],
    },
    {
      name: "Alter-ego",
      category: "Altération",
      page: 32,
      kind: "power",
      variantOf: null,
      value: "Votre personnage peut se transformer en une toute autre personne ! Créez un second personnage, qui sera votre alter-ego. Le nouveau personnage possède automatiquement un pouvoir de moins (pour contrebalancer celuici). Le Meneur de Jeu peut exiger que certaines capacités, notamment l’origine ou les capacités mentales, restent cohérentes entre les deux personnages, mais cela n’est pas obligatoire. Vous transformer en votre alter-ego prend une planche de préparation, pendant laquelle vous ne pouvez faire rien d’autre. Identité normale Si votre héros possède simplement une identité « humaine » sans pouvoir, il s’agit plutôt d’un aspect que d’une itération de ce pouvoir. Alter-egos en série Si vous tirez ce pouvoir, vous pouvez choisir l’option suivante : cessez de jeter les dés et effacez tout autre pouvoir. A leur place, vous pouvez assumer une série d’alter-égos surhumains ! Vous pouvez soit disposer d’un nombre d’alter-egos égal au nombre de pouvoirs initialement tirés (minimum 3) ou une série illimitée de formes surhumaines aléatoires (générez aléatoirement un nouveau personnage pour chaque identité ainsi assumée). Dans les deux cas, vous transformer en l’un de vos alterego prend une planche de préparation, mais vous devez ensuite revenir à votre forme normale pendant un temps équivalent à celui passé sous votre (ou vos) forme surhumaine…",
      extras: [
        { name: "Instantané", value: "vous n’avez pas besoin d’une planche de préparation pour assumer votre alter-ego, vous pouvez le faire instantanément pendant votre case." },
        { name: "Sans intervalle", value: "vous n’avez pas besoin de revenir à votre forme normale entre vos formes d’alter-ego en série." },
      ],
      limites: [],
    },
    {
      name: "Amphibie",
      category: "Altération",
      page: 32,
      kind: "power",
      variantOf: null,
      value: "Les personnages amphibies peuvent vivre aussi bien sous l’eau que sur terre. Sous l’eau, vous respirez normalement et, une fois immergé, votre Coordination et votre Éveil sont égaux au plus élevé de leur niveau d’origine +1 ou du niveau de votre pouvoir. Vous pouvez nager à une vitesse égale à la moitié (arrondie au supérieur) du niveau de votre pouvoir. Reportez-vous à la Table des Références pour avoir une idée de votre vitesse : 3 vous permet d’égaler la vitesse d’un dauphin, 5 d’être aussi rapide qu’un submersible et 7 qu’une torpille. Au-delà, vous êtes plus rapide qu’aucun véhicule ou créature aquatique connu.",
      extras: [
        { name: "Pouvoirs", value: "Bonds (seulement lorsque vous bondissez hors de l’eau), Résistance (gaz, pression, eau), Serviteur (limité aux créatures aquatiques)." },
        { name: "Accroissement", value: "votre pouvoir amphibie augmente votre Vaillance et votre Force lorsque vous êtes immergé, les portant au plus élevé de leur niveau d’origine +1 ou du niveau de votre pouvoir." },
      ],
      limites: [
        { name: "Un type seulement", value: "vous disposez soit de l’adaptation aquatique (la capacité à respirer sous l’eau et à substituer le niveau de votre pouvoir Amphibie à votre Coordination et votre Eveil), soit de la vitesse de nage, mais pas des deux." },
        { name: "Lié à l’eau", value: "vous ne pouvez pas respirer d’air, et souffrez d’épuisement lorsque vous êtes hors de votre élément (voir Epuisement dans le chapitre Action d’ICONS)." },
      ],
    },
    {
      name: "Animation",
      category: null,
      page: 33,
      kind: "variant",
      variantOf: "Serviteur",
      value: "Vous pouvez donner vie à des objets inanimés ou à des images. Reportez-vous à la description du pouvoir Serviteur (page 101), sans doute avec la limite Source si vous êtes limités à n’animer que les objets disponibles autour de vous.",
      extras: [],
      limites: [],
    },
    {
      name: "Animation suspendue",
      category: null,
      page: 33,
      kind: "variant",
      variantOf: "Contrôle temporel",
      value: "Reportez-vous à l’extra Suspension du pouvoir Contrôle temporel, page 60, avec possiblement les limites Seulement sur soi et Extra seulement.",
      extras: [],
      limites: [],
    },
    {
      name: "Arcanes",
      category: "Contrôle",
      page: 33,
      kind: "group",
      variantOf: null,
      value: "Vous êtes capables de dupliquer un large éventail de pouvoirs en utilisant une source comme la magie, la technologie ou le pouvoir cosmique. Reportez-vous aux pouvoirs Gadgets, Sorcellerie et Pouvoir cosmique. Choisissez ou lancez un d6 sur la table suivante pour déterminer le type d’Arcanes que vous maitrisez. 1D6 Pouvoir 1-2 Pouvoir cosmique 3-4 Gadgets 5-6 Sorcellerie",
      table: {
        "dice": "1d6",
        "label": "Pouvoir",
        "entries": [
          {
            "name": "Pouvoir cosmique",
            "roll": [
              1,
              2
            ]
          },
          {
            "name": "Gadgets",
            "roll": [
              3,
              4
            ]
          },
          {
            "name": "Sorcellerie",
            "roll": [
              5,
              6
            ]
          }
        ]
      },
      extras: [],
      limites: [],
    },
    {
      name: "Arme",
      category: null,
      page: 34,
      kind: "variant",
      variantOf: "Gadgets",
      value: "Vous possédez une arme spéciale. Voyez les pouvoirs Décharge et Frappe, ainsi que la section Accessoires offensifs dans le chapitre Accessoires. Si vous pouvez créer ou invoquer de multiples armes différentes, reportez-vous au pouvoir Gadgets, page 75, avec possiblement la limite Seulement des armes.",
      extras: [],
      limites: [],
    },
    {
      name: "Armure",
      category: null,
      page: 34,
      kind: "variant",
      variantOf: "Résistance",
      value: "Pour les armures naturelles, reportez-vous au pouvoir Résistance, et plus spécifiquement Résistance aux dégâts (page 100). Pour des armures portées, comme les armures de combat, voyez plutôt Accessoires de Défense dans le chapitre Accessoires. Votre armure peut ressembler à ce que vous voulez, qu’il s’agisse d’une carapace rocheuse, de cuir ou d’écailles, d’une armure médiévale ou high-tech ou même d’une peau ordinaire ou de vêtements banals.",
      extras: [],
      limites: [],
    },
    {
      name: "Attaque rapide",
      category: "Attaque",
      page: 34,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez attaquer plusieurs fois par case, en divisant votre niveau d’Attaque rapide en tests d’attaque supplémentaires. Effectuez d’abord votre attaque normalement. Puis, vous pouvez attaquer à nouveau. Pour savoir combien de fois, fractionnez votre niveau de pouvoir Attaque rapide en une série de tests supplémentaires, dont le nombre est limité par le niveau de la capacité d’attaque. Si vous utilisez vos attaques additionnelles contre le même opposant, sur la même planche, traitez ce cas comme un effort combiné (voir Effort combiné dans Les bases). Exemple : un héros a une Vaillance de 4 et le pouvoir Attaque rapide à 8. Il peut faire trois attaques de niveau 4 : une avec sa Vaillance normale, et deux de plus avec son Attaque rapide, en divisant le niveau 8 d’Attaque rapide en deux attaques de niveau 4 (le niveau de Vaillance du héros). S’il avait eu une Attaque rapide de niveau 6, il aurait pu également faire deux attaques supplémentaires : l’une à 4 et l’autre à 2. Avec une Attaque rapide à 10, il aurait fait trois attaques supplémentaires : deux de niveau 4 et une de niveau 2.",
      extras: [],
      limites: [],
    },
    {
      name: "Augmentation de capacité",
      category: "Altération",
      page: 34,
      kind: "group",
      variantOf: null,
      value: "Vous pouvez augmenter le niveau d’une capacité choisie lors de l’acquisition de ce pouvoir. Cela en fait donc un groupe de six pouvoirs, un par attribut : Augmentation de Vaillance, de Coordination, de Force et ainsi de suite. Choisissez un attribut ou lancez un dé sur la table suivante : 1d6 Capacité 1 Vaillance 2 Coordination 3 Force 4 Intellect 5 Eveil 6 Volonté La capacité est augmentée jusqu’au niveau d’Augmentation de capacité, pendant un nombre de planches lui aussi égal au niveau du pouvoir. Puis, la capacité affectée voit son niveau initial réduit de 1 pendant le même laps de temps, pendant qu’elle « récupère ». Exemple : Une Augmentation de Force de niveau 8 élève votre Force au niveau 8 pendant 8 planches, puis le niveau de votre Force baisse à son niveau normal moins 1, pendant 8 planches, le temps de récupérer. Si, grâce à l’extra Augmentation de pouvoir, le héros augmente une capacité qui a un niveau 0 (comme un pouvoir que le personnage ne possède pas ordinairement), il retombe à 0 pendant le délai de récupération, le rendant inutilisable pendant ce temps. Lorsque vous tirez sur la table de détermination pour obtenir le niveau de ce pouvoir, tout résultat égal ou inférieur à votre niveau normal dans cette capacité est à ignorer : relancez jusqu’à obtenir un niveau supérieur. Les capacités de niveau 10 ne peuvent pas être augmentées : choisissez une autre capacité ou relancez le dé. Augmentation de capacité ne compte comme un pouvoir, pour déterminer la Ténacité, que si son niveau est de 7 ou supérieur.",
      table: {
        "dice": "1d6",
        "label": "Capacité",
        "entries": [
          {
            "name": "Vaillance",
            "roll": [
              1
            ]
          },
          {
            "name": "Coordination",
            "roll": [
              2
            ]
          },
          {
            "name": "Force",
            "roll": [
              3
            ]
          },
          {
            "name": "Intellect",
            "roll": [
              4
            ]
          },
          {
            "name": "Éveil",
            "roll": [
              5
            ]
          },
          {
            "name": "Volonté",
            "roll": [
              6
            ]
          }
        ]
      },
      extras: [
        { name: "Standard", value: "Affecte les autres, À distance." },
        { name: "Augmentation de pouvoir", value: "vous pouvez augmenter des pouvoirs d’une source ou d’un type particulier, comme des pouvoirs mutants ou magiques, plutôt que des attributs. Cela fonctionne de la même manière." },
        { name: "Double augmentation", value: "vous pouvez augmenter deux capacités en même temps, en utilisant les mêmes règles que pour en augmenter une seule. Pour chaque choix de cet extra, vous pouvez augmenter une capacité additionnelle." },
        { name: "Etendu", value: "votre augmentation dure tant que vous vous concentrez mais, dès que votre concentration se relâche, l’augmentation s’arrête et vous ne pouvez plus utiliser votre pouvoir pendant une durée égale à votre niveau." },
      ],
      limites: [
        { name: "Standard", value: "Dégradation, Exclusif, Extra seulement, Préparation, Seulement sur les autres, Source, Fatigant." },
        { name: "Situationnel (lien émotionnel)", value: "vous devez ressentir une émotion particulière (amour, haine, peur…), souvent connectée à l’un de vos aspects, pour pouvoir utiliser votre Augmentation de capacité." },
      ],
    },
    {
      name: "Augmentation de pouvoir",
      category: "Contrôle",
      page: 36,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle de pouvoir",
      value: "Vous pouvez élever le niveau des pouvoirs d’une autre personne en la touchant. Le sujet gagne un nombre de niveaux à un pouvoir donné, et vous perdez le même niveau dans votre pouvoir d’Augmentation. Lorsque vous cessez de vous concentrer, les niveaux ainsi échangés reviennent à la normale. Les pouvoirs ne peuvent être élevés au-dessus de 10 et vous ne pouvez réduire votre pouvoir d’Augmentation en dessous de 0. Si les niveaux transférés excédent la Volonté de la cible, faites-lui faire un test de Volonté avec le niveau transféré en guise de Difficulté. En cas d’échec, le pouvoir affecté souffre d’une limite choisie le Meneur de Jeu. Instable est un choix commun.",
      extras: [
        { name: "Standard", value: "A distance, Salve." },
        { name: "Pouvoirs", value: "Octroi de pouvoir." },
        { name: "Etendu", value: "vos augmentations de pouvoir durent aussi longtemps que vous le souhaitez. Les niveaux transférés reviennent à la normale lorsque vous le décidez ou que lorsque le temps que vous avez décidé d’allouer est écoulé." },
      ],
      limites: [
        { name: "Un seul type", value: "vous ne pouvez augmenter qu’un seul type de pouvoir, comme par exemples les pouvoirs d’esprit ou les pouvoirs mutants." },
        { name: "Instable", value: "les pouvoirs que vous augmentez acquièrent toujours la limite Instable, tant qu’ils sont augmentés, quelle que soit la Volonté de la cible." },
      ],
    },
    {
      name: "Aura",
      category: "Attaque",
      page: 36,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez vous entourer d’un effet capable d’infliger des dégâts, comme une éruption de feu ou d’énergie, des épines acérées, de l’acide qui suinte… Choisissez l’effet de votre Aura quand vous gagnez ce pouvoir. Tout ce qui vous touche souffre de dégâts égaux à votre niveau de pouvoir, y compris toute personne vous attaquant à mains nues (s’ils brandissent une arme de contact, c’est celle-ci qui est affectée). Si vous touchez délibérément vos adversaires, ils subissent des dégâts égaux à votre Aura. Si vous frappez un adversaire, il subit les dégâts de votre Aura comme effet secondaire des dégâts infligés par votre Force (voir Effet secondaire sous Extras standards).",
      extras: [
        { name: "Pouvoirs", value: "Contrôle de l’énergie (du même type que l’Aura), Décharge, Résistance (aux effets de l’Aura), Vitalité." },
        { name: "Standard", value: "Contagieux." },
        { name: "Partiel", value: "vous êtes capable de contrôler quelle partie de votre corps est couverte par votre Aura. Vous pouvez par exemple ne pas en couvrir vos mains, vous permettant de manipuler des objets tout en gardant votre Aura active sur le reste de votre corps." },
        { name: "Variable", value: "votre Aura peut alterner entre différentes formes d’énergie. Voir le pouvoir Contrôle de l’énergie pour des exemples." },
      ],
      limites: [
        { name: "Standard", value: "Constant." },
      ],
    },
    {
      name: "Aveuglement",
      category: "Attaque",
      page: 37,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez projeter, jusqu’à portée étendue, un effet qui submerge temporairement les sens de votre cible : il peut s’agir d’un flash aveuglant, d’un son assourdissant, d’un produit chimique, d’une flaque de boue ou tout autre chose similaire. Choisissez un sens affecté par votre pouvoir lorsque vous recevez celui-ci. Plutôt qu’un sens « normal », vous pouvez choisir que votre Aveuglement affecte un pouvoir de Perception, comme Sens du danger ou Détection. Effectuez un test de Coordination contre la Coordination d’une cible à portée : avec un succès mineur, vous aveuglez la cible pour une planche ; avec un succès majeur, vous aveuglez la cible pendant une planche par niveau de pouvoir ; avec un succès massif, votre cible est affectée pendant le chapitre tout entier. Les personnages aveuglés ont une difficulté accrue de +2 pour toute action basée sur le sens affecté et échouent automatiquement à tout test d’Eveil y recourant. Utiliser un avantage pour récupérer permet de se débarrasser immédiatement de l’aveuglement.",
      extras: [
        { name: "Standard", value: "Contagieux, Salve." },
        { name: "Pouvoirs", value: "Résistance (à l’aveuglement)." },
        { name: "Sens supplémentaire", value: "votre pouvoir affecte deux sens à la fois, plutôt qu’un seul, par exemple en aveuglant et en assourdissant." },
      ],
      limites: [],
    },
    {
      name: "Bonds",
      category: "Mouvement",
      page: 37,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez sauter sur de longues distances, d’un pâté de maisons au niveau 1 jusqu’à des kilomètres au niveau 10. Bonds 1 à 2 vous permet de couvrir la distance de niveau 3 sur la Table des Références du livre de base d’ICONS et pour chaque tranche de deux niveaux additionnels en Bonds, vous augmentez la distance parcourue d’un cran sur la table. Ainsi, Bonds 5 vous permet de couvrir dix pâtés de maisons (ou un grand immeuble) en une seule enjambée ! Vous ne souffrez d’aucun dégât lié à un bond délibéré, mais vous êtes affecté normalement par les autres chutes. À la discrétion du MJ, un test réussi de Force (plus Athlétisme) contre la distance de la chute vous permet d’éviter tout dégâts jusqu’à concurrence de votre niveau de pouvoir Bonds.",
      extras: [],
      limites: [],
    },
    {
      name: "Bouclier",
      category: null,
      page: 38,
      kind: "variant",
      variantOf: null,
      value: "Un bouclier est un accessoire défensif donnant le pouvoir Résistance aux dégâts ; reportez-vous à la section Accessoires défensifs dans le chapitre Accessoires pour plus de détails.",
      extras: [],
      limites: [],
    },
    {
      name: "Bouclier mental",
      category: "Esprit",
      page: 38,
      kind: "power",
      variantOf: null,
      value: "Ce pouvoir vous protège des influences extérieures. C’est une variante de Résistance définie en tant que pouvoir d’esprit plutôt que défensif. Voir le pouvoir Résistance pour plus de détails.",
      extras: [
        { name: "Standard", value: "Affecte les autres, Salve." },
        { name: "Piège mental", value: "toute personne « touchant » votre esprit avec un pouvoir mental est attaqué par une Décharge mentale égale à votre niveau de Bouclier mental." },
      ],
      limites: [],
    },
    {
      name: "Champ de force",
      category: "Défense",
      page: 38,
      kind: "power",
      variantOf: null,
      value: "Vous avez la capacité de générer une barrière énergétique personnelle qui agit comme une Résistance aux dégâts égale à votre niveau de pouvoir, maintenue tant que vous vous concentrez. De plus, lorsqu’un adversaire doit vous toucher pour que son pouvoir puisse prendre effet, vous pouvez vous défendre avec le niveau de votre Champ de force, s’il est plus élevé que la capacité normalement opposée à l’attaque. Par exemple, un héros avec une Force de 3 et un Champ de Force de 6 résistera à une Affliction avec le niveau 6 de son Champ de Force, plutôt que le niveau 3 de sa Force.",
      extras: [],
      limites: [],
    },
    {
      name: "Change-forme",
      category: null,
      page: 38,
      kind: "variant",
      variantOf: "Métamorphose",
      value: "Vous pouvez vous transformer en différentes formes. Voyez le pouvoir Métamorphose (page 85). Le complet change-forme doit avoir Mé tamorphos e avec deux fois l’extra Catégorie supplémentaire, afin de pouvoir assumer les trois types de formes : objets, animaux et humanoïdes.",
      extras: [],
      limites: [],
    },
    {
      name: "Cheveux préhensiles",
      category: null,
      page: 39,
      kind: "variant",
      variantOf: "Membres additionnels",
      value: "Vous avez de longs cheveux que vous pouvez animer et contrôler. Reportez-vous au pouvoir Membres additionnels, page 84, et plus spécifiquement aux tentacules.",
      extras: [],
      limites: [],
    },
    {
      name: "Chi",
      category: null,
      page: 39,
      kind: "variant",
      variantOf: "Augmentation de capacité",
      value: "Vous êtes capable de concentrer votre Chi ou votre force de vie (parfois appelée Ki ou Prana) afin d’augmenter une ou plusieurs de vos capacités. Reportez-vous au pouvoir Augmentation de capacité (page 34), en y ajoutant éventuellement les limites Préparation et Fatigant. Le Chi peut aussi inclure des extras comme Décharge, Guérison, Résistance ou Frappe.",
      extras: [],
      limites: [],
    },
    {
      name: "Compagnon animal",
      category: null,
      page: 39,
      kind: "variant",
      variantOf: "Serviteur",
      value: "Reportez-vous au pouvoir Serviteur (page 101). Un compagnon animal peut aussi être géré comme un aspect : sans avoir lui-même de traits, il peut être activé pour prodiguer au personnage des bonus dans les bonnes circonstances, il peut être utilisé comme une complication s’il est menacé ou causer d’autres problèmes au personnage.",
      extras: [],
      limites: [],
    },
    {
      name: "Conscience cosmique",
      category: null,
      page: 39,
      kind: "variant",
      variantOf: "Détection",
      value: "Voir Détection cosmique sous le pouvoir Détection (page 64).",
      extras: [],
      limites: [],
    },
    {
      name: "Conscience environnementale",
      category: "Perception",
      page: 39,
      kind: "power",
      variantOf: null,
      value: "Vous êtes « en harmonie » avec votre environnement, vous permettant de ressentir des choses comme le climat, le mouvement, la présence (ou l’absence) de vie, la contamination chimique et ainsi de suite, à portée visuelle. A chaque session de jeu, et avec un Test de Conscience environnementale de Difficulté 5 réussi, vous pouvez demander au Meneur de Jeu une question fermée (appelant une réponse par oui ou non) à propos de votre environnement. Vous pouvez de plus recourir à un avantage pour avoir de l’intuition par rapport à votre environnement. Extra • Pouvoirs : Contrôle de l’eau, Contrôle des plantes, Domination (Contrôle des animaux uniquement), Postcognition (environnement seulement), Précognition (environnement seulement).",
      extras: [],
      limites: [
        { name: "Localisation spécifique", value: "votre Conscience environnementale ne fonctionne que dans un endroit particulier ou un type de terrain (un pays précis, seulement en forêt, seulement en ville…)." },
        { name: "Symbiose", value: "votre santé et votre bien-être sont liés à votre environnement. Les dégâts frappant cet environnement vous causent de la douleur, comme si vous étiez sujet à un résultat d’étourdissement du même niveau." },
      ],
    },
    {
      name: "Contrôle animal",
      category: null,
      page: 40,
      kind: "variant",
      variantOf: "Domination",
      value: "Reportez-vous à la limite Contrôle animal du pouvoir Domination (page 66). Les contrôleurs d’animaux ont souvent les extras Salve ou Lien mental pour compenser cette limite. Ils peuvent aussi avoir en plus la limite « un type seulement », les limitant au contrôle d’un type spécifique d’animaux.",
      extras: [],
      limites: [],
    },
    {
      name: "Contrôle de la chance",
      category: null,
      page: 40,
      kind: "variant",
      variantOf: "Contrôle des probabilités",
      value: "Pour le pouvoir permettant d’influencer la chance, qu’il s’agisse de la vôtre ou de celle de quelqu’un d’autre, reportez-vous au pouvoir Contrôle des probabilités, page 52.",
      extras: [],
      limites: [],
    },
    {
      name: "Contrôle de la force",
      category: "Contrôle",
      page: 40,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle de l'énergie",
      value: "Vous pouvez générer et contrôler une force qui vous prodigue une Résistance aux dégâts égale à votre pouvoir tant que vous vous concentrez.",
      extras: [
        { name: "Pouvoirs", value: "Affliction (suffocation, à distance), Décharge (force), Frappe (force)" },
        { name: "Bulle de force", value: "avec une planche de préparation, vous pouvez créer une bulle de force à l’intérieur d’une petite ouverture avant de l’étendre et d’infliger des dégâts égaux à votre niveau de pouvoir, qui ignorent l’armure." },
        { name: "Champ élargi", value: "vous pouvez projeter votre champ de force autour de toute personne (ou objet) à portée visuelle, comme avec champ étendu, même si vous n’êtes pas à l’intérieur du champ." },
        { name: "Champ étendu", value: "vous pouvez faire gonfler votre champ de force, autour de vous, à portée étendue. Toute personne à l’intérieur du champ gagne le bénéfice de sa protection, mais vous et les personnes ainsi protégées ne peuvent pas esquiver les attaques venant de l’extérieur." },
        { name: "Constructs de Force", value: "vous pouvez créer des constructs de force, des formes géométriques (sphères, cubes…), marteaux, mains, boules hérissées de pointes et ainsi de suite. Les objets ont une Solidité (et d’autres capacités si cela est approprié) égale à votre pouvoir." },
        { name: "Coussin de force", value: "vous pouvez former des coussins de force suffisamment résilients pour absorber des dégâts égaux à votre niveau de pouvoir, en cas de chute ou de crash, pour toutes les personnes atterrissant dessus." },
        { name: "Filtre", value: "vous pouvez « harmoniser » votre champ de force afin qu’il permette certaines choses de le traverser tout en arrêtant les autres." },
        { name: "Invisible", value: "la force que vous contrôlez est invisible, bien que les effets de son utilisation puissent être vus." },
        { name: "Stockage d’énergie", value: "si vous vous défendez avec succès contre une attaque d’énergie, vous pouvez la capturer et la stocker dans une bulle de force, avant de la relâcher sur la prochaine planche (ou plus tard si vous restez concentré), dans la même direction que celle qu’elle suivait originellement." },
        { name: "Vol de force", value: "vous gagnez Vol à niveau 1 grâce à un pont ou une colonne de force." },
      ],
      limites: [],
    },
    {
      name: "Contrôle de la friction",
      category: "Contrôle",
      page: 41,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle du continuum",
      value: "Vous pouvez contrôler la friction entre les objets, rendant le contact entre eux soit plus collant, soit plus glissant. Vous pouvez changer la friction de toute zone à portée de vue, augmentant ou réduisant la Difficulté pour y grimper du niveau de votre pouvoir. Vous pouvez aussi créer une zone dérapante qui force toute personne y évoluant à faire un test de Coordination contre votre Contrôle de la friction afin d’éviter de tomber comme si elle avait subi un effet de projection modéré.",
      extras: [
        { name: "Pouvoirs", value: "Accroches, Aveuglement (à distance, en collant les paupières d’une personne), Contrôle du feu (Contrôle de la chaleur seulement, en contrôlant la chaleur de friction), Immobilisation (seulement pour coller des gens aux surfaces), Résistance (à la friction, à l’immobilisation)." },
        { name: "Blocage", value: "vous pouvez désactiver toute machine dotée de pièces mouvantes à portée étendue, avec un test de Contrôle de la friction, en bloquant ces parties mouvantes. La Difficulté est de 3 ou plus, choisie par le Meneur de jeu selon la possibilité à visualiser l’intérieur de la machine. Cela marche comme une Affliction à distance contre les machines intelligentes." },
      ],
      limites: [],
    },
    {
      name: "Contrôle de la gravité",
      category: "Contrôle",
      page: 42,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle du continuum",
      value: "Vous contrôlez la force de la gravité à portée étendue, et vous pouvez donc l’augmenter ou l’affaiblir à concurrence du niveau de votre pouvoir. La gravité normale de la Terre (1G) est le niveau 0. Si vous réduisez le niveau de gravité jusqu’à -5, tous les individus affectés gagnent le pouvoirs Bonds à niveau 1. Si vous la réduisez en dessous de -5, toutes les personnes à portée étendue gagnent le pouvoir Vol à niveau 1. Si vous augmentez la force de la gravité, une personne – ou toutes les personnes – à portée étendue doit ajouter le niveau de gravité à la Difficulté de tout test de Coordination et de Force. Les pouvoirs dépendant de la gravité (Voltige par exemple) souffrent de la même pénalité.",
      extras: [
        { name: "Pouvoirs", value: "Champ de force, Décharge, Super-sens (sens spatial, gravimétrique), Télékinésie, Vol." },
        { name: "Augmentation de Force", value: "lorsque vous soulevez ou lancez quelque chose, vous pouvez augmenter votre Force jusqu’au niveau de votre pouvoir de Contrôle de la gravité ou votre Force +1, selon ce qui est le plus haut." },
      ],
      limites: [],
    },
    {
      name: "Contrôle de la lumière",
      category: "Contrôle",
      page: 42,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle de l'énergie",
      value: "Vous pouvez générer et contrôler la lumière. Ce pouvoir vous permet d’illuminer une zone à portée étendue et de projeter un rayon aveuglant, également à portée étendue (voir Aveuglement page 42).",
      extras: [
        { name: "Standard", value: "Salve." },
        { name: "Pouvoirs", value: "Absorption (lumière), Champ de force, Contrôle des ténèbres, Décharge (rayon laser ou photonique), Forme alternative (forme énergétique), Frappe (armes de lumière), Guérison (traitement seulement), Illusion (Images, visuel seulement), Invisibilité, Résistance (à l’Aveuglement, aux ténèbres, à la lumière), Vol." },
        { name: "Constructs de lumière", value: "vous pouvez former des constructs faits de « lumière cohérente » avec une Solidité égale à votre niveau de pouvoir." },
      ],
      limites: [
        { name: "Standard", value: "Aucune prouesse, Source." },
        { name: "Contrôle de la couleur", value: "vous ne pouvez contrôler que la couleur de la lumière, ce qui inclue la couleur apparente et la transparence des objets. Cette capacité n’est pas aussi inutile qu’elle pourrait le paraitre en premier lieu, puisque vous pouvez toujours utiliser ce pouvoir pour faire un Aveuglement, et y associer des extras comme Illusion, Invisibilité, Domination (hypnose) et Résistance (à la lumière) en altérant les couleurs." },
      ],
    },
    {
      name: "Contrôle de la matière",
      category: "Contrôle",
      page: 43,
      kind: "group",
      variantOf: null,
      value: "Vous exercez un contrôle sur la matière. Reportez-vous aux descriptions des pouvoirs Télékinésie et Transmutation. Choisissez ou lancez un dé sur la table suivante : D6 Taille 1-4 Télékinésie 5-6 Transmutation",
      table: {
        "dice": "1d6",
        "label": "Pouvoir",
        "entries": [
          {
            "name": "Télékinésie",
            "roll": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "name": "Transmutation",
            "roll": [
              5,
              6
            ]
          }
        ]
      },
      extras: [],
      limites: [],
    },
    {
      name: "Contrôle de la terre",
      category: "Contrôle",
      page: 43,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle élémentaire",
      value: "Vous pouvez manipuler la terre et la roche. Cette capacité est limitée aux matériaux naturels comme la pierre et la poussière, et aux matériaux cohérents semi-naturels que sont l’asphalte et le verre, par exemple. Des choses comme les métaux raffinés, les mécanismes artificiellement construits (ce qui inclue ordinateurs, armes, véhicules…) et les choses vivantes ou l’ayant été (comme le caoutchouc, le bois, la chair) sont au-delà du périmètre de ce pouvoir.",
      extras: [
        { name: "Pouvoirs", value: "Champ de force (armure de pierre et de terre), Contrôle de la gravité, Fouissage, Immobilisation, Résistance (à la terre, tremblement de terre), Serviteur (élémentaire de terre)." },
        { name: "Contrôle de la lave", value: "vous pouvez transformer toute roche à portée étendue en lave. Cette lave se solidifie en une planche, sauf si vous restez concentré pour la maintenir en fusion. Vous pouvez tirer des Décharges de lave qui infligent des dégâts équivalent à votre niveau de pouvoir. Si vous attaquez une créature de pierre dotée de conscience avec ce pouvoir, traitez là comme une Affliction à distance (page 30)." },
        { name: "Contrôle du métal", value: "vous pouvez exercer un contrôle sur les métaux raffinés en plus de celui sur la terre naturelle." },
        { name: "Secousses", value: "vous pouvez envoyer des secousses dans le sol, pour projeter vos cibles, avec un test de Contrôle de la terre opposé à la Coordination ou à la Force." },
        { name: "Tremblement de terre", value: "chaque personne et structure touchant le sol à portée étendue souffre de dégâts équivalents à votre niveau de pouvoir." },
        { name: "Vague de terre", value: "vous gagnez le pouvoir Vol au niveau 1 en faisant surgir sous vos pieds des piliers ou des vagues de terre que vous chevauchez. Leur Solidité est égale au niveau de votre pouvoir." },
      ],
      limites: [
        { name: "Au sol", value: "votre niveau de contrôle de la terre est réduit de moitié si vous ne touchez pas le sol. Si vous êtes au-delà de la portée étendue du sol, votre niveau est réduit à 0." },
      ],
    },
    {
      name: "Contrôle de l’air",
      category: "Contrôle",
      page: 44,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle élémentaire",
      value: "Vous manipulez l’air et le vent, créant des vents d’une force égale à votre niveau de pouvoir pour ce qui est de déplacer des objets (reportez-vous à la Table des références du livre de base pour savoir quel poids vous êtes capable de faire bouger).",
      extras: [
        { name: "Standard", value: "Salve." },
        { name: "Pouvoirs", value: "Champ de Force, Contrôle du climat, Décharge (air, salve), Résistance (froid, gaz, pression, suffocation), Serviteur (élémentaire d’air), Super-sens (sens de l’espace, courants aériens), Vol (passagers)." },
        { name: "Bulle d’Air", value: "sous la forme d’une réaction, vous pouvez créer et maintenir une sphère d’air respirable qui tient à l’écart l’eau, les gaz et d’autres effets similaires dont le niveau est inférieur à celui de votre pouvoir. La sphère peut accueillir un nombre de personnes égal à votre niveau de pouvoir." },
        { name: "Suffocation", value: "vous pouvez empêcher l’air d’atteindre les poumons d’une cible de votre choix à portée étendue, en réussissant un test de Coordination contre Coordination. Si le test est une réussite, faites un test de votre Contrôle de l’Air contre la Force de la victime et traitez le résultat comme une attaque d’Affliction : un succès entraine une perte d’Endurance égal au niveau de pouvoir, ignorant la Résistance aux dégâts, et la cible doit faire un test additionnel au début de chacune de vos cases tant que vous vous concentrez pour maintenir l’effet." },
        { name: "Vide", value: "Vous pouvez retirer l’air d’une zone, de portée proche à étendue, créant ainsi le vide. L’air environnant se rue dans la zone vide comme un coup de tonnerre. Faites un test de contrôle de l’Air contre la Force de chaque personnage présent dans l’aire affectée : un succès leur fait perdre une case d’action et les assourdit pour un nombre de planches égal à votre pouvoir. Si vous choisissez de ne pas permettre à l’air de remplir le vide (le garder à l’extérieur est une action exclusive), les personnages présents dans la zone souffrent des effets d’une suffocation (voir point ci-dessus)." },
      ],
      limites: [],
    },
    {
      name: "Contrôle de l’eau",
      category: "Contrôle",
      page: 45,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle élémentaire",
      value: "Contrôle de l’eau vous permet de créer et de contrôler de l’eau. Vous pouvez bouger une masse d’eau basée sur votre niveau de pouvoir dans la colonne Poids de la Table des références.",
      extras: [
        { name: "Pouvoirs", value: "Amphibie (passagers), Contrôle du climat, Contrôle du froid (glace seulement), Serviteur (élémentaire d’eau)." },
        { name: "Déshydratation", value: "vous pouvez détruire l’eau. Vous pouvez faire baisser le niveau de l’eau, ou utiliser cet extra comme une attaque d’Affliction contre les humains et les autres créatures composées majoritairement d’eau." },
        { name: "Noyade", value: "vous pouvez suffoquer une victime avec un test de Contrôle de l’eau contre la Force de votre cible, comme une attaque d’Affliction à distance." },
        { name: "Fusion", value: "vous pouvez transformer la glace en eau, à concurrence de la masse que votre pouvoir permet de manipuler, par planche." },
        { name: "Propulsion", value: "vous pouvez utiliser l’eau pour propulser les véhicules aquatiques comme s’ils avaient un niveau d’Amphibie égal à celui de votre Contrôle de l’eau." },
        { name: "Tsunami", value: "Avec une planche de préparation, vous pouvez former une vague géante à partir d’un corps aquatique et la faire déferler sur tout toute personne à portée étendue de la rive, causant des dégâts équivalents à votre niveau de pouvoir." },
        { name: "Marche sur l’eau", value: "vous pouvez marcher à la surface de l’eau comme s’il s’agissait d’un sol ferme." },
      ],
      limites: [
        { name: "Standard", value: "Source (vous devez disposer d’une source d’eau et vous ne pouvez pas en créer)." },
        { name: "Submergé", value: "vous devez être au moins à moitié immergé dans l’eau pour pouvoir utiliser votre pouvoir." },
      ],
    },
    {
      name: "Contrôle de l’électricité",
      category: "Contrôle",
      page: 46,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle de l'énergie",
      value: "Vous pouvez générer et contrôler l’électricité, ainsi que lancer des éclairs jusqu’à portée étendue infligeant des dégâts égaux à votre niveau de pouvoir. Vous pouvez également recharger des accessoires électriques et propager le voltage au travers de l’eau et des métaux conducteurs comme le cuivre, le fer ou l’acier. Lorsque vous touchez une surface conductrice, toute autre personne en contact avec celle-ci est vulnérable à votre attaque.",
      extras: [
        { name: "Pouvoirs", value: "Absorption (électricité), Augmentation de capacité (seulement la Force), Aura (électricité), Contrôle des machines, Résistance (électricité), Super-vitesse, Téléportation (transmission, lignes électriques), Vol." },
        { name: "Coupure de courant", value: "vous pouvez couper toute l’électricité à portée étendue pendant une durée égale à votre niveau. Cela empêche les robots, les armures de combat ou les ordinateurs de fonctionner, sauf s’ils bénéficient d’une source d’énergie alternative." },
      ],
      limites: [
        { name: "Standard", value: "Aucune prouesse, Portée proche, Source." },
        { name: "Non-conducteur", value: "vous ne pouvez pas servir de conducteur pour de l’électricité issue d’une source d’énergie. Vous ne pouvez que générer votre pouvoir que de façon interne." },
      ],
    },
    {
      name: "Contrôle de l’énergie",
      category: "Contrôle",
      page: 46,
      kind: "group",
      variantOf: null,
      value: "Vous exercez un contrôle sur l’un des spectres d’énergie et de forces (ou leur absence) : Contrôle du froid, Contrôle des ténèbres, Contrôle de l’électricité, Contrôle de la force, Contrôle de la lumière, Contrôle magnétique, Contrôle des radiations, Contrôle sonique et Contrôle des vibrations. Reportez-vous à chacun de ces pouvoirs pour plus de détails. Choisissez ou lancez un dé sur la table suivante : d6 d6 Pouvoir 1-3 1 Contrôle du froid 2 Contrôle des ténèbres 3 Contrôle de l’électricité 4-5 Contrôle de la force 6 Contrôle de la lumière 4-6 1-2 Contrôle magnétique 3 Contrôle des radiations 4-5 Contrôle sonique 6 Contrôle des vibrations",
      table: {
        "dice": "d6xd6",
        "label": "Pouvoir",
        "entries": [
          {
            "name": "Contrôle du froid",
            "first": [
              1,
              2,
              3
            ],
            "second": [
              1
            ]
          },
          {
            "name": "Contrôle des ténèbres",
            "first": [
              1,
              2,
              3
            ],
            "second": [
              2
            ]
          },
          {
            "name": "Contrôle de l’électricité",
            "first": [
              1,
              2,
              3
            ],
            "second": [
              3
            ]
          },
          {
            "name": "Contrôle de la force",
            "first": [
              1,
              2,
              3
            ],
            "second": [
              4,
              5
            ]
          },
          {
            "name": "Contrôle de la lumière",
            "first": [
              1,
              2,
              3
            ],
            "second": [
              6
            ]
          },
          {
            "name": "Contrôle magnétique",
            "first": [
              4,
              5,
              6
            ],
            "second": [
              1,
              2
            ]
          },
          {
            "name": "Contrôle des radiations",
            "first": [
              4,
              5,
              6
            ],
            "second": [
              3
            ]
          },
          {
            "name": "Contrôle sonique",
            "first": [
              4,
              5,
              6
            ],
            "second": [
              4,
              5
            ]
          },
          {
            "name": "Contrôle des vibrations",
            "first": [
              4,
              5,
              6
            ],
            "second": [
              6
            ]
          }
        ]
      },
      extras: [],
      limites: [],
    },
    {
      name: "Contrôle de l’espace",
      category: "Contrôle",
      page: 47,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle du continuum",
      value: "Contrôle de l’espace vous permet de tordre les dimensions spatiales à portée étendue. Vous pouvez étendre ou compresser les distances et distordre la topographie. Les effets durent tant que vous vous concentrez. Choisissez l’un des effets suivants, vous pouvez prendre les autres sous forme d’extras : • Compresser les distances : vous et les autres bougez à travers une zone comme si vous aviez une Super-vitesse à un niveau égal à celui de votre Contrôle de l’espace. • Etendre les distances : vous réduisez la vitesse de mouvement dans la zone du niveau de votre pouvoir. • Distordre l’espace : vous tordez l’espace. Toute personne dans la zone affectée doit faire un test de Coordination contre Contrôle de l’espace pour éviter de perdre une action alors qu’ils essaient de reprendre leurs marques.",
      extras: [
        { name: "Standard", value: "Défensif." },
        { name: "Pouvoirs", value: "Décharge (choc spatial, Salve), Duplication, Elasticité (en changeant la topographie spatiale), Téléportation (passagers, portail)." },
        { name: "Façonnage", value: "vous pouvez altérer la topographie des objets, et même des gens, en les étirant ou les modelant comme on le ferait de la glaise. Les objets affectés reviennent à la normale dès que vous cessez de vous concentrer." },
        { name: "Ancre spatiale", value: "vous « solidifiez » l’espace local contre les disruptions, faisant de votre niveau de pouvoir la Difficulté pour toute utilisation de Contrôle dimensionnel, Contrôle de l’espace, Téléportation ou Voyage dimensionnel, à portée visuelle." },
        { name: "Disruption spatiale", value: "vous pouvez déchirer une cible en l’éparpillant dans l’espace, gagnant une Corrosion au même niveau que votre Contrôle de l’espace, utilisable à portée étendue." },
      ],
      limites: [],
    },
    {
      name: "Contrôle de pouvoir",
      category: "Contrôle",
      page: 47,
      kind: "group",
      variantOf: null,
      value: "Vous pouvez contrôler un aspect des pouvoirs d’une autre personne. Reportez-vous aux descriptions des pouvoirs Octroi de pouvoir, Augmentation de pouvoir et Nullification. Choisissez ou lancez un dé sur la table suivante : d6 Pouvoir 1-2 Octroi de pouvoir 3-4 Augmentation de pouvoir 5-6 Nullification",
      table: {
        "dice": "1d6",
        "label": "Pouvoir",
        "entries": [
          {
            "name": "Octroi de pouvoir",
            "roll": [
              1,
              2
            ]
          },
          {
            "name": "Augmentation de pouvoir",
            "roll": [
              3,
              4
            ]
          },
          {
            "name": "Nullification",
            "roll": [
              5,
              6
            ]
          }
        ]
      },
      extras: [],
      limites: [],
    },
    {
      name: "Contrôle des émotions",
      category: "Esprit",
      page: 48,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez exercer une forme de contrôle sur ce que ressent une cible, imposant à son esprit une émotion particulière sous la forme d’un aspect temporaire – comme « terrifié » ou « amouraché » – que vous pouvez activer gratuitement aussi longtemps que dure le pouvoir. Pour ainsi influencer quelqu’un, il doit être à portée visuelle et vous devez réussir un test de Pouvoir avec le niveau d’Éveil de la cible en guise de Difficulté. • Un échec signifie que votre tentative de contrôle n’a aucun effet et vous devrez recourir à un effort tenace pour essayer à nouveau de contrôler la même cible durant ce chapitre. • Un succès marginal signifie que votre tentative n’a aucun effet, mais vous pouvez essayer à nouveau sans effort tenace. • Un succès modéré affecte l’aspect émotionnel voulu à votre cible. Concentrez-vous et réussissez un nouveau test de Contrôle des émotions contre son Eveil au début de chaque planche pour maintenir l’aspect. • Un succès majeur a les mêmes effets qu’un modéré mais ne nécessite un nouveau test qu’après une durée égale au niveau de votre pouvoir. • Un succès massif permet de maintenir l’aspect pendant l’intégralité du chapitre. Vous ne pouvez placer qu’un seul aspect émotionnel à la fois sur une cible. Les autres aspects de la cible peuvent être activés pour lui permettre de récupérer, auquel cas vous devrez réaliser un nouveau test de Contrôle des émotions pour maintenir l’effet.",
      extras: [
        { name: "Pouvoirs", value: "Augmentation de capacité (affecte les autres). 2d6 Emotion Effet 2-3 Doute Assaillie par le doute, la cible agit toujours en dernier et ne peut avoir recours à l’effort tenace. 4-5 Peur Emplie de terreur, la cible fuit ou, si elle en est incapable, se recroqueville sur elle-même. 6 Haine La cible est emplie de haine à l’encontre de quelqu’un, et cherche à s’y attaquer. 7 Amour La cible aime un sujet, l’aidera et le défendra autant que possible. 8 Plaisir Emplie de sensations de plaisir, la cible s’assoie sans plus agir. 9-10 Respect Emplie d’un grand respect pour un sujet, la cible fera tout ce qui possible pour l’assister. 11-12 Tristesse Submergée par la tristesse et le désespoir, la cible ne peut rien faire." },
      ],
      limites: [
        { name: "Une seule émotion", value: "vous ne pouvez instiller qu’une seule émotion, choisie quand vous obtenez ce pouvoir. Choisissez ou lancez un dé sur la table précédente." },
        { name: "Phéromones", value: "votre pouvoir fonctionne par le biais des odeurs secrétées par votre corps. Tout ce qui pourrait les bloquer (comme une combinaison étanche ou un masque filtrant) empêche votre pouvoir de fonctionner." },
        { name: "Aléatoire", value: "vous ne contrôlez pas les émotions que vous suscitez : lancez sur la table des émotions de la page précédente lorsque vous utilisez votre pouvoir." },
      ],
    },
    {
      name: "Contrôle des esprits",
      category: "Contrôle",
      page: 49,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez contrôler les esprits, les fantômes et les entités similaires. Faites un test de Contrôle des esprits contre la Volonté pour contrôler un esprit à portée visuelle. Si la Volonté de l’esprit est supérieure au niveau le plus élevé entre votre pouvoir et votre Volonté, vous ne pouvez le dominer sans recourir à un effort tenace. La personnalité et les objectifs d’un esprit dominé demeurent, mais il ne peut se soustraire à vos ordres. L’esprit obéit aux ordres télépathiques ou vocaux. Chaque fois que vous ordonnez à un esprit d’accomplir quelque chose à laquelle il est fermement opposé – typiquement lorsque votre ordre va à l’encontre des aspects de l’esprit – vous devez réaliser un nouveau test de Contrôle des esprits contre sa Volonté pour réaffirmer votre main mise. Un échec libère l’esprit de votre influence et vous ne pourrez plus le contrôler dans ce numéro sans effort tenace.",
      extras: [
        { name: "Pouvoirs", value: "Drain d’énergie, Nullification (pouvoirs d’esprit et Contrôle des esprits seulement), Projection astrale, Serviteur (réanimation de corps morts), Super-sens (détection d’esprits)." },
        { name: "Affliction spirituelle", value: "avec un lien concret avec votre cible (comme une boucle de cheveux ou la classique poupée vaudou), vous pouvez lui infliger une Affliction sans limite de distance au même niveau que votre Contrôle des esprits. La victime gagne un bonus de +2 pour résister à cet effet sauf si vous vous tenez à portée étendue, ou moins, de celle-ci." },
        { name: "Eveil d’incarnation", value: "vous pouvez vous souvenir des événements de vos vies antérieures. De plus, vous pouvez envoyer des messages à vos incarnations passées, au moment où elles sont en vie, ou en recevoir vous-même d’incarnations futures (le vice versa n’est toutefois pas possible). Ce sont d’excellentes opportunités pour de l’effort soutenu, des retcons et des prouesses (en substituant votre contrôle des esprits à tout autre trait)." },
        { name: "Ignorer la mort", value: "vous pouvez piéger un esprit dans un corps fatalement blessé jusqu’à ce qu’on trouve le temps de soigner suffisamment le corps pour qu’il puisse à nouveau héberger son esprit sans assistance. Vous pouvez garder l’esprit lié au corps tant que vous restez concentré." },
        { name: "Invocation d’esprit", value: "vous pouvez invoquer et contrôler l’esprit ou le fantôme le plus proche avec un test de Contrôle d’esprit contre sa Volonté." },
        { name: "Isolation spirituelle", value: "vous pouvez créer une zone à portée proche, autour de vous, dans laquelle les esprits ne peuvent pénétrer sans un succès modéré ou supérieur à un test de Volonté contre votre niveau de Contrôle des esprits." },
        { name: "Possession forcée", value: "vous pouvez placer des esprits désincarnés dans de nouveaux corps. Faites un test de Contrôle des esprits contre Volonté. Si le test échoue, l’esprit souffre de dégâts égaux à votre niveau de pouvoir. Si le test réussit, l’esprit prend le contrôle du corps, dominant toute autre conscience. L’esprit conserve ses propres capacités et pouvoirs mentaux et gagne les capacités et pouvoirs physiques du corps hôte." },
        { name: "Stockage d’esprit", value: "vous pouvez capturer et contenir des esprits désincarnés avec un succès majeur sur un test de Contrôle des esprits contre Volonté. Les esprits sont piégés dans une dimension de poche qui vous est connectée. Vous pouvez de plus communiquer avec les esprits capturés. Vous êtes immunisé contre toute tentative de possession ou de domination de la part des esprits piégés." },
      ],
      limites: [
        { name: "Standard", value: "Extra seulement, Performance." },
        { name: "Exorcisme", value: "votre contrôle se limite à contraindre les esprits à quitter les corps qu’ils ont possédés et à les bannir du plan physique." },
        { name: "Un seul type", value: "votre Contrôle des esprits n’affecte qu’un type d’esprit : fantômes, fées ou esprits de la nature par exemple." },
        { name: "Rituel", value: "votre Contrôle des esprits nécessite une préparation et de longs rituels. Il vous faut au minimum une minute de préparation par niveau de pouvoir, voir plus longtemps." },
        { name: "Endormi", value: "vous ne pouvez utiliser votre pouvoir que lorsque vous êtes endormi. Si vous vous réveillez, toute utilisation en cours de contrôle des esprits cesse immédiatement." },
      ],
    },
    {
      name: "Contrôle des machines",
      category: "Contrôle",
      page: 50,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez mentalement animer et contrôler des machines et des accessoires mécaniques, jusqu’à portée étendue. Les machines bougent et agissent selon vos ordres, avec une Force égale à leur Solidité (ou leur Force propre pour ce qui est des robots ou des armures de combat) et une Coordination égale à votre niveau de pouvoir ou à celle de la machine si elle en dispose. Votre pouvoir prodigue à la machine toute énergie ou carburant nécessaire à son fonctionnement, même si elle ne dispose pas de cette source d’alimentation (si elle est à sec ou non branchée, par exemple). Les machines dotées de consciences peuvent résister à votre contrôle grâce à leur Volonté, comme le peuvent les machines liées cybernétiquement à un opérateur conscient (comme de nombreuses armures de combat). Dans ce cas, traitez ce pouvoir comme une Domination.",
      extras: [
        { name: "Standard", value: "Diffusion, Prolongé." },
        { name: "Pouvoirs", value: "Gadgets, Interface." },
        { name: "Assemblage de machine", value: "avec un test de Contrôle des machines de Difficulté 3, vous pouvez assembler une machine fonctionnelle à partir de morceaux et pièces détachés, à portée étendue." },
        { name: "Transformation de machine", value: "vous pouvez transformer une machine en une autre grâce à un test de Contrôle des machines de Difficulté 3, transformant par exemple une voiture en robot humanoïde. La machine conserve sa Solidité, mais vous pouvez altérer ses autres capacités, tant qu’aucune d’entre elles ne dépasse votre niveau." },
      ],
      limites: [
        { name: "Standard", value: "portée proche" },
        { name: "Choc de retour", value: "votre lien mental avec les machines est si fort que vous souffrez des résultats d’étourdissement à leur encontre, comme si vous étiez vous-même étourdi." },
        { name: "Un seul type", value: "vous ne pouvez contrôler qu’un seul type de machines comme les voitures ou les appareils électroménagers." },
        { name: "Alimentation autonome", value: "les machines que vous contrôlez doivent bénéficier d’une alimentation pour fonctionner. Vous ne pouvez donc pas animer une machine à sec ou non branchée." },
      ],
    },
    {
      name: "Contrôle des ordinateurs",
      category: null,
      page: 51,
      kind: "variant",
      variantOf: "Interface",
      value: "Pour la capacité à contrôler ordinateurs et machines, reportez-vous aux pouvoirs Interface (page 82) et Contrôles des Machines (page 50).",
      extras: [],
      limites: [],
    },
    {
      name: "Contrôle des plantes",
      category: "Contrôle",
      page: 51,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle élémentaire",
      value: "Vous contrôlez les plantes, les animant et leur prodiguant une conscience rudimentaire tant que vous restez concentré. Vous ne pouvez pas contrôler de plantes avec un niveau de Solidité plus élevé que votre niveau de pouvoir. Pour prendre le contrôle d’une plante consciente, faites un test de Contrôle des plantes contre sa volonté, comme si vous utilisiez le pouvoir Domination.",
      extras: [
        { name: "Pouvoirs", value: "Affliction (allergènes ou contrôle de la flore intestinale), Immobilisation, Mimétisme végétal, Serviteur (élémentaire végétal ou plante animée), Téléportation, Vitalité (ignorer le sommeil, ou le besoin de se nourrir grâce à la photosynthèse)." },
        { name: "Contrôle fongique", value: "vous pouvez commander les actions des champignons et des moisissures tout autant que celles des plantes vertes." },
        { name: "Croissance végétale", value: "vous pouvez accélérer la croissance des plantes, créant des spécimens géants. Sans rien de plus qu’une graine, vous pouvez amener à la vie une plante adulte en une planche." },
        { name: "Souvenir végétal", value: "une plante sous contrôle peut vous raconter tout ce qui l’a touché ou est passé près d’elle, comme avec le pouvoir Postcognition." },
      ],
      limites: [
        { name: "Choc en retour", value: "votre lien mental avec les plantes sous votre contrôle est si fort que vous souffrez des résultats d’étourdissement à leur encontre, auxquels vous résistez avec le plus élevé de votre Force ou de votre Volonté." },
        { name: "Un seul type", value: "vous ne pouvez affecter qu’un seul type de plantes, comme les arbres ou les fleurs." },
      ],
    },
    {
      name: "Contrôle des probabilités",
      category: "Contrôle",
      page: 52,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle du continuum",
      value: "Vous exercez un certain contrôle sur la chance brute. Ce pouvoir vous donne des points de Ténacité supplémentaires égaux à son niveau, que vous récupérez en même temps que vos points habituels. Ces points ne sont toutefois utilisables que pour activer l’aspect « chance » qui vient avec ce pouvoir. Quand vous acquérez ce pouvoir, vous devez choisir si votre Contrôle des probabilités repose sur la chance ou la guigne (ou lancez 1d6, de 1 à 3 : chance, de 4 à 6 : guigne). • La chance peut être activée à votre avantage pour un effort soutenu ou des retcons explicables par un « coup de chance » à votre bénéfice. • La guigne peut être activée pour nuire à d’autres en augmentant leur difficulté ou leur imposant des défis. Contrairement à l’utilisation normale des Points de Ténacité, les points offerts par votre Contrôle des probabilités ne nécessitent pas l’activation d’un aspect pour les utiliser. Dans les faits, votre pouvoir lui-même est l’aspect associé aux points : vous « activez » votre chance ou votre guigne en utilisant votre pouvoir. Dans certains cas, pour infliger de la guigne à une cible, le MJ pourra vous demander un test de pouvoir contre une capacité approprié de votre cible (comme la Volonté).",
      extras: [
        { name: "Deux types", value: "vous pouvez utiliser votre Contrôle des Probabilités pour générer aussi bien de la chance que de la guigne." },
      ],
      limites: [
        { name: "Poisse", value: "un de vos alliés, choisi au hasard parmi ceux présents à portée étendue, souffre d’une complication à chaque fois que vous utilisez Contrôle des probabilités (et n’en retire pas de Ténacité, si cet allié est un personnage joueur). Contrôle des probabilités et Personnages du MJ Puisque les personnages du MJ n’ont pas de Points de Ténacité, lorsqu’ils utilisent le Contrôle des Probabilités, traitez ce cas comme une complication pour les joueurs, un peu comme tous les « coups du sort » que le MJ choisit d’imposer aux héros pour des raisons narratives. Cela fait de ce pouvoir une sorte d’exclusivité pour les personnages joueurs, puisque le MJ peut de toute façon causer autant de complications qu’il le souhaite (tant qu’il offre aux joueurs affectés de la Ténacité en échange). Si vous le souhaitez, ce pouvoir peut donner à un personnage du MJ un nombre de complications « gratuites » équivalent à son niveau, des occurrences de malchance causées par le pouvoir qui ne donneront pas de Ténacité en échange. Nous ne le recommandons toutefois pas, car cela risque d’interférer avec l’échange permanent de Ténacité sur la table de jeu, qui fait le sel du système d’ICONS. Les MJ pourraient souhaiter limiter ces « utilisations gratuites » aux retcons, offrant ainsi aux PNJ dotés de ce pouvoir la liberté de mieux contrôler leur environnement sans pour autant affecter directement les héros." },
      ],
    },
    {
      name: "Contrôle des radiations",
      category: "Contrôle",
      page: 53,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle de l'énergie",
      value: "Vous pouvez générer et contrôler des radiations, comme les micro-ondes ou les rayons gamma. Vous pouvez projeter une décharge de radiations concentrées jusqu’à portée étendue, infligeant des dégâts égaux à votre niveau de pouvoir.",
      extras: [
        { name: "Standard", value: "Salve." },
        { name: "Pouvoirs", value: "Absorption (radiation), Affliction (maladie liée au rayonnement), Aura, Aveuglement, Champ de force, Contrôle du feu (contrôle de la chaleur uniquement), Nullification (pouvoirs basés sur les radiations ou les mutagènes), Vol." },
        { name: "Contrôle des ondes radio", value: "vous contrôlez les ondes radio, augmentant ou réduisant leur intensité de votre niveau de pouvoir, altérant leur fréquence et leur direction et brouillant les transmissions. Vous pouvez vous-même transmettre comme une radio vivante." },
      ],
      limites: [
        { name: "Standard", value: "Aucune prouesse, Constant, Instable." },
      ],
    },
    {
      name: "Contrôle des rêves",
      category: "Esprit",
      page: 54,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez manipuler les rêves. Cela commence par la capacité à contrôler vos propres rêves, décidant de leur nature. Mais vous pouvez surtout implanter des images dans les songes d’un sujet endormi, de la même manière qu’avec le pouvoir Illusion.",
      extras: [
        { name: "Pouvoirs", value: "Illusion, Projection astrale, Télépathie." },
        { name: "Sommeil", value: "vous pouvez plonger quelqu’un dans un profond sommeil avec un test réussi de Contrôle des rêves contre la Volonté de votre cible." },
        { name: "Voyage onirique", value: "vous pouvez entrer dans la dimension éphémère créée par les rêves ou les cauchemars d’une personne. Ces mondes oniriques sont en dehors des limites de la réalité et n’existent que comme une réflexion de l’imagination du rêveur. Vous pouvez y interagir avec les choses comme vous le feriez dans le monde réel. Utilisez votre Volonté à la place de la Force quand vous opérez dans un monde onirique." },
      ],
      limites: [
        { name: "Endormi", value: "vous ne pouvez utiliser ce pouvoir que si vous êtes vousmême endormi. Si vous vous réveillez, votre corps onirique retourne immédiatement dans votre corps physique." },
      ],
    },
    {
      name: "Contrôle des ténèbres",
      category: "Contrôle",
      page: 54,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle de l'énergie",
      value: "Vous pouvez générer des ténèbres, obscurcissant une zone à portée étendue. Les effets durent le temps de votre concentration, la lumière revenant à la normale sur la planche suivant la fin de votre concentration. La zone affectée obtient l’aspect « obscur » qui peut être activé gratuitement pour infliger un handicap aux personnes à l’intérieur, les rendant incapable de voir, et une Difficulté augmentée pour toutes les actions basées sur la vue.",
      extras: [
        { name: "Pouvoirs", value: "Absorption (lumière), Aveuglement, Champ de force, Contrôle des émotions (seulement la peur), Décharge, Drain d’énergie, Résistance (aux ténèbres, à la lumière), Serviteur (ombres animées), Super-sens (vision infrarouge), Téléportation (transmission, ténèbres et ombres), Vol." },
        { name: "Constructs d’ombre", value: "vous pouvez projeter une « force noire », essentiellement des ténèbres solidifiées, pour former différents constructs avec une Solidité égale à votre niveau de pouvoir." },
        { name: "Modelage d’ombres", value: "vous pouvez changer la taille et la forme des ombres et générer des objets et créatures tridimensionnelles. Ces images d’ombres sont immatérielles (Force 0 et immunisées à tous types d’attaque à l’exception de Contrôle de la lumière et autres effets générant de la lumière)." },
      ],
      limites: [],
    },
    {
      name: "Contrôle des vibrations",
      category: "Contrôle",
      page: 55,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle de l'énergie",
      value: "Vous pouvez générer et contrôler des vibrations à différentes fréquences. Vous pouvez tirer une Décharge d’énergie vibratoire jusqu’à portée étendue, occasionnant des dégâts équivalents au niveau de votre pouvoir.",
      extras: [
        { name: "Standard", value: "Salve." },
        { name: "Pouvoirs", value: "Absorption (vibrations), Champ de force, Contrôle de la terre (tremblement de terre seulement), Contrôle sonique, Corrosion (à distance, objets cristallins seulement), Fouissage, Immatérialité, Nullification (Contrôle des vibrations et Contrôle sonique uniquement), Résistance (à l’Immobilisation, à la pression), Super-sens (sens de l’espace), Voyage dimensionnel (dimensions vibrationnelles), Vol." },
        { name: "Crochetage", value: "vous pouvez ouvrir des verrous mécaniques et des coffres-forts en faisant vibrer leurs mécanismes sensibles et en réussissant un test de Contrôle des vibrations contre la Difficulté du verrou." },
        { name: "Brouillage", value: "vous pouvez détraquer les machines en faisant vibrer leurs mécanismes les plus délicats. Contre les machines animées, cet extra fonctionne comme une attaque d’Affliction." },
        { name: "Secousses", value: "vous pouvez envoyer des secousses à travers les airs ou le sol. Elles ne causent pas de tremblement de terre, mais imposent à toute personne à portée étendu de réussir un test de Coordination contre votre niveau de Contrôle des vibrations, sous peine de chuter au sol et de perdre une action. Les objets non sécurisés peuvent tomber et se briser." },
        { name: "Vertige", value: "en interférant avec l’oreille interne de votre cible, vous pouvez accomplir l’extra Vertige du pouvoir Décharge mentale (page 63)." },
        { name: "Vibrolame", value: "vous pouvez faire vibrer à haute vitesse des lames de différentes sortes, augmentant leurs dégâts au niveau de votre pouvoir, ou à leurs dégâts normaux +1, selon ce qui est le plus élevé." },
        { name: "Vibrofrappe", value: "en générant des vibrations concentrées autour de vos mains, vous pouvez frapper avec une attaque de type Taillader qui inflige des dégâts égaux au niveau de votre pouvoir, ou à votre Force +1, selon ce qui est le plus élevé." },
      ],
      limites: [
        { name: "Standard", value: "Au max, Aucune prouesse, Extra seulement, Source." },
      ],
    },
    {
      name: "Contrôle dimensionnel",
      category: "Altération",
      page: 56,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez changer le nombre de dimensions physiques que votre corps occupe, altérant par la même vos capacités. Vous pouvez alterner entre 3D et deux autres états dimensionnels. Assumer d’autres états dimensionnels est un extra (un pour deux états additionnels). Vos capacités sont basées sur le nombre de dimensions que vous occupez : • 0D : votre existence se résume à un point mathématique dans l’espace. Vous ne pouvez ni bouger ni entreprendre d’action, mais la bonne nouvelle est que vous êtes invisible et immunisé à tout, excepté aux pouvoirs qui agissent directement sur votre esprit. • 1D : vous n’êtes quasiment qu’une ligne invisible (Invisibilité égale à votre niveau de pouvoir). Vous n’avez aucune Force mais vous pouvez vous glisser dans toute ouverture quelle que soit sa taille. • 2D : Vous êtes une image plate de vous-même. Vous pouvez vous glisser dans toute fissure ou ouverture qui s’accommode à votre largeur, et vous disposez d’une Invisibilité lorsque qu’on regarde votre profil. Sous forme d’extra, vous pouvez développer une Frappe de type Taillader égale à votre niveau, vous permettant de trancher au travers des choses. • 3D : Vous disposez de vos capacités physiques normales. • 4D : votre Force augmente au niveau de votre pouvoir et vous pouvez « éviter » les objets physiques comme si vous aviez le pouvoir Immatérialité. Vous gagnez le Super-sens de Vision pénétrante en étant capable de voir « au-delà » des barrières physiques (les voyant depuis un espace dimensionnel supérieur). • 5D : Vous gagnez le pouvoir Contrôle temporel au même niveau que votre pouvoir. • 6D : Vous gagnez le pouvoir Voyage dimensionnel au même niveau que votre pouvoir en opérant une « rotation » entre différentes dimensions.",
      extras: [],
      limites: [
        { name: "Une seule direction", value: "vous pouvez soit ajouter soit retirer des dimensions, mais pas les deux." },
      ],
    },
    {
      name: "Contrôle du climat",
      category: "Contrôle",
      page: 56,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle élémentaire",
      value: "Vous pouvez manipuler le climat, ce qui inclue les vents, la température et les précipitations. Avec une planche de préparation, vous pouvez créer n’importe quelle condition climatique sur une zone autour de vous, à portée visuelle. Utiliser le climat comme une attaque directe nécessite toutefois un extra ou une prouesse appropriée. Vous pouvez prédire le temps qu’il va faire avec un test de Contrôle du climat contre une Difficulté égale au nombre de jours de votre prédiction.",
      extras: [
        { name: "Pouvoirs", value: "Affliction (froid ou chaud), Contrôle de l’air, Contrôle du feu (contrôle de la chaleur seulement), Contrôle du froid, Décharge (grêle, Salve), Résistance (au climat), Vitalité (froid et chaleur seulement), Vol (passagers)." },
        { name: "Brouillard", value: "vous pouvez invoquer une nappe de brouillard épais, réduisant la vue à portée proche dans une zone à portée visuelle." },
        { name: "Instantané", value: "vous pouvez changer le climat instantanément, sans planche de préparation." },
        { name: "Foudre", value: "vous pouvez tirer des Décharges de foudre de vos mains, ou les attirer depuis le ciel, infligeant le niveau de votre pouvoir en dégâts de type Tirer, jusqu’à portée étendue." },
      ],
      limites: [
        { name: "Standard", value: "Instable." },
      ],
    },
    {
      name: "Contrôle du continuum",
      category: "Contrôle",
      page: 57,
      kind: "group",
      variantOf: null,
      value: "Vous contrôlez l’une des forces fondamentales de la réalité. Reportez-vous aux descriptions des pouvoirs Contrôle de la friction, Contrôle de la gravité, Contrôle des probabilités, Contrôle spatial et Contrôle temporel. Choisissez ou lancez un dé sur la table suivante : 1d6 Pouvoir 1 Contrôle de la friction 2 Contrôle de la gravité 3 Contrôle des probabilités 4 Contrôle spatial 5 Contrôle temporel 6 Choisissez ou relancez, en ignorant ce résultat",
      table: {
        "dice": "1d6",
        "label": "Pouvoir",
        "entries": [
          {
            "name": "Contrôle de la friction",
            "roll": [
              1
            ]
          },
          {
            "name": "Contrôle de la gravité",
            "roll": [
              2
            ]
          },
          {
            "name": "Contrôle des probabilités",
            "roll": [
              3
            ]
          },
          {
            "name": "Contrôle de l’espace",
            "roll": [
              4
            ]
          },
          {
            "name": "Contrôle temporel",
            "roll": [
              5
            ]
          },
          {
            "name": "Choisissez ou relancez",
            "roll": [
              6
            ],
            "special": "reroll"
          }
        ]
      },
      extras: [],
      limites: [],
    },
    {
      name: "Contrôle du feu",
      category: "Contrôle",
      page: 57,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle élémentaire",
      value: "Vous pouvez manipuler les sources de feu, les portant au niveau de votre pouvoir ou, à l’inverse, en soustrayant votre niveau au leur (jusqu’à 0, ce qui les éteint). Vous pouvez contrôler un feu en vous concentrant, mais une fois que votre concentration se relâche, le feu se déchaine seul.",
      extras: [
        { name: "Pouvoirs", value: "Absorption (feu), Affliction (chaleur, Salve), Aura (feu), Aveuglement (Salve, A distance), Décharge (feu, Salve), Frappe (armes de feu), Serviteur (élémentaire de feu), Vol." },
        { name: "Formes enflammées", value: "vous pouvez modeler le feu en objets, qu’il s’agisse d’écrire dans le ciel ou de créer des cages, des dômes, des sphères et ainsi de suite, tant que vous restez concentré. Ces objets ne sont pas solides, mais ils infligent des dégâts égaux à votre niveau de pouvoir à tout ce qui entre en contact avec eux. Emprisonner une cible à l’intérieur d’une forme enflammée (comme une cage) est un test de Contrôle du feu contre la Coordination." },
        { name: "Brasier infernal", value: "vous contrôlez un feu mystique plutôt que des flammes normales. Votre feu peut donc « brûler » l’esprit d’une cible, lui infligeant des dégâts comme le pouvoir Décharge mentale vous êtes peut-être capable de développer d’autres extras mystiques, comme des armes de feu infernal ou l’invocation de démons avec le pouvoir Serviteur, par exemple." },
        { name: "Feu loyal", value: "vous disposez d’une Résistance 10 à tout feu sous votre contrôle, mais pas aux autres flammes." },
        { name: "Ecran de fumée", value: "vous pouvez recouvrir une zone de fumée. La visibilité est réduite à la portée proche. Au-delà, toute action basée sur la vue voit sa Difficulté augmentée de +2. Toute personne présente dans le nuage de fumée est sujette à l’épuisement (voir Epuisement dans le chapitre Action ! du livre de base d’ICONS)." },
      ],
      limites: [
        { name: "Standard", value: "Aucune prouesse, Au max, Source." },
      ],
    },
    {
      name: "Contrôle du froid",
      category: "Contrôle",
      page: 58,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle de l'énergie",
      value: "Vous pouvez réduire la température pour créer du froid. Choisissez gratuitement l’un des extras suivants, les autres pouvant être ajoutés au coût habituel des extras.",
      extras: [
        { name: "Pouvoirs", value: "Absorption (chaleur, froid), Affliction (congélation), Aura (froid), Contrôle du feu (« feu froid »), Décharge (glace), Immobilisation (glace), Résistance aux dégâts (armure de glace), Résistance (à la chaleur, au froid)." },
        { name: "Constructs de glace", value: "vous pouvez créer des colonnes, des murs et d’autres larges formes géométriques de glace, qui ont une Solidité égale au niveau de votre pouvoir." },
        { name: "Plaques de glace", value: "vous créez des plaques lisses de glace. Traverser ces zones verglacées demande un test de Coordination contre le niveau de Contrôle du froid pour éviter de tomber et de perdre une action." },
        { name: "Rampes de glace", value: "vous pouvez glisser sur des rampes de glace, ce qui vous donne le pouvoir Vol au niveau 1 tant que vous restez au maximum à portée étendue du sol." },
        { name: "Bouclier de glace", value: "vous pouvez créer un bouclier ou une barrière avec une Solidité égale à votre niveau de pouvoir, et l’utiliser pour bloquer des attaques." },
      ],
      limites: [
        { name: "Standard", value: "Source." },
      ],
    },
    {
      name: "Contrôle élémentaire",
      category: "Contrôle",
      page: 59,
      kind: "group",
      variantOf: null,
      value: "Vous contrôlez l’un des éléments essentiels du monde naturel. Reportez-vous aux descriptions des pouvoirs Contrôle de l’air, Contrôle de la terre, Contrôle du feu, Contrôle des plantes, Contrôle de l’eau et Contrôle du climat. Choisissez ou lancez un dé sur la table suivante : 1d6 Pouvoir 1 Contrôle de l’air 2 Contrôle de la terre 3 Contrôle du feu 4 Contrôle des plantes 5 Contrôle de l’eau 6 Contrôle du climat",
      table: {
        "dice": "1d6",
        "label": "Pouvoir",
        "entries": [
          {
            "name": "Contrôle de l’air",
            "roll": [
              1
            ]
          },
          {
            "name": "Contrôle de la terre",
            "roll": [
              2
            ]
          },
          {
            "name": "Contrôle du feu",
            "roll": [
              3
            ]
          },
          {
            "name": "Contrôle des plantes",
            "roll": [
              4
            ]
          },
          {
            "name": "Contrôle de l’eau",
            "roll": [
              5
            ]
          },
          {
            "name": "Contrôle du climat",
            "roll": [
              6
            ]
          }
        ]
      },
      extras: [],
      limites: [],
    },
    {
      name: "Contrôle magnétique",
      category: "Contrôle",
      page: 59,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle de l'énergie",
      value: "Vous pouvez générer et contrôler les champs magnétiques. Vous pouvez faire bouger et contrôler les objets ferreux comme si vous utilisiez le pouvoir Télékinésie (page 106).",
      extras: [
        { name: "Pouvoirs", value: "Champ de force, Contrôle des machines (assemblage de machine), Décharge (force magnétique), Détection d’énergie, Immobilisation, Nullification (électroniques seulement), Super-sens (sens de la direction), Télékinésie, Vol." },
      ],
      limites: [],
    },
    {
      name: "Contrôle sonique",
      category: "Contrôle",
      page: 59,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle de l'énergie",
      value: "Vous pouvez créer et contrôler le son. Ce pouvoir vous permet de projeter une onde sonore assourdissante (voir Aveuglement, page 37).",
      extras: [
        { name: "Standard", value: "Salve." },
        { name: "Pouvoirs", value: "Absorption (son), Champ de force (constructs de force), Corrosion (à distance, objets cristallins seulement, vibrations soniques), Décharge (son), Domination (hypnose seulement), Forme alternative (forme d’énergie), Illusion (son seulement), Résistance (sonique), Sens spatial (sonar), Vol." },
        { name: "Echo", value: "vous pouvez dupliquer n’importe quel son, vous permettant d’imiter des voix ou d’autres sons." },
        { name: "Ventriloquisme", value: "vous pouvez « projeter » votre voix jusqu’à portée visuelle, faisant croire qu’il émane d’un autre endroit que celui où vous vous tenez." },
      ],
      limites: [
        { name: "Standard", value: "Au max, Aucune prouesse, Extra seulement." },
      ],
    },
    {
      name: "Contrôle temporel",
      category: "Contrôle",
      page: 60,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle du continuum",
      value: "Vous pouvez contrôler le flot du temps, vous permettant d’accomplir un certain nombre d’effets. Choisissiez l’un des extras ci-dessous gratuitement lors vous obtenez ce pouvoir. Les autres doivent être acquis comme des extras normaux :",
      extras: [
        { name: "Pouvoirs", value: "Attaque rapide, Duplication, Paralysie (salve), Précognition, Post-cognition, Supervitesse (et tous ses extras, Affecte les autres)." },
        { name: "Suspension", value: "placez quelqu’un (vous y compris) dans un état d’animation suspendue. Le temps est si ralenti que les effets du vieillissement, ou une condition comme une Affliction ou la perte de Force pendant l’agonie, sont eux aussi suspendus. Les personnages en animation suspendue bénéficient d’une Vitalité totale pendant que leurs fonctions corporelles sont suspendues." },
        { name: "Voyage temporel", value: "voyager dans le temps, visiter le futur, le passé ou mêmes des lignes temporelles alternatives. C’est au MJ de décider si l’histoire peut être altérée en voyageant dans le passé. Par défaut, assumez que vous créez un univers parallèle ou divergent si vous changez l’histoire. De la même façon, tout futur que vous visiterez sera simplement un « futur possible » et pas nécessairement gravé dans le marbre." },
      ],
      limites: [
        { name: "Extra seulement", value: "vous êtes limité à un seul effet du Contrôle temporel et ne pouvez acquérir les autres, que ce soit sous forme d’extras ou de prouesses." },
      ],
    },
    {
      name: "Constructs",
      category: null,
      page: 61,
      kind: "variant",
      variantOf: "Contrôle de la Force",
      value: "Vous pouvez créer des objets solides – des constructs – à partir d’une forme d’énergie (ou de matière). Reportez-vous à l’extra Constructs du pouvoir Contrôle de la Force (page 40) ainsi qu’aux extras similaires nommés constructs des pouvoirs Contrôle de l’énergie et Contrôle élémentaire, en fonction du type d’énergie ou de matière utilisé.",
      extras: [],
      limites: [],
    },
    {
      name: "Conversion d’énergie",
      category: null,
      page: 61,
      kind: "variant",
      variantOf: null,
      value: "Vous pouvez transformer un type d’énergie en un autre. C’est un type de Contrôle d’énergie avec la limite Source, ne fonctionnant qu’avec une énergie ambiante, comme Contrôle de la lumière (Source : sons) pour convertir les sons alentours en lumière. Votre pouvoir de Contrôle de l’énergie est limité par la source disponible. Si vous êtes également résistant au type d’énergie que vous générez ou convertissez, prenez Résistance à ce type d’énergie ou Absorption d’énergie en tant qu’extra de votre pouvoir de Contrôle de l’énergie.",
      extras: [],
      limites: [],
    },
    {
      name: "Corps androïde",
      category: null,
      page: 61,
      kind: "variant",
      variantOf: null,
      value: "Votre origine artificielle signifie que vous êtes un construct plutôt qu’un être vivant normal. Vous pouvez supprimer un pouvoir tiré au hasard et le remplacer par Vitalité (voir page 110).",
      extras: [],
      limites: [],
    },
    {
      name: "Corps artificiel",
      category: null,
      page: 61,
      kind: "variant",
      variantOf: null,
      value: "Votre origine artificielle signifie que vous êtes un construct plutôt qu’un être vivant normal. Vous bénéficiez de Vitalité en plus de vos autres pouvoirs, et vous pouvez abandonner l’un des pouvoirs tirés au sort pour augmenter cette Vitalité au niveau 10.",
      extras: [],
      limites: [],
    },
    {
      name: "Corps de…",
      category: null,
      page: 61,
      kind: "variant",
      variantOf: "Forme alternative",
      value: "Pour les pouvoirs permettant de transformer votre corps en une autre matière ou énergie, reportez-vous à Forme alternative, page 72. Pour certains personnages, un corps alternatif est une condition permanente, appliquant ainsi la limite Constant au pouvoir, ou un aspect adapté qui causera des complications liées à ce type inhabituel d’enveloppe corporelle.",
      extras: [],
      limites: [],
    },
    {
      name: "Corps robotique",
      category: null,
      page: 62,
      kind: "variant",
      variantOf: null,
      value: "Votre origine artificielle signifie que vous êtes un construct plutôt qu’un être vivant normal. Vous pouvez supprimer un pouvoir tiré au hasard et le remplacer par Vitalité totale.",
      extras: [],
      limites: [],
    },
    {
      name: "Corrosion",
      category: "Attaque",
      page: 62,
      kind: "power",
      variantOf: null,
      value: "Vous bénéficiez d’une attaque corrosive, acide, brûlante ou provoquant le pourrissement qui cause des dégâts égaux à votre niveau de pouvoir lors d’une attaque réussie. La cible encaisse ensuite, au début de votre case, la moitié de votre niveau de corrosion pendant deux planches successives, ou jusqu’à ce qu’une action soit entreprise pour neutraliser les effets de l’attaque. La Corrosion endommage les objets en réduisant leur Solidité. Soustrayez le niveau du pouvoir à la Solidité de l’objet. Une fois sa Solidité réduite à 0, l’objet est détruit. Ainsi, un acide de niveau 7 frappant de l’acier (Solidité 8) réduira sa Solidité à 1 (pas plus qu’une feuille de papier) et une seconde attaque identique détruira complétement le métal.",
      extras: [
        { name: "Standard", value: "À distance, Contagieux, Salve." },
        { name: "Pouvoirs", value: "Résistance (à la corrosion)." },
        { name: "Consommation", value: "votre Corrosion réside dans votre bouche et votre système digestif, vous permettant de consommer virtuellement n’importe quoi, la seule limite étant la taille de votre bouche. Vous pouvez donc utiliser votre Corrosion pour manger le canon des armes à feu, mâcher cordes ou câbles, et ainsi de suite… Effet bénéfique collatéral, vous êtes immunisé à tout ce que vous pourriez avaler – principalement les toxines mais aussi des choses comme les grenades !" },
        { name: "Etendu", value: "vos dégâts de Corrosion, réduits de moitié, sont infligés pendant deux planches supplémentaires, sauf s’ils sont neutralisés." },
      ],
      limites: [
        { name: "Bloqué (sensible au matériau)", value: "les dégâts ne sont infligés qu’à un certain type de matériau, comme le bois ou la chair." },
        { name: "Situationnel (sensible aux émotions)", value: "les dégâts ne sont infligés qu’aux créatures ressentant une émotion particulière, comme la peur ou l’avidité." },
      ],
    },
    {
      name: "Cyberkinésie",
      category: null,
      page: 62,
      kind: "variant",
      variantOf: "Interface",
      value: "Voir les pouvoirs Interface (page 82) et Contrôle des machines (page 50).",
      extras: [],
      limites: [],
    },
    {
      name: "Décharge",
      category: "Attaque",
      page: 63,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez projeter, à portée étendue, une attaque sous la forme d’une décharge. Au moment où vous recevez ce pouvoir, choisissez ses effets – force pure, élément, énergie – et de quel type d’attaque il s’agit : Impacter ou Tirer. Votre décharge inflige des dégâts égaux à son niveau.",
      extras: [
        { name: "Standard", value: "Affecte X, Contagieux, Effet secondaire, Salve." },
        { name: "Désintégration", value: "si votre Décharge détruit une cible, celle-ci est complétement vaporisée (transformée en énergie, etc.) sans laisser une seule trace." },
        { name: "Type d’attaque supplémentaire", value: "vous pouvez décider à chaque utilisation de votre Décharge le type d’attaque qu’elle infligera : Impacter ou Tirer." },
      ],
      limites: [
        { name: "Standard", value: "Bloqué par X" },
      ],
    },
    {
      name: "Décharge mentale",
      category: "Esprit",
      page: 63,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez, à portée visuelle, frapper les esprits de décharges de « force » mentale. Effectuez un test de Volonté, avec le niveau de Volonté de votre cible comme Difficulté et infligez des dégâts égaux à votre niveau de pouvoir. Vous ignorez la Résistance aux dégâts mais pas la Résistance mentale. Lorsque vous recevez ce pouvoir, décidez si votre Décharge mentale est une attaque de type Impacter ou Tirer. Si c’est une attaque d’impact, elle ne peut obtenir plus qu’un succès modéré sur une projection (mettant la cible au sol).",
      extras: [
        { name: "Standard", value: "Diffusion, Salve." },
        { name: "Sédation", value: "vous pouvez utiliser votre pouvoir pour que les personnages inconscients le restent : lorsque le sujet devrait normalement se réveiller, faites un test de sa Volonté contre votre niveau de Décharge mentale. Si elle réussit, la cible reprend connaissance normalement, mais si elle échoue, elle reste inanimée pendant 2D6 planches supplémentaires, avec un minimum de planches égal à votre niveau de Décharge mentale. Sur un échec majeur ou pire, le sujet reste inconscient pour tout le reste du chapitre." },
        { name: "Versatile", value: "vous pouvez décider à chaque utilisation de votre Décharge mentale s’il s’agit d’une attaque de type Impacter ou Tirer." },
        { name: "Vertige", value: "votre Décharge mentale ne cause aucun dégât mais inflige à la place la combinaison d’un étourdissement et d’une projection : un succès modéré envoie la cible au sol, un succès majeur l’étourdit pour une planche et un succès massif réduit son Endurance à 0 et la plonge dans l’inconscience. Si vous n’êtes capables que cet effet, appliquez également la limite Extra seulement." },
      ],
      limites: [
        { name: "Standard", value: "Extra seulement." },
      ],
    },
    {
      name: "Densité",
      category: "Altération",
      page: 64,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez augmenter la densité de votre corps, devenant plus lourd, plus fort et plus résistant mais aussi possiblement plus lent. Quand votre pouvoir est actif, votre Force est alors égale au plus élevé de votre niveau de pouvoir ou de votre niveau de Force +1. Vous gagnez le pouvoir Résistance aux dégâts avec un niveau égal à celui de votre Densité.",
      extras: [
        { name: "Immatérialité", value: "vous pouvez aussi diminuer votre densité jusqu’à l’intangibilité et disposer du pouvoir Immatérialité au même niveau que Densité." },
      ],
      limites: [
        { name: "Lent", value: "Votre masse, se densifiant, vous ralentit. Votre Coordination est alors égale au moins élevé entre votre niveau normal ou 10 moins votre niveau de Densité. A Densité 10, vous êtes incapable de bouger sans réussir un test de Volonté de Difficulté 10, ce qui ne vous permet que de réaliser quelques pas." },
      ],
    },
    {
      name: "Désintégration",
      category: null,
      page: 64,
      kind: "variant",
      variantOf: "Décharge",
      value: "Pour des pouvoirs qui détruisent ou désintègrent la matière, reportez-vous à l’extra Désintégration du pouvoir Décharge (page 63) ainsi qu’au pouvoir Corrosion (page 62).",
      extras: [],
      limites: [],
    },
    {
      name: "Détection",
      category: "Perception",
      page: 64,
      kind: "group",
      variantOf: null,
      value: "Vous avez la capacité de percevoir une forme spécifique d’énergie, de pouvoirs ou de présence avec un Eveil égal à votre niveau de Détection. Choisissez l’un des types de détection suivants ou lancez 2D6 sur la table ci-contre. Cette table n’est absolument pas la liste exhaustive des pouvoirs de détection imaginables. Les joueurs souhaitant bénéficier d’une Détection non listée ici sont invités à en discuter avec leur Meneur de Jeu. Dans certains cas, le Meneur de Jeu peut utiliser une capacité opposée, comme Coordination ou Volonté, en tant que Difficulté pour un test de pouvoir pour détecter un sujet se cachant délibérément.",
      table: {
        "dice": "2d6",
        "label": "Type",
        "entries": [
          {
            "name": "Cosmique",
            "roll": [
              2
            ],
            "value": "Vous pouvez détecter les êtres de niveau cosmique, l’énergie cosmique et les événements susceptibles d’affecter l’univers."
          },
          {
            "name": "Émotions",
            "roll": [
              3,
              4
            ],
            "value": "Vous pouvez détecter les états émotionnels ou des émotions particulières, comme la peur ou l’amour."
          },
          {
            "name": "Énergie",
            "roll": [
              5
            ],
            "value": "Vous pouvez détecter différents types d’énergie et suivre des traces d’énergie. Vous pouvez identifier différents types d’énergie avec un test de pouvoir."
          },
          {
            "name": "Magie",
            "roll": [
              6
            ],
            "value": "Vous pouvez détecter l’énergie magique : sorts, artefacts, êtres capables d’utiliser la sorcellerie…"
          },
          {
            "name": "Magnétisme",
            "roll": [
              7
            ],
            "value": "Vous pouvez détecter les champs magnétiques, ce qui inclut l’utilisation de Contrôle magnétique."
          },
          {
            "name": "Pouvoir",
            "roll": [
              8,
              9
            ],
            "value": "Vous pouvez détecter l’utilisation de certains pouvoirs – quand un pouvoir est utilisé ou quand quelqu’un possède un type de pouvoir, comme les pouvoirs mutants ou mentaux."
          },
          {
            "name": "Radiation",
            "roll": [
              10,
              11
            ],
            "value": "Vous pouvez détecter l’énergie radioactive et les sources de radiation, ce qui inclut l’utilisation de Contrôle des radiations."
          },
          {
            "name": "Astrale",
            "roll": [
              12
            ],
            "value": "Vous pouvez détecter l’activité spirituelle, comme celle des fantômes ou des formes astrales."
          }
        ]
      },
      extras: [],
      limites: [],
    },
    {
      name: "Diminution",
      category: "Altération",
      page: 65,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez rapetisser à volonté, jusqu’à une taille minimale montrée dans la table ci-contre. Vous obtenez l’Aspect « petit » qui peut être normalement activé pour des avantages ou des complications. Vous gagnez un modificateur, listé dans la table, à l’attaque et à la défense contre des opposants de taille normale. Quand vous utilisez votre pouvoir de Diminution, vos autres niveaux de capacité (dont la Force) restent inchangés. Aux niveaux 9 à 10, vous pouvez réduire votre taille à des niveaux microscopiques ou atomiques. Vous êtes « hors échelle » : vous ne pouvez plus interagir directement avec le monde normal et devez-vous limiter aux éléments à la même échelle que vous. D’un autre côté, vous pouvez accomplir des exploits comme vous glisser dans des ouvertures infimes ou vous déplacer entre les molécules. 2d6 Type Effet 2 Cosmique Vous pouvez détecter les êtres de niveau cosmique, l’énergie cosmique et les événements susceptibles d’affecter l’univers. 3-4 Emotions Vous pouvez détecter les états émotionnels ou des émotions particulières, comme la peur ou l’amour. 5 Energie Vous pouvez détecter différents types d’énergie et suivre des traces d’énergie. Vous pouvez identifier différents types d’énergie avec un test de pouvoir. 6 Magie Vous pouvez détecter l’énergie magique : sorts, artefacts, êtres capables d’utiliser la sorcellerie… 7 Magnétisme Vous pouvez détecter les champs magnétiques, ce qui inclue l’utilisation de Contrôle magnétique. 8-9 Pouvoir Vous pouvez détecter l’utilisation de certains pouvoirs – quand un pouvoir est utilisé ou quand quelqu’un possède un type de pouvoir, comment les pouvoirs mutants ou mentaux. 10-11 Radiation Vous pouvez détecter l’énergie radioactive et les sources de radiation, ce qui inclut l’utilisation de Contrôle des radiations. 12 Astrale Vous pouvez détecter l’activité spirituelle, comme celle des fantômes ou des formes astrales. Niv. Taille Modif. 1 1,20 mètres 0 2 90 cm 0 3 60 cm +1 4 30 cm +1 5 15 cm +2 6 7 cm +2 7 3 cm +3 8 Insecte +3 9 Microscopique 10 Atomique -",
      extras: [
        { name: "Pouvoirs", value: "Téléportation (transmission via les lignes téléphoniques)." },
        { name: "Elan", value: "vous grossissez rapidement sous une cible en utilisant l’élan du retour à votre taille normale pour augmenter une attaque. Ajoutez le modificateur de votre niveau de Diminution, comme indiqué sur la table ci-dessus, comme bonus à votre attaque sans arme." },
        { name: "Monde micro", value: "vous pouvez réduire votre taille sous le niveau atomique et pénétrer dans un monde microscopique ou une réalité alternative similaire. Dans ce monde, vous pouvez bénéficier (à la discrétion du MJ) du pouvoir Gigantisme à un niveau équivalent à votre pouvoir de diminution dans le monde réel." },
      ],
      limites: [
        { name: "Réduction de Force", value: "plus vous réduisez votre taille et plus votre force diminue : soustrayez votre niveau de Diminution à votre niveau de Force, jusqu’à ce que celui atteigne 0 et passe hors-échelle." },
      ],
    },
    {
      name: "Domination",
      category: "Esprit",
      page: 66,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez prendre le contrôle de l’esprit d’une cible à portée visuelle, lui octroyant l’aspect temporaire « contrôlé », aspect que vous pouvez activer gratuitement tant qu’il dure, généralement pour imposer des compulsions. Faites un test de Domination contre Volonté : • Un échec signifie que votre tentative de contrôle n’a aucun effet et vous devrez avoir recours à l’effort tenace pour tenter à nouveau de contrôler la même cible durant ce chapitre. • Un succès marginal n’entraîne aucun effet, mais vous pouvez tenter à nouveau sans recourir à l’effort tenace. • Un succès modéré attribue l’aspect « contrôlé » à votre cible. Concentrez-vous et réussissez un nouveau test de Domination contre sa Volonté au début de chacune de vos planches pour maintenir l’effet. • Un succès majeur attribue l’aspect « Contrôlé » à votre cible. Concentrez-vous et réussissez un nouveau test de Domination contre sa Volonté après une durée égale à votre niveau pour maintenir l’effet. • Un succès massif attribue l’aspect « Contrôlé » à votre cible. Concentrezvous pour maintenir l’effet durant l’intégralité du Chapitre. Les autres aspects de la cible peuvent être activés pour lui permettre de récupérer, auquel cas vous devrez réaliser un nouveau test de Domination pour maintenir l’effet.",
      extras: [
        { name: "Standard", value: "Diffusion, Salve." },
        { name: "Pouvoirs", value: "Augmentation de capacité (vous-même ou vos cibles), Invisibilité (esprits seulement)." },
        { name: "Addiction", value: "si vous utilisez votre Domination sur une cible chaque jour pendant une semaine, faites un test de Domination opposé à sa Volonté pour lui donner l’aspect « Accro à la domination »." },
        { name: "Effacement", value: "vous pouvez altérer la mémoire de votre cible. Cela requiert une planche de préparation, suivi d’un test de Domination contre sa Volonté. Avec un succès majeur ou supérieur, la mémoire du sujet est altérée : cela ne change rien à ses capacités, spécialités ou pouvoirs mais peut changer ou limiter l’accès à certains aspects ou connaissances de ses capacités." },
        { name: "Fusion", value: "votre propre corps disparait lorsque vous contrôlez une cible, fusionnant avec le sien. Vous réapparaissez à portée proche de votre cible lorsque la Domination prend fin." },
        { name: "Lien mental", value: "vous gagnez Télépathie, mais seulement avec votre cible. Vous pouvez communiquer vos ordres télépathiquement et pouvez percevoir en utilisant les sens de votre victime." },
        { name: "Possession", value: "votre esprit est « à l’intérieur » du corps de votre victime, que vous contrôlez. Vous pouvez dépenser vos propres points de Ténacité pour les actions de votre cible et vous êtes conscient de tout ce qui se passe de son point de vue." },
      ],
      limites: [
        { name: "Standard", value: "Bloqué par X, Portée proche, Concentration, Extra seulement, Situationnel, Transe." },
        { name: "Contrôle animal", value: "vous ne pouvez dominer que les esprits des animaux." },
        { name: "Contact visuel", value: "vous devez regarder votre cible dans les yeux, limitant votre portée à étendue. Cela peut aussi requérir un test de Coordination en plus de votre test de Domination." },
        { name: "Domination des non-morts", value: "vous ne pouvez dominer que les créatures mortes-vivantes. La bonne nouvelle, c’est que votre pouvoir affecte même les morts-vivants normalement immunisés aux pouvoirs mentaux (comme les zombies dénués d’esprit)." },
        { name: "Echange d’esprit", value: "vous échangez votre esprit avec celui de votre cible, vous vous retrouvez dans son corps et elle dans le vôtre. Chacun conserve ses propres capacités, spécialités et pouvoirs mentaux, mais gagnent les capacités, les spécialités et les pouvoirs physiques de l’autre. Pour le reste, cela fonctionne comme l’extra Possession (que vous devez avoir pour pouvoir prendre cette limite)." },
        { name: "Hypnose", value: "vous pouvez donner un ordre ou implanter une seule suggestion, mais vous ne pouvez pas contrôler continuellement votre cible." },
        { name: "Marque de dominance", value: "votre cible souffre d’une altération de son apparence pendant que vous la dominez, comme des yeux brillants ou une coloration de peau étrange." },
        { name: "Phéromones", value: "votre pouvoir fonctionne au travers d’odeurs émises par votre corps. Tout ce qui les bloquent (comme une combinaison étanche ou un masque de filtration) empêche votre pouvoir de fonctionner." },
        { name: "Un seul type", value: "vous ne pouvez dominer qu’un seul type de cible, comme les hommes ou les femmes, les mutants et ainsi de suite…" },
      ],
    },
    {
      name: "Drain d’énergie",
      category: "Attaque",
      page: 68,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez drainer la force vitale d’une cible en la touchant. Effectuez un test de Vaillance pour atteindre votre victime. En cas de succès, testez votre Drain de vie contre la Force ou la Volonté de la cible (choisissez lequel des deux lorsque vous obtenez ce pouvoir). La victime perd un nombre de points d’Endurance équivalent à la marge, alors que vous en regagnez autant (si vous en aviez préalablement perdu). La marge est limitée par le niveau de votre pouvoir.",
      extras: [
        { name: "Standard", value: "À distance, Contagieux, Récupération lente." },
        { name: "Drain de capacité", value: "votre pouvoir draine une capacité plutôt que l’Endurance. Après une durée égale au niveau, la capacité drainée récupère 1 point par page jusqu’à son maximum. Chaque capacité affectée est un extra séparé. Si vous pouvez drainer une capacité et l’Endurance en même temps, ce fait est couvert par un extra supplémentaire." },
        { name: "Infection", value: "une victime drainée par Drain de vie (voir ci-dessous) revient d’entre les morts sous la forme d’un draineur d’énergie comme vous, placé sous votre contrôle mental." },
        { name: "Influence", value: "Jusqu’à ce que votre victime ait complétement récupéré, vous pouvez lui parler télépathiquement et essayer de la contrôler avec une Domination au même niveau que votre pouvoir de Drain d’énergie." },
        { name: "Drain de vie", value: "les victimes drainées jusqu’à 0 Endurance doivent faire un test de Force contre votre niveau de pouvoir : un échec signifie qu’elles commencent à perdre des niveaux de Force et à mourir." },
        { name: "Stockage", value: "votre Drain d’énergie vous permet d’augmenter votre Endurance au-delà de votre maximum, à hauteur de votre niveau de pouvoir. Vous perdez cette Endurance surnuméraire au rythme d’un point par minute." },
      ],
      limites: [],
    },
    {
      name: "Duplication",
      category: "Altération",
      page: 68,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez tirer de nulle part des duplicatas exacts de vousmême. Vous pouvez créer un nombre de copies égal au niveau du pouvoir : 1 copie avec Duplication 1, 2 copies avec Duplication 2 et ainsi de suite. Le pouvoir de créer un nombre virtuellement illimité de copies est considéré hors-échelle et mieux adapté aux vilains et aux personnages du Meneur de Jeu. Créer une copie prend une planche de préparation. Les copies ont les mêmes capacités que vous, à l’exception de ce pouvoir : elles ne peuvent donc pas se copier. Les copies accomplissant ensemble la même action peuvent profiter des règles d’Effort combiné (voir effort combiné dans le chapitre Les bases du livre de base d’ICONS). Les copies n’ont pas de Ténacité, mais vous pouvez partager vos Points de Ténacité avec elles. Une copie morte ou inconsciente disparaît. Si vous êtes tué ou assommé, toutes vos copies disparaissent.",
      extras: [
        { name: "Copies réelles", value: "toutes vos copies sont « réelles ». Une copie inconsciente ou morte disparait toujours mais il n’y a pas de « maillon faible » qui les fait toutes disparaître lorsque vous êtes vous-même assommé ou tué. Tant que l’une de ces copies survit, vous survivez." },
        { name: "Instantané", value: "votre Duplication ne nécessite aucune préparation, vous pouvez le faire instantanément. Vous devez toutefois utiliser le pouvoir sur votre case et vous ne pouvez créer qu’une seule copie par planche, à moins que vous ne bénéficiiez en plus de l’extra Multiple, présenté ci-dessous." },
        { name: "Lien mental", value: "vous et vos copies partagez un lien mental vous permettant de communiquer silencieusement et instantanément." },
        { name: "Multiple", value: "vous permet de produire votre maximum de copies en une seule case, et pas une seule à la fois." },
        { name: "Réabsorption guérissante", value: "quand vous absorbez une copie, vous gagnez le bénéfice du pouvoir Guérison, égal à la moitié de l’Endurance actuelle de la copie (arrondi à l’inférieur)." },
        { name: "Réaction", value: "vous pouvez vous dupliquer en réponse à une circonstance, comme être frappé ou exposé à un son puissant. La duplication a lieu instantanément, sous forme de réaction." },
      ],
      limites: [
        { name: "Choc de retour", value: "vous subissez les mêmes résultats d’étourdissement (mais pas d’autres effets) que vos copies." },
        { name: "Copies du futur", value: "toutes vos copies sont votre « moi » réel mais venues de différents points de votre futur. Cela signifie que si l’une de vos copies est tuée, vous mourrez vous-même dans un futur plus ou moins proche." },
        { name: "Copies illusoires", value: "vos copies ne sont pas réelles, ce sont juste des illusions intangibles. Elles sont adaptées à provoquer des distractions, mais à rien d’autre. L’avantage, c’est que vous bénéficiez des extras Instantané et Multiple sans coût additionnel." },
        { name: "Copies vivantes", value: "vos copies tuées ne réapparaissent jamais. Quand une copie décède, réduisez votre niveau de pouvoir de 1, de façon permanente." },
        { name: "Séparation anatomique", value: "plutôt que de vous dupliquer, vous séparez sans dommages votre corps en segments, détachant une main ou un membre, par exemple. Les parties séparées peuvent agir indépendamment. Vous pouvez produire un nombre de morceaux égal à votre niveau de pouvoir." },
      ],
    },
    {
      name: "Échange d’esprit",
      category: null,
      page: 70,
      kind: "variant",
      variantOf: "Domination",
      value: "Vous pouvez échanger votre esprit avec celui d’une cible. Voir la limite Echange d’esprit et l’extra Possession sous le pouvoir Domination (page 66).",
      extras: [],
      limites: [],
    },
    {
      name: "Élasticité",
      category: "Altération",
      page: 70,
      kind: "power",
      variantOf: null,
      value: "Votre corps et vos membres sont élastiques et peuvent s’allonger, vous permettant d’atteindre ou d’attaquer des cibles à portée étendue. Pour refléter la difficulté à réaliser des manipulations précises à distance, vos capacités sont limitées par votre niveau en Elasticité lorsque vous vous allongez. Le Meneur de Jeu peut demander un test d’Élasticité pour des utilisations complexes de vos capacités ou leur emploi à des distances extrêmes. Vous pouvez utiliser votre niveau d’Elasticité pour tenter de vous échapper (voir Se libérer dans Action ! du livre de base).",
      extras: [
        { name: "Pouvoirs", value: "Contrôle des dimensions (2D seulement), Forme alternative (forme fluide seulement), Métamorphose, Résistance (à l’Immobilisation, aux dégâts), Vol (glissade seulement)" },
        { name: "Durcissement", value: "vous pouvez agrandir et renforcer vos poings, vous donnant une Frappe de type Cogner égale à votre niveau d’Elasticité." },
        { name: "Filet", value: "vous pouvez substituer votre niveau d’Elasticité à votre Coordination pour attraper des gens ou des objets qui chutent." },
        { name: "Rebond", value: "votre forme élastique vous donne le pouvoirs Bonds à votre niveau de pouvoir, par le fait de « rebondir », cela vous offre aussi une Résistance aux dégâts des chutes, là encore à votre niveau de pouvoir." },
      ],
      limites: [
        { name: "Elongation", value: "vous ne pouvez allonger que vos membres, vous permettant d’atteindre ou de frapper à distance, et de franchir des obstacles, mais vous ne pouvez prendre aucun autre des extras associés à ce pouvoir (comme avec la limite Aucun extra)." },
        { name: "Gonflage", value: "vous ne pouvez que faire gonfler votre corps comme un ballon de plage. Les extras Résistance aux dégâts et Rebond sont inclus et offerts dans cette limite, mais pas les capacités de base d’Elasticité et vous ne pouvez acquérir aucun autre extra." },
        { name: "Rétraction lente", value: "redonner une forme normale à votre corps, ou toute partie de votre corps que vous avez étendu, vous demande une planche de préparation." },
      ],
    },
    {
      name: "Élongation",
      category: null,
      page: 71,
      kind: "variant",
      variantOf: "Elasticité",
      value: "Vous avez une forme élastique, capable d’élongation. Voir le pouvoir Elasticité (page 70).",
      extras: [],
      limites: [],
    },
    {
      name: "Empathie",
      category: null,
      page: 71,
      kind: "variant",
      variantOf: null,
      value: "Reportez-vous à Détection des émotions, sous Détection (page 64).",
      extras: [],
      limites: [],
    },
    {
      name: "Évolution",
      category: "Altération",
      page: 71,
      kind: "power",
      variantOf: null,
      value: "Vous avez la capacité de vous déplacer à volonté sur l’échelle de l’évolution, en arrière ou en avant, vous transformant soit en un homme des cavernes primitif, soit en un humanoïde rachitique au cerveau surdéveloppé (oui, nous parlons ici « d’évolution de comic-book », pas de science). L’exacte apparence de vos deux versions est laissée à l’appréciation du Meneur de Jeu. Primitif Si vous régressez, vous devenez un hominidé ou un homme-singe doté d’une Intelligence de 1 et d’une Force égale à votre niveau en Evolution (ou votre Force habituelle +1 selon ce qui est le plus haut). De plus, votre version primitive gagne l’une des particularités suivantes : soit deux spécialités appropriées comme Athlétisme, Arts martiaux (bagarre), Résistance mentale, Discrétion ou Lutte ; soit une Frappe avec un bonus égal au niveau de votre pouvoir Evolution ; soit des pieds préhensiles utilisables comme des mains, comme l’extra Bras supplémentaires du pouvoir Membres additionnels. Vous pouvez choisir des particularités supplémentaires sous forme d’extra. Futuriste Si vous évoluez, vous devenez un être futuriste doté d’une tête élargie, d’une Force réduite à 1 et d’un Intellect égal à votre niveau en Evolution (ou votre Intellect habituel +1 selon ce qui est le plus haut). De plus, votre version futuriste gagne : soit deux spécialités basées sur un savoir avancé ; soit un pouvoir d’Esprit ou de Perception égal à votre niveau d’Evolution (à choisir lorsque vous obtenez ce pouvoir). Vous pouvez gagner des pouvoirs d’Esprit ou de Perception additionnels sous forme d’extras.",
      extras: [
        { name: "Standard", value: "Affecte les autres." },
        { name: "Invocation évolutionnaire", value: "plutôt que de vous transformer en une version évolutionnaire, vous invoquez une ou plusieurs d’entre elles à vos côtés en tant qu’êtres distincts, comme si vous disposiez du pouvoir Duplication au même niveau." },
        { name: "Modification évolutionnaire", value: "vous pouvez vous transformer en différentes formes évolutionnaires, variant les capacités de chacune. Vous pouvez sélectionner les capacités optionnelles de chaque forme à chaque transformation." },
        { name: "Primordial", value: "vous gagnez une troisième forme évolutionnaire : un protoplasme primordial, comme une sorte d’amibe à taille humaine. Cette forme protoplasmique voit son Intellect et sa Volonté réduits à 1 mais dispose de Corrosion, Résistance aux dégâts et Elasticité au même niveau que votre pouvoir Evolution." },
      ],
      limites: [
        { name: "Une seule direction", value: "vous pouvez régresser ou évoluer, mais pas les deux." },
      ],
    },
    {
      name: "Forme alternative",
      category: "Altération",
      page: 72,
      kind: "group",
      variantOf: null,
      value: "Forme Alternative vous permet de prendre une forme non-biologique. Choisissez une forme ou lancez un dé sur la table suivante : 1d6 Capacité 1 Forme énergétique 2 Forme explosive 3 Forme fluide 4 Forme gazeuse 5 Forme d’ombre 6 Forme solide Changer de forme demande une planche de préparation mais vous pouvez retourner instantanément à votre forme originelle pendant votre case. En fonction de votre forme alternative, et avec l’accord du Meneur de Jeu, vous pouvez utiliser le niveau de votre pouvoir pout déterminer les dégâts lors que vous attaquez en combat rapproché (frapper avec des poings d’acier, enflammer des choses alors que vous êtes constitué de flammes, faire suffoquer avec de l’eau ou du gaz, brûler avec de l’acide…) Chaque type de Forme alternative est en soi un groupe de pouvoirs, vous aurez donc en pouvoir individuel un pouvoir comme Forme électrique, Forme de Feu, Forme gazeuse, Forme de métal, Forme d’eau et ainsi de suite. Forme énergétique Vous vous transformez en champ énergétique cohérent dont vous devez choisir la nature à l’acquisition du pouvoir (voir Contrôle de l’énergie pour les possibilités). Vous obtenez le pouvoir de Vol au même niveau que votre Forme alternative et vous êtes immunisé contre toute attaque physique. Toutefois, vous ne disposez plus d’aucune Force et vous échouez automatiquement à tout test de Force pour toucher ou affecter des objets physiques. Les attaques affectant votre type d’énergie continuent à vous affecter. Vous pouvez acquérir le pouvoir Contrôle de l’énergie – du même type que votre forme – sous forme d’extra. Forme explosive Vous êtes à même de faire exploser votre corps ! Faites un test du niveau de votre pouvoir contre la Coordination de toute personne à portée proche, et considérez le résultat comme un test d’Impacter ou de Tirer (choisissez lequel quand vous faites l’acquisition de ce pouvoir). Vous vous réassemblez au début de la prochaine planche. Tant que vous n’êtes pas recomposé, vous êtes immunisé à toute forme d’attaque physique mais restez incapable d’affecter le monde physique. Vous pouvez retarder votre recomposition d’autant de planches que votre niveau de pouvoir et vous pouvez décider de vous reformer n’importe où à portée étendue de l’endroit où vous avez détonné. Sous forme d’extra, vous pouvez ajouter à votre pouvoir la capacité de Téléportation, au même niveau que votre pouvoir, vous permettant après explosion de vous réassembler encore plus loin (voir Téléportation, page 107) Forme Fluide Vous prenez une forme fluide et vous pouvez vous écouler par des fissures ou d’autres espaces étroits. Vous pouvez devenir un liquide, comme de l’eau, une masse de particules fines, comme de la poussière ou du sable, ou bien encore une masse d’insectes ou de minuscules robots. Tant que vous êtes sous cette forme, vous bénéficiez de Résistance aux dégâts et d’Elasticité au même niveau que votre Pouvoir. Forme Gazeuse Vous vous transformez en nuage de gaz ou de toutes autres particules portées par l’air, peutêtre même une nuée d’insectes ou de nanites. Vous gagnez Vol à 1 et vous pouvez flotter à travers tous les interstices non scellés. Vous êtes immunisé à toute forme d’attaque physique autres que celles capables d’affecter ou de disperser un nuage. Forme d’Ombre Vous vous transformez en une silhouette plate, reflet de votre apparence normale. Vous n’avez plus aucune Force et vous échouez automatiquement à tout test de Force pour toucher ou affecter des objets physiques. Vous êtes immunisé à toute forme d’attaque physique, excepté celles basées sur la lumière qui ont par ailleurs sur vous un effet de Paralysie en plus de leur effet normal. Vous bénéficiez, au même niveau que votre Forme d’ombre, des pouvoirs Accroches, Invisibilité et de la faculté 2D du pouvoir Contrôle dimensionnel, tant que vous restez entouré d’ombres ou de lumière tamisée. Solide Vous prenez l’apparence d’un matériau dense, comme le métal ou la pierre. Votre Force augmente alors de +1 ou devient égale au niveau de votre pouvoir (selon ce qui est le plus élevé), et vous bénéficiez de Résistance aux dégâts, égale au niveau de votre pouvoir.",
      table: {
        "dice": "1d6",
        "label": "Forme",
        "entries": [
          {
            "name": "Forme énergétique",
            "roll": [
              1
            ]
          },
          {
            "name": "Forme explosive",
            "roll": [
              2
            ]
          },
          {
            "name": "Forme fluide",
            "roll": [
              3
            ]
          },
          {
            "name": "Forme gazeuse",
            "roll": [
              4
            ]
          },
          {
            "name": "Forme d’ombre",
            "roll": [
              5
            ]
          },
          {
            "name": "Forme solide",
            "roll": [
              6
            ]
          }
        ]
      },
      extras: [
        { name: "Large", value: "vous pouvez vous transformer en n’importe quelle forme au sein de votre groupe de forme alternative plutôt qu’en une forme spécifique : toute forme énergétique ou gazeuse plutôt qu’une seule, par exemple." },
        { name: "Instantané", value: "vous pouvez assumer votre forme alternative sans aucune préparation." },
      ],
      limites: [],
    },
    {
      name: "Forme animale",
      category: null,
      page: 74,
      kind: "variant",
      variantOf: "Métamorphose",
      value: "Reportez-vous à la section Animaux sous le pouvoir Métamorphose (page 85). Les créatures garous ont typiquement la limite Un seul type, leur permettant de se métamorphoser en une unique forme hybride entre l’homme et l’animal.",
      extras: [],
      limites: [],
    },
    {
      name: "Forme d’ombre",
      category: null,
      page: 74,
      kind: "variant",
      variantOf: "Forme alternative",
      value: "Vous pouvez vous transformer en une ombre vivante. Reportez-vous à Forme d’ombre sous le pouvoir Forme alternative, page 72.",
      extras: [],
      limites: [],
    },
    {
      name: "Forme fantomatique",
      category: null,
      page: 74,
      kind: "variant",
      variantOf: "Immatérialité",
      value: "Vous êtes incorporel, comme un fantôme. Reportez-vous au pouvoir Immatérialité, page 80. Les fantômes non morts ont typiquement les extras Flottant et Vitalité du pouvoir Immatérialité.",
      extras: [],
      limites: [],
    },
    {
      name: "Fouissage",
      category: "Mouvement",
      page: 74,
      kind: "power",
      variantOf: null,
      value: "Vous avez la capacité de creuser dans le sol, à une vitesse égale à votre vitesse de déplacement normale, à travers tous les matériaux souterrains dont la Solidité est inférieure ou égale au niveau de votre pouvoir. Les matériaux plus solides vous ralentissent, divisant par 2 votre vitesse de déplacement par niveau de différence. Lorsque vous creusez, vous pouvez laisser un tunnel derrière vous, permettant à d’autres de l’emprunter, ou le combler automatiquement, à votre guise.",
      extras: [],
      limites: [
        { name: "Un seul type", value: "vous ne pouvez creuser qu’au travers d’un type particulier de matériau, comme le sable ou la glace." },
      ],
    },
    {
      name: "Frappe",
      category: "Attaque",
      page: 75,
      kind: "power",
      variantOf: null,
      value: "Vous possédez une arme de corps à corps, comme des griffes, des épines ou une arme de contact, couteau, épée ou marteau. Au moment où vous obtenez ce pouvoir, choisissez les effets de votre Frappe : estce une attaque de type Cogner ou Taillader ? Si vous tailladez, votre attaque inflige des dégâts égaux au niveau de votre pouvoir Frappe. Si vous cognez, votre attaque inflige des dégâts égaux au plus élevé entre votre niveau de votre pouvoir Frappe ou votre Force +1.",
      extras: [
        { name: "Standard", value: "Affecte X, Attaque secondaire, Contagieux." },
        { name: "Deux types", value: "votre Frappe peut être de type Cogner et Taillader. Choisissez le type d’attaque porté à chaque utilisation." },
      ],
      limites: [],
    },
    {
      name: "Gadgets",
      category: "Contrôle",
      page: 75,
      kind: "power",
      variantOf: null,
      groupOf: "Arcanes",
      value: "Vous pouvez produire un très large choix d’accessoires, vous octroyant divers pouvoirs au niveau de votre pouvoir Gadgets. Prenez une planche de préparation et choisissez un pouvoir dont vous voulez dupliquer les effets. Faites un test d’Intellect – incluant tout spécialité appropriée – contre une Difficulté égale au niveau de pouvoir souhaité, avec comme limite votre propre niveau en Gadgets. Un succès vous donne un gadget capable de dupliquer le pouvoir souhaité pour le reste du chapitre ; un échec signifie que vous devrez recourir à un effort tenace pour essayer à nouveau. Vous pouvez aussi dépenser un point de Ténacité pour produire automatiquement le gadget désiré, sans faire de test. Reportez-vous au chapitre Accessoires pour des idées de gadgets. Votre pouvoir Gadgets est dépendant de votre équipement – technologique ou autre. Si vous en êtes privé, votre capacité à utiliser vos gadgets peut se retrouver limitée, ou même supprimée, jusqu’à ce que vous recouvriez votre matériel.",
      extras: [
        { name: "Arsenal", value: "Vous avez un gadget particulier qui est toujours disponible et ne requiert aucun test de configuration. Chaque fois que vous appliquez cet extra, ajoutez un nouvel accessoire permanent à votre arsenal." },
        { name: "Instantané", value: "vous pouvez configurer des gadgets instantanément sans planche de préparation." },
      ],
      limites: [
        { name: "Lié à une capacité", value: "votre niveau de Gadgets est lié à votre niveau d’Intellect, peut-être modifié par une spécialité appropriée, et ne peut excéder ce niveau. Réduisez tout niveau tiré au hasard sur la table de détermination pour votre pouvoir à celui de votre intellect ou spécialité. Les modifications de niveau dues à des limites (incluant celle-ci) ne peuvent augmenter le pouvoir audelà de la capacité liée." },
        { name: "Un seul type", value: "vous ne pouvez créer qu’un seul type de gadgets, comme seulement des armes ou des accessoires de ninja, par exemple." },
      ],
    },
    {
      name: "Gestalt",
      category: "Altération",
      page: 76,
      kind: "power",
      variantOf: null,
      value: "Un gestalt est la fusion de deux ou plusieurs êtres pour en former un autre. Les êtres composants le Gestalt ont généralement des personnalités et des traits différents et se combinent pour créer un tout plus puissant. Les pouvoirs de la forme unie peuvent dériver des corps séparés ou se manifester uniquement dans le Gestalt. Tous les composants doivent se réunir pour générer la forme unie, être à portée proche et prendre une planche de préparation pour se transformer. Le nombre maximum d’individus composant le Gestalt est égal au niveau du pouvoir. En plus des statistiques de la forme unie, chaque individu devrait voir ses capacités définies. Il incombe au joueur et au Meneur de Jeu de décider si la forme unie a une personnalité ou plusieurs, et si la personnalité unie dérive de celle des individus la composant ou pas. Généralement, chaque capacité et pouvoir de la forme unie a pour niveau maximum soit le niveau du pouvoir Gestalt, soit la plus haute valeur chez les individus le composant, avec un maximum de 10. Exemple : les cinq membres de la Main de la Reine Dragon peuvent se combiner pour former le redouté Quintuple Dragon : un monstre à cinq têtes. Chacune d’entre elles a le même pouvoir de Contrôle de l’énergie que l’un des individus la composant, sous la forme d’un souffle dévastateur. Le monstre a aussi une Force et une Résistance aux dégâts égale à 8, soit leur niveau dans le pouvoir Gestalt. Les dégâts infligés aux formes séparées ne se transfèrent pas à la forme unie, mais par contre, les dégâts subis par le Gestalt, eux, se transfèrent bien aux individus, divisés également entre eux lors qu’ils se séparent.",
      extras: [
        { name: "Gestalt déguisé", value: "vous pouvez prendre l’apparence de n’importe lequel des individus qui composent le Gestalt tout en maintenant les capacités de votre forme unie." },
        { name: "Instantané", value: "les composants du Gestalt peuvent se combiner instantanément sans planche de préparation." },
        { name: "Lien mental", value: "les esprits composant le Gestalt peuvent communiquer télépathiquement, sans limite de distance. Si votre forme unie dispose d’un esprit indépendant, ses composants peuvent communiquer avec elle lorsqu’ils ont assumé leur forme de Gestalt." },
        { name: "Résistance mentale", value: "en raison des multiples qui la composent, votre forme unie gagne le pouvoir Résistance mentale au même niveau que votre pouvoir Gestalt (voir Résistance, page 100)" },
        { name: "Changement d’esprit", value: "le contrôle de la forme unie peut passer de l’esprit d’un des individus à un autre. Si l’esprit en charge ne souhaite pas laisser le contrôle, un autre esprit du groupe peut prendre la main avec un test de Volonté en opposition." },
        { name: "Sans limite de distance", value: "les composants du Gestalt peuvent s’unir quelle que soit la distance entre eux." },
      ],
      limites: [],
    },
    {
      name: "Gigantisme",
      category: "Altération",
      page: 77,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez grandir à volonté, augmentant votre puissance et votre résistance, mais devenant aussi plus facile à voir et à toucher. Tant que vous êtes agrandi, vous acquérez l’aspect « Large » qui peut être activé normalement pour des avantages ou des complications. Votre niveau de Force est égal au plus élevé de votre niveau de Gigantisme ou de votre Force +1. Vous gagnez une Résistance aux dégâts égale au niveau de votre pouvoir. Votre taille est basée sur votre niveau de gigantisme, comme indiqué dans la table ci-dessous, et vous souffrez d’une pénalité aux tests pour vous défendre ou vous cacher en fonction de la taille que vous choisissez d’assumer, puisque vous simplifiez la tâche aux adversaires qui souhaitent vous voir ou vous frapper. Niv. Taille Défense 1 3 mètres 0 2 4 mètres — 1 3 5 mètres — 1 4 6 mètres — 1 5 7 mètres — 1 6 8 mètres — 2 7 9 mètres — 2 8 10 mètres — 2 9 18 mètres — 3 10 36 mètres — 3",
      extras: [],
      limites: [],
    },
    {
      name: "Griffes",
      category: null,
      page: 78,
      kind: "variant",
      variantOf: "Membres additionnels",
      value: "Reportez-vous aux pouvoirs Membres additionnels (page 84) et Frappe (page 75). Les griffes infligent généralement des dégâts de type Taillader et peuvent s’étendre à des choses comme des dents aiguisées, des serres, des crocs, des épines, des excroissances osseuses et ainsi de suite. Pour des armes naturelles qui peuvent infliger des dégâts à toute personne vous attaquant, voyez plutôt le pouvoir Aura (page 36).",
      extras: [],
      limites: [],
    },
    {
      name: "Guérison",
      category: "Contrôle",
      page: 78,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez restaurer les pertes d’Endurance et de Force chez les autres. Touchez votre patient et utilisez une action pour restaurer autant d’Endurance que votre niveau en Guérison. Guérison ne peut pas augmenter l’Endurance au-delà de son niveau initial. Au maximum, par numéro, il vous est possible de rendre à un patient un nombre de points d’Endurance égal à 2 fois votre niveau en Guérison. Au-delà de ce nombre de points, toute nouvelle utilisation supplémentaire de ce pouvoir sur le même patient imposera de recourir à un effort tenace. Guérison peut aussi restaurer la Force perdue. Faites un jet de Guérison, difficulté 2, pour restaurer 1 niveau de Force. Si le test échoue, vous restaurez bien la Force de votre patient mais perdez vousmême 1 niveau de Force ! Vous devrez récupérer normalement par le repos. Si votre Guérison est de niveau 7 ou supérieur, vous n’avez pas de test à faire et vous réussissez automatiquement.",
      extras: [
        { name: "Pouvoirs", value: "Adaptation (Affecte les autres), Affliction, Drain d’énergie, Nullification (pouvoirs biologiques), Résistante (aux attaques biologiques), Rayon altérant." },
        { name: "Auto-guérison", value: "en plus de pouvoir soigner les autres, vous pouvez utiliser Guérison sur vous-même. Pour ce faire, vous devez être conscient et capable d’agir." },
        { name: "Fortifiant", value: "vous n’avez pas besoin de faire un test de Guérison lorsque vous souhaitez restaurer de la Force perdue, quelque que soit le niveau de votre pouvoir." },
        { name: "Greffe", value: "vous pouvez greffer des parties biologiques à vos patients, qu’il s’agisse de remplacer un organe ou un membre perdu ou endommagé ou d’en ajouter de tous nouveaux (voir Membres additionnels page 84)." },
        { name: "Résurrection", value: "vous pouvez redonner vie aux morts ! Faites un test de Guérison avec comme Difficulté le nombre de minutes depuis lesquelles votre sujet est décédé. Si le test échoue, vous ne pouvez redonner vie à votre patient. S’il réussit, le sujet revient à la vie avec un niveau de Force réduit à 1 et doit ensuite récupérer normalement. Quoiqu’il en soit, faites un test de Guérison de Difficulté 2 pour éviter de perdre vous-même un niveau de Force." },
        { name: "Traitement", value: "votre pouvoir de Guérison peut éliminer les effets des maladies et des toxines. Cela requiert un test de pouvoir, dont la Difficulté est basée sur le niveau de la maladie ou de la toxine. Il faut au moins obtenir un succès modéré, bien qu’un succès majeur puisse être requis par le MJ dans certains cas. Dans ce cas de figure, un succès modéré empêche la progression de la maladie, mais ne la soigne pas. Vous pouvez substituer votre niveau en Guérison à toute capacité utilisée pour résister au pouvoir Affliction." },
      ],
      limites: [
        { name: "Empathie", value: "vous encaissez tous les dégâts que vous guérissez. Vous pouvez utiliser Auto-guérison (voir dans les extras ci-dessus) ou le pouvoir Régénération (page 99) pour vous en remettre, si vous en disposez." },
      ],
    },
    {
      name: "Illusion",
      category: "Esprit",
      page: 79,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez projeter de fausses impressions sensorielles dans d’autres esprits, créant ainsi des hallucinations vraiment réalistes. Votre pouvoir n’a aucun effet sur les machines comme les caméras, les microphones et autres senseurs. Les cibles considèrent vos illusions comme réelles à moins qu’elles n’aient une bonne raison de ne pas y croire – dans ce cas, effectuez un test d’Eveil contre un test d’Illusion. Si la cible le remporte, elle a écarté l’illusion et sait qu’elle est fausse. En cas d’échec, les cibles réagissent normalement aux illusions, souffrant même des dégâts imaginaires infligés par des attaques illusoires, la « mort » n’étant alors qu’inconscience (comme un test raté pour éviter d’être étourdi). Bien que vos illusions puissent tromper votre prochain, elles n’ont aucun effet sur le monde physique. Un mur illusoire bloquera les gens qui le pensent réel mais pas un camion lancé dessus, un sol illusoire ne supportera aucun poids et les choses le traverseront directement, un feu illusoire ne brûlera en réalité rien et ainsi de suite…",
      extras: [
        { name: "Pouvoirs", value: "Aveuglement, Décharge mentale, Domination (hypnose), Duplication (copies illusoires uniquement), Invisibilité." },
        { name: "Programmée", value: "vous pouvez créer une illusion qui opérera en fonction de paramètres préprogrammés sans effort ou action de votre part, comme par exemple un mur illusoire qui affiche un message déroulant à chaque fois que quelqu’un entre dans la pièce." },
      ],
      limites: [],
    },
    {
      name: "Images",
      category: "Esprit",
      page: 80,
      kind: "power",
      variantOf: null,
      value: "Les Images sont comme les illusions, à ceci près qu’il s’agit d’images sensorielles véridiques plutôt que d’hallucinations mentales. Elles affectent donc les machines comme les caméras et ignorent les résistances mentales. Mais vous ne pouvez pas choisir ceux qui perçoivent ces illusions puisqu’elles n’existent pas seulement dans l’esprit de la cible. A cette exception près, Images fonctionne comme le pouvoir Illusion. Vous pouvez acquérir tous les extras proposés pour le pouvoir Illusion, à l’exception du pouvoir Décharge mentale.",
      extras: [],
      limites: [],
    },
    {
      name: "Immatérialité",
      category: "Altération",
      page: 80,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez perdre de votre substance, vous transformer en ectoplasme, altérer votre densité ou votre structure atomique ou simplement vous décaler hors du monde physique par un moyen ou un autre. On dit alors que vous « phasez ». Une fois immatériel, vous êtes immunisé contre les attaques physiques et vous pouvez passer sans danger au travers des objets solides (à l’exception des attaques et des objets possédant l’extra « affecte l’intangible »). Effectuez un test de pouvoir pour passer au travers des champs énergétiques (comme un Champ de force) avec une difficulté égale au niveau du champ. Vous êtes incapables d’affecter le monde physique tant que vous êtes ainsi immatériel, mais vous pouvez encore utiliser des pouvoirs d’esprit et être affecté par eux. Votre utilisation de pouvoirs mentaux contre des cibles physiques se fait toutefois avec une Difficulté accrue de +2.",
      extras: [
        { name: "Standard", value: "Affecte les autres." },
        { name: "Affecte le physique", value: "appliquez cet extra à un autre pouvoir ou à votre Force, vous permettant de l’utiliser pour affecter le monde physique alors que vous êtes immatériel. Ce pouvoir ou cette capacité est néanmoins alors limité par votre niveau d’Immatérialité." },
        { name: "Brouillage", value: "votre immatérialité peut perturber les impulsions électriques. Phaser au travers d’équipements électroniques les rend inopérants sur un test d’Immatérialité de Difficulté 3. Les équipements électroniques blindés peuvent demander une difficulté accrue. Les machines conscientes souffrent d’un effet d’étourdissement comme avec l’extra Disruption de phase." },
        { name: "Décalage de phase", value: "vous pouvez vous rendre matériel, frapper et redevenir immatériel dans la même case. Cela vous permet d’utiliser le plus élevé de votre niveau d’Immatérialité ou de votre Coordination pour esquiver des attaques." },
        { name: "Disruption de phase", value: "en rejoignant une cible et en vous solidifiant partiellement, vous pouvez lui infliger un effet d’étourdissement du niveau de votre pouvoir." },
        { name: "Flottant", value: "lorsque vous phasez, vous gagnez Vol à niveau 1 et pouvez bouger librement dans toutes les directions, sans être affecté par la gravité." },
        { name: "Inversion de phase", value: "vous pouvez rendre immatérielles des sections entières de matière afin que d’autres choses que vous puissent les traverser. Vous pouvez uniquement affecter de la matière non vivante, et seulement ce que vous touchez. Par exemple, vous pourriez rendre immatérielle une partie du sol, faisant ainsi chuter un adversaire au travers." },
        { name: "Phase partielle", value: "vous pouvez solidifier une partie de votre corps alors que le reste est toujours immatériel." },
        { name: "Vitalité", value: "vous bénéficiez d’une Vitalité totale lors des périodes d’intangibilité." },
      ],
      limites: [],
    },
    {
      name: "Immobilisation",
      category: "Attaque",
      page: 81,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez projeter, à portée étendue, une attaque qui immobilise ou piège la cible avec de la colle, de la glace, de la boue, de la toile d’araignée, etc. Votre Immobilisation a un niveau de Solidité égal au niveau de votre pouvoir. Effectuez un test de Coordination contre la Coordination de la cible pour toucher : • Un échec n’entraine aucun effet • Un succès marginal a le même effet qu’un succès modéré (comme ci-dessous) mais la solidité de votre immobilisation est réduite de moitié. • Un succès modéré entraîne l’immobilisation de la cible sur place, lui infligeant une pénalité de -2 à toutes ses actions. • Un succès majeur ou massif immobilise totalement la cible, qui ne peut entreprendre aucune action physique jusqu’à ce qu’elle réussisse à s’évader.",
      extras: [
        { name: "Standard", value: "Contagieux, Effet secondaire, Salve." },
      ],
      limites: [],
    },
    {
      name: "Immobilisme",
      category: null,
      page: 81,
      kind: "variant",
      variantOf: null,
      value: "Pour la capacité à empêcher des cibles de bouger, reportez – vous au pouvoir Paralysie, page 93.",
      extras: [],
      limites: [],
    },
    {
      name: "Immortalité",
      category: "Défense",
      page: 81,
      kind: "power",
      variantOf: null,
      value: "Vous ne vieillissez pas et vous ne pouvez pas mourir. Vous pouvez toujours subir des dégâts jusqu’au point de succomber, mais la mort n’est que transitoire. Soustrayez votre niveau de Pouvoir de 10 pour déterminer le nombre d’heures qu’il vous faut pour revenir à la vie. Avec une Immortalité de 10, vous récupérez sur la prochaine planche ! Votre corps régénère aussi les éventuels morceaux perdus. A moins de vous atomiser ou de vous exposer à une source constante de dégâts (dans un volcan ou le coeur d’une étoile par exemple), vous finirez toujours par revenir. A chaque fois que votre Force est réduite à 0 et que vous « mourrez », vous perdez tous vos points de Ténacité, mais vous en regagnez normalement ensuite.",
      extras: [
        { name: "Pouvoirs", value: "Régénération, Résistance." },
        { name: "Suspension", value: "vous pouvez vous placer à volonté dans un état d’animation suspendue, pendant lequel vos fonctions vitales sont ralenties au point que vous apparaissez mort et que vous n’êtes plus affecté par les besoins biologiques tant que vous restez dans cet état. Vous continuez toutefois de récupérer normalement." },
      ],
      limites: [
        { name: "Bloqué", value: "définissez un effet ou un type d’attaque qui est capable de vous tuer définitivement." },
      ],
    },
    {
      name: "Immunité",
      category: null,
      page: 82,
      kind: "variant",
      variantOf: "Résistance",
      value: "Une Résistance de niveau 10 est en substance une Immunité à cet effet, le réduisant systématiquement à 0, sauf si le Meneur de Jeu décide d’appliquer au personnage un effet hors échelle (supérieur à 10) en guise de complication. Reportez-vous aux pouvoir Résistance, page 100.",
      extras: [],
      limites: [],
    },
    {
      name: "Incorporéalité",
      category: null,
      page: 82,
      kind: "variant",
      variantOf: "Immatérialité",
      value: "Pour la capacité à assumer une forme incorporelle ou intangible, reportez-vous au pouvoir Immatérialité, page 80.",
      extras: [],
      limites: [],
    },
    {
      name: "Interface",
      category: "Perception",
      page: 82,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez vous interfacer avec les ordinateurs à portée visuelle. Utilisez le meilleur de votre Interface ou de votre Intellect (et spécialités) quand vous utilisez des ordinateurs. Contre les systèmes informatiques intelligents (y compris les robots conscients), ce pouvoir fonctionne comme Télépathie (page 106).",
      extras: [
        { name: "Pouvoirs", value: "Contrôle des machines." },
        { name: "Standard", value: "Diffusion." },
        { name: "Cyberespace", value: "vous pouvez projeter votre esprit dans la réalité virtuelle « à l’intérieur » des ordinateurs ou des réseaux. Dans le cyberespace, vous pouvez interagir avec les programmes informatiques comme s’il s’agissait d’êtres physiques et d’objets. Vous pouvez utiliser votre pouvoir d’Interface normalement pour influencer les ordinateurs et vous pouvez éventuellement substituer votre niveau d’Interface ou d’Intellect à d’autres capacités, avec l’accord du Meneur de jeu." },
        { name: "Gremlin", value: "vous pouvez faire en sorte que de nombreux objets électroniques à portée étendue se détraquent, faisant n’importe quoi pendant un nombre de planches égal à votre niveau de pouvoir. Vous ne pouvez toutefois pas contrôler les actions de ces objets." },
        { name: "Machines multiples", value: "vous pouvez étendre votre pouvoir à une nombre de machines égal à votre niveau de pouvoir." },
        { name: "Téléchargement", value: "vous pouvez quitter votre corps et « posséder » une machine, l’animer et la contrôler. Votre corps reste alors inconscient. Si quelque chose lui arrive, vous resterez piégé dans la machine." },
      ],
      limites: [
        { name: "Standard", value: "Exclusif, Portée proche." },
        { name: "Un seul type", value: "vous ne pouvez vous interfacer qu’avec un seul type d’ordinateur ou de machine, peutêtre un type limité à une fonction, comme les ordinateurs militaires." },
      ],
    },
    {
      name: "Invisibilité",
      category: "Altération",
      page: 83,
      kind: "power",
      variantOf: null,
      value: "Vous, ainsi que ce que vous portez ou tenez, devenez invisible à volonté. On peut toujours vous repérer et vous localiser par d’autres méthodes que la vue – les bruits, les odeurs, une pluie battante, etc. Si quelque chose est en mesure de vous détecter, effectuez un test d’Invisibilité pour éviter d’être remarqué. Tant que votre localisation reste inconnue, vous ne pouvez pas faire l’objet d’attaques directes puisque vos opposants ne savent pas où viser. Les attaques indirectes comme les salves vous affectent normalement. Même si vous êtes repéré, les attaques contre vous se font avec une difficulté accrue de +2.",
      extras: [
        { name: "Rayon d’invisibilité", value: "vous pouvez rendre invisible d’autres personnes que vous-même, comme la version Rayon d’invisibilité du pouvoir Rayon altérant (page 98)." },
      ],
      limites: [
        { name: "Caméléon", value: "plutôt que de devenir réellement invisible, vous pouvez vous fondre au décor environnant, devenant plus difficile à voir sans que cela soit impossible. Un test réussi d’Eveil contre votre niveau de pouvoir révèlera votre position." },
        { name: "Déplacement", value: "plutôt que de devenir réellement invisible, vous apparaissez être ailleurs que l’endroit où vous vous tenez, déplaçant votre image à portée étendue." },
        { name: "Seulement les machines", value: "vous ne devenez invisible que pour les machines, ce qui inclue les caméras et senseurs similaires. Les créatures vivantes peuvent toujours vous voir." },
        { name: "Seulement les esprits", value: "vous devenez invisible en « obscurcissant » les esprits, mais restez donc visibles pour les machines. Il incombe au MJ de décider si les machines intelligentes peuvent vous voir, en fonction de la façon dont votre pouvoir fonctionne." },
      ],
    },
    {
      name: "Invocation",
      category: null,
      page: 84,
      kind: "variant",
      variantOf: "Serviteur",
      value: "Pour l’invocation d’autres créatures ou personnages afin qu’ils vous servent, reportez-vous au pouvoir Serviteur, page 101. Si vous voulez faire venir des objets ou des créatures d’un autre endroit que celui où vous êtes, voyez l’extra Invocation du pouvoir Téléportation, page 107.",
      extras: [],
      limites: [],
    },
    {
      name: "Invulnérabilité",
      category: null,
      page: 84,
      kind: "variant",
      variantOf: "Résistance",
      value: "Reportez-vous au pouvoir Résistance, et plus spécifiquement à la Résistance aux dégâts. Une Résistance aux dégâts de niveau 10 est, dans les faits, une invulnérabilité à toute forme de dégâts, sauf si le Meneur de Jeu décide d’appliquer au personnage un effet hors échelle (supérieur à 10) en guise de complication.",
      extras: [],
      limites: [],
    },
    {
      name: "Maladie",
      category: null,
      page: 84,
      kind: "variant",
      variantOf: "Affliction",
      value: "Pour le pouvoir d’infliger une maladie – ou divers effets de maladie – sur des cibles, reportez-vous au pouvoir Affliction (page 30).",
      extras: [],
      limites: [],
    },
    {
      name: "Membres additionnels",
      category: "Altération",
      page: 84,
      kind: "group",
      variantOf: null,
      value: "Vous possédez des morceaux de corps en plus – qu’il s’agisse d’un bout complètement nouveau (comme une queue) ou de bouts supplémentaires (quatre bras au lieu de deux). Choisissez l’une des options suivantes ou lancez 2D6 dans le tableau ci-contre.",
      table: {
        "dice": "2d6",
        "label": "Membre",
        "entries": [
          {
            "name": "Carapace",
            "roll": [
              2,
              3
            ],
            "value": "Vous avez une épaisse coquille, ce qui vous donne une Résistance aux dégâts égale au niveau de votre pouvoir."
          },
          {
            "name": "Griffes",
            "roll": [
              4,
              5
            ],
            "value": "Vous avez le pouvoir Frappe (Taillader) à un niveau égal au niveau de votre pouvoir."
          },
          {
            "name": "Bras supplémentaires",
            "roll": [
              6
            ],
            "value": "Vous disposez d’une Force ou du pouvoir Attaque Rapide à un niveau égal au niveau de votre pouvoir."
          },
          {
            "name": "Jambes supplémentaires",
            "roll": [
              7
            ],
            "value": "Vous pouvez vous déplacer plus vite et utiliser le niveau de votre pouvoir pour déterminer votre vitesse, comme avec le pouvoir Bonds."
          },
          {
            "name": "Queue",
            "roll": [
              8
            ],
            "value": "Vous pouvez utiliser votre queue comme s’il s’agissait d’un bras supplémentaire. Vous gagnez le pouvoir Attaque Rapide à un niveau égal au niveau de votre pouvoir."
          },
          {
            "name": "Tentacules",
            "roll": [
              9,
              10
            ],
            "value": "Vous avez de puissants tentacules. Ils vous font bénéficier du pouvoir Élasticité ou d’une Force égale au niveau de votre pouvoir."
          },
          {
            "name": "Ailes",
            "roll": [
              11,
              12
            ],
            "value": "Vous avez des ailes fonctionnelles. Vous gagnez le pouvoir Vol à un niveau égal au niveau de votre pouvoir."
          }
        ]
      },
      extras: [
        { name: "Détachable", value: "vos membres additionnels peuvent se détacher et fonctionner sous votre contrôle, à portée étendue." },
        { name: "Elongation", value: "vos membres additionnels (et seulement ces membres) ont Elasticité au même niveau que votre niveau de pouvoir." },
      ],
      limites: [],
    },
    {
      name: "Métamorphose",
      category: "Altération",
      page: 85,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez prendre l’apparence d’autres choses : animaux, objets ou personnes. Choisissez l’une des options suivantes ou lancez un D6 lorsque vous obtenez ce pouvoir. Vous pouvez acquérir les autres options sous forme d’extras : 1D6 Transformation en 1-2 Animaux 3-4 Objets 5-6 Humanoïdes Assumer une nouvelle forme prend une planche de préparation, bien que vous puissiez revenir instantanément à votre forme normale. Vous gagnez les propretés physiques de la forme assumée, jusqu’à concurrence de votre niveau de Métamorphose. Si imiter de manière convaincante une forme particulière devient un souci, votre niveau de pouvoir est la Difficulté d’un test d’Eveil pour quelqu’un remarque que quelque chose cloche. 2d6 Membre Bénéfice 2-3 Carapace Vous avez une épaisse coquille, ce qui vous donne une Résistance aux dégâts égale au niveau de votre pouvoir. 4-5 Griffes Vous avez le pouvoir Frappe (Taillader) à un niveau égal au niveau de votre pouvoir. 6 Bras supplémentaires Vous disposez d’une Force ou du pouvoir Attaque Rapide à un niveau égal au niveau de votre pouvoir. 7 Jambes supplémentaires Vous pouvez vous déplacer plus vite et utiliser le niveau de votre pouvoir pour déterminer votre vitesse, comme avec le pouvoir Bonds. 8 Queue Vous pouvez utiliser votre queue comme s’il s’agissait d’un bras supplémentaire. Vous gagnez le pouvoir Attaque Rapide à un niveau égal au niveau de votre pouvoir. 9-10 Tentacules Vous avez de puissants tentacules qui peuvent pousser sur vos épaules, votre dos ou vos hanches, ou même être constitués de longs cheveux préhensiles. Ils vous font bénéficier du pouvoir Elasticité ou d’une Force égale au niveau de votre pouvoir. 11-12 Ailes Vous avez des ailes fonctionnelles, qu’elles ressemblent à des ailes d’oiseau, de chauve-souris ou d’insecte. Vous gagnez le pouvoir Vol à un niveau égal au niveau de votre pouvoir. Animaux Vous pouvez vous métamorphoser en animal, qu’il s’agisse d’animaux normaux ou d’hybrides homme-animal. Vous conservez vos propres capacités mentales ainsi que votre capacité à parler, sauf si des limites particulières vous l’interdisent. Vos capacités physiques sous forme animale sont égales au plus élevé de votre niveau de pouvoir ou de la capacité normale de l’animal. Reportez-vous à des exemples d’animaux dans la section Créatures du chapitre Mener le jeu du livre de base d’ICONS. Sous forme d’hybride homme-animal, votre Force, votre Coordination, ou les deux, peuvent être élevées au niveau de Métamorphose, selon le type d’animal copié. Les formes hybrides sont humanoïdes en tout point mais ont des particularités cosmétiques (fourrure, museau, queue et ainsi de suite). Vous pouvez toutefois gagner les attaques physiques de l’animal, ainsi que ses capacités de mouvement. Humanoïdes Vous pouvez vous métamorphoser en copies convaincantes d’autres humanoïdes, incluant la voix et les vêtements qu’ils peuvent porter. Votre imitation est suffisamment bonne pour tromper des tests comme la prise d’empreintes digitales, les scans rétinaux et même les tests ADN. Toutefois, vous ne gagnez aucune des capacités de votre modèle à part son apparence (pour cela, voir Mimétisme de pouvoir). Objets Vous pouvez vous métamorphoser en objets inanimés, depuis un rocher jusqu’à une machine comme une voiture. Vous conservez vos propres capacités mentales ainsi que votre capacité à parler, sauf si des limites particulières vous l’interdisent. Vous gagnez les propriétés physiques de l’objet, notamment sa Solidité, au même niveau que votre Pouvoir.",
      extras: [
        { name: "Pouvoirs", value: "Diminution, Elasticité, Forme alternative, Gigantisme, Mimétisme de pouvoir." },
        { name: "Catégorie supplémentaire", value: "vous pouvez assumer une catégorie additionnelle de formes. Si vous prenez deux fois cet extra, vous pourrez assumer les trois types de métamorphose : animaux, objets et humanoïdes." },
        { name: "Instantané", value: "vous métamorphoser ne vous demande aucune préparation, vous le faites instantanément." },
      ],
      limites: [
        { name: "Déguisement", value: "vous ne gagnez pas les propriétés physiques des formes que vous assumez, juste leur apparence. Vous pouvez ressembler à un mur de briques, mais vous n’êtes pas aussi résistant. Quand cela s’applique à la métamorphose en humanoïde, vous perdez la capacité « exacte » et gagnez seulement l’apparence général de votre sujet." },
        { name: "Muet", value: "vous ne pouvez pas parler dans les formes non humanoïdes et ne pouvez émettre que les sons normalement associés à cette forme." },
        { name: "Un seul type", value: "vous ne pouvez assumer qu’un seul type de forme dans votre catégorie. Ainsi dans la catégorie animale, vous ne pouvez vous métamorphoser qu’en animaux canins ou volants, ou dans la catégorie humanoïde, seulement en être humain masculin. Des restrictions encore plus précises peuvent compter comme deux limites, si le MJ l’approuve. Vous ne pouvez pas prendre l’extra Catégorie supplémentaire." },
        { name: "Indice", value: "vous portez un « indice » toujours apparent, comme une incapacité à changer votre couleur ou votre texture, ou une version normale de votre visage toujours visible, rendant votre pouvoir moins efficace pour vous déguiser sans utiliser de mesures additionnelles pour camoufler votre indice, comme du maquillage." },
      ],
    },
    {
      name: "Mimétisme",
      category: "Altération",
      page: 87,
      kind: "group",
      variantOf: null,
      value: "Vous pouvez copier ou imiter certains des traits d’autres personnages, créatures ou objets. Reportez-vous aux pouvoirs Mimétisme animal, Mimétisme matériel, Némésis, Mimétisme végétal et Mimétisme de pouvoir. Choisissez ou lancez un dé sur la table suivante : D6 Pouvoir 1 Mimétisme animal 2 Mimétisme matériel 3 Némésis 4 Mimétisme végétal 5-6 Mimétisme de pouvoir",
      table: {
        "dice": "1d6",
        "label": "Pouvoir",
        "entries": [
          {
            "name": "Mimétisme animal",
            "roll": [
              1
            ]
          },
          {
            "name": "Mimétisme matériel",
            "roll": [
              2
            ]
          },
          {
            "name": "Némésis",
            "roll": [
              3
            ]
          },
          {
            "name": "Mimétisme végétal",
            "roll": [
              4
            ]
          },
          {
            "name": "Mimétisme de pouvoir",
            "roll": [
              5,
              6
            ]
          }
        ]
      },
      extras: [],
      limites: [],
    },
    {
      name: "Mimétisme animal",
      category: "Altération",
      page: 87,
      kind: "power",
      variantOf: null,
      groupOf: "Mimétisme",
      value: "Vous pouvez imiter les capacités des animaux, vous gratifiant de la Force d’un éléphant, de la Super-vitesse d’un guépard, de la Coordination d’un singe ou de la vision étendue et du Vol d’un aigle, par exemple. Sur chaque planche, vous pouvez choisir un animal à imiter, gagnant ainsi les niveaux de ses capacités avec pour maximum le niveau de votre pouvoir Mimétisme animal. Un animal doit être à portée visuelle afin que vous puissiez l’imiter. Le Meneur de Jeu déterminera quels animaux sont proches (un fait possiblement modifiable grâce à une retcon). Vous ne pouvez imiter qu’un animal à la fois et vous perdez les capacités de l’animal précédent lorsque vous passez d’un animal à un autre. Vous pouvez soit garder votre apparence normale, soit gagner des traits physiques lié à l’animal que vous imitez (selon votre choix lors de l’acquisition de ce pouvoir).",
      extras: [
        { name: "Animal supplémentaire", value: "vous pouvez imiter deux animaux à la fois, mélangeant leurs capacités et dupliquant le meilleur des deux. Si vous prenez cet extra plusieurs fois, vous pouvez imiter un animal de plus pour chaque sélection." },
        { name: "Sans limite de distance", value: "vous pouvez imiter n’importe quel animal auquel vous pensez, plutôt que ceux à proximité." },
      ],
      limites: [
        { name: "Standard", value: "Exclusif, Portée proche, Préparation." },
        { name: "Un seul type", value: "vous ne pouvez imiter qu’un seul type d’animaux, comme par exemple les animaux de la jungle, les oiseaux, les créatures marines, les insectes…" },
      ],
    },
    {
      name: "Mimétisme de pouvoir",
      category: "Altération",
      page: 88,
      kind: "power",
      variantOf: null,
      groupOf: "Mimétisme",
      value: "En touchant un autre personnage et en prenant une planche de préparation, vous pouvez imiter ses pouvoirs et les utiliser vous-même. Vous gagnez tous les pouvoirs de votre cible à un niveau égal au plus faible entre leur niveau existant ou votre niveau de Mimétisme. Ainsi, si vous avez un Mimétisme de pouvoir de niveau 4, tous les pouvoirs que vous imiterez seront limités à ce niveau. Vous conservez les pouvoirs imités jusqu’à ce que vous décidiez d’en copier un autre set ou que vous soyez plongés dans l’inconscience. Dans ce cas, vous perdez tous pouvoirs copiés précédemment.",
      extras: [
        { name: "Pouvoirs", value: "Détection (détection de pouvoir), Némésis, Métamorphose (limitée à la forme de la personne dont vous imitez les pouvoirs)." },
        { name: "Absorption résiduelle", value: "vous n’avez pas besoin de toucher une cible pour copier ses pouvoirs, vous pouvez simplement vous tenir à un endroit où elle les a utilisés récemment, en touchant un objet qui lui appartient ou quelque chose de similaire." },
        { name: "Duplication mécanique", value: "vous pouvez gagner des traits artificiels en plus de ceux qui sont innés. Vous pouvez donc imiter les pouvoirs d’accessoires, de robots, d’ordinateurs, d’armures motorisées, par exemple…" },
        { name: "Duplication mentale", value: "vous acquérez les souvenirs et les connaissances de votre cible, vous permettant ainsi de facilement prendre son identité." },
        { name: "Duplication de spécialités", value: "vous copiez les spécialités d’une cible en même temps que ses pouvoirs, les gagnant au même niveau que votre cible (capacité + spécialité) ou à votre niveau de Mimétisme (le plus faible de deux). Ainsi, si vous avez un Mimétisme de pouvoir de niveau 6, vous ne pourrez copier des spécialités qu’au niveau maximal de 6." },
        { name: "Sans limite de distance", value: "vous pouvez imiter toute personne que vous connaissez, que vous soyez en sa présence ou non. Vous devez déjà bénéficier de l’extra Visuel (voir plus bas) pour acquérir celui-ci." },
        { name: "Visuel", value: "vous pouvez imiter toute cible que vous êtes en mesure de voir (à portée visuelle) sans avoir à les toucher." },
        { name: "Vol de pouvoir", value: "vous ne copiez pas les pouvoirs, vous les volez ! Soustrayez votre niveau de pouvoir de tous les niveaux de pouvoirs de la cible. Vous gagnez ces mêmes pouvoirs à un niveau égal au plus faible entre votre niveau de Mimétisme et les niveaux originels de la cible. Celle-ci ne garde que ce qui reste. Ainsi, si vous avez Vol de pouvoir à 4 et touchez une cible avec un Contrôle du feu à 7, vous gagnez ce pouvoir à 4 et votre cible n’a plus qu’un niveau 3 en Contrôle du feu. Si votre niveau de Vol de pouvoir dépasse le niveau du sujet, vous le gagnez au niveau de votre cible et celle-ci le perd complétement. De multiples touches ont des effets cumulatifs, jusqu’à ce que tous les niveaux de pouvoir de votre cible soient épuisés (à ce point, il ne vous reste alors plus rien à voler). Vous pouvez garder les pouvoirs volés pendant un nombre de planches égal à votre niveau de Vol de pouvoir. Puis, vous perdez un niveau de chaque pouvoir volé par planche alors que, dans le même temps, votre cible regagne un niveau jusqu’à ce que le processus soit complétement inversé." },
      ],
      limites: [
        { name: "Standard", value: "Bloqué par X." },
        { name: "Absorption de faiblesse", value: "certains des aspects de votre cible peuvent être activés pour vous causer des complications pendant que vous copiez ses capacités." },
        { name: "Absorption de personnalité", value: "quand vous imitez une cible, faites un test de Volonté contre Volonté pour éviter que la personnalité de la cible ne prenne le pas sur la vôtre, comme avec le pouvoir Domination." },
        { name: "Remplacement", value: "vos propres capacités (incluant Mimétisme de pouvoir) sont remplacées par ceux copiés à votre cible. Aucune des capacités ainsi remplacées ne peut être utilisée avant la disparition des pouvoirs copiés." },
        { name: "Seulement les attributs", value: "vous ne pouvez imiter que des attributs, pas des spécialités ou des pouvoirs. Cette limite peut encore être restreinte en la réduisant à un seul attribut, comme Duplication de Force ou Duplication d’Intellect." },
        { name: "Seulement les spécialités", value: "vous ne pouvez copier que des spécialités, pas des attributs ou des pouvoirs. Vous devez avoir l’extra Duplication de spécialités pour pouvoir sélectionner cette limite." },
        { name: "Un seul type", value: "vous ne pouvez dupliquer les pouvoirs que d’un certain type de cible, comme les aliens, les mutants…" },
        { name: "Une seule cible", value: "vous ne pouvez dupliquer les capacités que d’une seule cible à la fois." },
      ],
    },
    {
      name: "Mimétisme matériel",
      category: "Altération",
      page: 89,
      kind: "power",
      variantOf: null,
      value: "MIMÉTISME En touchant une substance non-vivante ou une énergie, vous pouvez en acquérir les propriétés, comme avec le pouvoir Forme alternative (page 72), votre forme étant déterminée par le matériau ou l’énergie copié. Il vous faut une planche de préparation pour assumer une nouvelle forme. Si durant votre case, vous choisissez de ne rien faire d’autre que de copier les propriétés d’une attaque portée à votre encontre, vous devenez immunisé à cette attaque et assumez sa forme. Par exemple, si vous êtes atteint par le jet d’un lanceflammes, vous assumez une forme de feu et l’attaque n’a aucun effet. Si sur la même planche, vous êtes atteint par de multiples attaques, vous devez choisir laquelle imiter. Les attaques ne recourant à aucun matériau ou qualités énergétiques – comme un Drain d’énergie ou une Décharge mentale – ne peuvent être imitées.",
      extras: [
        { name: "Pouvoirs", value: "Adaptation, Diminution, Gigantisme, Mimétisme de pouvoir, Métamorphose (objets)." },
        { name: "Instantané", value: "changer de forme ne vous demande pas une planche de préparation, c’est instantané lorsque vous touchez un nouveau matériau. Toutefois, vous ne pouvez toujours imiter qu’une seule attaque par planche." },
        { name: "Sans limite", value: "vous pouvez imiter un nombre illimité d’attaques par planche et vous conservez la forme que vous avez assumé en repoussant la dernière attaque jusqu’à ce que vous utilisiez à nouveau votre pouvoir." },
      ],
      limites: [
        { name: "Un seul type", value: "vous ne pouvez assumer que les caractéristiques des substances matérielles ou de l’énergie, mais pas les deux." },
      ],
    },
    {
      name: "Mimétisme végétal",
      category: "Altération",
      page: 90,
      kind: "power",
      variantOf: null,
      groupOf: "Mimétisme",
      value: "Après une planche de préparation, vous pouvez copier les capacités des plantes. Votre corps ne change pas significativement, bien qu’il puisse (à la discrétion du Meneur de Jeu) acquérir des aspects végétaux comme une peau verte, des feuilles à la place des cheveux ou une surface semblable à l’écorce. Des pouvoirs potentiels incluent Affliction (causée par les poisons ou les pollens), Vitalité (grâce à la photosynthèse) ou Domination (limitée aux insectes grâce à divers pollens). Vous pouvez soit conserver votre apparence normale soit prendre des traits végétaux (choisissez lors de l’acquisition de ce pouvoir).",
      extras: [
        { name: "Pouvoirs", value: "Contrôle des plantes (tous extras)." },
      ],
      limites: [],
    },
    {
      name: "Miroir",
      category: "Défense",
      page: 90,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez renvoyer les effets d’une attaque physique à celui qui vous prend pour cible. Testez votre pouvoir de Miroir en réaction, avec le niveau de la capacité d’attaque comme Difficulté. • Sur un échec, le miroir ne fonctionne pas et vous subissez les effets normaux de l’attaque. • Avec un succès marginal ou modéré, vous n’êtes pas affecté par l’attaque mais celle-ci n’est pas renvoyée vers l’attaquant, qui n’en subit donc pas non plus les effets. • Avec un succès majeur ou massif, l’attaque est renvoyée et votre adversaire en subit les pleins effets. Vous n’êtes aucunement affecté.",
      extras: [],
      limites: [
        { name: "Standard", value: "Extra seulement." },
        { name: "Déviation seulement", value: "un succès majeur avec votre pouvoir est équivalent à un succès modéré : vous pouvez dévier des attaques, mais pas les renvoyer à l’attaquant." },
        { name: "Un seul type", value: "vous ne pouvez réfléchir qu’un type particulier d’attaque : comme les impacts kinétiques ou l’énergie électromagnétique par exemple." },
      ],
    },
    {
      name: "Natation",
      category: null,
      page: 91,
      kind: "variant",
      variantOf: "Amphibie",
      value: "Reportez-vous au pouvoir Amphibie, page 32, avec possiblement la limite Un seul type. Voyez la section Nager dans le chapitre Action ! du livre de base d’ICONS pour des détails sur la natation, particulièrement pour les personnages incapables de respirer sous l’eau.",
      extras: [],
      limites: [],
    },
    {
      name: "Némésis",
      category: "Altération",
      page: 91,
      kind: "power",
      variantOf: null,
      groupOf: "Mimétisme",
      value: "Vous avez le pouvoir d’analyser les traits d’un opposant et de générer un pouvoir ou des pouvoirs (ainsi que les extras appropriés) capables de contrer ou de surpasser cet adversaire. Choisissez un adversaire à portée visuelle et prenez une planche de préparation. Au début de votre prochaine planche, vous gagnez le ou les pouvoirs (déterminés par le MJ) les plus à même de défaire cet opposant. Aucun pouvoir ainsi gagné ne peut avoir un niveau supérieur à celui de Némésis, mais peut avoir un niveau inférieur. Changer d’adversaire demande une nouvelle planche de préparation, durant laquelle vous ne pouvez utiliser aucun autre pouvoir le temps que vous vous adaptiez. De plus, les pouvoirs gagnés grâce à Némésis disparaissent immédiatement à l’issue du combat ou à la disparition de la menace, selon les indications du Meneur de Jeu.",
      extras: [
        { name: "Pouvoirs", value: "Détection (détection de pouvoir), Sens du danger." },
        { name: "Instantané", value: "votre pouvoir Némésis s’adapte instantanément à un nouvel adversaire, sous forme de réaction. Utiliser le pouvoir, ou changer d’adversaire, ne requiert aucune préparation." },
      ],
      limites: [
        { name: "Standard", value: "Bloqué par X, Portée proche." },
        { name: "Surcharge", value: "si vous combattez plus d’un adversaire à la fois, votre pouvoir Némésis entre en surcharge et ne fonctionne sur aucun d’entre eux tant que vous ne ferez pas face à un unique opposant." },
      ],
    },
    {
      name: "Nullification",
      category: "Contrôle",
      page: 92,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle de pouvoir",
      value: "Vous avez la capacité d’annuler – de neutraliser complètement – les pouvoirs d’une autre personne jusqu’à portée étendue. Effectuez un test de Coordination contre une difficulté égale à la Coordination de la cible pour réussir à l’atteindre. Si c’est un succès, soustrayez votre niveau de Nullification à tous les niveaux de Pouvoir de votre victime. Un pouvoir réduit à 0 ou moins est inutilisable pendant une durée équivalente à votre niveau de pouvoir. Autrement, les pouvoirs réduits récupèrent 1 niveau par planche jusqu’à leur niveau initial.",
      extras: [
        { name: "Standard", value: "Récupération lente, Salve." },
        { name: "Disruption", value: "plutôt que de nullifier un pouvoir, vous pouvez faire en sorte qu’il soit hors de contrôle, comme s’il avait la limite Instable." },
        { name: "Suppression", value: "les niveaux de pouvoir que vous avez annulé ne se récupèrent pas tant que vous vous concentrez." },
      ],
      limites: [
        { name: "Standard", value: "Portée proche." },
        { name: "Choc de retour", value: "si vous n’annulez pas complétement le pouvoir d’une cible, vous devez résister avec votre Volonté à un effet d’étourdissement égal au niveau originel du pouvoir. Par exemple, si vous opposez votre pouvoir de Nullification 5 contre une cible disposant d’un pouvoir de niveau 9, vous devez résister à un effet d’étourdissement 9." },
        { name: "Un seul type", value: "vous ne pouvez nullifier que des pouvoirs provenant d’une source ou d’un type particulier, comme les pouvoirs d’esprit, les mutations ou la sorcellerie. Voir Sources de pouvoir (page 7) pour des idées." },
      ],
    },
    {
      name: "Octroi de pouvoir",
      category: "Contrôle",
      page: 92,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle de pouvoir",
      value: "Vous pouvez donner des pouvoirs à d’autres personnes juste en les touchant et en y consacrant une action. Il est ainsi possible d’offrir n’importe quels pouvoirs, tant que le total de leurs niveaux reste inférieur au niveau d’Octroi. Les pouvoirs ainsi octroyés durent tant que la concentration est maintenue et pour un nombre de planches égal au niveau du pouvoir ensuite. Vous pouvez révoquer les pouvoirs ainsi octroyés à n’importe quel moment durant votre case. Certains personnages du Meneur de Jeu ont un Octroi de pouvoir horséchelle, et sont capables de donner divers pouvoirs avec des niveaux virtuellement illimités pour autant de temps qu’ils le désirent.",
      extras: [
        { name: "Standard", value: "A distance, Salve." },
        { name: "Etendu", value: "l’octroi dure aussi longtemps que vous le désirez, ou jusqu’à ce que vous décidiez de le révoquer." },
      ],
      limites: [
        { name: "Un seul type", value: "vous ne pouvez donner qu’un seul type de pouvoir, comme des pouvoirs de Contrôle de l’énergie ou des pouvoirs d’esprit." },
        { name: "Transférable", value: "les seuls pouvoirs que vous pouvez octroyer sont ceux que vous avez, et lorsque vous le faites, vous perdez autant de niveaux dans vos pouvoirs que vous en octroyez." },
        { name: "Instable", value: "Tout pouvoir que vous octroyez a automatiquement la limite Instable et peuvent donc devenir hors de contrôle (voir Limites)." },
      ],
    },
    {
      name: "Paralysie",
      category: "Attaque",
      page: 93,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez rendre un adversaire incapable d’agir. Effectuez, jusqu’à portée étendue, un test de Coordination contre la Coordination de votre cible. Si votre attaque est un succès, faites un test de votre niveau de Paralysie contre la Force ou la Volonté de la victime (choisissez quelle capacité est affectée lorsque vous recevez ce pouvoir) : • Un échec ou un succès marginal n’entraîne aucun effet. • Un succès modéré signifie que la cible ne peut entreprendre aucune action pendant une planche. • Un succès majeur signifie que la cible ne peut entreprendre aucune action pendant une durée égale au niveau de votre pouvoir. • Un succès massif signifie que la cible ne peut entreprendre aucune action pour le reste du chapitre (ou jusqu’à ce que vous désiriez la libérer). Les aspects de la cible peuvent être activés pour lui permettre de récupérer, mettant fin à l’effet de Paralysie. Vous devez décider de la façon dont votre pouvoir fonctionne : il peut laisser votre victime étourdie ou inconsciente, confuse, paralysée ou submergée par la douleur, la peur, le plaisir ou toute autre sensation.",
      extras: [
        { name: "Standard", value: "Salve, contagieux, Sans limite de distance" },
        { name: "Deux types", value: "vous pouvez cibler la Force ou la Volonté. Choisissez à chaque utilisation." },
      ],
      limites: [],
    },
    {
      name: "Perception extrasensorielle",
      category: "Perception",
      page: 94,
      kind: "power",
      variantOf: null,
      value: "Vous êtes doué de PES (perception extrasensorielle), ce qui vous permet de percevoir des choses au loin, comme si vous étiez physiquement présent. Reportez-vous à la Table des Références pour avoir une idée de la distance à laquelle vous pouvez utiliser ce pouvoir. Lorsque vous utilisez votre PES, utilisez le plus bas de votre niveau de pouvoir ou de votre Éveil pour effectuer les tests destinés à aviser ou fouiller sur place. Si les lieux sont protégés contre la PES, effectuez un test de pouvoir contre le niveau de l’écran. Le Meneur de Jeu peut aussi demander un test de PES pour les zones qui vous sont complètement inconnues, déterminant ce que vous voyez en fonction de votre marge.",
      extras: [
        { name: "Dimensionnel", value: "vous pouvez étendre votre PES à d’autres dimensions, comme une utilisation du pouvoir Voyage dimensionnel (page 112)." },
      ],
      limites: [
        { name: "Un seul sens", value: "Votre PES est limitée à la vue ou l’ouïe (clairvoyance ou clairaudience)." },
        { name: "Proxy", value: "vous ne pouvez percevoir qu’au travers des sens d’autres personnes (ou animaux)." },
      ],
    },
    {
      name: "Pétrification",
      category: null,
      page: 94,
      kind: "variant",
      variantOf: "Rayon altérant",
      value: "Pour le pouvoir permettant de transformer une cible en pierre (ou tout matériau non vivant similaire), voyez la version Rayon de métamorphose du pouvoir Rayon altérant (page 98).",
      extras: [],
      limites: [],
    },
    {
      name: "Poison",
      category: null,
      page: 94,
      kind: "variant",
      variantOf: "Affliction",
      value: "Reportez-vous aux pouvoir Affliction, (page 30), pour les effets adaptés de différends poisons ou venins qu’un personnage peut infliger à une cible. D’autres toxines spécialisées peuvent avoir différents effets de pouvoir, incluant Illusions (hallucinations), Domination ou Paralysie. Voir Accessoires d’Altération et Armes chimiques dans la section Accessoires offensifs du chapitre Accessoires.",
      extras: [],
      limites: [],
    },
    {
      name: "Portail",
      category: null,
      page: 94,
      kind: "variant",
      variantOf: "Téléportation",
      value: "Vous pouvez ouvrir une porte ou portail à travers l’espace. Reportez-vous à l’extra Portail du pouvoir Téléportation (page 107).",
      extras: [],
      limites: [],
    },
    {
      name: "Possession",
      category: null,
      page: 94,
      kind: "variant",
      variantOf: "Domination",
      value: "Votre esprit peut posséder le corps d’une cible, vous permettant de contrôler ses actions de l’intérieur. Reportez-vous à l’extra Possession du pouvoir Domination (page 66), avec possiblement l’extra Fusion, permettant à votre corps de fusionner avec celui de la cible que vous possédez. Ce pouvoir fonctionne bien en conjonction avec Immatérialité (pour les possessions réalisées par des fantômes, des esprits, des démons incorporels) mais notez que l’effet de Domination est alors limité par le niveau d’Immatérialité.",
      extras: [],
      limites: [],
    },
    {
      name: "Post-cognition",
      category: "Perception",
      page: 95,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez percevoir les choses qui se sont produites dans le passé. Vous devez toucher un objet ou vous trouver dans un lieu afin de sentir son passé et effectuer un test de pouvoir, dont la difficulté dépend du temps que vous voulez remonter. Difficulté Pouvoir 1 Un jour 2 Quelques jours 3 Une semaine 4 Quelques semaines 5 Un mois 6 Quelques mois 7 Une saison (4 mois) 8 Six mois 9 Un an 10 Plus d’un an • Un échec majeur ou pire peut vous fournir de fausses informations ou des visions trompeuses, si le MJ le désire. • Un échec ne vous donne aucune information et vous devrez recourir à un effort tenace pour pouvoir essayer à nouveau. • Un succès marginal ne vous donne aucune information, mais vous pouvez essayer à nouveau sans recourir à un effort tenace. • Un succès modéré vous permet d’obtenir des indices cryptiques et des visions floues, ouverts à l’interprétation. • Un succès majeur vous donne des informations plus claires, peutêtre un nom ou un visage. • Un succès massif vous offre une vision claire et détaillée, même si elle ne comprend pas forcément toutes les informations sur les événements. Vous pouvez aussi utiliser la Postcognition pour des manoeuvres destinées à découvrir ou créer des aspects et ainsi tirer avantage de ce que vous percevez.",
      extras: [],
      limites: [],
    },
    {
      name: "Pouvoir cosmique",
      category: "Contrôle",
      page: 95,
      kind: "power",
      variantOf: null,
      groupOf: "Arcanes",
      value: "Vous pouvez puiser dans les forces primordiales de l’univers. Choisissez un effet de pouvoir que vous pouvez dupliquer. D’autres effets peuvent être associés sous la forme d’extras. Fondamentalement, n’importe quel pouvoir peut être un extra de Pouvoir Cosmique, avec l’accord du Meneur de Jeu. Sous sa forme la plus basique, Pouvoir cosmique est souvent semblable à l’un des pouvoirs de Contrôle de l’énergie auxquels vous pouvez vous reporter pour exemple.",
      extras: [
        { name: "Pouvoirs", value: "n’importe lequel." },
      ],
      limites: [
        { name: "Standard", value: "Bloqué par X, Exclusif, Préparation." },
        { name: "Lié à une capacité", value: "votre niveau de Pouvoir cosmique est lié à une de vos capacités et ne peut excéder son niveau. Réduisez le niveau tiré au sort jusqu’au niveau de la capacité. Les modifications de niveau dues aux limites (celle-ci y compris) ne peuvent faire augmenter le niveau du pouvoir au-delà de la capacité liée." },
      ],
    },
    {
      name: "Précognition",
      category: "Perception",
      page: 96,
      kind: "power",
      variantOf: null,
      value: "Vous avez des visions de ce qui pourrait se passer dans le futur. Tenter délibérément d’obtenir une vision requiert un test de pouvoir, secrètement effectué par le Meneur de Jeu contre une Difficulté basée sur la nature plus ou moins obscure, plus ou moins éloignée dans le futur, des événements que vous voulez percevoir (voir Postcognition, page 95). • Un échec majeur ou pire peut vous fournir de fausses informations ou des visions trompeuses, si le MJ le désire. • Un échec ne vous donne aucune information et vous devrez recourir à un effort tenace pour pouvoir essayer à nouveau. • Un succès marginal ne vous donne aucune information, mais vous pouvez essayer à nouveau sans recourir à un effort tenace. • Un succès modéré vous permet d’obtenir des indices cryptiques et des visions floues, ouverts à l’interprétation. • Un succès majeur vous donne des informations plus claires, peutêtre un nom ou un visage. • Un succès massif vous offre une vision claire et détaillée, même si elle ne comprend pas forcément toutes les informations sur les événements. Le Meneur de Jeu peut aussi choisir de vous donner une vision précognitive à n’importe quel moment, utilisant à des fins narratives des prémonitions particulièrement fortes. Vous pouvez aussi utiliser la Précognition pour des manoeuvres destinées à découvrir ou créer des aspects et ainsi tirer avantage de ce que vous percevez. Vous pouvez éviter certains dangers : avec un succès majeur ou supérieur sur un test de Précognition et l’utilisation d’un avantage, vous pouvez retconner un événement qui vient juste de se dérouler, décrétant qu’il n’était pas réel mais juste un avertissement précognitif ! Exemple : L’héroïne Prometheus a le pouvoir Précognition au niveau 7. Elle et ses coéquipiers font face à une arme nucléaire volée dont le compte à rebours est enclenché. L’un des équipiers de Prometheus coupe le mauvais fil et la bombe explose ! La joueuse de Prometheus déclare une utilisation immédiate de sa Précognition, accompagnée d’un effort déterminé pour obtenir un succès majeur. Elle l’obtient, dépense la Ténacité nécessaire et retconne la scène qui vient juste d’arriver sous la forme d’une vision. Face aux autres personnages, Prometheus sort de sa fugue au moment même où son équipier va couper le fil. « Non ! » avertitelle, « tu vas la faire exploser ! ». Le désastre est, pour le moment, évité. Vous pouvez réaliser cela un nombre maximum de fois par numéro égal à votre niveau de Précognition.",
      extras: [
        { name: "Pouvoirs", value: "Sens du danger, Contrôle des probabilités, Voyage temporel (uniquement jusqu’au moment de votre vision)." },
      ],
      limites: [
        { name: "Un seul type", value: "votre pouvoir ne fonctionne sur pour un seul type d’événement (désastres naturels, mort imminente…)." },
        { name: "Seulement les objets", value: "le pouvoir ne fonctionne que sur les objets, que vous devez toucher pour lire leur futur." },
        { name: "Seulement les gens", value: "le pouvoir ne fonctionne que pour deviner le futur d’autres personnes. Vous devez toucher votre sujet pour lire son avenir." },
        { name: "Endormi", value: "vos visions précognitives ne se manifestent que dans vos rêves, pendant votre sommeil." },
        { name: "Incontrôlé", value: "le Meneur de Jeu choisit lorsque que vous recevez des visons précognitives. Elles ne sont pas sous votre contrôle." },
      ],
    },
    {
      name: "Projection Astrale",
      category: "Esprit",
      page: 97,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez séparer votre forme astrale – le véhicule de votre esprit et de votre âme – de votre corps physique, lui permettant de voyager n’importe où. Votre corps est plongé dans un état comateux mais vous restez toujours conscient des atteintes qu’il peut subir. Si votre corps est déplacé par quelqu’un ou quelque chose alors que votre forme astrale est projetée, vous n’en êtes toutefois pas automatiquement conscient, ce qui peut vous contraindre à rechercher votre enveloppe corporelle. Si votre corps périt alors que votre forme astrale est en balade, vous restez piégé sous cette forme. Votre forme astrale est douée de Vol et d’Immatérialité, au même niveau que le Pouvoir. Votre forme astrale peut observer, mais non affecter, le monde physique et ne peut pas être détectée par des moyens physiques. Néanmoins, les pouvoirs Détection astrale et Télépathie peuvent la révéler. Vous pouvez utiliser des pouvoirs mentaux contre des êtres non astraux, mais avec une difficulté augmentée de +2. Vos pouvoirs fonctionnent normalement contre les autres êtres astraux.",
      extras: [
        { name: "Pouvoirs", value: "Contrôle des rêves, Détection astrale, Voyage dimensionnel (sous forme astrale)." },
        { name: "Maîtrise mentale", value: "sous forme astrale, vous pouvez utiliser vos pouvoirs mentaux sur des êtres non astraux sans modificateur de difficulté." },
      ],
      limites: [],
    },
    {
      name: "Rayon altérant",
      category: "Contrôle",
      page: 98,
      kind: "group",
      variantOf: null,
      value: "Ce pouvoir est un groupe de pouvoirs d’Altération que vous pouvez utiliser sur d’autres, à portée étendue, plutôt que sur vous-même. Choisissez l’une des options dans la liste en bas de page ou lancez un d6. Faites un test de Coordination contre la Coordination de votre cible pour la toucher. Une réussite soumet la cible à l’effet du pouvoir d’Altération choisi. Reportez-vous à la description de chaque pouvoir pour le détail de ses effets.",
      table: {
        "dice": "1d6",
        "label": "Type",
        "entries": [
          {
            "name": "Rayon de Densité",
            "roll": [
              1
            ],
            "value": "Vous augmentez la densité de votre cible."
          },
          {
            "name": "Rayon de Gigantisme",
            "roll": [
              2
            ],
            "value": "Vous faites grandir votre cible."
          },
          {
            "name": "Rayon d’Invisibilité",
            "roll": [
              3
            ],
            "value": "Vous rendez votre cible invisible."
          },
          {
            "name": "Rayon d’Immatérialité",
            "roll": [
              4
            ],
            "value": "Vous rendez votre cible intangible."
          },
          {
            "name": "Rayon de Diminution",
            "roll": [
              5
            ],
            "value": "Vous faites rétrécir votre cible."
          },
          {
            "name": "Rayon de Métamorphose",
            "roll": [
              6
            ],
            "value": "Vous transformez votre cible en une différente forme ou substance."
          }
        ]
      },
      extras: [
        { name: "Offensif", value: "à votre choix, votre rayon altérant peut avoir un effet plus préjudiciable que bénéfique. Pour les rayons de Densité et de Gigantisme, la cible ne gagne pas de Force, mais perd tout de même de la Coordination. Pour le rayon de Diminution, plutôt que de garder sa Force normale, la cible en perd. Pour un Rayon de Métamorphose, la cible peut perdre des capacités mentales ou se transformer seulement en forme néfaste." },
      ],
      limites: [
        { name: "Standard", value: "Portée proche." },
        { name: "Seulement offensif", value: "votre pouvoir ne peut avoir qu’un effet préjudiciable et ne peut accorder aucun effet bénéfique. Vous devez bénéficier de l’extra Offensif, mais cette limite permet d’annuler son coût. 1d6 Type Effet 1 Rayon de Densité Vous augmentez la densité de votre cible 2 Rayon de Gigantisme Vous faites grandir votre cible 3 Rayon d’Invisibilité Vous rendez votre cible invisible 4 Rayon d’Immatérialité Vous rendez votre cible intangible 5 Rayon de Diminution Vous faites rétrécir votre cible 6 Rayon de Métamorphose Vous transformez votre cible en une différente forme ou substance" },
      ],
    },
    {
      name: "Rebond",
      category: null,
      page: 99,
      kind: "variant",
      variantOf: "Élasticité",
      value: "Vous pouvez ricocher sur le sol ou d’autres surfaces. Reportez-vous à l’extra Rebond du pouvoir Élasticité (page 70), peut-être avec la limite Gonflage si vous êtes uniquement capable de rebondir. Certains personnages bénéficient de Rebond sous la forme d’extra d’un Champ de Force (page 38) : leur champ les protège des dégâts en redirigeant l’impact, provoquant un rebond ou un ricochet loin du danger.",
      extras: [],
      limites: [],
    },
    {
      name: "Régénération",
      category: "Défense",
      page: 99,
      kind: "power",
      variantOf: null,
      value: "Régénération vous permet de récupérer un nombre de points d’Endurance égal à votre niveau de pouvoir toutes les dix planches. La récupération est répartie équitablement sur ce laps de temps de 10 planches : avec une Régénération de niveau 2, ce sera 2 points d’Endurance toutes les 5 planches ; avec une régénération de niveau de 3, ce sera 1 point d’Endurance sur les planches 3, 6 et 9, et ainsi de suite. Avec une Régénération 10, vous récupérez un point d’Endurance par planche. De plus, si vous utilisez un avantage pour récupérer, vous regagnez en Endurance l’équivalent du plus haut de votre Force, Volonté ou Régénération. Vous récupérez aussi un nombre de niveau de Force par semaine égal à votre niveau de pouvoir. Ainsi, si vous avez Régénération au niveau 7, par exemple, vous récupérez un niveau de Force perdu par jour.",
      extras: [
        { name: "Repousse", value: "vous pouvez faire repousser les parties perdues de votre corps (ou les réattacher, si elles sont toujours disponibles)." },
      ],
      limites: [],
    },
    {
      name: "Renforcement de capacité",
      category: "Altération",
      page: 99,
      kind: "group",
      variantOf: null,
      value: "Ce pouvoir augmente définitivement le niveau de l’une de vos capacités (attribut ou pouvoir), au niveau auquel il a été tiré sur la table de détermination ou de +2, selon ce qui est le plus avantageux, avec un maximum de 10. Renforcement de capacité ne compte pas comme un pouvoir dans le calcul de votre Ténacité, mais un attribut renforcé le peut, si son niveau final est égal ou supérieur à 7. Choisissez un attribut ou lancez un dé sur la table suivante : 1d6 Capacité 1 Vaillance 2 Coordination 3 Force 4 Intellect 5 Eveil 6 Volonté",
      table: {
        "dice": "1d6",
        "label": "Capacité",
        "entries": [
          {
            "name": "Vaillance",
            "roll": [
              1
            ]
          },
          {
            "name": "Coordination",
            "roll": [
              2
            ]
          },
          {
            "name": "Force",
            "roll": [
              3
            ]
          },
          {
            "name": "Intellect",
            "roll": [
              4
            ]
          },
          {
            "name": "Éveil",
            "roll": [
              5
            ]
          },
          {
            "name": "Volonté",
            "roll": [
              6
            ]
          }
        ]
      },
      extras: [],
      limites: [
        { name: "Renforcement de Spécialité", value: "votre pouvoir ne s’applique que sur une spécialité de votre capacité, et pas sur la capacité elle-même." },
      ],
    },
    {
      name: "Résistance",
      category: "Défense",
      page: 100,
      kind: "group",
      variantOf: null,
      value: "Vous pouvez résister à type particulier d’effet. Choisissez l’un des effets suivants : il peut s’agir d’une Résistance à une capacité (Affliction, Drain d’énergie ou effets apparentés), à l’Altération, à l’Immobilisation, aux Dégâts, à la Détection ou bien encore d’une Résistance Mentale ou Sensorielle… Ou bien, vous pouvez développer votre propre type de résistance avec la permission du MJ. Soustrayez votre Résistance du niveau qu’ont de tels effets contre vous. Si l’effet est réduit à 0 ou moins, il ne vous affecte pas du tout. Si vous avez une Résistance de niveau 10, vous êtes globalement immunisé à l’effet concerné, même si une attaque de niveau 10 peut encore potentiellement vous projeter, vous étourdir ou vous tuer. Avec une Résistance de 10, vous pouvez même ignorer ces possibilités au prix d’un point de Ténacité.",
      table: {
        "dice": null,
        "label": "Type",
        "entries": [
          {
            "name": "Résistance à une capacité"
          },
          {
            "name": "Résistance à l’Altération"
          },
          {
            "name": "Résistance à l’Immobilisation"
          },
          {
            "name": "Résistance aux dégâts"
          },
          {
            "name": "Résistance à la Détection"
          },
          {
            "name": "Résistance mentale"
          },
          {
            "name": "Résistance sensorielle"
          }
        ]
      },
      extras: [],
      limites: [
        { name: "Un seul type", value: "votre résistance ne couvre qu’un type particulier de l’effet, uniquement les attaques de type Cogner ou Taillader, le froid, la corrosion, l’électricité, la chaleur, les radiations…" },
        { name: "Seulement l’Endurance", value: "votre résistance aux dégâts ne vous protège que des pertes d’Endurance dues aux attaques. Les attaques ignorent votre Résistance quand il s’agit de déterminer si vous êtes projeté ou étourdi." },
      ],
    },
    {
      name: "Resistance aux dégâts",
      category: null,
      page: 100,
      kind: "variant",
      variantOf: null,
      value: "Pour ce type de résistance, et tous les autres, se reporter au pouvoir Résistance, p. 100.",
      extras: [],
      limites: [],
    },
    {
      name: "Respiration aquatique",
      category: null,
      page: 100,
      kind: "variant",
      variantOf: "Amphibie",
      value: "Reportez-vous au pouvoir Amphibie, page 32, en incluant possiblement la limite Un seul type.",
      extras: [],
      limites: [],
    },
    {
      name: "Sens du danger",
      category: "Perception",
      page: 100,
      kind: "power",
      variantOf: null,
      value: "Grâce à cette sorte de « sixième sens », vous sentez les dangers imminents. Vous pouvez substituer votre niveau de pouvoir aux capacités testées en réaction lors d’une attaque, ou à l’Eveil pour éviter les embuscades (en fait, votre niveau de Sens du danger devient la Difficulté à vous toucher en combat). Si le niveau de votre Sens du danger est inférieur à la capacité associée, vous obtenez à la place un bonus de +1 à ladite capacité.",
      extras: [],
      limites: [],
    },
    {
      name: "Séparation anatomique",
      category: null,
      page: 101,
      kind: "variant",
      variantOf: "Duplication",
      value: "Vous pouvez séparer des parties de votre corps sans dommages et les contrôler alors qu’elles sont séparées du reste. Voir la limite Séparation anatomique du pouvoir Duplication (page 68).",
      extras: [],
      limites: [],
    },
    {
      name: "Serviteur",
      category: "Contrôle",
      page: 101,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez créer ou invoquer un serviteur ou un sbire. Il vous faut une planche de préparation pour invoquer votre serviteur, qui apparaîtra à portée proche. Vous devez vous concentrer pour donner des ordres à votre serviteur. Vous disposez d’une réserve de points égale à 4 fois votre niveau dans le pouvoir Serviteur, avec lequel vous achetez les capacités du serviteur : sa Vaillance, sa Force, sa Coordination et ses pouvoirs coûtent chacun 1 point par niveau. Des pouvoirs d’attaque, de défense ou de mouvement sont fréquents chez les serviteurs, mais ils peuvent être dotés de tout type de pouvoirs, avec l’accord du MJ. Les serviteurs n’ont aucune capacité mentale et ne peuvent que suivre vos ordres. Ils n’ont pas de Ténacité et il est impossible de leur en octroyer grâce au Commandement. Notez que vous créez ce serviteur lorsque vous obtenez ce pouvoir et que vous invoquerez toujours le même : si vous souhaitez changer les capacités de votre serviteur à chaque invocation, il vous faudra l’extra Variable. Le MJ doit approuver chaque serviteur et peut opposer son veto à un concept inapproprié. Les vilains ont souvent ce pouvoir à un niveau hors-échelle, leur permettant d’appeler à eux des légions de serviteurs ou de sbires puissants Exemple : L’héroïne Tesla peut invoquer des « Teslabots » au travers d’un trou de ver dimensionnel. Son niveau de Serviteur à 6 lui offre 24 points à diviser et un Teslabot peut donc avoir une Vaillance à 3, une Coordination à 3, une Force à 6 et les pouvoirs Résistance aux dégâts à 3, Vol à 4 et Paralysie 5. Serviteurs multiples Vous pouvez dépenser un des points de la réserve de votre serviteur pour lui adjoindre un second serviteur avec les mêmes caractéristiques (ce qui réduit les points à dépenser dans les capacités). Vous ne pouvez toujours invoquer qu’un seul serviteur par planche, sauf si vous bénéficiez de l’extra Multiple (ci-dessous). Les serviteurs qui collaborent ensemble à la même action utilisent la règle d’effort combiné (voir effort combiné dans les bases). Exemple : souhaitant disposer de plusieurs Teslabots, Tesla applique l’extra Augmenté (voir ci-dessous) à son serviteur et utilise ces 6 points supplémentaires pour obtenir un total de six robots à invoquer. Si elle veut les invoquer tous en même temps, il lui faudra toutefois également l’extra Multiple,. Autrement, elle ne pourra en faire venir qu’un seul par planche.",
      extras: [
        { name: "Augmenté", value: "chaque application de cet extra vous donne des points additionnels pour créer votre serviteur, égal à votre niveau de pouvoir." },
        { name: "Multiple", value: "si vous invoquez des serviteurs multiples, vous pouvez les faire apparaître tous en même temps plutôt qu’un par planche." },
        { name: "Instantané", value: "invoquer votre serviteur ne requiert pas de préparation, vous pouvez le faire instantanément, bien qu’il vous fasse toujours le faire à votre tour et que vous ne pouvez toujours invoquer qu’un seul serviteur par planche, sauf si vous avez également l’extra Multiple." },
        { name: "Lien sensoriel", value: "vous pouvez percevoir par les sens de vos serviteurs, voyant et entendant comme ils le font." },
        { name: "Variable", value: "vous pouvez invoquer différents types de serviteur, en réallouant les points de design pour créer un nouveau serviteur à chaque fois que vous utilisez ce pouvoir. Le MJ peut poser des règles et des limites aux types de serviteurs que vous pouvez invoquer." },
      ],
      limites: [
        { name: "Standard", value: "Exclusif, Performance, Source." },
        { name: "Choc en retour", value: "vous souffrez des mêmes résultats d’étourdissement (mais pas d’autres effets) que vos serviteurs." },
      ],
    },
    {
      name: "Sorcellerie",
      category: "Contrôle",
      page: 102,
      kind: "power",
      variantOf: null,
      groupOf: "Arcanes",
      value: "Sorcellerie vous permet de lancer des sortilèges dupliquant les effets des autres pouvoirs. Ce pouvoir a la limite Performance (voir Limites) : si vous êtes contraint, bâillonné ou d’une autre manière incapable de faire des gestes ou de parler, vous ne pouvez lancer de sort. Préparer un sort vous demande une planche de préparation : choisissez le pouvoir que vous souhaitez dupliquer et faites un test avec une Difficulté égale au niveau de pouvoir désiré, limité par votre propre niveau de Sorcellerie. Choisissez la capacité que vous testez pour jeter vos sorts au moment de l’acquisition de ce pouvoir : soit votre niveau dans le pouvoir Sorcellerie, soit un attribut, peut-être augmenté d’une spécialité (typiquement Occultisme). Un succès vous octroie le pouvoir voulu au niveau souhaité, un échec signifie que vous devrez recourir à un effort tenace pour essayer à nouveau. Vous pouvez aussi jeter un sort automatiquement en dépensant un point de Ténacité (aucun test n’est alors requis).",
      extras: [
        { name: "Instantané", value: "vous n’avez pas besoin de prendre une planche de préparation pour lancer un sort, il peut lancer le sort et utiliser le pouvoir ainsi octroyé dans la même action." },
        { name: "Maîtrise", value: "vous avez la maitrise d’un sortilège particulier. Choisissez un pouvoir que vous pouvez dupliquer avec votre Sorcellerie sans qu’une préparation ou un test ne soit nécessaire. Vous dupliquez ce pouvoir au niveau de votre Sorcellerie." },
        { name: "Psychique", value: "vous avez acquis la maîtrise des aspects psychiques de la sorcellerie. Vous pouvez dupliquer les pouvoirs d’Esprit et de Perception sans la limite Performance. Ils nécessitent toujours de la préparation, sauf si vous avez aussi l’extra Instantané, et un test – sauf si vous avez la maîtrise de ce pouvoir particulier." },
      ],
      limites: [
        { name: "Standard", value: "Bloqué par X, Source." },
        { name: "Lié à une capacité", value: "votre Sorcellerie est liée à l’un des attributs mentaux (Intellect, Eveil ou Volonté) et son niveau ne peut pas dépasser celui de cet attribut, modifié par toute spécialité pertinente. Réduisez le niveau de votre Sorcellerie à celui de l’attribut lié s’il lui est supérieur lors de la détermination des pouvoirs. Les modifications de niveaux liées aux limites (incluant celle-ci) ne peuvent permettre au pouvoir de dépasser le niveau de l’attribut lié." },
        { name: "Rituel", value: "Votre Sorcellerie requiert de longs rituels. Il vous faut au minimum une minute de préparation par niveau de pouvoir pour lancer un sortilège, voir plus longtemps. Vous ne pouvez bénéficier de l’extra Instantané." },
      ],
    },
    {
      name: "Super-compétence",
      category: null,
      page: 103,
      kind: "variant",
      variantOf: "Renforcement de capacité",
      value: "Vous avez une capacité innée considérable dans une spécialité donnée, sans besoin d’entrainement ou d’expérience. Vois la limite Renforcement de spécialité du pouvoir Renforcement de capacité (page 99).",
      extras: [],
      limites: [],
    },
    {
      name: "Super-force",
      category: null,
      page: 103,
      kind: "variant",
      variantOf: "Augmentation de capacité",
      value: "La force surhumaine, dans ICONS, est tout simplement un niveau de Force supérieur à 6, qui est le niveau maximal pour les plus puissants des athlètes et des haltérophiles. Reportez-vous aux pouvoirs Augmentation de capacité (page 36) et Renforcement de capacité (page 99) pour les possibilités d’augmenter votre niveau de Force.",
      extras: [],
      limites: [],
    },
    {
      name: "Super-sens",
      category: "Perception",
      page: 103,
      kind: "group",
      variantOf: null,
      value: "Vous avez des capacités sensorielles supplémentaires, améliorées ou étendues. Chaque niveau dans ce pouvoir vous donne l’une des options suivantes : choisissez ou lancez 1D6 par niveau sur la table qui suit. Vous pouvez choisir certaines options plusieurs fois, dans le cas où leurs bénéfices sont cumulables. Sens additionnels Pour chaque niveau en sens additionnel, choisissez l’une des options suivantes ou créez votre propre capacité sensorielle supplémentaire avec l’accord du MJ. Un test d’Eveil peut être requis pour certaines utilisations de ces sens additionnels, à la discrétion du MJ. • Vision circulaire : vous pouvez voir autour de vous à 360 degrés, rendant difficile toute tentative de vous surprendre. • Communication : vous pouvez communiquer par un medium autre que la parole, comme les ondesradio, le « super-ventriloquisme » ou la transmission télépathique. • Compréhension des langages : vous pouvez comprendre et communiquer dans n’importe quelle langue. Le MJ peut toutefois demander un test d’Intellect pour comprendre des langues particulièrement obscures ou extraterrestres. • Sens des dimensions : vous pouvez détecter l’énergie ou la signature vibratoire de chaque dimension, et savoir lorsque vous vous retrouvez dans un plan méconnu. • Sens de la direction : vous ne vous perdez jamais et vous pouvez retrouver votre chemin vers tout endroit où vous vous êtes déjà rendu. • Sens du temps : comme une horloge particulièrement précise, vous savez toujours quelle heure il est et combien de temps s’est écoulé. • Sens de la chasse : vous pouvez suivre les traces ou la piste d’un sujet, ce qui peut requérir un test d’Eveil sur un terrain ou des conditions difficiles, à la discrétion du MJ. • Vision infrarouge : vous pouvez voir les sources de chaleur, vous permettant de voir dans le noir en détectant les différences de température. • Vision microscopique : vous pouvez voir les objets trop petits pour qu’on puisse normalement les distinguer à l’oeil nu. Vous pouvez lire un microfilm sans lecteur mécanique ou jeter un oeil dans le monde des cellules et des molécules, voir dans le monde subatomique. • Vision pénétrante : vous pouvez voir au travers des objets solides, comme un rayon X. Choisissez au mois une substance que votre vision ne peut traverser. 1D6 Type Effet 1-2 Additionnel Vous avez plus de sens que les cinq communs : chaque niveau vous offre une nouvelle capacité sensorielle dans la liste des sens additionnels. 3-4 Amélioré Chaque niveau vous donne un bonus de +1 aux tests d’Eveil lié à un sens particulier, un peu comme une spécialité : vision améliorée, ouïe améliorée… 5-6 Etendu Chaque niveau vous permet d’améliorer la portée utile du sens utilisé, en décalant d’un rang les effets de la table des portées. Par exemple, avec une vision étendue à 1, vous pouvez voir les choses à portée visuelle comme si elles étaient simplement à portée proche. • Sens de l’espace : grâce à l’utilisation d’un radar, d’un sonar, d’un éveil mystique ou d’une capacité similaire, vous gagnez une vision tridimensionnelle de l’environnement qui vous entoure jusqu’à portée visuelle. • Télé-localisation : vous pouvez localiser un ou plusieurs individus connus, où qu’ils soient, avec un test d’Eveil réussi. Le MJ choisit la Difficulté en fonction de la distance et de votre lien avec le sujet : 3 à 4 pour un sujet bien connu, et jusqu’à 6 pour un sujet que vous ne connaissez que peu. • Vision véritable : vous pouvez voir la véritable apparence d’un objet ou d’une personne, faisant fi des déguisements ou des camouflages. Ce pouvoir passe outre tous les moyens de camoufler la véritable nature de quelque chose, qu’ils soient physiques, psychiques, liés ou à l’illusion ou à la sorcellerie. Dans certains cas, un test d’Eveil contre le niveau de l’effet de camouflage sera nécessaire. • Vision de l’ultraviolet : vous pouvez discerner les radiations ultraviolettes, vous permettant de voir dans le noir tant qu’il y a au minium une source de lumière UV (comme les étoiles, la nuit, par exemple).",
      table: {
        "dice": "1d6",
        "label": "Type",
        "entries": [
          {
            "name": "Additionnel",
            "roll": [
              1,
              2
            ],
            "value": "Vous avez plus de sens que les cinq communs : chaque niveau vous offre une nouvelle capacité sensorielle dans la liste des sens additionnels."
          },
          {
            "name": "Amélioré",
            "roll": [
              3,
              4
            ],
            "value": "Chaque niveau vous donne un bonus de +1 aux tests d’Éveil lié à un sens particulier, un peu comme une spécialité : vision améliorée, ouïe améliorée…"
          },
          {
            "name": "Étendu",
            "roll": [
              5,
              6
            ],
            "value": "Chaque niveau vous permet d’améliorer la portée utile du sens utilisé, en décalant d’un rang les effets de la table des portées."
          }
        ],
        "senses": [
          {
            "name": "Vision circulaire",
            "value": "Vous pouvez voir autour de vous à 360 degrés, rendant difficile toute tentative de vous surprendre."
          },
          {
            "name": "Communication",
            "value": "Vous pouvez communiquer par un medium autre que la parole, comme les ondes radio, le super-ventriloquisme ou la transmission télépathique."
          },
          {
            "name": "Compréhension des langages",
            "value": "Vous pouvez comprendre et communiquer dans n’importe quelle langue."
          },
          {
            "name": "Sens des dimensions",
            "value": "Vous pouvez détecter l’énergie ou la signature vibratoire de chaque dimension."
          },
          {
            "name": "Sens de la direction",
            "value": "Vous ne vous perdez jamais et vous pouvez retrouver votre chemin vers tout endroit où vous vous êtes déjà rendu."
          },
          {
            "name": "Sens du temps",
            "value": "Comme une horloge particulièrement précise, vous savez toujours quelle heure il est et combien de temps s’est écoulé."
          },
          {
            "name": "Sens de la chasse",
            "value": "Vous pouvez suivre les traces ou la piste d’un sujet."
          },
          {
            "name": "Vision infrarouge",
            "value": "Vous pouvez voir les sources de chaleur, vous permettant de voir dans le noir."
          },
          {
            "name": "Vision microscopique",
            "value": "Vous pouvez voir les objets trop petits pour qu’on puisse normalement les distinguer à l’œil nu."
          },
          {
            "name": "Vision pénétrante",
            "value": "Vous pouvez voir au travers des objets solides, comme un rayon X. Choisissez au moins une substance que votre vision ne peut traverser."
          },
          {
            "name": "Sens de l’espace",
            "value": "Grâce à un radar, un sonar ou une capacité similaire, vous gagnez une vision tridimensionnelle de votre environnement."
          }
        ]
      },
      extras: [],
      limites: [
        { name: "Sens réduit", value: "en compensation d’un éveil plus développé d’un sens, un autre est dramatiquement réduit. Les tests utilisant ce sens réduit voient leur Difficulté augmentée de 2." },
      ],
    },
    {
      name: "Super-vitesse",
      category: "Mouvement",
      page: 105,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez vous déplacer à une vitesse surhumaine. Reportez-vous à la Table des références pour déterminer à quel point. Une supervitesse de niveau 5 est suffisante pour rejoindre un lieu à portée visuelle en une seule case. Une super-vitesse de niveau 7 correspond à la vitesse du son, les niveaux suivants permettant d’aller encore plus vite. Une super-vitesse de niveau 10 permet de rejoindre n’importe quel point du globe en une seule case ! Vous pouvez aussi utiliser votre pouvoir pour accomplir plus vite certaines tâches (lire, assembler ou démonter un mécanisme).",
      extras: [
        { name: "Pouvoirs", value: "Attaque rapide, Contrôle de l’air, Contrôle des vibrations, Immatérialité (en faisant vibrer vos molécules), Régénération, Toupie." },
        { name: "Standard", value: "Affecte les autres" },
        { name: "Défensif", value: "vous pouvez substituer votre Super-vitesse à votre coordination ou votre Vaillance pour éviter des attaques." },
        { name: "Vitesse de surface", value: "vous pouvez utiliser votre vitesse extrême pour accomplir des exploits comme courir sur les murs (votre élan vous permet de défier la gravité) ou à la surface des liquides (vous êtes suffisamment rapide pour ne pas briser la tension de surface)." },
      ],
      limites: [],
    },
    {
      name: "Télékinésie",
      category: "Contrôle",
      page: 106,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle de la matière",
      value: "Vous avez la capacité de bouger des objets à portée visuelle sans les toucher. Votre niveau de pouvoir remplace la Force pour déterminer si vous pouvez les soulever et les déplacer (reportez-vous à la table des références dans le livre de base d’ICONS). Utilisez votre Volonté en lieu et place de votre « Coordination » télékinétique.",
      extras: [
        { name: "Pouvoirs", value: "Champ de force, Contrôle de la force, Décharge, Vol." },
      ],
      limites: [],
    },
    {
      name: "Télépathie",
      category: "Esprit",
      page: 106,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez lire les esprits et transmettre vos pensées. Effectuez un test de Télépathie avec la Volonté de la cible en Difficulté si le sujet est rétif ou ne sait pas qu’il est pris pour cible. Si le sujet est volontaire, aucun test n’est requis. Un test raté indique que vous ne pouvez pas essayer de lire à nouveau l’esprit de cette cible sans recourir à un effort tenace, et ce pour tout le reste du chapitre. Dénicher des souvenirs anciens, profonds ou occultés peut nécessiter de hauts degrés de réussite, à la discrétion du MJ. Vous pouvez lier ensemble un nombre d’esprits égal à votre niveau de pouvoir pour créer une sorte de « standard mental » et ainsi communiquer à plusieurs. Si quelqu’un tente de lire votre esprit, faites un test d’Eveil ou de Télépathie contre une Difficulté égale au niveau de pouvoir de l’autre télépathe pour vous en rendre compte. Lire votre esprit aura pour ce télépathe une Difficulté égale au plus élevé de votre Télépathie ou de votre Volonté.",
      extras: [
        { name: "Pouvoirs", value: "Décharge mentale, Détection des émotions, Détection de pouvoir (pouvoirs mentaux seulement), Domination (tous extras), Illusion, Invisibilité (esprits seulement), Perception extrasensorielle (proxy), Super-sens (télé-localisation)." },
        { name: "Standard", value: "sans limite de distance." },
        { name: "Arme psychique", value: "en concentrant vos pouvoirs mentaux, vous pouvez créer une arme d’énergie psychique. Manier cette arme avec votre Vaillance, mais ignorez la Résistance aux dégâts, comme pour une Décharge mentale." },
        { name: "Chirurgie psychique", value: "vous pouvez entrer dans l’esprit d’un sujet volontaire pour réparer des dégâts psychiques. Cela fonctionne comme Guérison, mais seulement sur les dégâts infligés par une Décharge mentale ou d’autres pouvoirs d’esprit." },
        { name: "Sonde mentale", value: "vous pouvez chercher des informations spécifiques dans l’esprit d’un sujet. Vous devez annoncer ce que vous cherchez avant de procéder. Faites un test de Télépathie contre la Volonté du sujet. Un succès révèle l’information, qui reste limitée aux connaissances du sujet." },
      ],
      limites: [
        { name: "Animaux seulement", value: "vous ne pouvez utiliser votre Télépathie que sur les animaux, pas sur les gens." },
        { name: "Empathie", value: "vous ne pouvez sentir et affecter que les émotions d’une cible, pas ses pensées." },
      ],
    },
    {
      name: "Téléportation",
      category: "Mouvement",
      page: 107,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez disparaître d’un endroit et réapparaître instantanément à quelques distances de là. Reportez-vous à la Table des références du livre de base d’ICONS pour déterminer à quelle distance, en fonction de votre niveau de Téléportation. Une Téléportation de niveau 5 est suffisante pour aller n’importe où à portée visuelle, alors que les niveaux supérieurs ont des portées mesurées en dizaines, centaines ou même milliers de kilomètres. Une Téléportation de niveau 10 est suffisante pour se rendre virtuellement n’importe où. Vous devez soit voir votre destination, soit être capable de la visualiser (si elle est par exemple familière). Faites un test de pouvoir de difficulté 2. Un échec indique que vous arrivez à destination en état d’étourdissement et devez passer la prochaine case à récupérer (et donc sans pouvoir agir sur cette planche). Avec un niveau de Téléportation égal ou supérieur à 7, ce test n’est plus nécessaire, vous réussissez automatiquement. Si vous vous téléportez accidentellement dans un objet solide – ce qui peut inclure le sol, vous rebondissez immédiatement à votre point d’origine. Faites un test de Téléportation contre un niveau de Paralysie équivalent à la Solidité du matériau rencontré (voir Paralysie p. 93).",
      extras: [
        { name: "Standard", value: "Affecte les autres, Passagers." },
        { name: "Défensif", value: "vous pouvez utiliser votre Téléportation à la place de votre Coordination pour esquiver." },
        { name: "Déplacement", value: "vous pouvez vous téléporter dans un objet solide, déplaçant la masse de la cible à l’endroit d’où vous provenez. C’est un test de Téléportation contre la Solidité. Un succès déplace l’objet alors qu’un échec vous envoie rebondir à votre point de départ, avec un risque d’étourdissement comme décrit ci-dessus." },
        { name: "Fiable", value: "vous n’avez pas besoin de réaliser un test de Téléportation pour éviter d’être étourdi, quelque soit le niveau de votre pouvoir." },
        { name: "Invocation", value: "vous pouvez téléporter d’autres personnes ou des objets de lieux distants, dans la limite de distance de votre pouvoir, jusqu’à vous. Faites un test de Téléportation contre la Coordination de la cible." },
        { name: "Précis", value: "vous pouvez vous téléporter vers des lieux sans les voir ou devoir les visualiser, tant que vous pouvez décrire précisément où vous vous allez comme « à l’intérieur de la chambre forte au sous-sol de cet immeuble »." },
        { name: "Portail", value: "vous créez une faille dans l’espace permettant à d’autres personnes de la traverser. Chaque planche après la première demande un nouveau test de Téléportation (sauf si vous avez Téléportation à niveau 7 ou supérieur) et vous devez vous concentrer pour garder le portail ouvert." },
        { name: "Rafale", value: "vous pouvez vous téléporter rapidement de place en place, frappant de multiples cibles comme si vous utilisez le pouvoir Attaque rapide. Les cibles doivent toutefois être à portée visuelle, et bien sûr à portée de votre pouvoir de Téléportation, les unes des autres." },
      ],
      limites: [
        { name: "Localisation spécifique", value: "vous ne pouvez vous téléporter que vers des lieux spécifiques, décidés conjointement avec le Meneur de Jeu." },
        { name: "Transmission", value: "vous vous téléportez via un medium spécifique comme le réseau électrique, les réseaux de communication, les systèmes racinaires, les ombres, les voies d’eau. Vous devez entrer et sortir de ce medium." },
        { name: "En quête d’ennuis", value: "vous avez une perception inconsciente des situations dangereuses et pouvez vous téléporter automatiquement vers elles, que vous le souhaitiez ou non. Vous disposez généralement d’une planche d’avertissement avant que votre pouvoir ne se déclenche. Vous ne savez pas forcément quel sera le problème à votre destination avant qu’il ne se manifeste." },
      ],
    },
    {
      name: "Toucher mortel",
      category: null,
      page: 108,
      kind: "variant",
      variantOf: null,
      value: "Voir le pouvoir Drain d’énergie – spécifiquement l’extra Drain de vie (page 68).",
      extras: [],
      limites: [],
    },
    {
      name: "Toupie",
      category: "Mouvement",
      page: 108,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez tourner sur vous-même à une vitesse surhumaine tout en restant capable de parler, entendre et voir normalement. Ce pouvoir vous prodigue trois bénéfices. Premièrement, votre rotation rapide vous offre une Résistance à l’Immobilisation (incluant les attaques de Lutte). En second lieu, la toupie génère un écran de vent qui substitue votre niveau de pouvoir à votre Coordination pour vous défendre contre les attaques physiques ou basées sur l’élément air. Enfin, vous pouvez utiliser votre niveau de pouvoir à la place de votre Force pour déterminer les dégâts, ou infliger une prise, en combat rapproché.",
      extras: [
        { name: "Pouvoirs", value: "Attaque rapide, Contrôle de l’air, Super-sens (vision circulaire), Super-vitesse, Vol." },
        { name: "Bélier d’air", value: "vous pouvez générer une charge d’air concentré capable de renverser les gens. Faites un jet de Toupie contre Force et lisez le résultat comme une possible projection." },
        { name: "Tempête de lame", value: "projetant plusieurs petites lames, shurikens, pointes ou débris, vous pouvez infliger des dégâts égaux à votre niveau de pouvoir à toute cible à portée proche." },
        { name: "Tourbillon de lame", value: "armé d’une petite arme tranchante, comme une dague ou une épée, vous pouvez utiliser votre niveau de pouvoir pour attaquer et infliger des dégâts égaux soit à votre niveau de Toupie, soit aux dégâts de l’arme (le plus élevé des deux) à une cible unique." },
        { name: "Foreuse", value: "vous pouvez forer toute surface dont la Solidité est inférieure ou égale à votre niveau de Toupie, comme si vous aviez le pouvoir Fouissage." },
        { name: "Tornade", value: "vous pouvez générer une tornade qui inflige des dégâts égaux à votre niveau de pouvoir à toute personne à portée étendue. Toutefois, vous devez faire sur chaque planche un test de Toupie, dont la Difficulté est votre niveau de pouvoir, pour contrôler votre tornade. Si vous échouez, celle-ci échappe à tout contrôle avant de disparaitre au bout de 1D6 planches." },
      ],
      limites: [
        { name: "Standard", value: "Temporaire." },
      ],
    },
    {
      name: "Transmission",
      category: null,
      page: 109,
      kind: "variant",
      variantOf: null,
      value: "Vous vous téléportez à l’aide d’un médium spécifique, comme le réseau électrique, les réseaux de communication, les systèmes racinaires, les voies d’eau… Vous devez entrer et sortir de ce medium. Voyez la limite Transmission dans le pouvoir Téléportation, page 107.",
      extras: [],
      limites: [],
    },
    {
      name: "Transmutation",
      category: "Contrôle",
      page: 109,
      kind: "power",
      variantOf: null,
      groupOf: "Contrôle de la matière",
      value: "Vous pouvez, par le toucher, transformer les éléments et composés chimiques, changeant un matériau inerte en un autre matériau inerte. La transmutation n’affecte pas les êtres vivants et ne peut créer d’êtres animés à partir de matière brute (voir les pouvoirs Rayon altérant ou Serviteur pour ce genre d’effets). Vous ne pouvez affecter que des objets dans leur ensemble, avec une masse maximum basée sur votre niveau de pouvoir (voir la colonne poids dans la Table des références). Il sera peut-être nécessaire de réussir un test de Coordination pour toucher un objet mouvant ou tenu par quelqu’un.",
      extras: [
        { name: "Standard", value: "A distance, Visuel." },
        { name: "Pouvoirs", value: "Serviteur, Rayon altérant." },
        { name: "Contrôle catalytique", value: "vous pouvez accélérer, ralentir ou stopper les réactions chimiques. Vous pouvez faire en sorte que le métal ne soit plus dissous par l’acide, précipiter l’oxydation des métaux ferreux, nullifier les pouvoirs ou les composés biochimiques, et ainsi de suite." },
        { name: "Etranglement", value: "vous pouvez couvrir de gaz une aire affectant les cibles comme avec l’extra Suffocation du pouvoir Contrôle de l’air (une Affliction à distance)." },
        { name: "Explosion", value: "en créant des éléments explosifs, vous pouvez créer une Décharge qui inflige des dégâts équivalents à votre niveau de pouvoir à toute personne à portée proche." },
      ],
      limites: [
        { name: "Standard", value: "Concentration, Fatigant, Performance, Temporaire." },
        { name: "Masse limitée", value: "vous n’affectez qu’une masse très limitée, moins que le poids soulevable avec une Force de 1, soit à peine un ou deux kilos à la fois." },
        { name: "Un seul état", value: "vous ne pouvez affecter que l’un des états de la matière (solide, liquide ou gazeuse) sans pouvoir transmuter autre chose. La transmutation affecte normalement tous les états de la matière." },
      ],
    },
    {
      name: "Véhicule",
      category: null,
      page: 110,
      kind: "variant",
      variantOf: null,
      value: "Vous possédez un véhicule spécialisé. Reportez-vous aux accessoires de mouvement, dans le chapitre Accessoires.",
      extras: [],
      limites: [],
    },
    {
      name: "Vitalité",
      category: "Défense",
      page: 110,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez ignorer certains besoins physiques (comme respirer, manger, dormir) ou supporter des environnements dangereux. Pour chaque niveau de Vitalité, choisissez l’un de ces besoins ou environnements, dont vous ne subirez pas les effets. Au niveau 10, vous bénéficiez d’une Vitalité totale et vous les ignorez alors tous. • Respirer : vous n’avez aucun besoin de respirer. • Froid : les températures basses, atmosphériques ou environnementales. • Se nourrir : ce qui inclue la soif et la nécessité d’évacuer les déchets. • Chaleur : les températures élevées, atmosphériques ou environnementales. • Pathogènes : les maladies atmosphériques ou environnementales. • Pression : vous pouvez survivre à des pressions écrasantes. • Radiation : les niveaux de radiation atmosphériques ou environnementaux. • Sommeil : vous n’avez plus besoin de dormir, mais vous pouvez néanmoins avoir besoin de vous reposer. • Toxines : les toxines atmosphériques ou environnementales. • Vide : vous pouvez survivre à des pressions extrêmement basses. Survivre sans protection dans le vide spatial requiert donc un niveau de Vitalité 4 afin de résister au froid, à l’absence d’air respirable, aux radiations et au vide. Quand vous obtenez ce pouvoir, vous pouvez décider de supprimer un autre des pouvoirs obtenus pour augmenter la Vitalité à 10. Vitalité ne produit pas de protection contre les dégâts des attaques, pour cela reportez-vous aux pouvoirs Adaptation ou Résistance.",
      extras: [],
      limites: [],
    },
    {
      name: "Vol",
      category: "Mouvement",
      page: 111,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez voler. Reportez-vous à la Table des références du livre de base d’ICONS pour déterminer à quelle vitesse. Vol 5 vous permet de voler aussi vite qu’un hélicoptère. Vol 7 est grosso modo la vitesse du son. Vol 10 est suffisant pour vous rendre n’importe où dans le monde en une seule case.",
      extras: [
        { name: "Vol spatial", value: "dans l’espace, vous êtes capable de voyager plus vite que la lumière pour franchir les incroyables distances entre les planètes et les étoiles." },
      ],
      limites: [],
    },
    {
      name: "Vol de pouvoir",
      category: null,
      page: 111,
      kind: "variant",
      variantOf: null,
      value: "Vous pouvez voler les pouvoirs de quelqu’un et les utiliser à votre propre compte. Reportez-vous à l’extra Vol de pouvoir de Mimétisme de pouvoir (page 88).",
      extras: [],
      limites: [],
    },
    {
      name: "Voltige",
      category: "Mouvement",
      page: 111,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez vous balancer au bout d’un corde ou d’un câble, qu’il s’agisse de lignes de force, de fils arachnéens que vous générez ou grâce à un accessoire comme un pistolet-grappin ou un lasso. Vos lignes possèdent une Solidité égale au niveau de votre pouvoir. Utilisez votre Voltige à la place de votre Coordination, si elle est plus haute, pour toutes les manoeuvres accomplies alors que vous êtes suspendu (ce qui inclue éviter des attaques). Vous pouvez aussi utiliser votre sustente pour attraper des choses et les attirer à vous – plutôt que l’inverse, vous amener à elles – en réussissant un test de Coordination. Il vous sera peut-être demandé de réussir un jet opposé de Force contre Force si vous essayez d’arracher ledit objet à quelqu’un.",
      extras: [],
      limites: [],
    },
    {
      name: "Voyage dimensionnel",
      category: "Mouvement",
      page: 112,
      kind: "power",
      variantOf: null,
      value: "Vous pouvez vous déplacer à volonté entre les dimensions. Vous pouvez vous rendre librement dans toute dimension que vous avez déjà visitée, mais aller dans une nouvelle dimension demande un test de pouvoir de Difficulté 3. Un échec indique soit que vous n’allez nulle part, et qu’il faudra avoir recours à un effort tenace pour tenter à nouveau de rejoindre cette dimension, soit que vous éprouvez des difficultés à atteindre votre destination (généralement en perdant une planche d’action à votre arrivée, à la discrétion du MJ). Un succès indique que vous atteignez la dimension souhaitée sans soucis. Un niveau de Voyage dimensionnel de 8 ou supérieur permet de réussir automatiquement tous les passages, sans faire de test. Vous revenez généralement dans une dimension à l’endroit où vous étiez en la quittant, sauf si vous disposez de l’extra Téléportation ou si le Meneur de Jeu vous indique le contraire pour des raisons narratives.",
      extras: [
        { name: "Pouvoirs", value: "Téléportation." },
        { name: "Fiable", value: "vous n’avez jamais besoin d’effectuer de test de votre pouvoir pour atteindre une nouvelle dimension." },
        { name: "Poche dimensionnelle", value: "vous pouvez accéder à une « poche » dimensionnelle dans laquelle vous pouvez stocker des objets. La masse totale de ce que vous pouvez placer dans cette poche est basée sur votre niveau de pouvoir, indiqué dans la colonne Poids de la Table de références du livre de base d’ICONS." },
      ],
      limites: [
        { name: "Une dimension", value: "vous ne pouvez voyager qu’entre votre dimension d’origine et une autre, choisie quand vous obtenez ce pouvoir." },
      ],
    },
    {
      name: "Voyage hyperspatial",
      category: null,
      page: 113,
      kind: "variant",
      variantOf: "Vol",
      value: "Reportez-vous à l’extra Voyage spatial du pouvoir Vol (page 111).",
      extras: [],
      limites: [],
    },
    {
      name: "Voyage supraluminique",
      category: null,
      page: 113,
      kind: "variant",
      variantOf: "Vol",
      value: "Reportez-vous à l’extra Vol spatial du pouvoir Vol, page 111. Le Meneur de Jeu peut décider de déterminer les temps de trajets interstellaires en se basant sur le niveau de Vol, selon le contexte et l’histoire.",
      extras: [],
      limites: [],
    },
    {
      name: "Voyage temporel",
      category: null,
      page: 113,
      kind: "variant",
      variantOf: "Contrôle temporel",
      value: "Vous pouvez voyager à travers le temps. Reportez-vous à l’extra Voyage temporel du pouvoir Contrôle temporel (avec éventuellement la limite Extra seulement). Comme indiqué dans la description de ce pouvoir, page 60, les mécaniques et les règles du voyage temporel dans ICONS sont largement laissées à la discrétion du Meneur de jeu qui peut tout à fait décider qu’il s’agit d’une capacité hors-échelle uniquement accessible à certains de ses PNJ, qu’il s’agisse de vilains ou d’alliés des héros. Cela empêche les joueurs de se projeter à volonté dans le temps, en changeant frénétiquement l’histoire. Selon une règle générale de bon sens, toute utilisation du voyage temporel impactant le présent peut être considérée comme une retcon et requérir un avantage pour être amenée en jeu, par exemple en utilisant comme manoeuvre le pouvoir de Voyage temporel ou son niveau.",
      extras: [],
      limites: [],
    }
  ],
};

pouvoirs.byName = {};
pouvoirs.list.forEach((entry) => {
  pouvoirs.byName[entry.name] = entry;
});

pouvoirs.definitionOf = function definitionOf(name) {
  const key = (name || "").trim();
  if (pouvoirs.byName[key]) return pouvoirs.byName[key];
  const lower = key.toLowerCase();
  for (const entry of pouvoirs.list) {
    if (entry.name.toLowerCase() === lower) return entry;
  }
  return null;
};

pouvoirs.isVariant = function isVariant(name) {
  const entry = pouvoirs.definitionOf(name);
  return !!(entry && entry.kind === "variant");
};

pouvoirs.isGroup = function isGroup(name) {
  const entry = pouvoirs.definitionOf(name);
  return !!(entry && entry.kind === "group");
};

pouvoirs.rollGroup = function rollGroup(name) {
  const entry = pouvoirs.definitionOf(name);
  if (!entry || entry.kind !== "group" || !entry.table) return null;
  const table = entry.table;
  const entries = table.entries || [];
  if (!entries.length) return null;

  const d6 = () => Math.ceil(Math.random() * 6);
  const pickRandom = () => entries[Math.floor(Math.random() * entries.length)];

  if (!table.dice) {
    const chosen = pickRandom();
    return { name: chosen.name, value: chosen.value || null, rolls: null, entry: chosen };
  }

  if (table.dice === "1d6") {
    let guard = 0;
    while (guard < 20) {
      guard += 1;
      const roll = d6();
      const match = entries.find((e) => (e.roll || []).includes(roll));
      if (!match) continue;
      if (match.special === "reroll") continue;
      return { name: match.name, value: match.value || null, rolls: [roll], entry: match };
    }
    return null;
  }

  if (table.dice === "2d6") {
    const a = d6();
    const b = d6();
    const total = a + b;
    const match = entries.find((e) => (e.roll || []).includes(total));
    if (!match) return null;
    return { name: match.name, value: match.value || null, rolls: [a, b], total, entry: match };
  }

  if (table.dice === "d6xd6") {
    const first = d6();
    const second = d6();
    const match = entries.find(
      (e) => (e.first || []).includes(first) && (e.second || []).includes(second)
    );
    if (!match) return null;
    return { name: match.name, value: match.value || null, rolls: [first, second], entry: match };
  }

  return null;
};

