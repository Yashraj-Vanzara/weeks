//! objects literals

// const blogs=[

//     {title:"why mac & cheese",likes:30},
//     {title:"life of nerd",likes:300},
// ]

let user = {
  name: "crystal",
  age: 30,
  email: "crrystal@thenetninja.co.uk",
  location: "berlin",
  blogs: [
    { title: "why mac & cheese", likes: 30 },
    { title: "life of nerd", likes: 300 },
  ],
  login: function () {
    console.log("user logged in");
  },
  logout: function () {
    console.log("user logged  out");
  },

  logblogs: function () {
    console.log("This user have written this blogs");
    this.blogs.forEach((blog) => {
      console.log(blog.title,blog.likes);
    });
  },
  // !This refers to blogs
};

// * To access any of these
console.log(user);
console.log(user.name);

//  ?To update
// user.age=35

// * access using square bracket
console.log(user["name"]);

//  ?To update
// user["name"]="chun-li"

// ! To pass string as key
// const key="lat"
// user[key]

// ! Type of object is object


// * Math object 

// console.log(Math)
// console.log(Math.PI.toFixed(3))
// console.log(Math.E)

const area=7.7
// console.log(Math.round(area)) --output 8
// console.log(Math.floor(area)) --output 7
// console.log(Math.ceil(area))  --output 8
//  console.log(Math.trunc(area))  --output 7 --lives the decimal part keeps only number


//!random number
console.log(Math.random())
console.log(Math.random()*100)


// ! primitive vs reference type
// primitive variable is stored on stack memory
// Reference type is stored in heap memory

// Primitive
let score1 = 50
let score2 = score1

// console.log(`score1 is ${score1} and score2 is ${score2}`)

score1 = 100

// console.log(`score1 is ${score1} and score2 is ${score2}`)

// Reference
let user1 = {
    name: 'ansh',
    age: 21
}

let user2 = user1

console.log(`name of user 1 is ${user1.name} and name of user 2 is ${user2.name}`)

user1.name = 'anshu'

console.log(`name of user 1 is ${user1.name} and name of user 2 is ${user2.name}`)
