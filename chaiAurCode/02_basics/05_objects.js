//Destructuring array ki bhi hoti hai aur object ki bhi, objects ki dekhte hai array ki bad me dekhenge

const tinderUser = {
    id : "123abc",
    name : "Samwell",
    isLoggedIn : false
};


//baar baar tinderUser.<property_name> aise krke use karna accha nahi lagta uske liye destructuring ka use karenge

// const {id, name, isLoggedIn} = tinderUser;   //Directly usi naam se use karne keliye
const {id : ID, name : userName, isLoggedIn : loggedIn} = tinderUser;      //If we want to use the properties by some other name

console.log(ID);
console.log(userName);
console.log(loggedIn);



//API  => jab bhi aapko apna kaam kisi aur ke sar pr daal dena hai

/*
Api jo milegi mostly is form me hogi isko json format bolte hai

    {

    }

    it can be an array of objects also

    [
        {},
        {},
        {}
    ]

*/
