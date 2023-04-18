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
let find = numList.find((num) => num === 2);
//find will return the first number that is equal to 2 2));
console.log(find);
console.log(result);
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
