"use strict";

//Arrow functions
//const myFunc = () =>{}

// function printMyName(name) {
//   console.log(name);
// }

// const printName = (name) => {
//   console.log(name);
// };

// // When returning something you can omit return and just write the statement
// const multiply = (number) => number * 2;

// printMyName("Kevin");
// printName("KevinArrow");
// console.log(multiply(5));

class Huamn {
  constructor() {
    this.gender = "male";
  }

  PrintGender() {
    console.log(this.gender);
  }
}
class Person extends Huamn {
  constructor() {
    super();
    this.name = "Kevin";
  }
  PrintMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.PrintMyName();
person.PrintGender();
