//Filter method => This extracts some elements from the array on the basis of a particular criteria being fulfilled
//EK cheej hoti hai chaining, jab ham multiple methods ek sath lagate hai, filter.map.filter.reduce.map.filter kuch bhi kar sakte hai ham

//jab bhi ham filter method use karte hai to isme ek callback function hota hai, aur us callback function ke ander hoti hai ek
//condition, jo jo elements us condition ko satisfy karte hai unko return kar diya jata hai. Ye cheej ham aur tarike se bhi kar
//sakte bas filter method is particular kaam ko easy bana deta


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let filteredArr = arr1.filter(function(ele){
    return ele%2 == 0;
});

filteredArr = arr1.filter((value, index, array) => value > 13);

// console.log(`Original Array : ${arr1} \nFiltered Array : ${filteredArr}`);

let arr2 = [];
let arr3 = arr1.forEach((ele) => {ele = ele+1});

// console.log(`Original Array : ${arr1} \nChanged Array : ${arr2}`);

// console.log(`Original Array : ${arr1} \nChanged Array : ${arr3}`);

/*

Bhai ab clear hai, forEach jo hai ye kuch return nahi karta even if you explicitly write any return inside
filter method hame values return karta hai, forEach nahi karta

filter method to bhai kuch selected elements ko hi return kar raha tha haina, ye map method har ek element par jayega 
aur use update karke dedega

Map method jo hai na wo bhi har ek element par jayega aur jo statement anonymous function me dal rakhi hogi usko evaluate karega
aur directly us evaluated value se replace kar dega.

*/

let historyBooks = books.filter((ele) => true);
let historyBooks2 = books.filter((ele) => ele.genre == {hist : 'History'});

historyBooks[0] = "badal dunga sabkuch";
historyBooks2[10] = "badal dunga sabkuch";
console.log('Books : ');
console.log(books);

console.log('historyBooks : ');
console.log(historyBooks);

console.log('historyBooks2 : ');
console.log(historyBooks2);