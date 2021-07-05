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

// class Huamn {
//   constructor() {
//     this.gender = "male";
//   }

//   PrintGender() {
//     console.log(this.gender);
//   }
// }
// class Person extends Huamn {
//   constructor() {
//     super();
//     this.name = "Kevin";
//   }
//   PrintMyName() {
//     console.log(this.name);
//   }
// }

// const person = new Person();
// person.PrintMyName();
// person.PrintGender();

// class Person {
//   myName = "Kevin";

//   printName = () => {
//     console.log(this.myName);
//   };
// }

// const person = new Person();
// person.printName();

// const kevin = {
//   name: "Kevin",
//   race: "The best",
// };

// const Momo = {
//   ...kevin,
//   age: 25,
// };

// const sum = (x, y, z) => x + y + z;

// const num = [1, 3, 5];

// console.log(sum(...num));
// const newNumbers = [...num, 4];
// console.log(newNumbers);
// console.log(Momo);

// const filter = (...args) => {
//   return args.filter((el) => el === 6);
// };

// console.log(filter(1, 2, 3, 4, 5));
// let num1, num2, num3;
// const numbers = [1, 3, 5];
// [num1, num2, num3] = numbers;
// console.log(num1, num2, num3);

const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => {
  return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);

const forEachEx = numbers.forEach((item, index) => console.log(item, index));
