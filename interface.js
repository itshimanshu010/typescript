"use strict";
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
var Users = {
    name: '',
    age: 1,
    id: 1,
    email: ""
};
