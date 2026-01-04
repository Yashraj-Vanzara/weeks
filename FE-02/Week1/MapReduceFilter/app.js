// ! map reduce filter
// ? Map is used to transformation of array



const arr=[1,2,3,4,5,6]

function double(x){
    return x*2
}



const output=arr.map(double)
console.log(output)

// ? Filter is used to filter value inside array

const arr1=[5,2,3,5,46,9,8,7]
const output1=arr1.filter((x)=>{
    if(x%2!=0) return x
})

console.log(output1)


// ? Reduce is used when we need to take all elements in array and sum it up in one value


const arr2=[12,4,5,69,8,7,4,5]

// * without using reduce function

function findsum(x){
    let ans=0
    arr2.forEach(elem=>{ans+=elem})
    return ans
}

console.log(findsum(arr2))

//  * using reduce  function 

const output2=arr2.reduce(function(acc,curr){
        acc+=curr
        return acc
},0)

console.log(output2)



function findmax(x){
    let ans=0
    arr2.forEach(elem=>{if(elem>ans) ans=elem})
    return ans
}

// ! find max using reduce 

const output3=arr2.reduce(function(acc,curr){
    if(curr>acc){
        acc=curr
    }
    return acc
},0)


// ! some tricky questions

const users = [
    { firstName: 'akki', lastName: 'pito', age: 21 },
    { firstName: 'sasdshn', lastName: 'tdsad', age: 20 },
    { firstName: 'didsaddsdw', lastName: 'dasdr', age: 22 },
    { firstName: 'jsdaat', lastName: 'dsadg', age: 22 },
    { firstName: 'pdsdara', lastName: 'sdadad', age: 71 }
]


// ! Find list of full name

const ans=users.map((fullname)=>{
   return  puranaam=`${fullname.firstName} ${fullname.lastName}`
})

console.log(ans)

// ! how many  of same age
const output4=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]++

    }
    else{
        acc[curr.age]=1
    }

    return acc

},{})


const output5=users.filter((user) => user.age < 30) .map((user) => user.firstName)

console.log(output5)

