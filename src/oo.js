/*function Pokemon (name, type){
    this.name = name;
    this.type = type;
}

const pikachu = new Pokemon("Pikachu", "Electric");
*/



class Pokemon {
    #hp = 100;

    constructor(pokemonName, pokemonType){
        this.name = pokemonName;
        this.type = pokemonType;
    }

    attack(attackName){
        console.log (`${this.name} attacked with ${attackName}`)
    }

    attacked(){
        this.#hp -= 10;
    }

    showHp(){
        console.log(this.#hp);
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

ashPikachu.attacked();
console.log(ashPikachu.hp);
ashPikachu.attack();
ashPikachu.showHp();

const pikachu = new Pokemon('Pikachu', 'Electric');
pikachu.attack("Thunderstruck")
/*pikachu.name = 'Pikachu';
pikachu.type = 'Electric';
*/

console.log(pikachu);
console.log(ashPikachu);
console.log(ashPikachu instanceof Pikachu);
console.log(ashPikachu instanceof Pokemon);