// ! console basics

// ? Console is used to console(print) something on console
console.log("Hello world")  
//* There are various types of consoles

// ! Types


// ? Used for warning
console.warn("Warning")

// !used for error
console.error("Error")


// ! variables

// * can change the value of let
let name="yashraj" 

// * cannot change the value of const
const id="784sd8sd48"


// ! Data types primitive

// * String,Numbers,Boolean,null,undefined

const fname="Yashraj"
const number=50
const isRizzer=true
const value=null  
const successRate=undefined


//  ? To test check the type of variable use typeof

// * Example

console.log(typeof isRizzer)

// ! most imp Type of null is object

// * Concatenation

const lname="riffer"
const NAme="john"

// ? this is es6 method template string
console.log(` the full name is ${NAme} ${lname}`)

// ! String Methods

const RandomWord="Hello World"

// ? Gives length of string
console.log(RandomWord.length)

// Similar methods are 
// ! RandomWord.toUpperCase()
// ! RandomWord.toLowerCase()
//  !RandomWord.substring(0,8)  it will take upto 8-1 =7 so (0,7)
//  !RandomWord.split()


// ! Non-primitives 

// * Arrays- variables that hold multiple values (in js we can hold different data types in single array)

const numbers=[1,2,3,4,5]
console.log(number[2])  

// ! Some Array methods

// !numbers.push() add value at end
//! numbers.pop() removes value from end
// !  numbers.unshift() add value at start
// !numbers.shift() removes value from start
// ! numbers.indexOf("1") gives index of the value

// ? To check if something is array
// * (Array.isArray(numbers)) this method is used 


// ! Objects

const obj={
    fnname:"yashraj",
    lname:"vanzara",
    address:{
        city:"boston"
    }
}

console.log(obj) 
//*  destructuring 

const {fnname }=obj

// * for nested destructuring like address
const{address:{city}}=obj

// ? add values in obj

obj.likes="none"

// ! Arrays of objects

const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
  }
];

console.log(todos[1].text);


// ! json

// ? to convert anythinf to json 

const todoJSON=JSON.stringify(todos);
console.log(todoJSON)