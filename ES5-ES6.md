# ES5 : OOPS

#### ES5 : OOPS : Object Literal : (ES5 )
Here we need to create sparate obj for all person.  So we can create function and create object handle this.
```
const obj = {
    name: "bhavin",
    age: 21,
    getDetails: function() {
    return `${this.name} age is ${this.age}`;
    }
};
console.log(obj.getDetails());            //bhavin age is 21


const obj = {
    name: "Ravi",
    age: 16,
    getDetails: function() {
    return `${this.name} age is ${this.age}`;
    }
};

console.log(obj.getDetails());            //Ravi age is 16
```
#### ES5 : OOPS :  constructor function: (ES5 )

```
function person(name, age) {
  this.name = name;
  this.age = age;
  this.getDetails = function() {
    return `${this.name} age is ${this.age}`;
  }
}

const bhavin = new person('bhavin', 21);
const ravi = new person('Ravi', 15);
console.log(bhavin.getDetails());         //bhavin age is 21
console.log(ravi.getDetails());           //Ravi age is 15
```

#### ES5 : OOPS :  Below example is using prototype method.

```
function person(name, age){
  this.name = name;
  this.age = age;
}

//here we have created function based on prototype.
person.prototype.getDetails = function(){
  return `${this.name} age is ${this.age}`;
}

const bhavin = new person('bhavin', 21);
const ravi = new person('Ravi', 15);
console.log(bhavin.getDetails());         //bhavin age is 21
console.log(ravi.getDetails());           //Ravi age is 15
```

#### ES5 : OOPS :  Inheritance : 

```
function person(name, age) {
  this.name = name;
  this.age = age;
  this.getDetails = function() {
    return `${this.name} age is ${this.age}`;
  }
}
function animal(name, age){
//Call constructor of parent class
person.call(this, name, age);
}
const bhavin = new person('bhavin', 21);
console.log(bhavin.getDetails());
//Inhitance of - person class
animal.prototype = Object.create(person.prototype);
const ani = new animal('catty', 2);
console.log(ani.getDetails());
```

# ES6 : OOPS

```
class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  
  getDetails(){
  return `${this.name} age is ${this.age}`;
  }
}


const bhavin = new Person('bhavin', 21);
console.log(bhavin.getDetails());    //bhavin age is 21
```

#### ES6 : OOPS :  Inheritance : 
```
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name} age is ${this.age}`;
  }
}

class animal extends person {
  constructor(name, age) {
    super(name, age);
  }
}
const bhavin = new person('bhavin', 21);
console.log(bhavin.getDetails());    //bhavin age is 21
const ani = new animal('catty', 2);
console.log(ani.getDetails());       //catty age is 2
```

