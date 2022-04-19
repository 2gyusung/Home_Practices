// console.log(document.querySelector("h1"))
// console.log(document.querySelector("p"))
// console.log(document.querySelector('#text'))
// console.log(document.querySelector(".paragraph"))

// id만 가능
// console.log(document.getElementById("text"));
// console.log(document.getElementById("p"))
 
// document.querySelector 와 document.getElementById 공통점 반환 해준다.

const h1 = document.querySelector('h1');
const p = document.getElementById('text');

//textContent : 반환
console.log(h1.textContent);
// 문자 바꾸어 준다
h1.textContent = 'Hello World!!';

p.textContent = "겟 엘리먼트 바이 아디";
console.log(p.textContent)
// 전체 출력 


// 비교 연산 예제 문제
let num1 = '3';
let num2 =  3;


console.log( num1 == num2)
            // 엄격한 비교(데이터 비교)
console.log (num1 === num2)

// if문(조건문)
let number = 3 
if(number == 5){
  console.log('확인')
}else {
  console.log('실패')
}

// while 문 
// while(조건(number < 3)) {
// console.log(3)
// number += 1
// }

// window.confirm('입력')
// 확인 과 취소 클릭버튼창이 뜬다.
// console.log(confirm('메시지'))
// 확인 버튼 누를 시 true
// 취소 버튼 누를  시 false

// // while(confirm('메시지')) {
// console.log('확인 버튼을 누르고 있군요')
// }
// console.log('취소 버튼')

//  짝수 문제
for(let i = 0; i<= 8; i++) {
  if(i % 2 == 0) {
    console.log(i);
  }
} 

// 반복증감
for(let i = 8; i>= 1; i -= 2) {
 console.log(i)
} 