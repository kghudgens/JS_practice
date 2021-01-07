'use strict'

// console.log(document.querySelector('.message').textContent);
// // document.querySelector(".message").textContent = 'Correct secretNumber'

// console.log(document.querySelector('.message').textContent);

// document.querySelector(".secretNumber").textContent = 13
// document.querySelector(".score").textContent = 20

// console.log(document.querySelector(".guess").value); 
// document.querySelector(".guess").value = 23
// console.log(document.querySelector(".guess").value); 

const secretNumber = Math.trunc(Math.random() * 20) +1
document.querySelector(".number").textContent = secretNumber

let score = 20
let highScore = 0

document.querySelector(".check").addEventListener
('click', function(){
    const guess = Number(document.querySelector(".guess").value)

    console.log(typeof guess)

    if (!guess){
        document.querySelector(".message").textContent = 'No Number'
    }else if(guess === secretNumber){
        document.querySelector(".message").textContent = 'You win'
        highScore ++

    }else if(guess> secretNumber){
        document.querySelector(".message").textContent = 'Guess too high'
        score--
        document.querySelector('.score').textContent =score

        if (score< 0){
            document.querySelector(".message").textContent = 'You lose the game'
        }
    }else if(guess < secretNumber){
        document.querySelector(".message").textContent = 'Guess too low'
        score--
        document.querySelector('.score').textContent =score

        if (score< 0){
            document.querySelector(".message").textContent = 'You lose the game'
        }
    }
})

