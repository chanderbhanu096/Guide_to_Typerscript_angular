class Employee {
    //properties
    // private or # make the variable private
    #id!: number;
    protected name!: string;
    age!: number;
    salary!: number;
    protected address!: string;
    // protected are accessible in child class or within the same class

    //GETTER AND SETTER
    //getters and setters are used to get and set the private properties
    //getters and setters are used to access the private properties
    get empId(): number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;  
    }

    //static property
    //static METHOD can be accessed without creating an instance of the class className.propertyName
    static getEmployeeCount(): number {
        return 100;
    }

    //constructor
    constructor(id:number,name: string, age: number, salary: number, address: string) {
        this.#id = id;
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
let john = new Employee(1,'ankush', 25, 10000, "Bangalore");
// using getter and setter on john instance private property
// SETTER
john.empId = 2;
// GETTER
console.log("employeed new id " +john.empId);

//john.#id = 2; will give error as id is private
Employee.getEmployeeCount();


class manager extends Employee {
    constructor(id:number,name: string, age: number, salary: number, address: string) {
        //super keyword is used to call the constructor of the parent class
        super(id,name, age, salary, address);
    }
    getNameWithAddress(): string {
        // return this.name + " " + this.address;
        return `${this.name} is a manager at ${this.address}`;
        console.log(john.getNameWithAddress())
    }
}

let mike = new manager(2,'mike', 25, 10000, "Bangalore");
console.log(mike.getNameWithAddress());


// john.name = "John";
// john.age = 30;
// john.salary = 10000;
// john.address = "Bangalore";

console.log(john);
// console.log(address); error as address is protected

