> 배열 만들기
```javascript
const blanks = []                            
// 비어있는 배열
const numbers = [2, 10, 7, 3.3]              
// 숫자들로 이루어진 배열
const classmates = ["철수", "영희", "훈이"]     
// 문자들로 이루어진 배열

// 배열의 길이 구하기 _ length
classmates.length          
// 3

// 배열의 값 꺼내기
classmates[0]              
// "철수"
classmates[1]              
// "영희"

// 배열의 맨 뒤에 추가하기 _ push
classmates.push("민지")     
// ["철수", "영희", "훈이", "민지"]

// 배열의 맨 마지막 삭제하기 _ pop
classmates.pop()          
// ["철수", "영희", "훈이"]

// 배열의 요소 정렬하기, 거꾸로 뒤집기 _ sort
classmates.sort()               
// ["영희", "철수", "훈이"]

// 배열이 가지고있는 데이터 확인하기 _ includes
classmates.includes("철수")     // true
classmates.includes("영구")     // false
```
>  중급
```javascript
const classmates1 = ["철수", "영희", "훈이"]
const classmates2 = ["민지", "민수"]

// 배열 2개 연결하기 _ concat
classmates1.concat(classmates2**)     
// ["철수", "영희", "훈이", "민지", "민수"]

// 배열을 문자로 만들기 _ join
classmates.join(', ')     
// 철수, 영희, 훈이
classmates.join("와 ")    
// 철수와 영희와 훈이

// 배열 분리하기 _ splice
const classmates = ["철수", "영희", "훈이"]
classmates.splice(0, 1)     
// ["철수"]

// 배열에서 원하는 요소만 뽑아내기 _ filter
classmates.filter((data) => (data === "영희"))     
// ["영희"]
classmates.filter((data) => (data !== "영희"))     
// ["철수", "훈이"]

// 배열에서 모든 요소 변경하기 _ map
classmates.map((data) => (data + "어린이"))         // ["철수어린이", "영희어린이", "훈이어린이"]
```
> 문자열 다루기 예제
(조회한 메일에 **** 표시하기)
>
```javascript

let email = "codecamp@gmail.com"
email.includes("@")
email.split("@")
// 결과 ["codecamp" , "gmail.com"]

let userMail = email.slit("@")[0]   // "codecamp"
let company = email.slit("@")[1]    // "gmail.com"

// userMail을 한글자씩 넣어주기 위한 빈배열
let maskingMail = []
maskingMail.push(userMail[0])
maskingMail.push(userMail[1])
maskingMail.push(userMail[2])
maskingMail.push(userMail[3])
maskingMail.push(*)
maskingMail.push(*)
maskingMail.push(*)
maskingMail.push(*)

// maskingMail = ["c","o","d","e","*","*","*","*"]
let emailMasking = maskingMain.join("")+"@"+company

```