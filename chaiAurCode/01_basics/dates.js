//Dates in js are a bit complex but very useful, date is a type of object in js and
//date calculation is done from a starting point known as an epoch time or unix time
//the date is 1 Jan 1970, the time is tracked in miliseconds

let myDate1 = new Date(-1);
let myDate2 = new Date(0);
let myDate3 = new Date(1);
let myDate4 = new Date();

// console.log(myDate1.toString());
// console.log(myDate2.toString());
// console.log(myDate3.toString());
// console.log(myDate4.toString());

//and there are many more methods available for this one, you can work on it on your own

let date1 = new Date();

// console.log(date1.getDate()); => gives date
// console.log(date1.getDay()); => gives day
// console.log(date1.getFullYear()); => gives year
// console.log(date1.toDateString());   => day and date ke form me
// console.log(date1.toISOString());
// console.log(date1.toJSON());
// console.log(date1.toLocaleDateString());    => 09/27/2023 {month/date/year}
// console.log(date1.toLocaleString());        => same as above + time also
// console.log(date1.toLocaleTimeString());    => just time from the above one

