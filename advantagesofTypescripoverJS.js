"use strict";
// Difference in type of error
// example 1
const user = {
    name: "Daniel",
    age: 26,
};
//user.location; //JavaScript Error: returns undefined JavaScript
//user.location; //TypeScript Error: Property 'location' does not exist on type '{ name: string; age: number; }'. TypeScript
// TYPE NOTATION
let myName = "Alice"; // myName: string IS THE TYPE NOTATION
// Parameter type annotation
function greetings(name) {
    console.log("Hi, " + name.toUpperCase() + "!!");
}
greetings("Daniel");
// greetings(123); //TypeScript Error: Argument of type '123' is number but expected string TypeScript
// Return type annotation
function add01() {
    return "Hello";
}
// OBJECT TYPE NOTATION
let user1 = {
    name: "Daniel",
    age: 26,
};
// OR
// The parameter's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
//UNION TYPE
// Union type is a type that can be one of several types
// Union type is declared with a pipe (|) between each type
// TypeScript will only allow an operation if it is valid for every member of the union.
// Union type is a type that can be one of several TypeScript
function print_Id(id) {
    console.log("Your ID is: " + id);
}
// OK
print_Id(101); // number passes as the id
// OK
print_Id("202"); // string passes as the id
// Error
//   print_Id({ myID: 22342 }); // object fails as the id BECAUSE IT IS NOT A NUMBER OR STRING
// UNION TYPE WITH INTERFACE
function print0Id(id) {
    // console.log(id.toUpperCase());
}
//TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string:
function printId(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
// Exactly the same as the earlier example
function print_Coord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
print_Coord({ x: 100, y: 100 });
function printCoord1(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord1({ x: 100, y: 100 });
// Type Assertions
// A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data. It has no runtime impact and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.
// if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.
const myCanvas = document.getElementById("main_canvas");
//or 
const myCanvas1 = document.getElementById("main_canvas");
// TypeScript only allows type assertions which convert to a more specific or less specific version of a type. This rule prevents “impossible” coercions like:
// const x = "hello" as number; // Error: 'string' is not assignable to 'number'.
