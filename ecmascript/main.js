// // CONST & LET
// let name = 'John';
// let test;

// name = 'Jack';

// let person = {
//   name: 'John',
//   age: 33
// };

// person.name = 'Jack';

//  person ={
//      name:'jack',
//      age:45
//  }
// console.log(person)

// const nums = [1, 2, 3, 4];
// nums.push(5);
// // ARROW FUNCTIONS

// function sayHello() {
//   console.log('Hello');
// }

// const sayHello = name => console.log(`Hello ${name}`);

const fruits = ['Apples', 'Oranges', 'Grapes'];

// FOREACH
//  fruits.forEach((fruit, index) => {});


const arr = [arr1 = [
  ar2 = [
    ar3 = [{},{}]
  ]
]]
// // // MAP
const arr_dupli = arr.map(arr => {
  arr.map(arr => {
    arr.map(arr => {
      return arr
    })
  })
})


//arr_udpli = [{},{}]
// const singleFruit = fruits.map(fruit => fruit.slice(0, 0).toUpperCase());
// console.log(singleFruit)
// // FILTER
// const people = [
//   { id: 1, name: 'Karen' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Sharon' }
// ];

// const people2 = people.filter(person => person.name !== 'Bob');

// console.log(people2)

// //slpice

let fruit = fruits.splice(1)
console.log(fruit)

// const age = [1,22,33,54,67,87,92,45,55]

// let sumage = 0

// for(let i = 0; i < age.length; i++ ) {
//   sumage += age[i]
// }

// let ages = age.reduce((total,age) => total + age ,0)


// console.log(ages)
// // SPREAD

const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2),4];
console.log(arr3)

const person1 = {
  name: 'Brad',
  age: 36
};

const person2 = {
  ...person1,
  email: 'brad@gmail.com'
};

// // DESTRUCTURING

// const profile = {
//   name: 'John Doe',
//   address: {
//     street: '40 Main st',
//     city: 'Boston'
//   },
//   hobbies: ['movies', 'music']
// };

// const { name, address, hobbies } = profile;
// const { street, city } = profile.address;
// console.log(name,address)
// // CLASSES
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const person1 = new Person('John', 33);
const person2 = new Person('Sara', 28);
console.log(person1)
// // SUBCLASSES;
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes $${this.balance}.00`;
  }
}

const customer1 = new Customer('Kevin', 32, 300);
console.log(customer1)
// // MODULES

// // file 1 (file1.js)
export const name = 'Jeff';
export const nums = [1, 2, 3];
export default class Person {
    constructor(){
        
    }
};

// // file 2 (file2.js)
import { name, nums } from './file1';
import Person from './file1';
