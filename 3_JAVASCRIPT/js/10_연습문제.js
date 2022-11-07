// 색 출력 영역

// 요소를 얻어와서 변수에 저장

// 클래스명, 태그명, name속성값, querySelectorAll() 같은 경우
// 요소를 얻어올 때 배열 형식으로 반환
const container = document.getElementsByClassName("container")[0];

const area = document.getElementsByClassName("area");
const box = document.getElementsByClassName("box");
const boxColor = document.getElementsByClassName("box-color");

// transition-duration 관련 요소
const input1 = document.getElementById("input1");
const btn1 = document.getElementById("btn1");
const print1 = document.getElementById("print1");

// 초기화 버튼
const clearBtn = document.getElementById("clearBtn");

// JS로 CSS 추가하기
// -> JS로 style을 추가하면 inline-style로 추가
// container 클래스 요소에 display : flex 추가
container.style.display = "flex";

// area 클래스 요소에
// 높이 170px, 너비 150px, 테두리 1px 검정색 실선
// display: flex, main-axis 방향 : 열(세로)

// forEach 적용 안됨 : 유사배열이기 때문
for(let item of area) {
    item.style.height = "170px";
    item.style.width = 150 + "px";
    item.style.border = "1px solid black";
    item.style.display = "flex";
    item.style.flexDirection = "column";
}

// box클래스 요소에 높이 150px, 아랫쪽 테두리 1px 실선 검정색
for(let item of box) {
    item.style.height = "150px";
    item.style.borderBottom = "1px solid black"
}

// box-color 클래스 요소의 테두리와 outline을 없애기
for(let item of boxColor) {
    item.style.border = "none";
    item.style.outline = "none";   
}

// box-color 클래스 요소의 입력된 값이 변했을 때
// 위에있는 box 클래스 요소의 배경색을 변경
// + 입력된 input요소 글씨색도 변경
for( let i = 0; i < boxColor.length; i++){

    // change : 포커스를 잃고나서 또는 엔터 입력 시
    //          작성된 값이 이전 값과 다를 경우

    // blur : 포커스를 잃었을 때
    boxColor[i].addEventListener("change", function(){

        // console.log(this.value);

        // box-color input태그와 같은 인덱스 번째 box 요소 배경색 변경
        box[i].style.backgroundColor = this.value;
        this.style.color = this.value;
    });
}


// transition-duration 변경 버튼 클릭 시
// #input1에 작성된 값 만큼의 transition-duration을
// 모든 box 요소에 추가
btn1.addEventListener("click", function(){

    // 모든 box에 transition-duration 주기
    for(let item of box){
        item.style.transitionDuration = input1.value + "s";
    }

    // print1에 input1.value 넣기
    print1.innerText = input1.value;
})

// #clearBtn 클릭 시
// .box의 모든 배경색 없애기
// .box의 트랜지션 없애기
// .box-color에 작성된 값도 없애기
// .box-color에 글씨색 없애기
// #input1에 작성된 값 없애기
// #print1에 작성된 값 0으로 초기화
clearBtn.addEventListener("click",function(){

    for(let i = 0; i < area.length; i++) {          // 모든 area 요소를 돌면서  
        box[i].style.backgroundColor = "";          // i번째 box 배경색 초기화
        box[i].style.transitionDuration = "";       // i번째 box 트랜지션 초기화
        boxColor[i].value = "";                     // i번째 boxColor input 값 초기화
        boxColor[i].style.color = "";               // i번째 boxColor input 글자색 초기화
    }
    input1.value = "";                              // 트랜지션 input 값 초기화
    print1.innerText = "0";                         // 화면에 나타나는 트랜지션 값 0초로 초기화
});