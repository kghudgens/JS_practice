"use strict";

//Arrow functions
//const myFunc = () =>{}

function printMyName(name) {
  console.log(name);
}

const printName = (name) => {
  console.log(name);
};

// When returning something you can omit return and just write the statement
const multiply = (number) => number * 2;

printMyName("Kevin");
printName("KevinArrow");
console.log(multiply(5));
