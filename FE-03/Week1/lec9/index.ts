// objects

const chai={
    name:"masalachai",
    price:20,
    hot:true
}

let tea:{name:string,price:number,hot:boolean}= {
    name:"masalachai",
    price:20,
    hot:true
}

type Tea={
    name:string,
    price:number,
    ingredients:string[],
}

const addrakchai:Tea={     
    name:"addrakchai",
    price:25,
    ingredients:["adrak","masala","tea leaves"]
 }

 type Cup={size:string}
 let smallCup:Cup={size:"small"}
 let bigCup={size:"big",material:"ceramic"} 

 smallCup=bigCup

 type User={
    username:string,    
    password:string
 }

 const u:User={
    username:"admin",
    password:"root"
 }

 type Item={name:string,quantity:number}

 type Order={
    items:Item[],
 }

 type chai={
    name:string,    
    price:number,
    isHot:boolean
 }
//! makes all property optional
//  const updatechai=(updates:Partial<chai>)=>{    
//         console.log(updates)
//    }

//    updatechai({price:30})
//! makes all property necessary and required
//     const updatechai=(updates:Required<chai>)=>{    
//         console.log(updates)
//    }

// ! Picks data type only which is specified 
//     const updatechai=(updates:Pick<chai, "price"|"isHot">)=>{    
//         console.log(updates)
//    }


// ! omits the specified property from data type
  const updatechai=(updates:Omit<chai, "price">)=>{    
         console.log(updates)
    }


