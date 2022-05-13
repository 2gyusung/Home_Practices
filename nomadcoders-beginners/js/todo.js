

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


const TODOS_KEY = "todos";


let toDos = [];


function saveToDos() {
    //JSON.stringify(변수명) -> 자바스크립트의 값이나 객체(array등)를 스트링으로 변환
     //JSON.parse("스트링") -> 단순한 스트링을 자바스크립트가 이해할 수 있는 array로 변환 
                        // key : value
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); // 작동의미
    //  localStorage array로 저장못함
}

function deleteToDo(event) {//세번째 todo [삭제 버튼 이벤트] 
    // console.log(event);
    const li = event.target.parentElement; //?
    li.remove();
}


function paintToDo(newToDo) {//두번째
    // console.log(`i will paint ${newToDo}`); (출력)
    const li  = document.createElement("li"); //부모
    const spans = document.createElement("span"); //자식
    spans.innerHTML = newToDo; // newToDo 입력된 값 추가
    const btn  = document.createElement("button"); //btn html 추가
    btn.innerHTML = "❌";
    btn.addEventListener("click" ,deleteToDo);
    li.appendChild(spans);
    li.appendChild(btn);
    // console.log(li);
    toDoList.appendChild(li); // todolist 입력된 값 추가
}

function handleToDoSubmit(event) { //첫번째
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";   //?
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
    
}


toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// stringify : 값을 string으로 저장 하고 싶을 때 사용
// parse() : array로 변경
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //배열
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);

}

// ⬆ 화살표 함수랑 동일함
// fuction sayHello(item){
//     console.log("this is the turn of ", item);
// }


//#7 [2021 UPDATE] TO DO LIST 강의 전체적 으로 다시 복습
// #7.4 Loading To Dos part One  1 :45
// https://velog.io/@csea9000/%EB%85%B8%EB%A7%88%EB%93%9C%EC%BD%94%EB%8D%94-Vanilla-JS-TODOLIST :: 참고하기

// https://oper0116.tistory.com/13 :JSON.parse , stringify 블로그
