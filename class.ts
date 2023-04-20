class Employee {
    name!: string;
    age!: number;
    salary!: number;
   
}

let john = new Employee();

john.name = "John";
john.age = 30;
john.salary = 10000;

console.log(john);