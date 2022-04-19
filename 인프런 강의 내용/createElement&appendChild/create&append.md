## appendChild
```
-  기본 사용법 

target.appendChild(자식으로_추가할_요소)

- 예제

const p = document.createElement("p")
document.body.appendChild(p)
```

- appendChild / append 주요한 차이
```

* appendChild의 경우 추가한 자식 노드를 반환 하지만, append는 반환 데이터가 없다.

* append를 이용하면 요소에 노드 객체 또는 문자열을 자식 요소를  추가 할 수 있지만,
 appendChild는 노드 객체만을 추가할 수 있다.
 

```

```javascript
const button = document.getElementById("push") //선택(HTML 불러오기)
const div = document.getElementById("container") //선택(HTML 불러오기)

button.addEventListener('click', function(){
  console.log("생성 생성") //출력
  const newDiv = document.createElement("div") //만들어짐(div 추가)

  newDiv.style.backgroundColor= "blue"
  newDiv.style.border = 'solid' 
  newDiv.style.width = " 200px"
  newDiv.style.height = "200px"

/*
  append 와  appendchild 차이점
  append : 문자열 가능
  appendchild : 문자열 불가능 , DOM 가능
*/

  div.appendChild(newDiv)  // 추가
})


```
```
- document의 createElement 메소드는 지정된 이름의 HTML 요소를 만들어준다.

- appendChild 메소드는 노드에 자식 요소를 추가할 떄 사용하는 메소드이다.

- append 메소드 또한 자식 요소를 추가할 떄
 사용 할 수 있는 메소드인데, appendChild와 기능적으로 다른 면이 있다.
```