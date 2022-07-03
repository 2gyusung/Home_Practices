```javascript
객체 초기화
let name = 'gyusung'
let age = 100

let person = {name:name , age: age}

            ⬇️

let person = {name , age}

```
```javascript
Destructuring구조화
let 애플 = {
 name :  '아이폰'
 num : 7
}

let name = 애플.name
let num = 애플.num

    ⬇️

let { name , num} = 애플
```
```javascript
Template Literal
let name = 'gyusung'
let age = 100

console.log(`제 이름은 ${name} 나이는 ${age}` )

```
```javascript
Destructuring 구조화
let array = [1,2,3]

let a = array[0]
let b = array[1]
let c = array[2]
 ⬇️
let [a, b, c] = array
```

```javascript
Rest destructuring 나머지 분해
let [a, ...rest] = array
console.log(rest)
<!-- 답 : [2 , 3] -->
```
```javascript
Rest destructuring 나머지 분해 
let person = {
    let name = 'gyusung',
    let age = 100 ,
    man : true
}

let {name,... restInfo} = person  
console.log(restInfo)
<!-- 답 : gyusung {age : 100 , man : true}-->

```
```javascript
Spread
let a = [1 ,2]
let b = [3 ,4]
let c = [5 ,6]

let result = [...a,...b,...c]
console.log(result)
<!-- 답 :[1 ,2 ,3 ,4,5,6]-->

```
- 함수 선언 방법
```javascript
화살표 함수
화살표 함수 표현식은 기존의 function 표현방식보다 간결하게 함수를 표현할 수 있다. 화살표 함수는 항상 익명이며, 자신의 this, arguments, super을 바인딩하지 않는다.자신만의 this를 생성하지 않고 자신을 포함하고 있는 context의 this를 이어 받는다.

fuction foo() {
    console.log(hello)
}

let foo = () => {
    console.log('hello')
}

```

```javascript
let foo = () => {
    return 'haha'
}

let foo = () => 'haha'

```

- this
```javascript
let age = 17
let person = {
    name : 'gs',
    age : 20 ,
    getInfo :function(){
        console.log(this.age)
        //답 : 20     
        // this 쓸 때에 일반함수로  작성한다.     
    }
}
person.getInfo()

let age = 17
let person = {
    name : 'gs',
    age : 20 ,
    getInfo :()=>{
        console.log(this.age)
        //답 : 20     
        // this 쓸 때에 일반함수로  작성한다.     
    }
}
person.getInfo()
<!-- 답 :[undefined] // this 쓸 때에 일반함수로  작성한다.-->
```