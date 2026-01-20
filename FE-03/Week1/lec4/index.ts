// ! Type annotaion and infering

// Annote means developer will decide the type 
// infer means ts wil automatically get the type

// ! Ex infering

let  drink="Chai"
let cups=Math.random()>0.5?10:'5'
// we did not assing any type ts get it byself
// drink=0
// now this gives error

// ! annotation

let flvr:string="rose"
// giving explict data type