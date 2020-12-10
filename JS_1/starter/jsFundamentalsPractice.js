// Difference between let and var are the scope of the variable
// let is local and var is global

let country = 'America'
const CONTINENT = 'Asia'
var population = 50000000

console.log(country, CONTINENT, population)

var language
var isIsland = true

console.log(isIsland, population, country, language)

language = 'english'

// CONTINENT = 'Spain'

half = population/2
newPopulation = population+1

if (population> 60000000){
    console.log("Japan has more people than finland")
} else{
    console.log("Finland has more people")
}

if (population<3300000){
    console.log(country, "Has less than the average")
}

var description
description= country + " is in " + CONTINENT + " and its " + newPopulation +' people speak ' + language

console.log(description)

var numNeighbors = 1

// if (numNeighbors === 1 ){
//     console.log("Only 1 border")
// } else if (numNeighbors >= 2){
//     console.log("More than one")
// } else if (numNeighbors===0){
//     console.log("No neighbors")
// }

if (language === 'english' && population < 50000000 && isIsland === false){
    console.log(country + " is right for you!")
} else{
    console.log(country + " is not for you!")
}

switch (language){
    case 'chinese' || 'mandarin':
        console.log('Most number of native speakers');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers')
        break;
    case 'english':
        console.log("3rd place")
        break;
    case 'hindi':
        console.log('4')
        break;
    case 'arabic':
        console.log('5 most spoken language')
        break;
    default:
        console.log('Your language sucks')
}
function populationCheck(number){
    number > 33000000 ? "America's population is above average": "Americas population is above average";
}

console.log(populationCheck(population))