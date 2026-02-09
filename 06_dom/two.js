// find element by id and class
document.getElementById("title")
document.getElementById("title").id
document.getElementById("title").class
document.getElementById("title").className
document.getElementById("title").getAttribute('id')
document.getElementById("title").getAttribute('class')
document.getElementById("title").setAttribute('class', 'test')
document.getElementById("title").setAttribute('class', 'test heading')
// store element 
const title = document.getElementById("title")
// add style
title.style.backgroundColor = "green"
title.style.pad = "15px"
title.style.padding = "15px"
title.style.borderRadius = "15px"
// add content
title.textContent
title.innerHTML
title.innerText
// Query Selector
document.querySelector('h2')
document.querySelector('#title')
document.querySelector('.heading')
document.querySelector('input[type="password"]')
document.querySelector('p:first-child')
document.querySelector('ul')
const myul = document.querySelector('ul')
myul.querySelector('li')
const turnGreen = myul.querySelector('li')
turnGreen.style.backgroundColor="green"
turnGreen.style.padding="10px"
turnGreen.innerText ="five"

document.querySelectorAll('li')
const tempLiList = document.querySelectorAll('li')
tempLiList.style.color="green"
tempLiList[0].style.color='green'
const tempLiList = document.querySelectorAll('li')
tempLiList
tempLiList.forEach(function (l) {})

tempLiList.forEach(function (l) {
    l.style.backgroundColor= "green" 
})

// get element by class
document.getElementsByClassName('list-item')
const tempclassList = document.getElementsByClassName('list-item')
tempclassList
tempclassList.forEach(function (li) {
    console.log(li)
})
// convert HTML to array
Array.from(tempclassList)
const myConvertedArray = Array.from(tempclassList)
myConvertedArray
