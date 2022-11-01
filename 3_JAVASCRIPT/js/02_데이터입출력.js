
// innerHTML로 읽어오기 (요소 내부 내용(태그, 속성, 내용)을 얻어와 문자열로 반환)
function getInnerHTML1() {

    // HTML 문서 내에서 id 속성값이 "test1"인 요소를 얻어와
    // 상수형 변수 t1에 저장

    const t1 = document.getElementById("test1");

    console.log(t1.innerHTML);
}


// innerHTML로 변경하기(태그, 속성이 해석됨 (HTML Converter 이용) )
// 권장 x
function setInnerHTML1() {
    const t1 = document.getElementById("test1");

    t1.innerHTML = "<b class='red'>변경된 <br><br> 내용입니다.</b>";
}

// innerHTML 응용
function add() {

    // 1) id 속성값이 "area1"인 요소를 얻어와 변수에 저장
    const area1 = document.getElementById("area1");

    // 2) area1 요소의 이전 내용에 새로운 내용을 누적
    area1.innerHTML += "<div class='area1-box'></div>";
}


const t2 = document.getElementById("test2");
// innerText로 읽어오기
function getInnerText1(){
    console.log(t2.innerHTML);
    console.log(t2.innerText);          // 내용만 출력(html 태그, 들여쓰기 전부 사라짐)
}

// innerText로 변경하기
function setInnerText1(){
    t2.innerText = "<p class='red'>변경된 내용입니다.</p>"
}


// confirm 확인하기
function fnConfirm() {
    // console.log(window.confirm("테스트"));  // true / false 반환 확인

    if(confirm("배경색을 분홍색으로 바꾸시겠습니까?")) { // 확인
        document.getElementById("confirmTest").style.backgroundColor = "pink";        
    } else { // 취소
        document.getElementById("confirmTest").style.backgroundColor = "gray";        
    }
}


// window.prompt("내용")
function fnPrompt() {
    const input = prompt("변경할 버튼명을 입력하세요");
                // 입력한 값 or null

    if(input != null) {
        document.getElementById("promptTest").innerText = input;
    } else {
        alert("취소되었습니다.");
    }
}
