const select = document.querySelector('select')
const button = document.querySelector('button')

button.addEventListener('click',function(){

// 버튼 클릭 시 사용자 값(출력 값 나오는 지 확인)
console.log(select.value)
//삼항 연산자
let result;
  //   select.value(선택한 값이) 과 "foot"  같은 경우 출력
result = select.value == "foot" ?
"축구를 선택하셨네요" : //true
"인원이 많습니다 다른 종목을 선택해주세요"   //false
alert(result)
})

/*let result;

result = 3 > 2 ? "true" : "false"

console.log(resule)
*/
