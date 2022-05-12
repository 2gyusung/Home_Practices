const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {//세번째 todo [삭제 버튼 이벤트] 
    // console.log(event);
    const li = event.target.parentElement; //?
    li.remove();
}

function paintToDo(newToDo) {//두번째
    // console.log(`i will paint ${newToDo}`); (출력)
    const li  = document.createElement("li") //부모
    const spans = document.createElement("span") //자식
    spans.innerHTML = newToDo; // newToDo 입력된 값 추가
    const btn  = document.createElement("button") //btn html 추가
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
    paintToDo(newToDo)
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//#7 [2021 UPDATE] TO DO LIST 강의 전체적 으로 다시 복습