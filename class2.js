"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Now here we import that interface here
class LoginCheck {
    constructor(id, name, address) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
    login() {
        return {
            name: "Hima",
            id: 1,
            email: "",
            age: 20
        };
    }
}
//Other way to import, you can use as alias
// so for calling every object by
// import * as BeLogin from './interface';
//and then change 
//LoginCheck implements BeLogin.DoLogin
//login(): BeLogin.Users 
//Can access every object by using dot *
//BeLogin as alias
