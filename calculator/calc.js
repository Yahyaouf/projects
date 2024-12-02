let numbers = [];
let input = document.getElementById("input");
let x = 0;
let d;
function binaire(d) {
    if (d === 0) return "0";
    let b = "";
    while (d > 0) {
        b = (d % 2) + b;
        d = Math.floor(d / 2);
    }
    return b;
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
        if (input.value === "0" || input.value === "ERROR") {
            input.value = String(i);
        } else {
            input.value += String(i);
        }
        x++;
    };
}


for (let i = 0; i < operator_ob.length; i++) {
    if (i < 4) { 
        operator_ob[i].onclick = () => {
            if (x !== 0) {
                input.value += operators[i];
                x = 0;
            }
        };
    }
}
let num2=input.value;
operator_ob[4].onclick = () => { 
    num2=input.value;
    if(input.value.includes("^"))
        pow(num,num2);
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = "ERROR";
    }

};

operator_ob[5].onclick = () => { 
    input.value = "0";
    x = 0;
};

operator_ob[6].onclick = () => { 
    if(input.value.length===1){
        input.value="0";
    }
    else 
     input.value=input.value.slice(0,-1);
};

operator_ob[7].onclick = () => { 
    input.value = binaire(parseInt(input.value));
};
function pow(num,num2){
    let base = parseFloat(num);
    let exponent = parseFloat(num2.slice(num.length + 1));
    input.value = Math.pow(base, exponent).toString();
}
let num;
operator_ob[8].onclick = () => {
    num=input.value;
    input.value+=operators[8];
};
operator_ob[9].onclick = () => { 
    input.value = Math.sqrt(parseFloat(input.value)).toString();
};
