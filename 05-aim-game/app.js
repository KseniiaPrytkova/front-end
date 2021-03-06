// classes for styles; id - interaction with js
const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
// const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
// determine which button was pressed and how much time put into the game
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
    // cancel the default behavior (#)
    event.preventDefault();
    // add the class up to the list of classes for the first screen
    screens[0].classList.add('up');
})

// add listener to the whole list block; but need to listen each list item itself
timeList.addEventListener('click', event => {
    // that el that was clicked event.target; if el has class .contains
    if (event.target.classList.contains('time-btn')) {
        // console.log(event.target.getAttribute('data-time'));
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
});

// DEBUG
// startGame();

function startGame() {
    // screens[1].classList.add('up');

    // call decreaseTime fn each second
    setInterval(decreaseTime, 1000);
    // timeEl.innerHTML = `00:${time}`;
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        // timeEl.innerHTML = `00:${current}`;
        setTime(current);
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
    // timeEl.parentNode.remove();
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`;
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const color = getRandomColor();
    // console.log(color);
    // const qqq = board.getBoundingClientRect();
    // console.log(qqq);
    // ????????????????????????????????
    const {width, height} = board.getBoundingClientRect();
    // potentially the value could be 500, which is larger than the screen size
    // so width - size
    const x = getRandomNumber(0, width - size);
    const y = 200;

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = color;

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

// call this fn in browsers console
function winTheGame() {
    function kill() {
        const circle =  document.querySelector('.circle');

        if(circle) {
            // so that the browser thinks that we have clicked on it
            // that will remove only 1 circle; need to use intervals for many 
            circle.click();
        }
    }

    setInterval(kill, 75);
}