//This is a note
//selector

document.getElementById()
document.getElementsByTagName()
document.getElementsByClassName()


const doneTodos = document.querySelectorAll('.done');
//return all elements that class is "done"
const checkbox = document.querySelector('input[type="checkbox"]');
//return the first element that input attribute is checkbox

document.querySelector('h1').innerText
//only the text showed on the brower
document.querySelector('h1').textContent
//the text and other elements mixed
document.querySelector('h1').innerHTML
//the true html content(recommended)

//2 ways of change attribute
document.querySelector('img').setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');
//change the img link
document.querySelector('img').alt = "chicken";
//change the alt text


