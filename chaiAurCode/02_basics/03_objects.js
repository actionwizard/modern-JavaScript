//Objects can be declared in two ways object ki tarh ya constructor ki tarh

//Singelton -> bas itna dhyan rakhna hai ki jab literals ki tarh banaya jata hai to singelton nahi banta
//          -> constructor se banega to haa hamesha singelton banega 

//------------Object Literals ka tarika---------

const mySymbol1 = Symbol("value of symbol is = 1");

const myObj1 = {
    name : "akshay",
    age : 29,
    location : "Dehradun",
    email : "akshay@gmail.com",
    isLoggedIn : false,
    prev2logins : ["monday", "wednesday"],
    "aPropertyWithoutSpace" : "this property can be accessed by dot operator",
    "aProperty with space" : "this property can't be accessed by dot operator",
    [mySymbol1] : "change from symbol = 1 to 2" //The symbol which we gonna use that must be defined outside first
    // [mySymbol2] : "change from symbol = 1 to 2" //The symbol which we gonna use that must be defined outside first
}

// console.log(myObj1['aProperty with space']);
// console.log(myObj1);
// console.log(myObj1[mySymbol1]);

// console.log(mySymbol1);

//We usually access the properties of the object using '.' (dot operator), it is not a preferred way, 
//because sometimes it may not work, as in example above

//INTERVIEW QUES => create an object where the key is a symbol ok, we will wrap the key in a square bracket to make it a symbol key
//If we don't do that then the key will be considered as a string by default 

//We can simply make changes in the object's properties by accessing them and giving a new value
//But if we freeze the object then we won't be able to make any changes to the object, 

// Object.freeze(myObj1)

myObj1.greeting1 = () => {
    //I don't know but when I call this function the name is printed as undefined
    console.log(`Hello ${this.name}, how are you?`);
}
myObj1.greeting2 = function(){
    //When I call this function the name is printed as i have set in the object
    console.log(`Hello ${this.name}, how are you?`);
}

console.log(myObj1.greeting1);
console.log(myObj1.greeting2);
// myObj1.greeting1();
// myObj1.greeting2();

/*

I found this on chat gpt for above one
To summarize, the difference in behavior you're observing is due to how arrow functions and regular functions handle 
the this context. If you want to access properties of the object within a method, it's typically best to use regular functions 
for that purpose. Arrow functions are better suited for cases where you want to capture the surrounding this context.

*/
