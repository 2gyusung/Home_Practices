const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo) { //두번째
   const list = document.createElement("li")
   const span = document.createElement("span")
   list.appendChild(span);
   span.innerText = newToDo;
   toDoList.appendChild(li); //?
}

function handleToDoSubmit(event) { //첫번째
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo)
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//#7 [2021 UPDATE] TO DO LIST 강의 다시 복습