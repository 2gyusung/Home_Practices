# addEventListener

- onclick, onkeydown 과 같은 이벤트 속성을 통해 이벤트 핸들러를 등록하는 것보다
현대적인 방법은, addEventListener메소드 활용

- 이전에 추가한 이벤트 핸들러를 제거할 수 있는 대응 메소드가 존재한다.
- 같은 리스너(타켓)에 대해 다수의 핸들러를 등록할 수 있다.
- 추가적인 옵션 사항들이 제공 

- 클릭 이벤트
```javascript 

// 이전 영상에서 학습한 방식
target.onclick = fuction() {

}

// addEventListener의 방식(현대적인 방식)
target.addEventListener("click", fuction() {

})
```


```javascript

/*  이벤트 객체 : 추가적인 기능과 정보를 제공하기 위해 이벤트 핸들러에 자동으로 전달되는 데이티이다. 이를 활용하기 위해서는 이벤트 핸들러 함수에 매개변수를 추가하여 이벤트 발생 시 마다
전달 받을 수 있도록 해야 한다.
*/
//click 이벤트가 발생하면 함수를 호출하겠다 !
target.addEventListener("click", fuction() {

})

// click 이벤트가 발생하면 함수를 호출!
// + 이때 자동으로 전달되는 이벤트 객체를 매개변수 event에 대입

target.addEventListener("click", fuction(event) {

})
```

```javascript 


const btn1 = document.getElementById("one") //
const btn2 = document.getElementById("two") // 
const btn3 = document.getElementById("three") //

const handleClick = function() {
  console.log('저를 클릭하셨나요?')
}


                      // 인자()    콜백함수 :함수를 인자값을 전달 하는 것
btn2.addEventListener('click' , handleClick )


// 익명함수
btn2.addEventListener('click' , function(){
  console.log("또 다른 핸들러가 추가 등록 되었다")
} )


// 등록된 핸들러이벤트 제거
btn2.removeEventListener('click' ,handleClick)


```
```javascript

const btn1 = document.getElementById("one") //
const btn2 = document.getElementById("two") // 
const btn3 = document.getElementById("three") //

const handleClick = function(event) {
  console.log(event.target)
}


                      // 인자()    콜백함수 :함수를 인자값을 전달 하는 것
btn2.addEventListener('click' , handleClick )
btn1.addEventListener('click' , handleClick )
btn3.addEventListener('click' , handleClick )


```
## 이벤트 종류
```
click – 마우스버튼을 클릭하고 버튼에서 손가락을 떼면 발생한다.

mouseover – 마우스를 HTML요소 위에 올리면 발생한다.

mouseout – 마우스가 HTML요소 밖으로 벗어날 때 발생한다.

mousedown – 클릭을 하기 위해 마우스버튼을 누르고 아직 떼기 전인 그 순간, HTML요소를 드래그할 때 사용할 수 있다.

mouseup – 마우스버튼을 떼는 그 순간, 드래그한 HTML요소를 어딘가에 놓을 때 사용할 수 있다.

mousemove – 마우스가 움직일때마다 발생한다. 마우스커서의 현재 위치를 계속 기록하는 것에 사용할 수 있다.

focus – HTML요소에 포커스가 갔을때 발생한다.

blur – HTML요소가 포커스에서 벗어났을때 발생한다.

keypress – 키를 누르는 순간에 발생하고 키를 누르고 있는 동안 계속해서 발생한다.

keydown – 키를 누를 때 발생한다.

keyup – 키를 눌렀다가 떼는 순간에 발생한다.

load – 웹페이지에서 사용할 모든 파일의 다운로드가 완료되었을때 발생한다.

resize – 브라우저 창의 크기를 조절할때 발생한다.

scroll – 스크롤바를 드래그하거나 키보드(up, down)를 사용하거나 마우스 휠을 사용해서 웹페이지를 스크롤할 때 발생한다. 페이지에 스크롤바가 없다면 이벤트는 발생하지 않다.

unload – 링크를 클릭해서 다른 페이지로 이동하거나 브라우저 탭을 닫을 때 혹은 브라우저 창을 닫을 때 이벤트가 발생한다.

change – 폼 필드의 상태가 변경되었을 때 발생한다. 라디오 버튼을 클릭하거나 셀렉트 박스에서 값을 선택하는 경우를 예로 들수 있다.