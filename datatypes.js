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
let result = numList.filter((num) => num > 2);
//result will filter out all numbers greater than 2
console.log(result);
//NUMBER 
// ways to declare a number in typescript
let age;
age = 10;
