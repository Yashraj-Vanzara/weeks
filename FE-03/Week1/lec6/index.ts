// type guard and type narrowing

// type narrowing

function getChai(kind:string|number){
    if(typeof kind==='string'){
        return `MAking ${kind} chai...` 
    }
    return `chai order:${kind}`
}


//  custom type we can make 

type drink={type:drink,temp:"cold"}

// Assigns  drink type to water

type water=drink

// we use unkown type instead of any

