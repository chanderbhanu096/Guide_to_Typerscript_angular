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
    // TypeScript will only allow an operation if it is valid for every member of the union.
    // Union type is a type that can be one of several TypeScript
    function print_Id(id: number | string) {
        console.log("Your ID is: " + id);
      }
      // OK
      print_Id(101);  // number passes as the id
      // OK
      print_Id("202"); // string passes as the id
      // Error
      print_Id({ myID: 22342 }); // object fails as the id BECAUSE IT IS NOT A NUMBER OR STRING

    // UNION TYPE WITH INTERFACE
    function printId(id: number | string) {
    console.log(id.toUpperCase());
    }    
    //TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string:
    function printId(id: number | string) {
        if (typeof id === "string") {
          // In this branch, id is of type 'string'
          console.log(id.toUpperCase());
        } else {
          // Here, id is of type 'number'
          console.log(id);
        }
      }

// TYPE ALIAS
    //We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.
    //Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.
    // A type alias is exactly that - a name for any type.
    // you cannot use type aliases to create different/distinct “versions” of the same type

    // EXAMPLE 1
    type Point = {
        x: number;
        y: number;
      };
       
      // Exactly the same as the earlier example
      function print_Coord(pt: Point) {
        console.log("The coordinate's x value is " + pt.x);
        console.log("The coordinate's y value is " + pt.y);
      }
       
      print_Coord({ x: 100, y: 100 });

    // EXAMPLE 2
    type ID = number | string; //a type alias can name a union type

// INTERFACES
    //An interface declaration is another way to name an object type:

    interface Point1 {
        x: number;
        y: number;
    }
    function printCoord1(pt: Point) {
        console.log("The coordinate's x value is " + pt.x);
        console.log("The coordinate's y value is " + pt.y);
    }
    printCoord1({ x: 100, y: 100 });


    

      
