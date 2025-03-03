'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(startedIndex, mainIndex){
    return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [2,3,4];
const a  = arr[0]
const b  = arr[1]
const c  = arr[2]

// destructuring assignment of array 
const [x, y, z] = arr 
console.log(x, y, z);

// original array doesnt get destroyed  
console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary =temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main] 
console.log(main, secondary);

const [started, mainCourse] = restaurant.order(2, 0);
console.log(started, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested
// console.log(i, j);

const [i, , [j, k]] = nested
console.log(i, j, k); 

// Default values 
const [p=1, q=1, r=1] = [8, 9]
console.log(p, q, r);

