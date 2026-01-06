const { exec } = require('child_process')
const fs=require('fs')

function genrateAnalysisFromEmployes(){
    // const newreport=[]
    const Employes=fs.readFileSync('./employes.json',"utf-8")
    const data=(JSON.parse(Employes))
    const result=data.sort((a,b)=>b.salary-a.salary)
    // !step 1 done
    // console.log("The list of sorted Employess",result)

    const expemployee=data.filter(x=>x.experience>=3)
    // console.log('---------------------------------------------------------------------------------------')
    console.log('xp > 3',expemployee)

    const summarylist=[]
    expemployee.forEach(element => {
        const anualbonus=element.salary*0.10*element.experience
        summarylist.push({name:element.name,department:element.department,anualbonus})

    });

    console.log(summarylist)

  

    const totalSalryExpenditure=expemployee.reduce((acc,curr)=>{
                acc+=curr.salary
                return acc
    },0)

    console.log(totalSalryExpenditure)
        

   
}


genrateAnalysisFromEmployes()