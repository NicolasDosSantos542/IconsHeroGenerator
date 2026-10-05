let extras = {
  list: [
    {
      name: "À distance",
      value:
        "Vous pouvez utiliser votre pouvoir, normalement limité à portée proche, à portée étendue.",
    },
    {
      name: "Affecte les autres",
      value:
        "Votre pouvoir vous permet d’affecter d’autres personnes que vous-même.",
    },
    {
      name: "Affecte X",
      value:
        "Votre pouvoir fonctionne sur un type de cible normalement immunisé à son effet, comme une Décharge qui affecte des cibles intangibles normalement à l’abri de tout dégât physique, ou une Domination affectant les morts-vivants, normalement dénués d’esprit.",
    },
    {
      name: "Contagieux",
      value:
        "L’effet de votre pouvoir est « contagieux » et peut affecter quelqu’un entrant en contact avec votre cible, tant que l’effet du pouvoir est toujours actif. Parmi les exemples, des Afflictions « contagieuses », des Immobilisations « collantes », des Décharges de feu ou d’acide se propageant… La nouvelle victime résiste normalement à l’effet du pouvoir et devient à son tour contagieuse tant qu’elle est affectée.",
    },
    {
      name: "Défensif",
      value:
        "Vous pouvez utiliser votre pouvoir pour encaisser les attaques (voir Encaisser sous Action ! dans le livre de base d’ICONS). Vous faites alors un test de Réaction du niveau de votre pouvoir et cela fixe la difficulté des attaques vous visant.",
    },
    {
      name: "Diffusion",
      value:
        "Votre pouvoir vous permet d’affecter toute personne qui vous voit ou vous entend (que ce soit en personne ou bien sur une diffusion radio ou télévisée), ce qui vous donne dans les faits une bien plus grande portée.",
    },
    {
      name: "Durée de niveau",
      value:
        "Les effets de votre pouvoir persistent pendant une durée égale à son niveau, en planches (voir Durée plus haut).",
    },
    {
      name: "Effet",
      value:
        "Votre pouvoir peut dupliquer les effets d’un autre pouvoir, à concurrence de son niveau. Cet extra est souvent simplement listé sous le nom du pouvoir dupliqué, comme « Vol » ou « Décharge ». Si votre pouvoir peut également dupliquer des extras du pouvoir copiés, ils seront également listés. Un extra du pouvoir dupliqué devenant ainsi un nouvel extra du pouvoir de base « coûte » donc comme un nouvel extra.",
    },
    {
      name: "Effet secondaire",
      value:
        "Votre pouvoir bénéficie d’un effet additionnel, équivalent à celui d’un autre pouvoir. Par exemple, votre pouvoir de Frappe peut être « porteur » d’une Affliction, par le biais d’une toxine injectée par votre attaque. Vous ne pouvez utiliser l’effet secondaire qu’en conjonction avec le pouvoir principal.",
    },
    {
      name: "Passagers",
      value:
        "Votre pouvoir de mouvement vous permet d’emporter avec vous un nombre de passagers égal à son niveau.",
    },
    {
      name: "Récupération lente",
      value:
        "Les victimes de votre pouvoir mettent dix fois plus de temps qu’habituellement pour se remettre de ses effets.",
    },
    {
      name: "Réversible",
      value:
        "Vous pouvez inverser les effets de votre pouvoir, les stoppant à volonté, à la même portée utile que pour son utilisation.",
    },
    {
      name: "Salve",
      value:
        "Votre pouvoir vous permet d’affecter simultanément toute personne se trouvant à portée proche. Réalisez un seul test de pouvoir contre les différentes capacités de vos cibles, qui sont autant de difficultés différentes (et donc de marges).",
    },
    {
      name: "Sans limite de distance",
      value:
        "Vous pouvez utiliser votre pouvoir à n’importe quelle distance, pour peu que vous connaissiez la localisation de votre cible.",
    },
    {
      name: "Tête chercheuse",
      value:
        "Un pouvoir à distance, nécessitant un test, bénéficie de deux essais supplémentaires pour toucher sa cible si le premier rate, comme un missile à tête chercheuse. Chaque essai a lieu au début de votre case. S’ils échouent tous deux, le pouvoir n’a aucun effet.",
    },
  ],
};

extras.byName = {};
extras.list.forEach((entry) => {
  extras.byName[entry.name] = entry;
});

extras.definitionOf = function definitionOf(name) {
  return extras.byName[(name || "").trim()] || null;
};
