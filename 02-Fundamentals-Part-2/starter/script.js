'use strict';

// let hasDriversLicense = false
// const passTest = true

// if (passTest) hasDriversLicense = true

// const interface = 'Audio'
// const private = 534

// functions
function logger(){
    console.log('My name is Kevin')
}

logger()

function fruitProcessor(apples, oranges){
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice 
}

const appleJuice =fruitProcessor(2, 4)
console.log(appleJuice)