// access this item with the help of
const board = document.querySelector('#board');
// the number of squares is generated in the programm
// it is good practice to denote constants in capital letters
const SQUARES_NUMBER = 500;
// const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    // dynamically create an element (fn createElement)
    const square = document.createElement('div');
    square.classList.add('square');
    // we created square virtually; now we need to add it to html (with append)
    board.append(square);

    // add an event listener for each of the squares
    square.addEventListener('mouseover', () => setColor(square));

    square.addEventListener('mouseleave', () => removeColor(square));
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    // make colors more voluminous
    // using `` we can pass a DYNAMIC value with ${} !!! 2x volume; glow effect
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    // remove shadows
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}