// ! Array
// ! type  of array is string 
const chaiFlavours:string[] = ['vanilla', 'chocolate', 'strawberry'];

const rating:Array<number>=[1,200]

type Chai={
    name:string,    
    price:number,
    isHot:boolean
}

const menu :Chai[]=[
    {name:"masala",price:20,isHot:true},
    {name:"adrak",price:25,isHot:true},
    {name:"elaichi",price:30,isHot:false},
]

const city:readonly string[]=["delhi","mumbai"]
// !2d array

const table:number[][]=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// ! tuple  order have to mentioned  also we made it readonly

let chaituple:readonly[string,number,boolean]

chaituple=["masala",20,true]
// ! named tuple

const chaiitem:[name:string,price:number]=["Masala",25]

// !enums
enum Cupsize{
    SMALL,
    MEDIUM,
    LARGE
}

const size=Cupsize.MEDIUM
// ! Auto increment in value in enum

enum Status{
    Pending=100,
    served// 101
}
//  ! we can make enum const  using const  keyword 