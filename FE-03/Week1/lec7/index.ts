// type assertion type unknown type never

let response:any="42"
let numericLength:number=(response as string).length
type book={
    name:string
}

let bookstring='{"name":"who moved my cheese"}'
let bookObject = JSON.parse(bookstring) as book

console.log(bookObject)

//  we use as to assert type

const inputele=document.getElementById('name') as HTMLInputElement

let value:any
value='chai'
value=123
value=2.5

value.toUpperCase()

let newvalue:unknown
newvalue='chai'
newvalue=123
newvalue=2.5

if(typeof newvalue ==='string'){

newvalue.toUpperCase()
}

try {
    
} catch (error) {

    if(error instanceof Error){
    console.log(error.message)}

    console.log(error)
    
}

const data='chai aur code'
const strdata:string=data as string

type Role='admin'|'user'|'superadmin'

function redirect(user:Role):void{
    if(user==='admin'){
        console.log(`Redirect admin`)
        return
    }
    if(user==='user'){
           console.log(`Redirect user`)
        return
    }
    user
}

function neverreturn():never{
    while(true){}
}


