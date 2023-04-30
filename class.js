"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    // address:{
    //     street: string;
    //     city: string;
    //     state: string;
    //     pincode: number;
    // }
    // WHAT WE CAN DO IF WANT TO USE THE ABOVE ADDRESS OBJECT AGAIN AND AGAIN WE CAN CREATE AN INTERFACE
    //GETTER AND SETTER
    //getters and setters are used to get and set the private properties
    //getters and setters are used to access the private properties
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    //static property
    //static METHOD can be accessed without creating an instance of the class className.propertyName
    static getEmployeeCount() {
        return 100;
    }
    //constructor
    constructor(id, name, age, salary, address) {
        //properties
        // private or # make the variable private
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.address = address;
    }
    Login() {
        return { name: "John", age: 25, id: 1, email: "" };
    }
    //method
    getNameWithAddress() {
        return this.name + " " + this.address;
        //OR return `${this.name} ${this.address}`;
    }
}
_Employee_id = new WeakMap();
// Instance of class or object
let john = new Employee(1, 'ankush', 25, 10000, { street: "abc", city: "Bangalore",
    state: "Karnataka", pincode: 560037 });
// using getter and setter on john instance private property
// SETTER
john.empId = 2;
// GETTER
console.log("employeed new id " + john.empId);
//john.#id = 2; will give error as id is private
Employee.getEmployeeCount();
class manager extends Employee {
    constructor(id, name, age, salary, address) {
        //super keyword is used to call the constructor of the parent class
        super(id, name, age, salary, address);
    }
    getNameWithAddress() {
        // return this.name + " " + this.address;
        return `${this.name} is a manager at ${this.address}`;
        console.log(john.getNameWithAddress());
    }
}
let mike = new manager(2, 'mike', 25, 10000, { street: "abc", city: "Bangalore", state: "Karnataka", pincode: 560037 });
console.log(mike.getNameWithAddress());
// john.name = "John";
// john.age = 30;
// john.salary = 10000;
// john.address = "Bangalore";
console.log(john);
// console.log(address); error as address is protected
