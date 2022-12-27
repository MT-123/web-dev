const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input',function (evt){
    if(input.value.length !==0){
        h1.innerHTML="Welcome, "+input.value;
    } else h1.innerHTML='Enter Your Username';
    
})