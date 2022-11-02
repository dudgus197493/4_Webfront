const input1 = document.getElementById("input1"),
    input2 = document.getElementById("input2"),
    resultBox = document.getElementById("resultBox");

function calc(btn) {
    // btn == 클릭 이벤트가 발생한 버튼 요소
    
    op = btn.innerText;
    console.log(op);

    let val1 = input1.value;
    let val2 = input2.value;
    if(val1 == "" || val2 == "") {
        resultBox.innerText = "값을 입력하세요";
        return;
    }
    val1 = Number(input1.value);
    val2 = Number(input2.value);

    if(op == "/" && val2 == 0) {
        resultBox.innerText = "0으로 나눌 수 없습니다.";
        return;
    }

    const calculation = new Function('a', 'b', 'return a' + op + 'b');
    let result = calculation(val1, val2);

    input1.value = "";
    input2.value = "";

    resultBox.innerText = result;
}

