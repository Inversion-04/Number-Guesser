let random  = parseInt(Math.floor(Math.random()*100+1));

const submit = document.getElementById('subt');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let numGuess  =  1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please Enter a Valid Number');
  }
  else if(guess<1){
    alert('Please Enter a Number Greater Than 1');
  } 
  else if(guess>100){
    alert('Please Enter a Number Greater Than 100');
  }
  else{
   
    if(numGuess > 10){
         displayGuess(guess)
         displayMessage(`Game Over, Random Number Was ${random}`)
         endGame();
    }else{
        displayGuess(guess);
        checkGuess(guess);
    }
  }
}

function checkGuess(guess){
    if(guess === random){
        displayMessage('Congratulations! You Guesses it right')
        endGame();
    }
    else if(guess < random){
        displayMessage('Number is Too Low')
    }
    else if(guess > random){
        displayMessage('Number is Too High')
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '') 
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',(e)=>{
     displayMessage('');
     random = parseInt(Math.floor(Math.random()*100+1));
     numGuess = 1;
     prevGuess = [];
     guessSlot.innerHTML = '';
     remaining.innerHTML =`${11-numGuess}`;
     userInput.removeAttribute('disabled');
     startOver.removeChild(p);
     playGame = true;

    })
}






