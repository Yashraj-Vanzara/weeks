// ! DOM INTRO

/*
DOM is document object model
created by the browser when a web page is loaded
in graphical form it looks like a tree of elements/nodes
we use js to read and meanipulate dom

*/

// ! Get Element By id method --Lesson2

const pageBanner=document.getElementById('page-banner')

// !Get elements by class or tag --Lesson3

const h1=document.getElementsByClassName('title')
const li =document.getElementsByTagName('li')

// ! How to convert a anything in array
//?  Array.from(h1)


// ! Query Selector --Lesson4
const ans=document.querySelector('#wrapper')
// return only one element

// ! multiple element selector
// const books=document.querySelectorAll('#book-list li .name')
// return multiple lements

// ! Changing Text & HTML Content --lesson5
const books=document.querySelectorAll('#book-list li .name')
books.forEach((ele)=>(
    console.log(ele.textContent)
))

const booklist=document.querySelector('#book-list')
booklist.innerHTML='<h2>Books And more books...</h2>'