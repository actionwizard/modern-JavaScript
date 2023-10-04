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