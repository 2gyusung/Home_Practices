const button = document.getElementById("push") //선택
const div = document.getElementById("container") //선택

button.addEventListener('click', function(){
  console.log("생성 생성") //출력
  const newDiv = document.createElement("div") //만들어짐(div 추가)

  newDiv.style.backgroundColor= "royalblue"
  newDiv.style.border = 'solid' 
  newDiv.style.width = " 200px"
  newDiv.style.height = "200px"


  div.appendChild(newDiv)  // 추가
})

