//this keyword -> used to refer to the current context

//Bhai super duper hit baat, this keyword ko hitesh sir ne console log kra ke dikhaya, this keyword se node environment me empty 
//object mila, wahi jab this keyword ko browser me dekha to ek window nam ka object mila, usi window object ka use karke ham
//dom ko manipulate kar pate hai 
//--> simple words me browser ke ander global object jo hai wo window object hai isliye this ko use karke hame wo mila.

let obj = {
    username : "ganesh",
    email : "ganesh@email",

    greetingMessage: function(){
        // console.log(`Hello ${this.username}, welcome to website.`);
        console.log(this);
        // console.log(`This object ${console.log(this)}`); //maine trykara, console.log ke ander ek aur console.log
    }
}

// obj.greetingMessage();

// console.log(this);


//--------------------If we try to print the this keyword inside a function it will have multiple properties, but we can't 
//use it to it access variables inside the function as we did in objects

function addOne(num){
    console.log(this);
}

const addTwo = function(num){
    console.log(this);
}

const addThree = (num) =>{
    console.log(this);
}

// addOne();
// addTwo();
// addThree();

//Note -> arrow function me this keyword use karkr empty object print ho raha hai