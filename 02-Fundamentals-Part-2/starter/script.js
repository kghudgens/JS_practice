'use strict';

// let hasDriversLicense = false
// const passTest = true

// if (passTest) hasDriversLicense = true

// const interface = 'Audio'
// const private = 534

// functions
// function logger(){
//     console.log('My name is Kevin')
// }

// logger()

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice 
// }

// const appleJuice =fruitProcessor(2, 4)
// console.log(appleJuice)

// func expressions vs declarations

// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1995 )
// console.log(age1)

// const calcage2 = function(birthYear){
//     return 2037 - birthYear
// }

// const age2 = calcage2(1996)

// console.log(age1)
// console.log(age2)



// const calcAge3 = birthYear => 2037 -birthYear
// console.log(calcAge1(2000))

// Arrow function
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 -birthYear;
//     const retirement = 65 - age
//     return `${firstName} retires in ${retirement}.`
// }

// console.log(yearsUntilRetirement(1991, 'David'))

// function cutFruitPieces(fruit){
//     return fruit * 4
// }


// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges`;
//     return juice 
// }

// const juiceContents = fruitProcessor(7, 9)
// console.log(juiceContents)

// const calcAge = function(birthYear){
//     return 2037 - birthYear
// }
// const yearsUntilRetirement = function(birthYear, firstName) {
//     const age = 2020 -birthYear;
//     const retirement = 65 - age

//     if(retirement > 0 ){
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement
//     }else{
//         console.log(`${firstName} has already retired.`)
//         return -1;
//     }

//     // return `${firstName} retires in ${retirement}.`
// }

// console.log(yearsUntilRetirement(1995, 'kevin'))
// console.log(yearsUntilRetirement(1940, 'Sandra'))

const calcAverage = (score1, score2, score3 ) => (score1 + score2 + score3) / 3

const dolphinsAverage = calcAverage(85, 54, 41)
const koalasAverage = calcAverage(65, 54, 49)

function checkWinner(avgKoalas, avgDolphins){
    if (avgDolphins > avgKoalas){
        console.log(`The Score was ${avgDolphins} and ${avgKoalas}, the dolphins win`)
        return avgDolphins
    } else{
        console.log(`The Score was ${avgDolphins} and ${avgKoalas}, the Koalas win`)
        return avgKoalas
    }
}

checkWinner(koalasAverage, dolphinsAverage)