//steps for 
let firstname = "John";
//firstname = 123; //type error because firstname is a string

let isValid : boolean = true;

// Two ways to declare an array
//1
let empList : string[];
empList = ["John", "Smith", "Bob",];
//2
let numList : Array<number>;
numList = [1,2,3,4,5];

let result = numList.filter((num) => num > 2);
//result will filter out all numbers greater than 2

console.log(result) 
