// ! let and const declarations are hoisted 

console.log(b)
console.log(a)
let a=10
var b=100


// In JavaScript, let and const are two modern ways of declaring variables. They were introduced in ECMAScript 6 (ES6) to replace the traditional var keyword for better scoping and to avoid certain issues that var had. One of the concepts associated with let and const is the "Temporal Dead Zone" (TDZ).

// let and const Declarations:
// let: Variables declared with let are mutable, meaning their values can be changed after initialization. They have block-level scope, meaning they are only accessible within the block (enclosed by curly braces) where they are defined.
// javascript
// Copy code
// let x = 10;
// x = 20; // Valid, changing the value of x
// const: Variables declared with const are also block-scoped, but they are read-only, and their values cannot be reassigned after initialization. However, the properties of objects declared with const can still be modified.
// javascript
// Copy code
// const y = 30;
// y = 40; // Error, reassigning a constant variable is not allowed
// Temporal Dead Zone (TDZ):
// The Temporal Dead Zone is a behavior that occurs when using let and const before they are formally declared in the code. During this phase, accessing the variable will result in a reference error.

// javascript
// Copy code
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 5;
// In the above example, the console.log(a) statement throws a reference error because the variable a is accessed before its declaration. This is known as the Temporal Dead Zone.

// The TDZ lasts from the start of the block (or function) where the variable is defined until the actual declaration is reached. Any attempt to access the variable during this period will result in an error.

// Conclusion:
// Using let and const for variable declarations in JavaScript provides better scoping and helps avoid certain issues associated with var. However, be mindful of the Temporal Dead Zone, especially when using let, as it can lead to unexpected reference errors if variables are accessed before they are formally declared. Understanding these concepts will enable you to write more reliable and maintainable JavaScript code.