//Class It is used to handling business logic in code

class EmployeeInfo {
  //Creating Properties //id,name,address are the properties
  // id:number; it gives error because it is not initialize so we use !
  id!: number;

  name!: string;

  address!: string;

  //Constructors are the responsible for creating instance of a class
  //Two type Default and Paramterized Constructors
  //But in ts you cant have both
  // you can either have default or Paramterized
  //Multiple constructor implementations are not allowed
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
  //By using constructor we can avoid ! in properties
  //The ! operator is used to inform the TypeScript compiler that the properties will definitely be initialized, but in this case, we use the constructor to initialize them

  id: number;

  name: string;

  address: string;

  constructor(id: number, name: string, address: string) {
    this.address = address;
    this.id = id;
    this.name = name;
  }

  //the non-null assertion operator (!) is not needed because the properties are initialized within the constructor
}

// let tom = new Employee();
//it will error because whenever you create an instance
// you have to pass value
let tom = new Employee(1, "Tom", "India");

console.log(tom); //Employee { address: 'India', id: 1, name: 'Tom' }

//Methods

class Empl {
  id: number;

  name: string;

  address: string;

  constructor(id: number, name: string, address: string) {
    this.address = address;
    this.id = id;
    this.name = name;
  }

  //Create method(only need function name dont have to use function keyword here)

  getNamewithAddress(): string {
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
  //Private Keyword are  #id or private id
  //or private id :number;

  #id: number; //more preferabble

  private name: string;

  address: string;

  protected mobile: number;

  constructor(id: number, name: string, address: string, mobile: number) {
    this.address = address;
    this.#id = id; //here we need to add # when we use # in properties
    //but we dont need to use private when we use private
    this.name = name;
    this.mobile = mobile;
  }

  //Create method(only need function name dont have to use function keyword here)

  getNamewithAddress(): string {
    return `${this.name} stays at ${this.address}`;
    //or this way
    //return this.name + " " + this.address;
  }
}

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
  constructor(id: number, name: string, address: string, mobile: number) {
    super(id,name,address,mobile);
    //when we extending it is require to call super
  }

  getNamewithAddress(): string {
    return `${this.mobile} mobile number from ${this.address}`;
  }

}

let satyam = new School(2,"Satyam","Uttar Pradesh",975441336);

let getData = satyam.getNamewithAddress();

let ujwal = new School(3,"ujwal","Madhya Pradesh",97854511);

console.log(ujwal.getNamewithAddress());


//we can use getNamewithAddress by removing it from Student class
//because of it parent class it can access there to

//Example 
//Member Visibility
class Vidhyalay extends Student {

   
    constructor(id: number, name: string, address: string, mobile: number) {
        super(id,name,address,mobile);
    }
  
}

let sujal = new School(4,"sujal","Himachal Pradesh",745512124);

console.log(sujal.getNamewithAddress());
//Here we see without making that method in Vidhyalay
//Vidhyalay knows that this is on his parent class that is student



//Static Members
//Static members are which can be access with the class name
class Company {
    
    #id: number;
  
    protected name: string;
  
    address: string;

    //static
    static getEmployeeCount():number{
        return 50;
    }
  
    constructor(id: number, name: string, address: string) {
      this.address = address;
      this.#id = id;
      this.name = name;
    }
    getNamewithDetail(): string {
        return `${this.name} stays at ${this.address}`;
      }
  }

  let jetha = new Company(1,"Jetha","Gujarat");
  //here you can not access getEmployeeCount just by write jetha.
  //you can only access through

  Company.getEmployeeCount();
  console.log(Company.getEmployeeCount());
  //This is the way to access static member
  //by Calling its class



  //Getter and Setters
  class People {
    
    #id: number;
  
    protected name: string;
  
    address: string;

    //getter is used to get the values
    get empID(): number{
        return this.#id
    }

    //setter is used to assign the value
    set empID(id:number){
        this.#id = id;
    }

    //static
    static getEmployeeCount():number{
        return 50;
    }
  
    constructor(id: number, name: string, address: string) {
      this.address = address;
      this.#id = id;
      this.name = name;
    }
    getNamewithDetail(): string {
        return `${this.name} stays at ${this.address}`;
      }
  }

  let daya = new People(1,"Daya","Gujarat");

  daya.empID = 100;
  
  console.log(daya.empID);
  