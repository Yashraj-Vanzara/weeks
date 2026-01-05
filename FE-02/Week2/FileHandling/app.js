// ! File handling means handling file

//!  we use fs module 
const fs=require('fs')

fs.writeFileSync('./test.txt','hello') // ! writes synchronously


// ! Async
fs.writeFile('./test.txt','hello',(err)=>{})

const result=fs.readFileSync('./contact.txt',"utf-8")
console.log(result)

fs.readFile('./contact.txt',"utf-8",(err,data)=>{if(err){console.log}else{console.log(data)}})

    // * sync code return result async doesnt return so we dont store it in variable


// fs.appendFileSync('./contact.txt','\nhelllo')

fs.cpSync('./test.txt','./copy.txt')
//  fs.unlinkSync('./contact.txt')
const data= fs.statSync('./test.txt')
console.log(data)