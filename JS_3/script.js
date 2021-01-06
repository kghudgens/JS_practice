'use strict';

const x = '23';

// const calcAge = birthYear => 2037 - birthYear;

// My way
// let temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// temperatures = temperatures.filter(v => v !== 'error');

// // amplitude = tmax -tmin
// const tmax = Math.max.apply(null, temperatures);
// let tmin = Math.min.apply(null, temperatures);

// tmin = -Math.abs(tmin);

// const amplitude = function (tmax, tmin) {
//   return tmax + tmin;
// };

// console.log(tmax, tmin);
// console.log(amplitude(tmax, tmin));

// tutorial way

// const calcTempAplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
// };

// calcTempAplitude(8, 9, 0);

// for (let i = 0; i < temperatures.length - 1; i++) {
//   calcTempAplitude(temperatures[i]);
// }

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: prompt('Degrees Celsius'),
//   };

//   const kelvin = Number(measurement.value) + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

const testData = [17, 21, 23]
const testData1 = [12, 5, -5, 0, 4]

const printForecast = function(arr){
    let str = ''
    let days = ''
    for(let i = 0 ; i < arr.length; i++){
        str = str + `${arr[i]} degrees celsius in ${i +1} days... `
    }
    console.log(str)
}

printForecast(testData)
printForecast(testData1)
