//HIGH ORDER ARRAY LOOPS

/**
 * For of loop
 * for (const iterator of object) {
    //Yahan oject matlab sirf object par lagega aisa nhi hai, object kuch bhi ho sakta hai yaha, string array map etc. object nahi
    //sirf array and strings me chal sakta hai ye for-of loop
    }


 */

let arr = [1,2,3,4,5,6,7];
arr = {1 : 1, 2 : 2, 3 : 3, 4 : 4, 5 : 5};
arr = "my name is anthony"

for (const ele of arr) {
    // console.log(ele);   
}

//Map ek type ka object hai js me, it also stores values in form of key value pairs just like a typical object
//special features of the Map include that it stores unique pairs of {key, value} and the order in which these keys are inserted 
//that is maintained, another thing we can say is that unlike a regular object maps are iterable in similar fashion as array & strings

let map = new Map();  //You can simpy write new Map() to create an empty map 

map.set('game2', 2);
map.set('game1', 1);
map.set('game3', 3);
console.log(map.size)


console.log(map);

//You can use array destructuring to iterate over all elements as key value
// for (const [key, value] of map) {
//     console.log(`${key} is ${value}`);
// }


for (const ele of map) {
    console.log(`${ele[0]} is ${ele[1]}`);
}
