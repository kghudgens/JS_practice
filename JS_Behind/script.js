'use strict';

// function calcAge(birthYear) {
//     const age = 2021 - birthYear;

//     function printAge() {
//         const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             const firstName = 'Steven';
//             const str = `Oh, and youre a millenial ${firstName}`;
//             console.log(str);

//             const sum = (a, b) => a + b;
//             console.log(sum(4, 5));
//         }
//         console.log(millenial);
//     }

//     printAge();

//     return age;
// }

// const firstName = 'Kevin';
// console.log(calcAge(1995));

// console.log(Jonas);
// console.log(job);
// console.log(year);

// console.log(addDecl(2, 3));

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// function addDecl(a, b) {
//     return a + b;

// }

// let addArrow = (a, b) => a + b;

// let numProducts = 10;

// if (!numProducts) deleteShoppingCart;

// function deleteShoppingCart() {
//     console.log('All products deleted.');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);

// See how the this keyword works
// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this);
// };

// calcAgeArrow(1980);

// const jonas = {
//     name: 'kevin',
//     year: 1991,
//     calcAge: function () {
//         console.log(2021 - this.year);
//     },
// };
// jonas.calcAge();

// const matilda = {
//     year: 2017,
// };

// matilda.calcAge = jonas.calcAge();
// matilda.calcAge;

let firstName = 'kevin';

const jonas = {
    firstName: 'kevin',
    year: 1991,
    calcAge: function () {
        console.log(2021 - this.year);

        // Solution 1
        // const self = this;
        // const isMillenial = function () {
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // Solution2
        const isMillenial = function () {
            console.log(self.year >= 1981 && self.year <= 1996);
        };

        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};

jonas.calcAge();
// jonas.greet();
