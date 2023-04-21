class Employee {
    //properties
    // private or # make the variable private
    name!: string;
    age!: number;
    salary!: number;
    protected address!: string;
    // protected are accessible in child class or within the same class

    //constructor
    constructor(name: string, age: number, salary: number, address: string) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.address = address;
    }

    //method
    getNameWithAddress(): string {
        return this.name + " " + this.address;
        //OR return `${this.name} ${this.address}`;
    }
   
}



// Instance of class or object
let john = new Employee('ankush', 25, 10000, "Bangalore");
let address = john.getNameWithAddress();

class manager extends Employee {
    constructor(name: string, age: number, salary: number, address: string) {
        //super keyword is used to call the constructor of the parent class
        super(name, age, salary, address);
    }
}


// john.name = "John";
// john.age = 30;
// john.salary = 10000;
// john.address = "Bangalore";

console.log(john);
console.log(address);

class 