"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmployTest {
    constructor(id, name, address) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
    getNamewithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
let raju = new EmployTest(1, "Raju", {
    street: "ABC",
    city: "BCD",
    state: "DBD",
    pin: 41441,
});
console.log(raju);
let user = {
    name: "Hima",
    id: 1,
    email: "",
    age: 20
};
let loginuser = {
    name: "Hima",
    id: 1,
    email: "",
    age: 20,
    register: "Yes",
};
//Accesing the object
loginuser.age;
loginuser.name;
console.log(loginuser.age);
//object destructuring and array destructuring
//Object Destructuring is to direclty access particular object
//example for accesing we have to do this
// let loginuser: LoginUser = {
//     name: "Hima",
//     id: 1,
//     email: "",
//     age:20,
//     register: "Yes",
//   };
//   //Accesing the object
//   loginuser.age;
//   loginuser.name;
let { name, email } = { name: "Raj", id: 1, email: "" };
//Here we access name and email out this three name id email
//Here we can also rename it like name: userName
let { name: userName, email: userLogin } = { name: "Raj", id: 1, email: "r@gmail.com" };
console.log(`Name: ${userName}`);
console.log(`Email: ${userLogin}`);
//array destructuring
//Basic Array
let users = [
    { name: "Ragh", email: "", id: 1 },
    { name: "Bagh", email: "", id: 2 },
    { name: "Jagh", email: "", id: 3 }
];
//now i have to access array 1 and array 2
let [user1, user2] = [
    { name: "Ragh", email: "", id: 1 },
    { name: "Bagh", email: "", id: 2 },
    { name: "Jagh", email: "", id: 3 }
];
console.log(user1);
console.log(user2);
//rest operator
let [id1, id2, ...restUsers] = [
    { name: "Ragh", email: "", id: 1 },
    { name: "Bagh", email: "", id: 2 },
    { name: "Jagh", email: "", id: 3 },
    { name: "Parag", email: "", id: 4 }
];
console.log(id1);
console.log(id2);
console.log(restUsers);
//filter value
let result = restUsers.filter(user => user.id > 3);
console.log(result);
