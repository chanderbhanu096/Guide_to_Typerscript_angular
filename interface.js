"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this
let user_1 = { name: "John", age: 25, id: 1, email: "" };
// OR Both are right because age is optional
let user2 = { name: "ABC", id: 1, email: "" };
// OR
let { name: userName, email: userLogin } = { name: "John", age: 25, id: 1, email: "" }; // Destructuring object
let employee = { name: "John", age: 25, id: 1, email: "", salary: 10000 };
// Array of objects 
// Array destructuring
let [user44, user33, ...restUsers] = [
    { name: "John", age: 25, id: 1, email: "" },
    { name: "John2", age: 23, id: 2, email: "" },
    { name: "John3", age: 26, id: 3, email: "" },
    { name: "John4", age: 27, id: 4, email: "" }
];
console.log(user33.age);
console.log(restUsers);
