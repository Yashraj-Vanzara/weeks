// !Hoisting

getname()
console.log(x)

var x=7
function getname(){
    console.log("js")
}


// 1. In JS, before the code is executed, the variables get initialized to undefined.

// 2. Arrow functions enact as variables and get "undefined" during the memory creation phase while functions actually get run.

// 3. Hoisting:  is JavaScript's default behavior where variable and function declarations 
//    are processed during the memory creation phase (before code execution), 
//    NOT physically moved to the top.

// 4. Whenever a JS program is run, a global execution block is created, which comprises of 2: Memory creation and Code execution.
// 5. Variable declarations are scanned and are made undefined

// 6. Function declarations are scanned and are made available

// 7. During memory creation phase:
//    - 'var' variables are initialized with 'undefined'
//    - 'let' and 'const' are uninitialized (Temporal Dead Zone - TDZ)
//    - Function declarations are fully stored in memory
//    - Function expressions and arrow functions behave like variables

// 8. This is why:
//    - You can call functions before they're declared
//    - 'var' variables are 'undefined' before initialization
//    - 'let' and 'const' give ReferenceError before initialization

// 
