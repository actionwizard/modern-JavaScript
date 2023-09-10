//Function : It is a block of code that can be called anytime after being declared

//Normal Function Declaration
function add(a, b){
    return a + b;
}
// console.log(add(10, "a"));






//Creating Custom Objects using a constructor function

//=>This keyword refers to the current instance of the Car object being created, 
//  think of it as same we used in c++;

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.getCar = function () {
        return this.make + " " + this.model + " " + this.year;
    }
}

let car1 = new Car("Ford", "GT Sport", 2023);

Car.prototype.name = "heloage";
Car.prototype.getName = function(){
    return this.name;
}

// console.log(Car);    
console.log(car1.name);
console.log(car1.getName);
console.log(car1);

let car2 = new Car("a", "b", "c", 2);

console.log(car2.name);

//=>Now some things are more clear, Car is actually a function(constructor) and we used it to create an object. 
//  Objects themselves are not constructors, we can use a constructor function as a blueprint to 
//  create objects with consistent structure and behaviour. 

//=>I noticed that the prototypes which are added they can be accessed, but when printing the object then
//  the newly added properties or methods are not visible which we added using prototype property. 


//An object created for fun
let Animal = {
    legs : 4,
    eyes : 2,
    ears : 2,
    
    setter(legs, eyes, ears){
        legs = legs;
        eyes = eyes;
        ears = ears;
    },

    getter(){
        return this.legs + " + " + this.eyes + " + " + this.ears;
    }

};
