const toDoForm = document.getElementById("todo-form")
const toDoInput = document.getElementById("#todo-form input")
const toDoList = document.getElementById("todo-list")

function deleteToDo(event) { //삭제
//  console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
}


function paintToDo(newToDo) { //입력
 const li = document.createElement('li')
 const span = document.createElement('span')
 span.innerText = newToDo;
 const btn = document.createElement('button');
 btn.innerText = "🙅‍♂️ ";
 btn.addEventListener("click",deleteToDo)
 li.appendChild(span);
 li.appendChild(btn);
 toDoList.appendChild(li);

}

function handleToDoSubmit (event) {
event.preventDefault();
const newToDo = toDoInput.value; //값 지워지기 전에 대입
toDoInput.value = "";
paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);