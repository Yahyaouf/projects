let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let op = document.querySelector(".operation");
let result;
let w=0;
let win = new Audio("correct.mp3");
let lose = new Audio("wrong.mp3");
let sol1 = document.querySelector(".sol1");
let sol2 = document.querySelector(".sol2");
let sol3 = document.querySelector(".sol3");
let numbers = [sol1, sol2, sol3];
let p = document.querySelector(".p");
add.onclick = () => {
    p.textContent="";
    num1.textContent = Math.floor((Math.random() * 9) + 1);
    num2.textContent = Math.floor((Math.random() * 9) + 1);
    op.textContent = "+";
    add.style.textDecoration = "underline 3px";
    subtract.style.textDecoration = "none";
    divide.style.textDecoration = "none";
    multiply.style.textDecoration = "none";
    result = Number(num1.textContent) + Number(num2.textContent);
    solution(result);
}
subtract.onclick = () => {
    p.textContent="";
    num1.textContent = Math.floor((Math.random() * 9) + 1);
    num2.textContent = Math.floor((Math.random() * 9) + 1);
    op.textContent = "-";
    subtract.style.textDecoration = "underline 3px";
    add.style.textDecoration = "none";
    divide.style.textDecoration = "none";
    multiply.style.textDecoration = "none";
    result = Number(num1.textContent) - Number(num2.textContent);
    solution(result);

}
multiply.onclick = () => {
    p.textContent="";
    num1.textContent = Math.floor((Math.random() * 9) + 1);
    num2.textContent = Math.floor((Math.random() * 9) + 1);
    op.textContent = "x";
    multiply.style.textDecoration = "underline 3px";
    add.style.textDecoration = "none";
    divide.style.textDecoration = "none";
    subtract.style.textDecoration = "none";
    result = Number(num1.textContent) * Number(num2.textContent);
    solution(result);
}
divide.onclick = () => {
    p.textContent="";
    num1.textContent = Math.floor((Math.random() * 9) + 1);
    num2.textContent = Math.floor((Math.random() * 9) + 1);
    op.textContent = "/";
    divide.style.textDecoration = "underline 3px";
    add.style.textDecoration = "none";
    subtract.style.textDecoration = "none";
    multiply.style.textDecoration = "none";
    result = Number(num1.textContent) / Number(num2.textContent);
    if(!isInteger(result))
        result = Number(result.toFixed(1));
    solution(result);
    console.log(typeof result)
}
function solution(result) {
    ran = Math.floor(Math.random() * 3);
    numbers[ran].textContent = result;
    for (let i = 0; i < 3; i++) {
        if (ran !== i)
            numbers[i].textContent = Math.floor((Math.random() * 18) + 1)
    }
}
function isInteger(value) {
    return Number.isInteger(value);
}
    numbers.forEach(sol => {
        sol.onclick = () => {
            if (Number(sol.textContent) === result) {
                win.play();
                if(op.textContent==="+")
                    add.onclick();
                if(op.textContent==="-")
                    subtract.onclick();
                if(op.textContent==="x")
                    multiply.onclick();
                if(op.textContent==="/")
                    divide.onclick();
            }
            else{
                lose.play();
            }
        }
    });