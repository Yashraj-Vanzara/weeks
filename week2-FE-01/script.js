// ! console basics

// ? Console is used to console(print) something on console
console.log("Hello world");
//* There are various types of consoles

// ! Types

// ? Used for warning
console.warn("Warning");

// !used for error
console.error("Error");

// ! variables

// * can change the value of let
let name = "yashraj";

// * cannot change the value of const
const id = "784sd8sd48";

// ! Data types primitive

// * String,Numbers,Boolean,null,undefined

const fname = "Yashraj";
const number = 50;
const isRizzer = true;
const value = null;
const successRate = undefined;

//  ? To test check the type of variable use typeof

// * Example

console.log(typeof isRizzer);

// ! most imp Type of null is object

// * Concatenation

const lname = "riffer";
const NAme = "john";

// ? this is es6 method template string
console.log(` the full name is ${NAme} ${lname}`);

// ! String Methods

const RandomWord = "Hello World";

// ? Gives length of string
console.log(RandomWord.length);

// Similar methods are
// ! RandomWord.toUpperCase()
// ! RandomWord.toLowerCase()
//  !RandomWord.substring(0,8)  it will take upto 8-1 =7 so (0,7)
//  !RandomWord.split()

// ! Non-primitives

// * Arrays- variables that hold multiple values (in js we can hold different data types in single array)

const numbers = [1, 2, 3, 4, 5];
console.log(number[2]);

// ! Some Array methods

// !numbers.push() add value at end
//! numbers.pop() removes value from end
// !  numbers.unshift() add value at start
// !numbers.shift() removes value from start
// ! numbers.indexOf("1") gives index of the value

// ? To check if something is array
// * (Array.isArray(numbers)) this method is used

// ! Objects

const obj = {
  fnname: "yashraj",
  lname: "vanzara",
  address: {
    city: "boston",
  },
};

console.log(obj);
//*  destructuring

const { fnname } = obj;

// * for nested destructuring like address
const {
  address: { city },
} = obj;

// ? add values in obj

obj.likes = "none";

// ! Arrays of objects

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
];

console.log(todos[1].text);

// ! json

// ? to convert anythinf to json

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// ! Loops

for (let index = 0; index < todos.length; index++) {
  const element = todos[index];
  console.log(element);
}

// ! while loop

let num = 1;
while (num < 10) {
  console.log(num);
  num++;
}

// ! Forof loop

for (todo of todos) {
  console.log(todo.text);
}

// ! Array methods forEach,map,filter

// !for each loop

todos.forEach(function (todo) {
  console.log(todo);
});

// !map returns new arrays

const newArray = todos.map(function (todo) {
  return todo.text;
});

// !filter

const isCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === "true";
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(isCompleted);

//  !  conditionals

const x = 10;
// ! == check the value

if (x == 10) console.log(true);

//! === checks both value and type

if (x === "10") console.log(true);
else console.log(false);

// ! if else first checks if condition if if condition not satisfy then output fromm else
// ! we can use multiple conditions using if else if else ladder

// * && if both value is true prints ans
// * || if one value is true it prints ans

// *ternary operator

const z = 10;
const v = z > 5 ? true : false;

// !switch case
switch (key) {
  case value:
    break;

  default:
    break;
}


// !Functions

function nameee(){
  console.log("yashraj")
}

nameee()


// !function with parameter

function lbuy(a=1,b=1){
  return a+b
}

console.log(lbuy(5,5))

// !Arrow funtions

const add=(num1,num2)=>{console.log(num1+num2)}

// * if only one parameter

const sub=num1=>num1-5

// !classes

class person{
  constructor(fname,lname,dob){
    this.fname=fname
    this.lname=lname
    this.dob=new Date(dob)
  }

  getfullname(){
    return `${this.fname} ${this.lname}`
  }
  getBrithyear(){
    return `${this.dob.getFullYear}`
  }
}

const person1=new person("yashraj","vanzara","8-1-2005")
console.log(person1)
console.log(person1.getBrithyear())


// ! DOM 

//*select single element 

document.getElementById('my-form')
document.querySelector('.my-form')

// *Multiple Element selection

// ? HTML collection we can't use array methods 
// ? On node list we can use array methods


document.querySelectorAll('item')

// !some methods

// * .remove()
// * .lastElementChild.remove()  - removes last child
// * .firstElementChild.textContent='Hello'

// !Events

const btn=document.querySelector('.btn')

btn.addEventListener('click',function(e){
  console.log(e.target.className) //! target gives us current element on which event happened
  btn.style.background='red' // ! adding bgcolor on btn when click on btn
})