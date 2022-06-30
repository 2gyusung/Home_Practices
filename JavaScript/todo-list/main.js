// 유저가 값을 입력한다
// + 버튼 클릭 시 할일이 추가된다
// del 누르면 할일이 삭제된다
// check 누르면 할일이 끝나면서 밑줄
// check 클릭 시 true =  false 
// true이면 끝난걸로 간주 밑줄 표시
// false 안 끝난걸로 간주하고 그대로
// 진행중 탭을 누르면 , 언더바가 이동한다
// 끝남 탭은 끝난 아이템만 진행중 탭은 진행중인 아이템만
// 전체 탭을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.getElementById('task-input')
let addButton = document.getElementById('add-button')
let tabs = document.querySelectorAll('.task-tabs div')
let taskList = [];
let mode = "all";
let filterList = [];


function randomIDGenerate() {
  // ID random값 나오게 해준다. https://gist.github.com/gordonbrander/2230317 참조

  return '_' + Math.random().toString(36).substr(2, 9);
}

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) { filter(event) })
}

function filter(event) {
  // console.log('클릭');
  mode = event.target.id;
  filterList = [];
  if (mode == "all") {
    render()
  } else if (mode == 'ongoing') {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        filterList.push(taskList[i])
      }
    }
   
    render();
  } else if (mode == done) {
    for (let i = 0; i < taskList; i++) {
      if (taskList[i].isComplete == true) {
        filterList.push(taskList[i])
      }
    }
    render();
  }

}


function toogleComplete(id) {
  // console.log('id :', id);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }

  render();


}


function render() {
  let list = [];
  if (mode == "all") {
    list == taskList;
  } else if (mode == "ongoing" || mode == "done") {
    list = filterList;
  }

  let resultHTML = '';
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHTML += `<div class="task"> 
    <div class ='task-done'>${list[i].taskContent}</div>
    <div>
    <button onclick="toogleComplete('${list[i].id}')">Check</button>
    <button onclick="deleteTask('${list[i].id}')">Delete</button>
  </div>
  </div>`
    } else {
      resultHTML += `<div class="task"> 
    <div>${list[i].taskContent}</div>
    <div>
    <button onclick="toogleComplete('${list[i].id}')">Check</button>
    <button onclick="deleteTask('${list[i].id}')">Delete</button>
  </div>
  </div>`;

    }


  }
  document.getElementById('task-board').innerHTML = resultHTML;
}


function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  }

  taskList.push(task);
  console.log(taskList);
  render();


}

function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1)
      break;
    }
  }
  render();
  filter();
}

// function filter(event) {
//   console.log('클릭');
// }


addButton.addEventListener('click', addTask);
// https://hianna.tistory.com/483

