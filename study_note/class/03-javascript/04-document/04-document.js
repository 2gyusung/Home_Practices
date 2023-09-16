function greeting() {
    document.getElementById("target").innerText ='안녕'
}



// HTML 파일

// 철수는 사과를 먹습니다.

// 맹구는 바나나를 먹습니다.

// 영희는 피자를 먹습니다.

// 훈이는 치킨을 먹습니다.

// JAVASCRIPT 객체
// document = {
//     head: ,
//     body: {
//         children: [

// 철수는 사과를 먹습니다.
// ,

// 맹구는 바나나를 먹습니다.
// ,

// 영희는 피자를 먹습니다.
// ,

// 훈이는 치킨을 먹습니다.

//         ]
//     }
// }




// 객체로부터 정보 가져오기
console.log(document.body.children[0].id)            // apple
console.log(document.body.children[0].innerText)     // 철수는 사과를 먹습니다.
console.log(document.body.children[0].innerHTML)     // 철수는 사과를 먹습니다.

// ID로 HTML 태그값 가져오기
const text1 = document.getElementById('apple');      // 
// 철수는 사과를 먹습니다.

console.log(text1.innerHTML);     // 철수는 사과를 먹습니다.

// CLASS로 HTML 태그값들 가져오기
const text2 = document.getElement**s**ByClassName('food');
console.log(text2[**0**].innerHTML);     // 영희는 피자를 먹습니다.
console.log(text2[**1**].innerHTML);     // 훈이는 치킨을 먹습니다.

// 자바스크립트로 HTML 및 속성 변경하기
document.getElementById('apple').setAttribute('style', 'color: red;')
document.getElementById('banana').innerHTML = '맹구는 노란 바나나를 맛있게 먹습니다.'
// 		
//			
//				
// 철수는 사과를 먹습니다.

//   			
// 맹구는 노란 바나나를 **맛있게** 먹습니다.

//				
// 영희는 피자를 먹습니다.

//				
// 훈이는 치킨을 먹습니다.

//			
//