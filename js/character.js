// const table = require('./data')

class Character {

    powerQuantity = 0;
    specialquantity = 0;
    powers = [];
    attributes = [];
    origin = "";
    specialities = [];

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
            }
        })
        this.powers.push(response);
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
}

// module.exports = Character