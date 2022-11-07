// 형변환 확인하기
// const btn1 = document.querySelector(".btn1");
const btn1 = document.getElementsByClassName("btn1")[0];

btn1.addEventListener("click", function(){
    console.log("parseInt('123') : " + parseInt('123'));
    console.log("parseInt('3.14') : " + parseInt('3.14'));
    console.log("---------------------------------------");
    
    console.log("parseFloat('123') : " + parseFloat('123'));
    console.log("parseFloat('3.14') : " + parseFloat('3.14'));
    console.log("---------------------------------------");
    
    console.log("Number('123') : " + Number('123'));
    console.log("Number('3.14') : " + Number('3.14'));
    console.log("---------------------------------------");
});

document.getElementById("btn2").addEventListener("click", function(){
    let val = document.getElementById("input2").value;
    console.log(val);
    if(isNaN(val)) { // 숫자가 아니면
        alert("숫자가 아닙니다.");
    } else {
        alert("숫자 입니다.");
    }
});


// Math 확인
const input3 = document.getElementById("input3");
const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", function(){
    console.log("Math.ceil(값) : " + Math.ceil(input3.value));
    console.log("Math.floor(값) : " + Math.floor(input3.value));
    console.log("Math.trunc(값) : " + Math.trunc(input3.value));
    console.log("Math.round(값) : " + Math.round(input3.value));
});


// Math.random()
document.getElementById("btn4").addEventListener("click", function(){

    // rgb 색상 랜덤 대입 (0 ~ 255)
    const r = Math.floor(Math.random() * 256); // 0.0 <= ran < 256.0
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    console.log(r);
    console.log(g);
    console.log(b);
    
    document.getElementsByTagName("body")[0].style.backgroundColor 
        = `rgb(${r}, ${g}, ${b})`;
});
