# CSS(Cascading Style Sheets)
> ### 마크업 언어(HTML)가 실제로 화면에 표시되는 방법(모양, 색상, 크기 등)을 기술하는 언어.
> *W3C(웹 표준 지정 기관)에서 css를 표준으로 지정*


# CSS 선택자(Selector)
> ### 현재 HTML 문서 내에서 특정한 요소를 선택하는 문자 or 문자열

## 태그 선택자
> ### 현재 HTML 문서 내에 같은 태그를 선택
```css
태그명 {CSS 코드;}
body {
    background-color : blue;
} /* body 태그의 배경색을 blue */
```
<br>

## id 선택자
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

## class 선택자
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

## 모든 요소 선택자
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