//one way to define a function
function add(num1: number, num2: number):number {
    return num1 + num2;
}
console.log(add(1,2));

//another way to define a function or   ARROW FUNCTION
const sub = (num1: number, num2: number): number=>num1-num2;
console.log(sub(2,1));

//another way to define a function
const mult = function(num1: number, num2: number): number{
    return num1 * num2;
};

//OPTIONAL PARAMETERS FUNCTION
function add1(num1: number, num2: number,num3?:number):number {
    return num3? num1 + num2 + num3 :num1 + num2;
    // number 3 exist then return num1 + num2 + num3 else return num1 + num2
}
console.log(add(1,2));
