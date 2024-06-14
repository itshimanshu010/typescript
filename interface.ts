//Noted that interface does not exist in javascript
//at runtime all interfaces will be removed
//We use interface to create own user defined data type
interface Address {
  street: string;
  city: string;
  state: string;
  pin: number;
}

class EmployTest {
  id: number;

  name: string;

  address: Address;

  constructor(id: number, name: string, address: Address) {
    this.address = address;
    this.id = id;
    this.name = name;
  }

  getNamewithAddress(): string {
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

export interface Users {
  name: string;
  age?: number;
  id: number;
  email: string;
}

let user: Users = {
  name: "Hima",
  id: 1,
  email: "",
  age:20
};

//Here we extend the interface
interface LoginUser extends Users {
  register: string;
}

let loginuser: LoginUser = {
  name: "Hima",
  id: 1,
  email: "",
  age:20,
  register: "Yes",
};

//Accesing the object
loginuser.age;
loginuser.name;
console.log(loginuser.age);

//if you remove register it will give missing error there
// let loginuser: LoginUser = {
//   name: "Hima",
//   id: 1,
//   email: "",
//   age:20,
// };

//Interface with Method Definition
// interface Login{
//     login():Users;
// }

//Now we have to use this outer the file that is in class2.ts
//by using export keyword so that will work outside this file
export interface DoLogin{
    login():Users;
}

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

let { name,email }:Users = {name:"Raj",id:1,email:""};
//Here we access name and email out this three name id email

//Here we can also rename it like name: userName
let { name:userName , email:userLogin }:Users = {name:"Raj",id:1,email:"r@gmail.com"};
console.log(`Name: ${userName}`);
console.log(`Email: ${userLogin}`);


//array destructuring

//Basic Array
let users:Users[] = [
    {name:"Ragh",email:"",id:1},
    {name:"Bagh",email:"",id:2},
    {name:"Jagh",email:"",id:3}
];
//now i have to access array 1 and array 2

let [user1,user2]:Users[] =[
    {name:"Ragh",email:"",id:1},
    {name:"Bagh",email:"",id:2},
    {name:"Jagh",email:"",id:3}
];

console.log(user1);
console.log(user2);

//rest operator
let [id1,id2,...restUsers]:Users[] =[
    {name:"Ragh",email:"",id:1},
    {name:"Bagh",email:"",id:2},
    {name:"Jagh",email:"",id:3},
    {name:"Parag",email:"",id:4}
];

console.log(id1);
console.log(id2);
console.log(restUsers);

//filter value
let result = restUsers.filter(user=>user.id>3);
console.log(result);
