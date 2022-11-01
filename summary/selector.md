# 기본적인 CSS 선택자(Selector)
> ### 현재 HTML 문서 내에서 특정한 요소를 선택하는 문자 or 문자열

- [반응 선택자](#반응-선택자)

- [상태 선택자](#상태-선택자)

- [동위 선택자](#동위-선택자)

- [문자열 속성 선택자](#문자열-속성-선택자)

- [일반 구조 선택자 / 형태 구조 선택자](#일반-구조-선택자--형태-구조-선택자)
  - [일반 구조 선택자](#일반-구조-선택자)

  - [형태 구조 선택자](#형태-구조-선택자)
- [부정 선택자](#부정-선택자)

- [선택자 추가 작성법](#선택자-추가-작성법)

- [선택자 우선 순위](#선택자-우선-순위)

- [CSS 선택자 우선 순위](#css-선택자-우선-순위)
<br>









## 태그 선택자
> ### 현재 HTML 문서 내에 같은 태그를 선택
```css
태그명 {CSS 코드;}
body {
    background-color : blue;
} /* body 태그의 배경색을 blue */
```
<br>

## id 선택자(#)
> ### HTML 문서 내에서 id 속성 값이 일치하는 요소를 선택
> ### **id 속성 값은 페이지 내에서 유일해야 함**
```html
<div id="example">id 선택자</div>
```
```css
#id속성값 { CSS 코드; }
# == id를 뜻하는 기호

#example {
    width : 20px;
} /* id가 example인 요소의 넓이 20px */
```
<br>

## class 선택자(.)
> ### HTML 문서 내에서 같은 class 속성 값을 가진 요소를 모두 선택
> ### *id 중복 X, class 중복 O*
```html
<span class="example">class 선택자</span>
```
```css
.class속성값 { CSS 코드; }
. == class를 나타내는 기호

.example {
    background-color : yellow;
} /* class가 example인 요소의 배경색 yellow */
```
<br>

## 모든 요소 선택자(*)
> ### 모든 요소를 선택하는 선택자
> *단독 or 다른 선택자와 함께 사용*
```html
<div>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
<span></span>
```
```css
* {
    border : 1px solid black;
} /* 모든 요소의 테두리를 1px 실선 검정
```
<br>

## 기본 속성 선택자([attribute="argument"])
> ### 특정 속성이 작성된 요소를 선택
> *id / class 선택 가능, 하지만 `#`, `.` 기호 사용 권장*

1. 선택자 생략 가능
    - 특정 속성명="속성값"을 가진 모든 요소
2. "속성값" 에서 쌍다옴표("") 홑따옴표('')로 변경 및 생략 가능
```html
<div name="name-1">div</div>
<span name="name-1">span</span>
```
```css
선택자[속성명="속성값"] { CSS 코드; }
div[name="name-1"] {
    background-color : green;
} /* name속성의 속성값이 name-1인 div 태그의 배경색 green */

[name="name-1"] {
    font-weight :bold;
} /* name속성의 속성값이 name-1인 모든 태그의 글씨를 두껍게 */
```
<br>

## 자식 선택자(>)
> ### 지정된 요소 **바로 하위** 에 존재하는 요소를 선택
```html
<ul id="parent-ul"> 부모
    <li class="test-2">자식1</li>
    <li><span>자식2</span></li>
    <li>자식3</li>
    <li><span class="test-2">자식4</span></li>
</ul>
```
```css
선택자1 > 선택자2 { CSS 코드; } /* 선택자1 == 부모 요소, 선택자2 == 자식 요소 */
- 선택자1 하위에 존재하는 선택자2 요소를 모두 선택

#parent-ul > li { 
    background-color: orange;
    } /* id 가 parent-ul인 요소의 자식 중 li 태그 모두 선택  */

#parent-ul > .test-2 { 
    background-color: pink; 
    } /* id 가 parent-ul인 요소의 자식 중 class가 test-2인 요소 모두 선택 */

#parent-ul > li > .test-2 { 
    color: red; 
    } /* /* id 가 parent-ul인 요소의 자식 중 모든 li태그의 자식 중 class가 test-2인 요소 선택 */
```
<br>

## 후손(자손) 선택자(띄어쓰기)
> ### 지저왼 요소의 하위에 존재하는 모든 요소를 선택
```html
<div id="test-div">
    <p>test-div의 자식 요소</p>
    <p class="test-3">test-div의 후손 요소</p>
    <div>
        <p>
            이것도 후손?<br>
            <span class="test-3">안녕하세요</span>
        </p>
    </div>
</div>
```
```css
#test-div p {
    color : red;
} /* id가 test-div인 요소의 하위에 존재하는 모든 p태그 선택 */

#test-div * {
    font-family : "궁서";
} /* id가 test-div인 요소의 하위에 존재하는 모든 선택 */
```
- ### 후손 선택자와 자식 선택자의 차이
|구분|깊이|
|:--:|:--:|
|자식|1단계 아래(하위)|
|후손|n단계 아래 모두|

<br>

# 반응 선택자
> ### 사용자의 움직임에 반응하여 선택되는 선택자

## 선택자:active
> 선택된 요소를 **클릭** 하고 있을 경우

```html
<div id="active-test">:active 테스트</div>
```
```css
#active-test:active {
    background-color: red;
    color: greenyellow;
    font-weight: bold;
} /* id가 active-test인 요소가 클릭되고 있을때만 css코드 적용 */
```

## 선택자:hover
> 선택된 요소에 마우스를 **올리고 내릴 경우**  
> 올릴 경우 선택자:hover에 작성된 **CSS 코드 적용**  
> 내릴 경우 **이전 상태로 돌아감**

```html
<div id="hover-test">:hover 테스트</div>
```
```css
#hover-test:hover {
    background-color: hotpink;
    width: 220px;
    height: 220px;
} /* id가 hover-test인 요소에 마우스가 올라갔을 때만 css코드 적용*/
```
<br>

# 상태 선택자
> ### 상태에 따라 선택
> ### 입력 양식 관련 태그(input, input 관련 태그)

## :focus
> 요소에 **초점**이 맞춰진 상태
```html
<input type="text" id="focus-test">
```
```css
#focus-test:focus {
    outline-color: aquamarine;
} /* id가 focus-test인 input 태그가 초점이 맞춰졌을 때 input 테두리의 색 aquamarine*/
```

## :checked
> 요소가 **체크** 되었을 때 선택(radio, checkbox)
```html
<label for="apple">사과</label>
<input type="checkbox" name="fruits" id="apple"> <br>

<label for="banana">바나나</label>
<input type="checkbox" name="fruits" id="banana"> <br>

<label for="melon">멜론</label>
<input type="checkbox" name="fruits" id="melon"> <br>
```
```css
input[name="fruits"]:checked {
    width: 30px;
    height: 30px;

    background-color: red;
    color: red;
    /* radio, checkbox의 스타일은 크기를 제외한 나머지 적용x(브라우저가 제공하는 이미지) */
} /* name속성의 속성값이 fruits인 input 태그가 체크되었을 때 css 코드 적용 */
```

## :enabled, :disabled
> 요소가 사용 가능한 상태일 때 선택
> 요소가 사용 불가능한 상태일 때 선택
```html
사용 가능 : <input type="text" enabled><br>
사용 불가능 : <input type="text" value="변경 X" disabled>
```
```css
input:enabled{ 
    background-color: yellowgreen;
} /* 사용 가능한 input 선택 */
input:disabled{ 
    background-color: lightsteelblue;
} /* 사용 불가능한 input 선택 */
```
<br>

# 동위 선택자
> ### 동위 관계(동등한 위치 == 형제 관계)에서 다음에 위치한 요소 선택
```
A
B(1)
B(2)
```
## + 선택자
> A + B { CSS 코드; }  
> A를 기준으로 바로 뒤에 존재하는 B 요소 **하나** 선택

## ~ 선택자(Tilde)
> A ~ B { CSS 코드; }  
> A를 기준으로 다음에 오는 **모든 B요소**(1), (2) 선택

```html
<div id="div1">1번 입니다</div>
<div>2번 입니다</div>
<div id="div3">3번 입니다</div>
<div>4번 입니다</div>
```
```css
#div1 + div{
    background-color: violet;
} /* id가 div1인 요소 바로 담에 오는 div태그 선택 */
#div1 ~ div{
    background-color: palevioletred;
} /* id가 div1인 요소 다음에 오는 모든 div 선택 */
```
<br>

# 문자열 속성 선택자
> ### 속성 값의 문자열을 확인하여 스타일 적용하는 방식의 선택자
```html
<div name="aaa bbb str-1" class="str-class"> div1 </div>
<div name="str-2 aaa" class="str-class"> div2 </div>
<div name="str" class="class-str"> div3 </div>
<div name="aaa str-3" class="str-class2"> div4 </div>
```


## 선택자[속성명 `~=` "특정값"] { CSS 코드; }
> 띄어쓰기로 구분되어있는 여러 속성 값이 작성된 속성 중  속성 값이 특정 값을 **단어로 포함하는 요소** 선택
```css
/* ~= 여러 속성 값 중 하나라도 일치하는 선택 */
div[name~='aaa'] {
    background-color: lightgreen;
} /* name속성값 중 aaa를 가지고있는 div 선택 */
```

## 선택자[속성명 `|=` "특정값"] { CSS 코드; }
> 속성 값이 특정 값을 **단어로 포함**하는 요소 선택  
> *단, "-" 기호로 구분, **"=" 앞의 내용이 동일**해야 함*
```css
div[class |= "str"] {
    color: red;
    font-family: "궁서";
} /* class 값 "-"앞이 str인 div 선택 */
```

## 선택자[속성명 `^=` "특정값"] { CSS 코드; }
> 속성 값이 특정 값으로 **시작**하는 요소 선택
```css
div[class ^= "c"] {
    background-color: black;
    color: white;
} /* class의 속성값이 c로 시작하는 div 선택 */
```

## 선택자[속성명 `$=` "특정값"] { CSS 코드; }
> 속성 값이 특정 값으로 **끝나는** 요소 선택
```css
div[class $= "2"] {
    font-size: 24px;
} /* class의 속성값이 2로 끝나는 div 선택 */
```

## 선택자[속성명 `*=` "특정값"] { CSS 코드; }
> 속성 값이 특정 값을 **포함**하는 요소 선택
```css
div[class *= "str"] {
    border: 1px dashed blue;
} /* class의 속성값에 str이 포함되는 div 선택 */
```
<br>

# 일반 구조 선택자 / 형태 구조 선택자

## 일반 구조 선택자
> ### 특정 요소의 자식 요소들(형제 관계 요소)를 선택
> ### **위치를 기준으로 형제를 구분**
```html
<div id="test1">
    <p>테스트1</p>
    <p>테스트2</p>
    <p>테스트3</p>
    <p>테스트4</p>
    <p>테스트5</p>
    <pre>테스트6</pre>
</div>
```
### 1. :first-child
> 형제 관계의 요소 중 첫 번째 요소
### 2. :last-child
> 형제 관계의 요소 중 마지막 요소
### 3. nth-child(숫자 or 수열)
> 형제 관계의 요소 중 n번째 요소 or 모든 수열번째 요소
### 4. nth-last-child(숫자 or 수열)
> 형제 관계의 요소 중 뒤에서 부터 n번째 요소 or 모든 뒈서부터 수열번째 요소
```css
#test1 > p:frist-child {
    color:white;
} /* id가 test1인 요소의 자식중 첫번째 자식이 p태그면 선택 */

#test1 > p:last-child {
    background-color : yellow;
} /* id가 test1인 요소의 자식중 마지막 자식이 p태그면 선택 
     선택되지 않음 => #test1의 후손중 마지막 자식은 pre태그 */

#test1 > p:nth-child(2) {
    background-color: yellow;
} /* #test1의 자식 요소 중 2번재 자식이 p태그면 선택 */

#test1 > p:nth-child(2n) {
    font-size: 30px;
} /* #test1의 자식 요소 중 2n(짝수)번째 자식이 p태그면 선택 */

#test1 > *:nth-child(6) {
    background-color: pink;
} /* #test1의 자식 요소 중 6번째 자식 선택 */
```
<br>

## 형태 구조 선택자
> ### 특정 요소의 자식 요소들(형제 관계 요소)를 선택
> ### **선택된 요소를 기준으로 형제를 구분**
```html
<div id="test2">
    <pre>테스트0</pre>
    <p>테스트1</p>
    <p>테스트2</p>
    <p>테스트3</p>
    <p>테스트4</p>
    <p>테스트5</p>
    <pre>테스트6</pre>
</div>
```
- ### :first-of-type
    > 같이 선택된 형제 요소 중 첫 번째 요소
- ### :last-of-type
    > 같이 선택된 형제 요소 중 마지막 요소
- ### nth-of-type(숫자 or 수열)
    > 같이 선택된 형제 요소 중 숫자 번째 요소 또는 수열 번째 요소 모두 선택
- ### nth-last-of-type()
    > 같이 선택된 형제 요소 중 뒤에서 부터 숫자 번째 요소 또는 뒤에서부터 수열 번째 요소 모두 선택
```css
#test2 > p:first-of-type {
    background-color: orange;
} /* 같이 선택된 (p)형제 요소 중 첫 번째 요소 
     일반 구조 선택자와 달리 p태그들을 먼저 선택 후 선택된 요소 중에서 순서를 따짐 (pre태그 배제) */ 

#test2 > p:last-of-type {
    background-color: skyblue;
} /* 같이 선택된 (p)형제 요소 중 마지막 요소 */

#test2 > p:nth-of-type(2n) {
    border: 1px solid red;
} /* 같이 선택된 (p)형제 요소 중 2n(짝수)번째 요소 */

#test2 > p:nth-last-of-type(2n + 1) {
    border: 1px solid blue;
} /* 같이 선택된 (p)형제 요소 중 뒤에서부터 2n + 1(홀수)번째 요소 */

#test2 > *:nth-child(3n+1){
    background-color: pink;
} /* nth-of-type 앞에 *을 작성하는 경우 각각의 요소(p, pre) 종류 별로 수열 적용 */
```
<br>

# 부정 선택자
> ### 괄호 내 선택자를 제외한 나머지 요소 선택
```html
<ul id="test3">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
</ul>
```
```css
#test3 > li:not(:nth-child(3n)) {
    background-color: purple;
    color: white;
} /* 괄호안(:nth-child(3n) - 3의 배수번째 li)의 선택자를 제외한 나머지 요소 선택 => 3, 6, 9 제외한 모든 li태그 선택*/
```
<br>

## 기타 선택자들

- ### :only-child
    > 특정 요소의 자식이 **하나**밖에 없을 때 선택
    ```html
    <div id="test1">
        <p>자식1</p>
        <!-- <p>자식2</p> 주석 풀면 css가 적용되지 않음 --> 
    </div>
    ```
    ```css
    #test1 > p:only-child{
        background-color: steelblue;
    } /* #test1 자식이 하나 밖에 없고, 그 요소가 p태그인 경우 */
    ```
- ### :only-of-type
    > 특정 요소의 자식 중 지정 된 형태와 같은 자식 요소가 하나만 있을 경우 선택
    ```html
    <div id="test2">
        <p>자식1</p>
        <pre>자식2</pre>
        <!-- <p>자식3</p> 주석 풀면 자식1의 css가 적용되지 않음 -->
    </div>
    ```
    ```css
    #test2 > p:only-of-type {

        background-color: crimson;
    } /* #test2에 자식p태그가 하나일 경우 */
    #test2 > pre:only-of-type {
        background-color: springgreen;
    } /* #test2에 자식pre태그가 하나일 경우 */
    ```
- ### :empty
    > 자식 노드가 없는 요소를 선택
    > *노드(Node) : 태그, 글자, 띄어쓰기 모두를 노드라고 함*
    ```html
    <div id="test3">
        <p>
            <strong>테스트1</strong>
        </p>

        <p>테스트2</p>

        <p>       </p> <!-- 띄어쓰기 -->

        <p></p>
    </div>
    ```
    ```css
    #test3 > p:empty {
        height: 30px;
        background-color: orange;
        border: 1px solid black;
    } /* #test3의 자식들 중 자식 노드가 없는 p태그 선택 => 맨 마지막 p 선택 */
    ```
<br>

# 선택자 추가 작성법

## 여러 선택자 동시 작성
> 같은 스타일을 적용하고 싶은 요소가 있으나 선택자가 일치하지 않을 경우 사용
```html
<div id="test4">테스트1</div>
<p name="test4">테스트2</p>
<pre class="test4">테스트3</pre>
```
```css
선택자1, 선택자2, 선택자, ... { CSS 코드; }

#test4, [name="test4"], .test4 {
    background-color: yellowgreen;
    border: 2px solid black;
}
```

## 특정 요소 내부에 있는 특정 클래스만 선택
```html
<ul id="test5">
    <li class="test5">1</li>
    <li class="test5">2</li>
    <li class="test5">3</li>
    <li>4</li>
    <li>5</li>
</ul>
```
```css
#test5 .test5 { 
    background-color: aquamarine;
}     /* id가 test5인 요소의 후손 중 클래스가 test5인 요소만 선택 */  
```

## 클래스가 여러개인 요소 선택하는 방법
> 클래스가 여러개인 요소를 선택 할 때  클래스 선택자를 **띄어쓰기 없이** 연달아 작성(순서 상관x)
```html
<div class="test6">테스트</div>
<div class="test6 c6">테스트</div>
<div class="c6">테스트</div>
```
```css
.test6.c6 {
    background-color: yellowgreen; 
} /* .test6과 .c6 다 가지고 있는 요소 선택*/

.c6.test6 { /* 순서 관계 없음 */
    background-color: yellowgreen;
}
```
    
</br>

# CSS 선택자 우선 순위
> ### 기본 : `</style>`태그 or css파일에 작성된 순서(위 -> 아래)대로 해석 진행
> ### 같은 요소에 여러 css 속성이 설정되는 경우 우선 순위가 적용

## 규칙
1. ### 동일한 우선순위의 선택자 이용하여 속성 설정 시
    - 마지막으로 작성된 CSS 속성 적용

2. ### 여러 선택자 이용하여 같은 요소에 CSS 적용하더라도 지정된 스타일이 다른 경우 모두 반영

## 우선순위
|우선순위|구분|
|:--:|:--:|
|1|!important; 붙은 css 속성|
|2|inline-style 속성<br>(태그에 직접 작성하는 style속성)|
|3|id 선택자|
|4|class 선택자|
|5|태그 선택자|
