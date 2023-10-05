# Projects Related to DOM

## [link](https://stackblitz.com/edit/dom-project-chaiaurcode-v76vtx?file=1-colorChanger%2Findex.html)

# Solution Code
## aniE project 1
``` javascript
//Pehla kaam, saare buttons ko select karte hai
//hame mila node list type ka object
const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    //click event ko listen karenge, aur us event
    //object ko e se keh rahe ham
    body.style.backgroundColor = `${button.id}`;
  });
});

```

## aniE project 2

```javascript
//Form ko select karne wale hai ham
const form = document.querySelector('form');

/*
  extracting the height before the submit button has been clicked will result in getting a empty value 
const height = parseInt(document.querySelector('#height').value);
*/

//Form me default event jo hota hai usse form submit hojata hai usko rokne ke liye we will do something

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height < 0) {
    results.innerHTML = `Please enter a valid height, height = ${height}.`;
  } else if (isNaN(weight) || weight < 0) {
    results.innerHTML = `Please enter a valid weight, weight = ${weight}.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>BMI = ${bmi},<br> given weight and height, the person is Underweight.</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>BMI = ${bmi},<br> it is in Normal Range.</span>`;
    } else {
      results.innerHTML = `<span>BMI = ${bmi},<br> given weight and height, the person is Overweight.</span>`;
    }
  }
});
```

## aniE project 3

```javascript
  const clock = document.querySelector('#clock');

let time = new Date();

time = time.toLocaleTimeString();

clock.innerHTML = time;

//Cronjob kuch hota hai, use bhi use kar sakte hai

//setInterval -> isko koi bhi method dedo input me aur ye us method ko continuous interval par run karta rahega

//Learn this syntax write this function like it only setInterval(function(){}, 1000)
//1000 means 1000 ms, you can set the value there accordingly

setInterval(function () {
  time = new Date().toLocaleTimeString();
  clock.innerHTML = time;
}, 1000);

//Is upar wale function ko use krke time har 1 second par function run hora jisse time bar bar update hora

```

## aniE project 4

```javascript

let randNum = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guesses = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []; //User ko dikhadenge isme ki kya kya guess kiye hai previous me
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); //By Default wo submit ho jata usko rokne ke liye we did this

    const guess = userInput.value;
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //Guess jo input me dali user ne usko validate karne ka kaam karega ye function

  if (isNaN(guess)) {
    alert('Please Enter a Valid Number');
    userInput.value = '';
  } else if (guess < 1) {
    userInput.value = '';
    alert('Please Enter a Number Greater than 1');
  } else if (guess > 100) {
    alert('Please Enter a Number Less than 100');
    userInput.value = '';
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`GAME OVER!!!.. Random Number was ${randNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //Jo guess kiya user ne wo agar random number ke equal to jeet gya user, displayMessage() call krdo
  let absDiff = Math.abs(guess - randNum);

  if (absDiff === 0) {
    displayMessage(`Finally after ${numGuess - 1} guesses you guessed it.`);
  } else if (absDiff < 10) {
    if (guess < randNum) displayMessage(`Number is low`);
    else displayMessage(`Number is high`);
  } else {
    if (guess < randNum) displayMessage(`Number is TOOO low`);
    else displayMessage(`Number is TOOO high`);
  }
}

function displayGuess(guess) {
  //DOM par guess ko dikhane ka kaam karega ye

  userInput.value = ''; //After submitting we reset the value
  guesses.innerHTML += `${guess} `;
  numGuess++;
  remainingGuess.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //Jitney bhi input fields hai unko clear kardene ka
  userInput.value = '';
  //User Input naa daal paye koi wo set kardo
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<button id='newGame'>Start New Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    playGame = true;

    //hitesh sir cleared all the variables but I didn't and the code is working fine
  });
}


```