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

    // eval("코드 형식의 문자열")
    // -> 매개변수의 문자열을 JS 코드로 해석/수행하는 함수
    
    // resultBox.innerText = eval (val1 + op + val2);
    // -> 속도가 느림 + 보안 이슈(악성코드 문자열을 입력시 해당 문자열이 실행될 수 있음) 로 인해 사용 지양

    // 해결 방법 : new Function() 사용
    
    resultBox.innerText = new Function("return " + val1 + op + val2)();
}

