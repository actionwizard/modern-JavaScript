const myObj = {
    js : "Java script",
    cpp : "C++",
    rb : "Ruby",
    py : "python"
}

for(const key in myObj){
    console.log(`${myObj[key]} files have extention ${key}`);
}

//NOTE -> Ye for-in loop ka use karke ham object par iterate kar sakte hai, ham array par bhi iterate kar sakte hai,
//     -> actually ye for-in jo hai na hame key provide karta hai {array me keys 0,1,2,3...  &&   object ke keys to string hote}
//     -> imp thing to not is that we can't use this for-in loop to iterate over map, no error comes if we try to use this, it just doen't work.