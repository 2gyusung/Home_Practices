const form = document.querySelector("form")


form.addEventListener("submit" , function(e) {
  e.preventDefault() //기존에 있던 기능을 차단(출력 값 확인 하기 위해 넣음)
  console.log(form.name.value)
  console.log(form.town.value)
})