//Objects ko ab singelton ke form me declare karna seekhenge

const object1 = new Object();

const object2 = {};

//Koi internal difference nahi hai upar ke do object declarations me, bas itna hi ki object1 ek singelton object hai dusra nahi

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Samwell";
tinderUser.isLoggedIn = false;

//we can even nest the objects as we did in arrays(array ke ander array ke ander array etc.)

const regularUser = {
    email : "someemail@gmai.com",
    fullName : {
        userFullName : {
            first : "Akshay",
            last : "kumar"
        }
    }
};

// console.log(regularUser.fullName.userFullName.first);

const obj1 = {2: 'b', 4: 'd'};
const obj2 = {1: 'a', 3 : 'c'};

//To join two objects and make them one we have many ways

const objMerged = {...obj1, ...obj2};   //Simply use the spread operator

// const objMerged2 = Object.assign(obj1, obj2);   //If we do this then obj1 will be used as a merging container and it will be altered

//If we don't want that then we need to simply pass an empty object as first argument
const objMerged2 = Object.assign({5 : 'e'}, obj1, obj2);

// console.log(objMerged2);
// console.log(obj1);
// console.log(obj2);

//NOTE ::=-> I learned a new thing when we assign the keys as number in an object then the keys are stored in a sorted fashion
//           but if keys are in a name format i.e. string then they are stored as is, no sorting


//Object ki sari keys ya values ya dono ko hi array me lene ka tarika

const keysOfTinderUser = Object.keys(tinderUser);
const valuesOfTinderUser = Object.values(tinderUser);
const key_valueOfTinderUser = Object.entries(tinderUser);

console.log(keysOfTinderUser);
console.log(valuesOfTinderUser);
console.log(key_valueOfTinderUser);


//<object_name>.hasOwnProperty('<property_name>') => true ya false dega if an object has some property


//IF YOU WANT TO LEARN MORE YOU CAN REFER TO MDN