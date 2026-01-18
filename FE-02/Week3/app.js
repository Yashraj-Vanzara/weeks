const fs = require("fs");

const data = fs.readFileSync("./fe02_bank.csv", "utf-8");
const line = data.split("\n");

const headers = line[0].trim().split(",");
console.log(headers);

const transactions=[]

for (let index = 1; index < line.length; index++) {
   
    const obj={}

    const data=line[index].split(',')
 headers.forEach((value,index)=>{
    obj[value]=data[index]
 })

 obj.Amount=Number(obj.Amount)

    transactions.push(obj)


}

//! sort by date

transactions.sort((a,b)=>(new Date(a.Date)-new Date(b.Date)))



console.log( transactions)
