# switch

```javascript

조금더 간결하고 의미가 명확해 보인다는 장점이 있음
case가 값으로 딱 정해진 경우에만 사용가능
조건이 비교식일 경우 사용 불가

case마다 break를 넘겨줘야하는 이유는 그렇지 않으면 밑에 케이스도 다르기 때문이다

let food = '햄버거'
switch(food){
    case '피자':
        console.log("피자를 주세요")
        break;
    case '햄버거':
        console.log("햄버거를 주세요")
        break;
    default:
        console.log("메뉴에 없는 음식입니다")
}

```

# 삼항 연산식

```javascript

if문을 간단하게 표현할 수 있다.
조건에 따라 실행하는 내용이 한가지일때 쓰기 좋다
조건에따라 실행하는 내용이 다르다
조건식? 참일때 : 거짓일때

let food = '햄버거'
let answer = food == '햄버거'? '햄버거 좋아':'햄버거 싫어'


let food = '햄버거'

if(food == '피자'){
  console.log('피자좋아')
}else if(food == '햄버거'){
  console.log('햄버거 좋아')
}else{
  console.log("다 싫어")
}

위의 if문을 삼항연산자로 표현하면 

let answer = food =="피자"? "피자좋아": food == '햄버거'? '햄버거 좋아':"다 싫어"
console.log(answer)

```