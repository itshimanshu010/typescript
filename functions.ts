// function add(a,b){
//     return a + b;
// }
//this used in JS


//we can can make function by three ways 

//here we mention what type of parameter in ts
//also what type of function is like void
function add(num1 : number, num2:number):void{
     num1 + num2;
     //by adding void it become the return type is void

}

//1.Name Function
function add2(num1 : number, num2:number):number{
    return num1 + num2;
    //by adding void it become the return type is void

}

console.log(add2(2,3));


//2.Arrow Function
const subtract = (num1: number, num2: number) : number => num1 - num2;
//arrow function used here             //here :number is generally means it return a number


console.log(subtract(2,3));


//here now me use normal function to call
//3.Function Expression
const mult = function (num1: number, num2: number) : number {
     return num1 * num2;
};

console.log(mult(2,3));


//Optional Parameter
//optional in function as optional parameter  num3?:number
function add3(num1 : number, num2:number, num3?:number):number{
    return num3? num1 + num2 + num3 : num1 + num2 ;
}

console.log(add3(2,3));
console.log(add3(2,3,5));


//Required Parameter
//require parameter where 3rd parameter is required and 3rd variable which will assigned default value
function add4(num1 : number, num2:number, num3 = 10):number{
    return  num1 + num2 + num3;
}

console.log(add4(2,3));
console.log(add4(2,3,5));


//array passing as a parameter
function add5(num1:number,num2:number,num3:number[]):number{
    return num1 + num2 + num3.reduce((a,b)=>a+b, 0);
}

console.log(add5(4,5,[4,5,6]));


//Rest Parameter
//Passing n number of arrays or paramenter

function add6(num1:number,num2:number,...num3:number[]):number{
    return num1 + num2 + num3.reduce((a,b)=>a+b, 0);
}

// console.log(add6(4,5,[4,5,6])); you can not do like this

let numbers = [4,5,6];
//you have to pass in array because you are using rest operator here 
//so directly cant be pass 
console.log(add6(2,3,...numbers));
console.log(add6(2,3,...[10,5,6])); // this also way by which you also pass rest operator here
console.log(add6(4,5,10,51,41,41,52));
//here you can also pass the value like that where first two number are taken 
//as num1 and num2 and other will be taken as rest arguments

//Generic Functions

// function getItem<anyNameorType>(items: anyNameorType[]):anyNameorType[]{
//     return new Array<anyNameorType>().concat(items);
// }

function getItem<Type>(items: Type[]):Type[]{
    return new Array<Type>().concat(items);
}

let concatResult = getItem([1,2,3]);
//it will automatically know the type and Send in the Type

// let concatResult = getItem<number>([1,2,3]);

let concatString = getItem(["a","b","c"])

console.log(concatResult);
console.log(concatString);