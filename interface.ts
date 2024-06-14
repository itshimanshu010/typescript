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
