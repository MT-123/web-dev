const outerns = document.querySelector('#outer');
const innerns = document.querySelector('#inner');
const btnns = document.querySelector('#btn');

const outerws = document.querySelector('#outerStop');
const innerws = document.querySelector('#innerStop');
const btnws = document.querySelector('#btnStop');


//trigger event and change text color
outerns.addEventListener('click', () => { outerns.style.color = 'red' });
innerns.addEventListener('click', () => { innerns.style.color = 'yellow' });
btnns.addEventListener('click', () => { btnns.style.color = 'green' })
//the click event propagate from innermost element(button) to the outer element(div)

outerws.addEventListener('click', () => { outerws.style.color = 'red' });
innerws.addEventListener('click', () => { innerws.style.color = 'yellow' });
btnws.addEventListener('click', (evt) => {
    btnws.style.color = 'green';
    evt.stopPropagation();
    //the click event stop propagating at this layer
})

