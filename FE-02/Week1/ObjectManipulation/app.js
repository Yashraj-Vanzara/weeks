const myobj={
    a:'Gaurav',
    b:1,
    c:false
}
// ! Object keys
// ! how to print  obj

Object.keys(myobj).forEach((i)=>{
    console.log(myobj[i])
})
// ? prints value

// ! another method

let value=Object.values(myobj)
console.log(value)

// ! object entries

let entries=Object.entries(myobj)
console.log(entries)