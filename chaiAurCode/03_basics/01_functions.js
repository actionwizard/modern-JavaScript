//Function kuch nahi hai aapka code jo hai na usko ek package me band karke rakh diya aur jab marzi tab usko call krke use kar sakte
function sayMyName(){
    console.log("heisenberg");
    // return sayMyName();     //I purposefully did this, this resulted in stack overflow man
}

console.log(sayMyName);
console.log(sayMyName());

//imp :
//     sayMyName => function ka reference hai ye  
//     sayMyName() => function ke aage () lag gaye matlab function execution ke liye keh dia  