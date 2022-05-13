const toDoForm = document.getElementById("todo-form")
const toDoInput = document.getElementById("#todo-form input")
const toDoList = document.getElementById("todo-list")


function paintToDo(newToDo) {
 const li = document.createElement('li')
 const span = document.createElement('span')
 li.appendChild(span);
 span.innerText = newToDo;
 toDoList.appendChild(li);

}

function handleToDoSubmit (event) {
event.preventDefault();
const newToDo = toDoInput.value; //값 지워지기 전에 대입
toDoInput.value = "";
paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);