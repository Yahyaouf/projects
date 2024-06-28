let num = "123456789";
let number = [];
let player1, player2;
let t;
let p;
let x=0;
let winner = 0;
num = Array.from(num);
let fin = document.getElementById("fin");
for (let i = 0; i < 9; i++) {
    number.push(document.getElementById(num[i]));
}
t = 0;
let play1 = document.getElementById("play1")
play1.onclick = () => {
    if (t === 0) {
        player1 = 'X';
        t = 1;
        player2 = 'O';
    }
}
play2.onclick = () => {
    if (t === 0) {
        player1 = 'X';
        t = 2;
        player2 = 'O';

    }
}
function win() {
    if (
        (number[0].textContent === number[1].textContent && number[1].textContent === number[2].textContent && number[0].textContent !== '') ||
        (number[3].textContent === number[4].textContent && number[4].textContent === number[5].textContent && number[3].textContent !== '') ||
        (number[6].textContent === number[7].textContent && number[7].textContent === number[8].textContent && number[6].textContent !== '') ||
        (number[0].textContent === number[3].textContent && number[3].textContent === number[6].textContent && number[0].textContent !== '') ||
        (number[1].textContent === number[4].textContent && number[4].textContent === number[7].textContent && number[1].textContent !== '') ||
        (number[2].textContent === number[5].textContent && number[5].textContent === number[8].textContent && number[2].textContent !== '') ||
        (number[0].textContent === number[4].textContent && number[4].textContent === number[8].textContent && number[0].textContent !== '') ||
        (number[2].textContent === number[4].textContent && number[4].textContent === number[6].textContent && number[2].textContent !== '')
    ) {
        fin.textContent = "player " + p + " win :)";
        winner = 2;
    }
}
    for (let i = 0; i < 9; i++) {
        number[i].onclick = () => {
            if (t === 1 && !number[i].textContent && winner===0) {
                number[i].textContent = player1;
                t = 2;
                p = 1;
                win();
            }
            else if (t === 2 && !number[i].textContent && winner ===0) {
                number[i].textContent = player2;
                t = 1;
                p = 2;
                win();
            }
            x++;
            if (x === 9 && winner === 0) {
                fin.textContent = "It's a draw ";
            }
        }
    }