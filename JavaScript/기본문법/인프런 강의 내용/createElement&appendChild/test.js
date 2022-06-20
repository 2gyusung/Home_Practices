const button = document.getElementById
("push")
const div = document.getElementById
("container")

button.addEventListener('click' , function(){
  console.log("생성")
  const newDiv = document.createElement("div")

  newDiv.style.backgroundColor = 'blue'
  newDiv.style.border = 'solid'
  newDiv.style.width = "200px"
  newDiv.style.height = "200px"

  div.appendChild(newDiv)
})