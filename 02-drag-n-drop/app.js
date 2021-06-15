// get the element that we will drag from the DOM tree by class name
const item = document.querySelector('.item');
console.log('item: ', item);

const placeholders = document.querySelectorAll('.placeholder');
console.log('placeholders: ', placeholders);

// add events to the element via addEventListener - 2d param is a fn
// which will be called when the event occurs
item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

// for of loop
for (const placeholder of placeholders) {
    console.log(placeholder);

    // add events to placeholder
    // when the draggable element is over placeholder where we can place el
    placeholder.addEventListener('dragover', dragOver);
    // when we enter the territory of placeholder
    placeholder.addEventListener('dragenter', dragEnter);
    // when dragged but got out of there
    placeholder.addEventListener('dragleave', dragLeave);
    // when released
    placeholder.addEventListener('drop', dragDrop);
}

function dragStart(event) {
    // event.target - is the draggable element itself
    // event - can be any name
    console.log('drag started', event.target);
    // this can be used aswell, but can cause errors; it's better to use event.target
    // console.log('drag started', this);

    // CSS styles can be added to the element; add class 'hold' here
    event.target.classList.add('hold');

    // use delay so that the element does not disappear completely
    setTimeout(() => event.target.classList.add
    ('hide'), 0);
    // the element will disappear from the starting position when drag beggins
    // event.target.classList.add('hide');
}

function dragEnd() {
    console.log('drag ended');

    // remove class 'hold' on dragEnd
    // event.target.classList.remove('hold');
    // event.target.classList.remove('hide');
    // event.target.classList.remove('hold', 'hide');

    // or remove all classes leave only 'item'; className works only with str
    // classList is an obj that has methods
    event.target.className = 'item';

}

// by default this fn cancels the drag-and-drop behavior; need to use preventDefault method
function dragOver(event) {
    console.log('drag over');
    event.preventDefault();
}

function dragEnter(event) {
    console.log('drag enter');
    event.target.classList.add('hovered');
}

function dragLeave(event) {
    console.log('drag leave');
    event.target.classList.remove('hovered');
}

function dragDrop(event) {
    console.log('drag drop');
    // event.target.classList.add('dropped');
    event.target.classList.remove('hovered');
    event.target.append(item);
}