const p1Display = document.querySelector('#display1');
const p2Display = document.querySelector('#display2');
const selectList = document.querySelector('#gamePoint');
const p1BTN = document.querySelector('#p1');
const p2BTN = document.querySelector('#p2');
const resetPoint = document.querySelector('#reset');
let gamePoint = 5;
let isGameOver = false;
let p1Points = 0;
let p2Points = 0;

const judge = function (point, winner) {
    if (point === gamePoint) {
        p1Display.classList.add('loser');
        p2Display.classList.add('loser');
        winner.classList.replace('loser', 'winner')
        isGameOver = true;
    }
}

const resetGame = function () {
    p1Points = 0;
    p2Points = 0;
    p1Display.innerHTML = 0;
    p2Display.innerHTML = 0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
    isGameOver = false;
}

const play1Get = function () {
    if (!isGameOver) {
        p1Points += 1;
        p1Display.innerHTML = p1Points;
        judge(p1Points, p1Display);
    }
}

const play2Get = function () {
    if (!isGameOver) {
        p2Points += 1;
        p2Display.innerHTML = p2Points;
        judge(p2Points, p2Display);
    }
}

selectList.addEventListener('change', () => {
    gamePoint = parseInt(selectList.value);
})

p1BTN.addEventListener('click', play1Get);
p2BTN.addEventListener('click', play2Get);
resetPoint.addEventListener('click', resetGame);

addEventListener('keydown', function (evt) {
    if (evt.key === 'ArrowLeft') { play1Get() };
    if (evt.key === 'ArrowRight') { play2Get() };
    if (evt.key === 'Shift') { resetGame() };
})
