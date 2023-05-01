//rest
function sum(){
    let sum = 0;
    for (let i= 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log (sum(10,20, 30, 40, 50, 60));

function sumWithRest (...numbers) {
    const sum = numbers.reduce((total, currentNumber) => {
        total += currentNumber
        return total;
    }, 0)
    return sum;
}


console.log (sumWithRest(10, 20, 30, 20, 40, 50, 50));  

//spread

const numbers = [1 ,2 ,3, 4]

console.log(numbers);
console.log(...numbers);

const soccerTeamsSP = ['Santos', 'Palmeiras', 'Corinthians', 'Bragantino']

const soccerTeamsRJ = ['Flamengo', 'Fluminense', "Botafogo"]

//const soccerTeam = soccerTeamsRJ.concat(soccerTeamsSP)

const soccerTeams = [...soccerTeamsSP, ...soccerTeamsRJ];

console.log(soccerTeams);


const juliaCar ={
    Model: 'GOl',
    Brand: 'VW',
    Motor: 1.6
}

const anaCar = {
    ...juliaCar,
    Motor: 1.8
}

console.log(anaCar);

//desestructuration

//const motorOftheCarOfAna = anaCar.Motor;
const { Motor: motorOftheCarOfAna } = anaCar;
const { Motor: motorOftheCarOfJulia } = juliaCar;

const [item1, item2, item3, ...restOfTeams] = soccerTeams;

console.log(item1);
console.log(item2)
console.log(restOfTeams);