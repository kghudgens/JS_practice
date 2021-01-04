'use strict';

const x = '23';

const calcAge = birthYear => 2037 - birthYear;

let temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
temperatures = temperatures.filter(v => v !== 'error');

// amplitude = tmax -tmin
const tmax = Math.max.apply(null, temperatures);
let tmin = Math.min.apply(null, temperatures);

tmin = -Math.abs(tmin);

const amplitude = function (tmax, tmin) {
  return tmax + tmin;
};

console.log(tmax, tmin);
console.log(amplitude(tmax, tmin));
