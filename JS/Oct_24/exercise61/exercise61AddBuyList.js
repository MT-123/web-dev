const form=document.querySelector('form');
const lists=document.querySelector('ul');
const productName= form.elements.product;
const quantityName= form.elements.qty;

form.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    newLi();
    clearForm();
})

const newLi= ()=>{
    const newItem=document.createElement('li');
    newItem.innerHTML=`${quantityName.value} ${productName.value}`;
    console.dir(newItem);
    lists.appendChild(newItem);
    
}

const clearForm=()=>{
    productName.value='';
    quantityName.value='';
}
