// 함수
// 적절하게 표현 할 수 있는 이름을 사용하자
// 명사 보다는 동사로 된(기능)
// 소문자로 시작하되 카멜 표기법으로 사용한다.
// 함수 선언식 , 함수 표현식 
// 차이점 : 호출문의 위치 차이가 난다.
            // 함수선언식은 호출 위치 상관없다.

// 함수 선언식(호이스팅)
// function 함수명() {
//   // 함수의 기능을 표현한 구문
// }

// 함수 표현식(익명 함수)
// const 함수명 = function() {
//   // 함수의 기능을 표현한 구문
// }

// let number = 3;

// // 카멜 표기법
// let myNumber = 5;

// console.log(myNumber);

// function sayHello() {
//   console.log('Hello')
// }

// sayHello()
// sayHello()
// sayHello()
// sayHello()

 //함수 표현식

 const sayBye = function() {
   console.log('good bye');
 }

 sayBye()

//  return 함수 내부에서 부가기능  함수로부터 데이터를 반환 한다. , 함수를 끝낸다.
//  function getThree() {
//   // 이 함수를 호출하면, 호출문이 3을 반환 할 것! 
//   return 3;
//  }

function thereIsReturn() {
  console.log('반환한다 , 무언가를 ')
  return 10;
} 
const result = thereIsReturn()
console.log(result)


function sayAnything(ant ,num){ 
  for(let i =0; i < num; i++){

    console.log('아무 말이나 하자');
  }                                                                                                                                                                                             ) {
}
sayAnything('바빠서 못 듣는중' ,6) //인자값  //6번 출력
sayAnything('바빠서 못 듣는중' , 2) //인자값 //2번 출력



function oddEven(number3) {
  if(number3 % 2 == 1) {
    return "홀수"
  }else{
    return "짝수"
  }

}
console.log(oddEven(10)) //짝
console.log(oddEven(7)) //홀
