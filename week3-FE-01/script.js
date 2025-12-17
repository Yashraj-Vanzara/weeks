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
// booklist.innerHTML='<h2>Books And more books...</h2>'

// ! Nodes --lesson6
const banner=document.querySelector('#page-banner')
console.log('#page-banner node type is :',banner.nodeType)
console.log('#page-banner node name is :',banner.nodeName)
console.log('#page-banner has child nodes is :',banner.hasChildNodes())

const clonnedBanner=banner.cloneNode(true) //! we pass true because we need to clone deeply 

// ! Traversing node part1 --lesson7
const bookList=document.querySelector("#book-list")
console.log(bookList.parentElement)
console.log(bookList.parentNode)

console.log(bookList.childNodes) //!also gives line break as text
console.log(bookList.children)

// ! Traversing node part2 --lesson8
const bookLlist=document.querySelector("#book-list")
console.log('The next sibling is',bookLlist.nextSibling)
console.log('The next sibling is',bookLlist.nextElementSibling)

console.log('the previous sibling is',bookLlist.previousSibling)
console.log('the previous sibling is',bookLlist.previousElementSibling)

// ! Events --lesson9
const h2=document.querySelector('#book-list h2')
h2.addEventListener('click',function(event){
    console.log(event.target)
})

const btns=document.querySelectorAll('#book-list .delete')
Array.from(btns).forEach((ele)=>(
    ele.addEventListener("click",function(e){
        e.target.closest('li').remove()
    })
))





// ! Event Bubbling -- lesson10
// ? means event will propogate uper ways if click on li and ul have even it will fire


// ! interact with form --lesson11
// const addform=document.forms['add-book']
// addform.addEventListener('click',function(e){
//     e.preventDefault()
//     const value=addform.querySelector('input[type="text"]').value
// })

// !creating Elements --lesson12

 const addform=document.forms['add-book']
addform.addEventListener('click',function(e){
    e.preventDefault()
    const value=addform.querySelector('input[type="text"]').value
    const li=document.createElement('li')
    const bookname=document.createElement('span')
    const deletebtn=document.createElement('span')

    bookname.textContent=value
    deletebtn.textContent='delete'
        deletebtn.classList.add('delete')
        bookname.classList.add('name')

    li.appendChild(bookname)
    li.appendChild(deletebtn)

    bookList.appendChild(li)
})


// !Styles and classes --lesson13
//! to add styles we add .style to element and any css property 
// ! book.style.marginTop
// !To add new class to a element use classlist.add

