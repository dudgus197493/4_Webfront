// 아이디 유효성 검사
const inputId = document.getElementById("inputId");
inputId.addEventListener("change", function(){

    // 정규식
    const regEx = /^[a-z][a-zA-z0-9\-_]{5,13}$/;
    
    if(regEx.test(this.value)) {     // 유효한 아이디 일 때
        // 입력창 배경색 springgreen으로 변경
        this.style.backgroundColor = "springgreen";

        // 글씨 색 black
        this.style.color = "black";
    } else {                         // 유효하지 않을 때
        // 입력창 배경색 red
        this.style.backgroundColor = "red";

        // 글씨 색 white
        this.style.color = "white";
    }
});


// 비밀번호 유효성 검사
const inputPw = document.getElementById("inputPw");
const inputPwConfirm = document.getElementById("inputPwConfirm");
const pwMessage = document.getElementById("pwMessage");
inputPw.addEventListener("keyup", function(){
    if(inputPw.value.trim().length != 0) {
        if(inputPw.value.trim() == inputPwConfirm.value.trim()) {       // 비밀번호가 일치할 경우
            // 비밀번호 입력창 오른쪽에 비밀번호 일치 글자를 초록색으로 출력
            pwMessage.innerText = "비밀번호 일치";
            pwMessage.classList.add("confirm");
            pwMessage.classList.remove("error");
        } else {
            // 비밀번호 입력창 오른쪽에 비밀번호 불일치 글자를 빨간색으로 출력
            pwMessage.innerText = "비밀번호 불일치";
            pwMessage.classList.add("error");
            pwMessage.classList.remove("confirm");
        }
    }
});

inputPwConfirm.addEventListener("keyup", function(){
    // 비밀번호를 미입력한 상태에서 비밀번호 확인을 작성할 경우
    if(inputPwConfirm.value.trim().length != 0) {
        if(inputPw.value.trim().length == 0) {  // 비밀번호가 미입력된 경우
            // 비밀번호 확인에 작성된 내용 모두 삭제하고
            inputPwConfirm.value = "";
    
            // "비밀번호를 입력해주세요" 경고창 출력 후
            alert("비밀번호를 입력해주세요");
    
            // focus를 비밀번호 입력창으로 이동
            inputPw.focus();
            return;
        }
    
        if(inputPw.value.trim() == inputPwConfirm.value.trim()) {       // 비밀번호가 일치할 경우
            // 비밀번호 입력창 오른쪽에 비밀번호 일치 글자를 초록색으로 출력
            pwMessage.innerText = "비밀번호 일치";
            pwMessage.classList.add("confirm");
            pwMessage.classList.remove("error");
        } else {
            // 비밀번호 입력창 오른쪽에 비밀번호 불일치 글자를 빨간색으로 출력
            pwMessage.innerText = "비밀번호 불일치";
            pwMessage.classList.add("error");
            pwMessage.classList.remove("confirm");
        }
    }
});


// 이름 유효성 검사
const inputName = document.getElementById("inputName");
const nameMessage = document.getElementById("nameMessage");
// 값이 변화했을 때
inputName.addEventListener("change", function(){
    const regEx = /^[가-힣]{2,5}$/;

    if(regEx.test(inputName.value.trim())) {         // 형식이 일치할 경우
        // "이름" 입력창 오른쪽에 "정상입력" 글자를 초록색으로 출력.
        nameMessage.innerText = "정상입력";
        nameMessage.classList.add("confirm");
        nameMessage.classList.remove("error");

    } else {                                        // 형식이 일치하지 않을 경우
        nameMessage.innerText = "한글만 입력하세요";
        nameMessage.classList.add("error");
        nameMessage.classList.remove("confirm");
    }
});


// 회원가입 버튼 클릭 시 : validate()
function validate() {

    // 성별이 선택되지 않은 경우
    if(document.querySelector("input[name='gender']:checked") == null) {
        // "성별을 선택해주세요" 경고창 출력 후
        alert("성별을 선택해주세요.");
        // submit 막기
        return false;
    }

    // 전화 번호 형식이 올바르지 않을 경우
    const regEx = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;
    const memberTel = document.getElementById("inputTel").value.trim();
    
    if(!regEx.test(memberTel)) {    // 올바르지 않을 경우
        // "전화번호의 형식이 올바르지 않습니다." 경고창 출력 후
        alert("전화번호의 형식이 올바르지 않습니다.");
        // submit 막기
        return false;
    }

    return true;
}

