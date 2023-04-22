"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
class Employee {
    // protected are accessible in child class or within the same class
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
    //method
    getNameWithAddress() {
        return this.name + " " + this.address;
        //OR return `${this.name} ${this.address}`;
    }
}
_Employee_id = new WeakMap();
// Instance of class or object
let john = new Employee(1, 'ankush', 25, 10000, "Bangalore");
//john.#id = 2; will give error as id is private
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
let mike = new manager(2, 'mike', 25, 10000, "Bangalore");
console.log(mike.getNameWithAddress());
// john.name = "John";
// john.age = 30;
// john.salary = 10000;
// john.address = "Bangalore";
console.log(john);
// console.log(address); error as address is protected
