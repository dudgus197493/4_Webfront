const input1 = document.getElementById("input1"),
    input2 = document.getElementById("input2"),
    resultBox = document.getElementById("resultBox");

function calc(btn) {
    
    console.log(btn.innerText);
    let val1 = Number(input1.value);
    let val2 = Number(input2.value);
    let result = 0;

    switch(btn.innerText) {
        case "+" : result = plus(val1, val2); break;
        case "-" : result = minus(val1, val2); break;
        case "*" : result = mult(val1, val2); break;
        case "/" : 
            if(val2 == 0) {
                alert("0으로 나눌 수 없습니다");
            } else {
                result = div(val1, val2);
            }
            break;
        case "%" : result = remain(val1, val2); break;
    }
    input1.value = "";
    input2.value = "";
    resultBox.innerText = result;
}

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function remain(a, b) {
    return a % b;
}

