// get the element that we will drag from the DOM tree by class name
const item = document.querySelector('.item');
console.log(item);

// add events to the element via addEventListener - 2d param is a fn
// which will be called when the event occurs
item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

function dragStart() {
    console.log('drag started');
}

function dragEnd() {
    console.log('drag ended');
}