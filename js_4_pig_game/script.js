'use strict';
// Selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice
btnRoll.addEventListener('click', function () {
    // 1. Generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2.Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Check for rolled 1; if true swtich to next player
    if (dice != 1) {
        // Add dice to current score
        currentScore += dice;
        document.getElementById(
            `current--${activePlayer}`
        ).textContent = currentScore;
        current0El.textContent = currentScore;
    } else {
        // Switch to next player
        activePlayer = activePlayer === 0 ? 1 : 0;
    }
});
