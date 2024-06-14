"use strict";
//Class It is used to handling business logic in code
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Student_id, _Company_id, _People_id;
class EmployeeInfo {
}
//Creating Instance of this Class
let john = new EmployeeInfo();
//Assinging the values in properties
john.id = 1;
john.name = "John";
john.address = "USA 71";
console.log(john);
//In Terminal EmployeeInfo { id: 1, name: 'John', address: 'USA 71' }
//it print EmployeeInfo's Object
//constructor example
class Employee {
    constructor(id, name, address) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
}
// let tom = new Employee();
//it will error because whenever you create an instance
// you have to pass value
let tom = new Employee(1, "Tom", "India");
console.log(tom); //Employee { address: 'India', id: 1, name: 'Tom' }
//Methods
class Empl {
    constructor(id, name, address) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
    //Create method(only need function name dont have to use function keyword here)
    getNamewithAddress() {
        return `${this.name} stays at ${this.address}`;
        //or this way
        //return this.name + " " + this.address;
    }
}
let ben = new Empl(1, "Ben", "Japan");
let address = ben.getNamewithAddress();
console.log(address); //Ben Japan or Ben stays at Japan
//Some other features in classes
//Data Modifiers : Public, Private,Protected
//By default all are public
class Student {
    constructor(id, name, address, mobile) {
        //Private Keyword are  #id or private id
        //or private id :number;
        _Student_id.set(this, void 0); //more preferabble
        this.address = address;
        __classPrivateFieldSet(this, _Student_id, id, "f"); //here we need to add # when we use # in properties
        //but we dont need to use private when we use private
        this.name = name;
        this.mobile = mobile;
    }
    //Create method(only need function name dont have to use function keyword here)
    getNamewithAddress() {
        return `${this.name} stays at ${this.address}`;
        //or this way
        //return this.name + " " + this.address;
    }
}
_Student_id = new WeakMap();
let raghav = new Student(1, "raghav", "India", 96087554);
//now by using of private and protected  we can not access
//when we write raghav. it will only show address because it only show
//which are not in private,protected 
//Let see what proctected does
//it is use when we extend the class
//Protected is something that we use or access within the class or extended class
class School extends Student {
    //here we can access mobile and address also this is called
    //Inheritance
    constructor(id, name, address, mobile) {
        super(id, name, address, mobile);
        //when we extending it is require to call super
    }
    getNamewithAddress() {
        return `${this.mobile} mobile number from ${this.address}`;
    }
}
let satyam = new School(2, "Satyam", "Uttar Pradesh", 975441336);
let getData = satyam.getNamewithAddress();
let ujwal = new School(3, "ujwal", "Madhya Pradesh", 97854511);
console.log(ujwal.getNamewithAddress());
//we can use getNamewithAddress by removing it from Student class
//because of it parent class it can access there to
//Example 
//Member Visibility
class Vidhyalay extends Student {
    constructor(id, name, address, mobile) {
        super(id, name, address, mobile);
    }
}
let sujal = new School(4, "sujal", "Himachal Pradesh", 745512124);
console.log(sujal.getNamewithAddress());
//Here we see without making that method in Vidhyalay
//Vidhyalay knows that this is on his parent class that is student
//Static Members
//Static members are which can be access with the class name
class Company {
    //static
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        _Company_id.set(this, void 0);
        this.address = address;
        __classPrivateFieldSet(this, _Company_id, id, "f");
        this.name = name;
    }
    getNamewithDetail() {
        return `${this.name} stays at ${this.address}`;
    }
}
_Company_id = new WeakMap();
let jetha = new Company(1, "Jetha", "Gujarat");
//here you can not access getEmployeeCount just by write jetha.
//you can only access through
Company.getEmployeeCount();
console.log(Company.getEmployeeCount());
//This is the way to access static member
//by Calling its class
//Getter and Setters
class People {
    //getter is used to get the values
    get empID() {
        return __classPrivateFieldGet(this, _People_id, "f");
    }
    //setter is used to assign the value
    set empID(id) {
        __classPrivateFieldSet(this, _People_id, id, "f");
    }
    //static
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        _People_id.set(this, void 0);
        this.address = address;
        __classPrivateFieldSet(this, _People_id, id, "f");
        this.name = name;
    }
    getNamewithDetail() {
        return `${this.name} stays at ${this.address}`;
    }
}
_People_id = new WeakMap();
let daya = new People(1, "Daya", "Gujarat");
daya.empID = 100;
console.log(daya.empID);
