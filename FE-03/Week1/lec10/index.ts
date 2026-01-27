// ! Function in  more depth 


function makeChai(type:string, sugar:boolean, milk:boolean){
 console.log(`Making Chai`)
}

// ! Specifies wht type of data will be returned by function
function getchaiprice():number{
    return 25
}

function makeorder(order:string){
    if(!order){
        return null 
    }
    return `Order for ${order} received`
}


// ! Logger function 
// ! Returns nothing
function logger():void{
    console.log("Logging info")

    // ! optional and default paramaeters in function are written in last 
}
// ! Optional parameter

function oc(type?:string){



}
// ! default value in parameter
function dc(type:string="masala"){

}

//! big Scary ass function 

function creatChai(order:{type:string, sugar:boolean, milk:boolean}):number{
return 4
}
