/*function Pokemon (name, type){
    this.name = name;
    this.type = type;
}

const pikachu = new Pokemon("Pikachu", "Electric");
*/



class Pokemon {
    name = '';
    type = '';

    constructor(pokemonName, pokemonType){
        this.name = pokemonName;
        this.type = pokemonType;
    }

    attack(attackName){
        console.log (`${this.name} attacked with ${attackName}`)
    }
}

//heritage
class Pikachu extends Pokemon {
    constructor(){
        super('Pikachu', 'Electric3')
    }
    attack(){
        console.log (`${this.name} attacked with thunderstruck`)
    }
}

const ashPikachu = new Pikachu ('Pikachu', 'Electric2')
const pikachu = new Pokemon('Pikachu', 'Electric');
pikachu.attack("Thunderstruck")
/*pikachu.name = 'Pikachu';
pikachu.type = 'Electric';
*/

console.log(pikachu);
console.log(ashPikachu);
console.log(ashPikachu instanceof Pikachu);
console.log(ashPikachu instanceof Pokemon);