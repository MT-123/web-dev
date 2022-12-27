//addEventListener

const hb = document.querySelector('#hello');
const gb = document.querySelector('#goodbye');
hb.addEventListener('click', () => { console.log('hello') });
gb.addEventListener('click', function () { console.log('goodbye') });


//prevent moving to the next page after submitting
const someform = document.querySelector('#prevention');
someform.addEventListener('submit', function (evt) {
    evt.preventDefault();
    //prevent the default action of the element
})
