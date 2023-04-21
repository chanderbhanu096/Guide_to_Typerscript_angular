"use strict";
class Employee {
    constructor(name, age, salary, address) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.address = address;
    }
    getNameWithAddress() {
        return this.name + " " + this.address;
    }
}
let john = new Employee('ankush', 25, 10000, "Bangalore");
let address = john.getNameWithAddress();
// john.name = "John";
// john.age = 30;
// john.salary = 10000;
// john.address = "Bangalore";
console.log(john);
console.log(address);
