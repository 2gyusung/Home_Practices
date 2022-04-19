# 기본 생성자

```
내장 생성자, 빌트인 객체라고도 한다. 자바스크립트는 처음 부터 사용 할 수 있는 기본 객체 및 생성자를 제공하는데, 그중 대표적인 내장 생성자가 바로 날짜와 시간에 대한 표현하는 Date이다.

=> 우리는 이미 브라우저 자바스크립트에서 제공하는 window 객체를 사용해오고 있었는데, 이 또한 내장 객체라 할 수 있습니다.

```
# Date
```javascript 
//코드가 실행되는 시점의 날짜와 시간 정보를 담은 객체
const now  = new Date()

//2008년 6월 10일의 날짜와 시간 정보를 담은 객체

const then = new Date(2008, 5, 10) 

// Date 객체끼리는 밀리초 단위로 연산된다.
const interval = now - then
console.log(interval)

```
# Date 객체 주요 메소드

- 날짜와 시간을 다룰 수 있는 메소드들을 포함하고 있다.

```

* Date

- 날짜와 관련된 작업을 지원한다.

- 객체 생성 방법

1. var object = new Date();

2. var object = new Date(년,월,일,시,분,초,밀리초);
- 중요 메소드

1. getYear() : 1970년 이후의 연도를 알아내는 메소드이다.

2. getMonth() : 월을 알아내는 메소드이다. 이 메소드의 반환값을 0부터 11까지이므로 정확한 현재 월을 알려면 getMonth()의 반환값에 1을 더해야한다.

3. getDate() : 날짜를 알아내는 메소드이다.

4. getDay() : 요일을 알아내는 메소드이다. 이 메소드의 반환값은 0부터 7까지이며 0은 '일요일', 1을 '월요일' 순으로 해당된다.

```


```javascript
const now = new Date(); // 코드가 실행되는 시간을 출력

console.log(now)

                      // 0부터 시작이 되어서 8이 9월이 된다.
const then = new Date(2020, 8, 10);
console.log(then)
```

```javascript

const h1 = document.querySelector('h1')



const now = new Date(); // 코드가 실행되는 시간을 출력



const hour = now.getHours() //  반환 되어 저장  시
const minu = now.getMinutes() //  반환 되어 저장  분
const seco = now.getSeconds()//  반환 되어 저장   초

                    //시    분        초
const nowTime = `${hour}:${minu}:${seco}`



h1.textContent = nowTime;
```


```javascript
const h1 = document.querySelector('h1')



const now = new Date(); // 코드가 실행되는 시간을 출력



console.log(now.toLocaleDateString()) // 현재 지역 시간대 출력

// 지역 바꾸고 싶다면(now.toLocaleDateString('en'))  다른 나라 시간대 출력 
```


# 내용 정리
```
- 자바스크립트는 처음부터 사용할 수 있는 기본 객체 및 생성자를 제공한다.
- Date는 날짜와 시간을 처리하는 다양한 메소드가 정의된 내장 생성자이다.
- Date 객체 생성 시에 new 연산을 해야 하며, 생성자 함수에 인자를 전달하여 원하는 시간을 객체를  
  초기화할 수 있다.
- Date 객체는 초기화 시에 정의된 날짜와 시간을 다루는 메소드들을 포함하고 있다.
```