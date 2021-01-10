'use strict';

// console.log(document.querySelector('.message').textContent);
// // document.querySelector(".message").textContent = 'Correct secretNumber'

// console.log(document.querySelector('.message').textContent);

// document.querySelector(".secretNumber").textContent = 13
// document.querySelector(".score").textContent = 20

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing...');
});

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    console.log(typeof guess);
    // When there is no input
    if (!guess) {
        displayMessage('No Number');
        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('You win');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        // When guess is too high or low
    } else if (guess !== secretNumber) {
        displayMessage(
            guess > secretNumber ? 'Guess too high' : 'Guess too low'
        );
        score--;
        document.querySelector('.score').textContent = score;

        if (score < 0) {
            displayMessage('You lose the game');
        }
    }
});
