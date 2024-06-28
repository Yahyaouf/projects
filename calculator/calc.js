let numbers = [];
let input = document.getElementById("input");
let x = 0;
let d;
function binaire(d) {
    if (d === 0)
        return "0";
    let b = "";
    while (d > 0) {
        b = (d % 2) + b;
        d = Math.floor(d / 2);
    }
    return b;
}
function power(a,b){
    result = a**b;
}
function somme(a,b){
    result=a+b;
}
function produit (a,b){
    result=a*b;
}
function sous(a,b){
    result = a-b;
}
function div(a,b){
    result=a/b;
}

for (let i = 0; i < 10; i++) {
    numbers.push(document.getElementById(String(i)));
}
let operators = "+-*/=cdb^V";
operators = Array.from(operators);
let operator_ob = [];
for (let i = 0; i < operators.length; i++) {
    operator_ob.push(document.getElementById(operators[i]));
}
for (let i = 0; i < numbers.length; i++) {
    numbers[i].onclick = () => {
        if (input.value === "0" || input.value==="ERROR") {
            input.value = String(i);
            x++;
        }
        else
        {
            input.value = input.value + String(i);
            x++;
        }
    };
    if (i < operator_ob.length) {
        operator_ob[i].onclick = () => {
            if (x !== 0) {
                input.value += operators[i];
                x=0;
            }
        };
    }
    operator_ob[5].onclick = () => {
        input.value="0";
    }
    operator_ob[0].onclick()=()=>{
        input.value = somme(input.value,b);
    }
    operator_ob[1].onclick()=()=>{
        
    }
    operator_ob[2].onclick()=()=>{
        
    }
    operator_ob[3].onclick()=()=>{
        
    }

    operator_ob[4].onclick = function equal(i) {
        try { input.value = result; }
        catch (error) {
            input.value = " ERROR";
        }
    }
    operator_ob[6].onclick = () =>
    {
        input.value = input.value.slice(0,-1);
    }
    operator_ob[7].onclick=()=>{
        input.value=binaire(parseInt(input.value));
    }
    operator_ob[8].onclick()=()=>{
        
    }
    operator_ob[9].onclick=()=>{
        input.value=input.value**(1/2);
    }
}
