//Falsey Values ==> false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Values --> Upar wali ke alawa sari truthy hoti hai
//For eg => "0", 'false', " ", [], {}, function(){}  THESE ARE SOME SURPRISING TRUTHY VALUES

//How to Check if an array is empty or not
let userEmail = [1];
if(userEmail.length === 0){
    console.log("array is empty");
}

//How to check if an object is empty or not -> convert the keys of the object into an array and then check size of array

let obj = {1:1};
if(Object.keys(obj).length === 0){
    console.log("the object is empty");
}


//Kuch cheejein General Knowledge ke liye
// console.log(false == 0);
// console.log(false == '');
// console.log(0 == '');

//Teeno ke output me true aayega  



//Ek special type ka operator discuss karte hai

// Nullish Coalescing Operator (??) : null undefined

//suppose we requested some value from db, and we got null or undefined in return, then we will use this operator to handle any errors

let var1 = 1413;
var1 = undefined ?? null ?? undefined;  //Agar saari values hi null ya undefined hai to last wali value iske ander dal jaeygi

console.log(var1);  //NaN value assign ho jayegi lekin null ya undefined nahi


/*
SUMMARY -> ham hamesha sara code execute karna nahi chahte, 
           ye chahte hai ki sara code ek sath execute na ho.
           Hame chahiye control, kuch situation ho to ye code execute ho, kuch aur situation me koi aur code.
           
           
           Note = switch me agar koi case match na kare to default statement run hogi,
                  if one matches then default nahi run hogi, without break beech wali sari run ho jayegi, default tab bhi nahi.

*/