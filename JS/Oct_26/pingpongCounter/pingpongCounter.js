const selectList = document.querySelector('#gamePoint');
const resetPoint = document.querySelector('#reset');
let gamePoint = 5;
let isGameOver = false;
const p1 = {
    display: document.querySelector('#display1'),
    btn: document.querySelector('#p1'),
    point: 0
}
const p2 = {
    display: document.querySelector('#display2'),
    btn: document.querySelector('#p2'),
    point: 0
}

selectList.addEventListener('change', () => {
    gamePoint = parseInt(selectList.value);
})

const judge = function (player, opponent) {
    if (!isGameOver) {
        player.point += 1;
        player.display.innerHTML = player.point;
        if (player.point === gamePoint) {
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            isGameOver = true;
        }
    }
}

const resetGame = function () {
    for (let p of [p1, p2]) {
        p.point = 0;
        p.display.innerHTML = 0;
        p.display.classList.remove('winner', 'loser');
        isGameOver = false;
    }
}

p1.btn.addEventListener('click', () => judge(p1, p2));
p2.btn.addEventListener('click', () => judge(p2, p1));
resetPoint.addEventListener('click', resetGame);

addEventListener('keydown', function (evt) {
    if (evt.key === 'ArrowLeft') { judge(p1, p2) };
    if (evt.key === 'ArrowRight') { judge(p2, p1) };
    if (evt.key === 'Shift') { resetGame() };
})
