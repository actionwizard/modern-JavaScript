//IIFE -> Immediately Invoked Function Expression

//Why IIFE? => jaise hi aapne function likha usko turant hi execute karwana hai.
//          => Global scope se pollution ho jata hai usse bachne ke liye

//Function ko hi parenthesis me wrap kardenge aur call kr denge

(function chai(){
    console.log(`DB Connected`);
})();
//The above is an iife

console.log("hi");

//##IMP -> whenever you write an IIFE and want to write one more IIFE then you must use semicolon to terminate the line, this is an
//         exception case where js doesn't automatically adds semicolon after line end

//The reason is -> IIFE invoke to ho gaya par usko pta nahi chalta ki rukna kahan hai. So to do thatt we need to add semicolon ourself

((name)=>(console.log(`Hello ${name} DB Connected`)))("shivam")


//INTERVIEW -> Global scope ke pollution se problem hoti hai kayi baar, to jo bhi global scope ke jo bhi variables ya declareations
//             hai unke pollution ko hatane ke liye IIFE ka use karte hai