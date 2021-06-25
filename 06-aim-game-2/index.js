// make Start button life
// style guide: if it is an element with is a node type, for ex.,
// we pick it up using the querySelector() fn, we will denote it by $
// NODES
var $start = document.querySelector('#start');
var $game = document.querySelector('#game');
var $time = document.querySelector('#time');
var $result = document.querySelector('#result');
var $timeHeader = document.querySelector('#time-header');
var $resultHeader = document.querySelector('#result-header');
var $gameTime = document.querySelector('#game-time');

var score = 0;
var isGameStarted = false;

//add event listener to the button
$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBoxClick);
// input change event
$gameTime.addEventListener('input', setGameTime);


function startGame() {
    score = 0;
    setGameTime();
    // block input if the game has started
    $gameTime.setAttribute('disabled', true);
    $timeHeader.classList.remove('hide');
    $resultHeader.classList.add('hide');
    isGameStarted = true;
    console.log('Start');
    // the field should turn white when the game starts
    $game.style.backgroundColor = '#fff';
    // hide the button when the game starts
    $start.classList.add('hide');

    var interval = setInterval(function() {
        var time = parseFloat($time.textContent); 
        console.log('interval', $time.textContent);
        
        if (time <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            $time.textContent = (time - 0.1).toFixed(1);
        }
    }, 100);

    renderBox();
}

function setGameScore() {
    $result.textContent = score.toString();
}

function setGameTime() {
    // var time = 5;
    // convert to the number + OR parseInt
    var time = +$gameTime.value;
    $time.textContent = time.toFixed(1);
}

function endGame() {
    isGameStarted = false;
    setGameScore();
    $gameTime.removeAttribute('disabled');
    $start.classList.remove('hide');
    // remove squares
    $game.innerHTML = '';
    $game.style.backgroundColor = '#ccc';
    $timeHeader.classList.add('hide');
    $resultHeader.classList.remove('hide');

}

function handleBoxClick(event) {
    if (!isGameStarted) {
        return;
    }

    // console.log(event.target.dataset);
    if (event.target.dataset.box  ) {
        score++;
        renderBox();
    }
}

// creating squares
function renderBox() {
    // so that the squares are not duplicated
    $game.innerHTML = '';
    var box = document.createElement('div');
    // generate square dimensions dynamically
    var boxSize = getRandom(30, 100);
    var gameSize = $game.getBoundingClientRect();
    // it contains the height and width of the field
    console.log(gameSize);
    var maxTop = gameSize.height - boxSize;
    var maxLeft = gameSize.width - boxSize;


    box.style.height = box.style.width = boxSize + 'px';
    // the position of the box will be calculated relative to the borders of the outer square
    box.style.position = 'absolute';
    box.style.backgroundColor = '#000'
    // so that the box fits into the game block
    // box.style.top = '50px';
    box.style.top = getRandom(0, maxTop) + 'px';
    // box.style.left = '70px';
    box.style.left = getRandom(0, maxLeft) + 'px';
    box.style.cursor = 'pointer';
    // to understand that the click occurred precisely on the square - add a special data attribute for the box
    // attribute data set turns into an object where the values are listed but WITHOUT PREFIX DATA !!!
    box.setAttribute('data-box', 'true');

    // put HTML (box) into div (game); puts the item in DOM tree
    $game.insertAdjacentElement('afterbegin', box);

}

// generate square dimensions dynamically
function getRandom(min, max) {
    // number in range min - max
    return Math.floor(Math.random() * (max - min) + min);
}