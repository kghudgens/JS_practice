'use strict';

function calcAge(birthYear) {
    const age = 2021 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven';
            const str = `Oh, and youre a millenial ${firstName}`;
            console.log(str);

            const sum = (a, b) => a + b;
            console.log(sum(4, 5));
        }
        console.log(millenial);
    }

    printAge();

    return age;
}

const firstName = 'Kevin';
console.log(calcAge(1995));
