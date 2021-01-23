'use strict';
// Selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');

score0.textContent = 0;
score1.textContent = 0;

const dice = document.querySelector('.dice');

dice.classList.add('hidden');
