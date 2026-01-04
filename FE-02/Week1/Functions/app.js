var x=1
a()
b()
console.log(x )


function a(){
    var x=10;
    console.log(x)
}
function b(){
    var x=100;
    console.log(x)
}


//! Memory is allocated in first phase of excecuion and x will be intialized with undefined
