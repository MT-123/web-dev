//This is a note
//add and remove elements

//add new h2 after h1
const newh2=document.createElement('h2');
newh2.innerText='new heading 2';
const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend',newh2);


//2 ways of remove element
const img=document.querySelector('img');
img.parentElement.removeChild(img);

document.querySelector('img').remove();