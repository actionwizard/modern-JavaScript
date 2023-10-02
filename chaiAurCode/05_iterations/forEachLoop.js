//Ye kafi use kia jayega arrays par, ek jaruri baat ye array.forEach loop jo hai na ye koi loop nahi hai agar aasaan shabdo me kahu
//ye forEach loop bas array ke har ek element par iterate karna aasaan bana deta hai. This does not returns anything (undefined return krta)

// array.forEach(element => {
    
// });
let array = [1,3,5,7,9,11,13]

//For each loop ek anonumous function leta hai as an input and that function can be given three values, or we can say 
//we just need to name the variable and it will automatically be assigned the values, the first variable will be individual element
//the second element will be the index and the third element is the array itself

//method #1 for defining the anonymous function, it is a simple function it is just un-named
array.forEach(function(element, index, arr){
    // console.log(`${element} is present at index ${index} in the array ${arr}`)
});

//method #2 for defining the anonymous function, it is an arrow function (un-named)
array.forEach((element, index, arr) => {
    // console.log(`${element*element} is square of element at index ${index*index} in the array ${arr},`)
});

//method #3 for defining the anonymous function, you can write a function outside and pass that as a input to the forEach loop
array.forEach(callbackFunction);    //Here we wil just write the function name not the round brackets / parentheses

function callbackFunction(element, index, arr){
    // console.log(`${element*element} is square of element at index ${index*index} in the array ${arr},`)
}



const myCoding = [
    {
        languageName : "javascript",
        fileExtention : "js"
    },
    {
        languageName : "python",
        fileExtention : "py"
    },
    {
        languageName : "c++",
        fileExtention : "cpp"
    }

]

myCoding.forEach((item) => {
    console.log(`${item.languageName} is a language and its file extention is ${item.fileExtention}`);
});