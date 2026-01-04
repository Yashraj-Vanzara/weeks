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

