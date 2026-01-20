// Unions and any

// | assing multiple data type using   | this operator

let subs:number | string =10

let apirequeststatus:'pending' | 'sucess'|'error'='pending'

let airlineseat:'aisle'|'middle'|'window'='aisle'

const order=['1','2','3','4']

let currentorder:string | undefined

for (const element of order) {
    if(element==='2') {
        currentorder=element
        break
    }
    


}

console.log(currentorder)
