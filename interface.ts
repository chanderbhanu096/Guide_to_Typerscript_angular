// Interfaces can be extended by other interfaces.
// Interface can extend multiple interfaces
// Interface can extend a class but only the members(public and private) will be inherited not the implementation
// Interface cannot implement another interface or class
interface User{
    // A type alias cannot be extended or implemented from (nor can it extend/implement other types).
    // Basically interfaces are used to create as a module which can be used by other classes using implement so the same type doesn't have to be written again and again
    name: string;
    age?: number;
    id: number;
    email: string;
}

// this
let user_1: User = {name: "John", age: 25, id: 1, email: ""}
// OR Both are right because age is optional
let user2: User = {name: "ABC", id: 1, email: ""}

interface Employees extends User{
    salary: number;
} 

let employee:Employees = {name: "John", age: 25, id: 1, email: "", salary: 10000} 

interface login{
    login(): User
}
