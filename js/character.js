// const table = require('./data')

class Character {

    powerQuantity = 0;
    specialquantity = 0;
    powers = [];
    attributes = [];
    origin = "";
    specialities = [];
    description = "   Après avoir déterminé les capacités de votre héros, inventez-lui une histoire et une description. En particulier, imaginez son lieu de naissance, son enfance et son milieu culturel. Comment a-t-il acquis ses pouvoirs surhumains ? Quels sont les éléments de son histoire qui sont à l’origine des motivations et des gageures de sa vie actuelle ? À quoi ressemble votre héros ? Imaginez son physique, son costume, sa taille, sa coiffure et son style, ses manières et tous les autres détails remarquables. Si vous vous sentez l’âme d’un artiste, vous pouvez dessiner votre héros pour aider les autres joueurs à mieux se le représenter. Vous pouvez aussi utiliser ou modifier une image existante pour lui donner son apparence.";
    tenacite="<div>Soustrayez le nombre total de pouvoirs de votre héros de 6 pour connaître son niveau de Ténacité, avec un minimum de 1 – en gardant à l’esprit que chaque attribut au-dessus de 6 compte comme un pouvoir et que les extras comme les limites peuvent modifier le total de Ténacité que coûte un pouvoir. Le héros commence avec un nombre de points de Ténacité égal à son niveau de Ténacité et ce capital de points est rafraîchi au début de chaque nouveau numéro (mais si le joueur a acquis des points surnuméraires, ceux-ci ne sont pas perdus). <p><strong>Niveau de Ténacité = 6 – nombre total de Pouvoirs</strong></p></div>"

    constructor() {
        this.levelingAttributes();
        this.origin = this.whatKindOf("origin")
        this.powerQuantity = this.howManyPowers();
        this.specialquantity = this.howManySpecialities();
        for (let i = 0; i < this.powerQuantity; i++) {
            this.whatPower(this.whatKindOf("power"))
        }
        for (let i = 0; i < this.specialquantity; i++) {
            this.whatSpecialitie()
        }


    }


    dicer() {
        let one = Math.ceil(Math.random() * 6);
        let two = Math.ceil(Math.random() * 6);
        // console.log(one + two);
        return one + two
    }
    defineLevel() {
        let levelTable = [false, false, 1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 8]
        let roll = this.dicer();
        return levelTable[roll];

    }
    levelingAttributes() {
        table.attributes.forEach(attribute => {

            this.attributes.push({
                name: attribute,
                level: this.defineLevel()
            })
        })
    }

    howManyPowers() {
        switch (this.dicer()) {
            case 2:
            case 3:
            case 4:
                return 2
                break;
            case 5:
            case 6:
            case 7:
                return 3
                break;
            case 8:
            case 9:
            case 10:
                return 4
                break;
            case 11:
            case 12:
                return 5
                break;
        }
    }
    whatKindOf(string) {
        let shuffle;
        if (string === "power") {
            shuffle = table.power;
        } else if (string === "origin") {
            shuffle = table.origin;
        } else {
            return false;
        }

        let dice = this.dicer();
        let response;
        shuffle.forEach(kind => {

            if (kind.number.includes(dice)) {
                response = kind
            }
        })

        return response;

    }

    whatPower(data) {
        let powerTable;
        let response = { name: data.name, level: Number };
        switch (data.name) {
            case "Esprit":
                powerTable = table.spirit;
                break;
            case "Contrôle":
                powerTable = table.control;
                break;
            case "Défense":
                powerTable = table.defense;
                break;
            case "Attaque":
                powerTable = table.attack;
                break;
            case "Mouvement":
                powerTable = table.movement;
                break;
            case "Altération":
                powerTable = table.alteration;
                break;
            case "Perception":
                powerTable = table.perception;
                break;
            default:
                return false;

        }
        let one = Math.ceil(Math.random() * 6);
        let two = Math.ceil(Math.random() * 6);

        powerTable.forEach(object => {
            if (object.first.includes(one) && object.second.includes(two)) {
                response.name = object.name;
                response.level = this.defineLevel();
                response.page = object.page??null;
            }
        })
        while(!this.addElementInTable(this.powers, response)) {
            response = this.whatPower(data);
        }

        return response;
    }
    howManySpecialities() {
        return this.howManyPowers() - 1

    }
    whatSpecialitie() {
        let one = Math.ceil(Math.random() * 6) - 1;
        let two = Math.ceil(Math.random() * 6) - 1;
        // console.log("one = "+one , "two = "+ two)
        this.specialities.push(table.specialities[one][two])

    }
    addElementInTable(table, element) {
        if(table.includes(element)) {
            return false;
        } else {
            table.push(element);
            return true;
        }
    }
}

// module.exports = Character