// Difference in type of error
    // example 1
    const user = {
        name: "Daniel",
        age: 26,
    };
    user.location; //JavaScript Error: returns undefined JavaScript
    user.location; //TypeScript Error: Property 'location' does not exist on type '{ name: string; age: number; }'. TypeScript

    // TYPE NOTATION
    let myName: string = "Alice"; // myName: string IS THE TYPE NOTATION

    // Parameter type annotation
    function greetings(name: string) { // name: string IS THE parameter TYPE NOTATION
        console.log("Hi, " + name.toUpperCase() + "!!");
    }
    greetings("Daniel");
    greetings(123); //TypeScript Error: Argument of type '123' is number but expected string TypeScript

    // Return type annotation
    function add(): string {     // add(): string IS THE RETURN TYPE NOTATION
        return "Hello";
    }
    
    