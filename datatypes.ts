// let lname = 'jai';

// lname = 10; will give error 
// because it strong type programming language but js is not
// in js you can


//DataTypes
//string

let lname:string = 'hello';

let fname:string;

fname='ramesh';

let newname=fname.toUpperCase();

console.log(newname);

//number

let age:number;
age=20;
// age="25"; this is not write

age = 25.5; //this is correct decimal number is applicable

let dob ="25";
//for typecast
let result = parseInt(dob); //parseInt will convert the string into number


//Boolean

let isValid:boolean =false;

console.log(isValid);

//array
// let empList = []; in js

let empList :string[];

let numList: Array<number>;

//this are two ways to call array in ts

empList = ["Himanshu","Himanshu1","Bittu"];

numList = [1,2,3,4,5];

let newNum = numList[5];

let results = numList.filter((num)=> num > 2);

// let res = numList.find((num)=> num > 2);  //although it return one value that is 3
// Here res say undefined because find method only return one value

let res = numList.find((num)=> num === 2);

let emp = empList.find((emp)=> emp === "Himanshu1");
console.log(results);
console.log(res);
console.log(emp);

//Other example of Reduce Function

let sum = numList.reduce((acc,num)=> acc + num); //accumulator and number

console.log(sum);

//ENum

// enum Color{
//     Red,
//     Green,
//     Blue
// }

const enum Color{
    Red,
    Green,
    Blue
}


let c:Color = Color.Blue;

//Tuples

let swapNumbs:[firstNumber:number,secondNumber:number];

function swapNumbers(num1:number,num2:number): [number,number]{
    return [num2,num2];
}

swapNumbs = swapNumbers(10,20);

swapNumbs[0];
swapNumbs[1];

//Any
//Any is equivalent

let department:any;
// let department;  //you can also call it like that
//by the use of any you can write any type here
//also this is off in tsconfig as named noImplicitAny,you just need to enable it

department ="IT";
department = 10;
//Dont use type Any


//Void
