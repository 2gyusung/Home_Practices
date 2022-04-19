const inputType = document.querySelector("#typing") // 선언
const inputClick = document.querySelector("#PUSH")  // 선언

const handleTyping = function() {
  console.log("타이핑 되고 있어요 !")
  
}

const handleClick = function() {
  console.log("클릭되고 있어요 !")
}

inputType.onkeydown = handleTyping // 키보드 누를 떄 실행

inputClick.onclick = handleClick // btn 누를 때 실행

inputType.onkeydown = function() {
  console.log("타이핑 되고 있어요 !!")
}

inputType.onclick = function() {
  console.log("클릭 되고 있어요 !!")
}
