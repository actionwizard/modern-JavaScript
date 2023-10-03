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

