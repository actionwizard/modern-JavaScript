//Scope par charcha -> curly braces hi scope hai {}

//node envoironment me jo global scope hai wo alag hai, aur jo browser me console hai usme global scope jo hai dono me difference hai
/*
    if(true){
        //Ye hai block scope, in curly braces ke bahar jo hai wo hai global scope
    }
*/

let a = 29;

if(true){
    console.log(a);

    a = 564;

    console.log(a);
}

console.log(a);





//----------------------------Imp thing (yahi mini hoisting bol sakte)-------------------

one(5); //This can be used, because one is a normal function

function one(num){  //This is the normal way of creating a function
    console.log(num + 1); 
}



let two = function(num){
    console.log(num + 2);
}
two(5);     //Is anonymous function ko mai let, var, const kisi me bhi store karu, isko initialization ke pehle nahi use kar sakta
