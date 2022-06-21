const btn1 = document.getElementById("one") //
const btn2 = document.getElementById("two") // 
const btn3 = document.getElementById("three") //

const handleClick = function(event) {
  console.log(event.target)
}


                      // 인자()    콜백함수 :함수를 인자값을 전달 하는 것
btn2.addEventListener('click' , handleClick )
btn1.addEventListener('click' , handleClick )
btn3.addEventListener('click' , handleClick )



