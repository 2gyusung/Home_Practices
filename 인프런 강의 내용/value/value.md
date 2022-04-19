# 입력 요소 값 읽기

```
<input>, <select> 처럼 사용자로부터 입력을 받는데 사용 되는 요소들이 있다. 여기에서 사용자가 입력한 값을 읽어들일 때는  value 속성에 접근하자.

차이를 기억하자

* 요소의 텍스트에 접근하고 싶다. : textContent / innerText

* 사용자가 요소에 입력한 값에 접근 : value

```
```javascript 

- 입력 요소의 value에 접근하여 할 수 있는 일은 크게 두 가지, 읽기와 쓰기이다.

// 대상 요소의 사용자 입력값을 읽어 콘솔에 출력 !
console.log(targer.value)

// 대상 요소의 사용자 입력값을 '변경값'으로 바꾸자 !
target.value = "변경값"

```
 ## 예제 1
```javascript 
//이벤트 핸들러 이용
const textInput = document.getElementById("text")
const button = document.getElementById("button")

button.addEventListener('click', function(){
  console.log(textInput.value) //입력 값 출력
})
```
## 예제 2
```javascript
//이벤트 핸들러 이용
const textInput = document.getElementById("text")
const button = document.getElementById("button")

button.addEventListener('click', function(){
  textInput.value = "클릭하면 이렇게 바뀝니다"
  //클릭 시 텍스트 창이 입력된다
})
```
# 예제 3-1

```html
<body>
  <form action="">
  <input type="text" placeholder="이름" name = "name" id="text">
  <input type="text" placeholder="동네"name = "town" id="text">
  <input type="submit" value = "PUSH">
</form>
  <script src="value.js"></script>
</body>
```



# 예제 3-1

```javascript

const form = document.querySelector("form")


form.addEventListener("submit" , function(e) {
  e.preventDefault() //기존에 있던 기능을 차단(출력 값 확인 하기 위해 넣음)
  console.log(form.name.value)
  console.log(form.town.value)
})
```

```
* 사용자가 입력한 값을 읽어들일 때는 요소의  value 속성에 접근하면 된다.

* value에 접근함으로써 입력 값 읽기 또는 쓰기를 수행할 수 있다.

* form에 포함된 입력 요소의 name을 통해 각 입력 요소에 접근

* form에서 이벤트가 제출되는 submit 이벤트가 발생하면 action 속성의 url로 리다이텍트되지만,
  이벤트 객체를 통해 기본 기능을 차단할 수 있다.

```