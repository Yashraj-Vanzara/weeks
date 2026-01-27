// ! Generics

function WrapInArray<T>(value: T): T[] {  
    return [value];
 }

 function pair<A,B>(a:A,b:B):[A,B]{
    return [a,b]
 }
 pair<string,number>("hello",42)

 interface Box<T>{
    contents:T
 }

 interface ApiResponse<T>{
    data:T
    status:number
    error?:string
 }
 const res:ApiResponse<string>={
    data:"Success",
    status:200
 }