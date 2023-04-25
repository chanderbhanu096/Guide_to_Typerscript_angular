// Difference in type of error
    // example 1
    const user = {
        name: "Daniel",
        age: 26,
    };
    //user.location; //JavaScript Error: returns undefined JavaScript
    //user.location; //TypeScript Error: Property 'location' does not exist on type '{ name: string; age: number; }'. TypeScript

// TYPE NOTATION
    let myName: string = "Alice"; // myName: string IS THE TYPE NOTATION

// Parameter type annotation
    function greetings(name: string) { // name: string IS THE parameter TYPE NOTATION
        console.log("Hi, " + name.toUpperCase() + "!!");
    }
    greetings("Daniel");
   // greetings(123); //TypeScript Error: Argument of type '123' is number but expected string TypeScript

// Return type annotation
    function add(): string {     // add(): string IS THE RETURN TYPE NOTATION
        return "Hello";
    }
    
// OBJECT TYPE NOTATION
    let user1: { name: string, age: number } = {
        name: "Daniel",
        age: 26,
    };
    // OR
    // The parameter's type annotation is an object type
    function printCoord(pt: { x: number; y: number }) {
     console.log("The coordinate's x value is " + pt.x);
     console.log("The coordinate's y value is " + pt.y);
    }
    printCoord({ x: 3, y: 7 });

//UNION TYPE
    // Union type is a type that can be one of several types
    // Union type is declared with a pipe (|) between each type
    function printId(id: number | string) {
        console.log("Your ID is: " + id);
      }
      // OK
      printId(101);  // number passes as the id
      // OK
      printId("202"); // string passes as the id
      // Error
      printId({ myID: 22342 }); // object fails as the id BECAUSE IT IS NOT A NUMBER OR STRING

//
    function printId(id: number | string) {
    console.log(id.toUpperCase());
    }    //TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string:
    // Union type is a type that can be one of several TypeScript
      
