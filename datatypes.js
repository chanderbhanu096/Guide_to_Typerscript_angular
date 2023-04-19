"use strict";
//steps for 
let firstname = "John";
//firstname = 123; //type error because firstname is a string
let isValid = true;
let newName = firstname.toUpperCase();
// for upper case use toUpperCase() method
console.log(newName);
// Two ways to declare an array
//1
let empList;
empList = ["John", "Smith", "Bob",];
//2
let numList;
numList = [1, 2, 3, 4, 5];
// Filter and Find are array methods
let result = numList.filter((num) => num > 2);
//result will filter out all numbers greater than 2
let num = numList.find((num) => num === 2);
//find will return the first number that is equal to 2 2));
console.log(num);
console.log(result);
let sum = numList.reduce((total, num) => total + num);
console.log(sum);
//reduce will add all the numbers in the array
//NUMBER 
// ways to declare a number in typescript
let age;
//the above age is defined as a number
age = 10;
age = 10.4;
// 10 is string here
let dab = "10";
console.log(dab);
//parseInt will convert the string to a number
let result1 = parseInt(dab);
console.log(result1);
;
let c = 1 /* color.green */;
// Tuple
let swapNumbs;
function swapNumbers(num1, numb2) {
    //[number,number] defines the return type of the function
    return [numb2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs[0]);
console.log(swapNumbs[1]);
//ANY
// allow any type of data to be stored in the variable
let data;
data = 10;
data = "John";
data = true;
data = [1, 2, 3, 4, 5];
data = { name: "John", age: 20 };
console.log(data);
let data1;
data1 = 10;
data1 = "John";
data1 = true;
data1 = [1, 2, 3, 4, 5];
console.log(data1);
//
