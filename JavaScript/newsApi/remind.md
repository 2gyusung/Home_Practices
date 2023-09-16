Stack 📚
```
자바스크립트코드가 실행되면 스택 프레임이 쌓이는 장소
스택에 새로운 프레임이 들어오고 실행이 완료되면 나간다.
드럼통 처럼 생겨서 First In Last Out구조의 자료형이다

function add(x, y){   

   return x+y;
}
function first(){   

   var i = add(1,1);    

   console.log(i);
}
first();
```
메모리 Heap📃
```
동적으로 생성된 변수들은 메모리 heap에가서 저장이 된다
```
테스크 Queue🔄
```
웹api로 부터 받은 테스크를 큐에 저장해둔다. 스택이 비면 이벤르 루프가 큐에 아이템을 꺼내다 스택으로 올린다.
```
Event Loop⌚
```
스택과 큐 사이에서 흐름을 제어한다
이벤트 루프는 스택이 비어있는지 확인을하고 비어있으면 큐에있는 아이템을 꺼내다 스택에 올려준다.
```
웹 api 🎇
```
Ajax 요청, setTimeout(), 이벤트 핸들러의 등록과 같이 웹 브라우저에서 제공하는 기능들을 말한다. 이들은 자바스크립트의 쓰레드(스택)에서 작업이 이루어지는것이 아닌 별도의 쓰레드에서 이루어진다

setTimeOut(함수,시간): 시간만큼 코드를 딜레이시키고 함수를 실행한다. 시간은 참고로 마이크로세컨드 단위이기 때문에 1초는 1000ms이다
Ajax, Axios, fetch: 클라이언트와 서버간에 데이터를 주고받는 기술
Event Handler : 클릭과같은 이벤트를 핸들하는 함수들

```
쓰레드 ✏
```
쓰레드(Thread)란 실제로 작업을 실행하는 주체이다. 쓰레드는 1개이거나 여러개일 수 있다. 자바스크립트는 싱글(1개)쓰레드만 있다. 쓰레드가 1개이면 하니씩밖에 일을 처리 못해서 동기적으로 일을 처리한다. 멀티 쓰레드라면 (1개이상) 여러개의 작업을 병렬적으로 처리할 수 있다. 자바스크립트는 싱글스레드로 동기적 처리를 한다는 것을 명심하자
```
await : 강제로 기다림
json : 서버통신에서 많이 쓰이는 데이터 타입


async/await🚦
```
async와 await은 동기적인 자바스크립트를 비동기적으로 처리하기위해쓴다. fetch는 promise를 리턴을한다. 그리고 우리가 필요한건 그 promise 속에서 api호출이 잘 이루어져 데이터를 받은다음 promise가 성공적으로 resolve 함수를 호출하기를 기다리는것이다. 이걸 해주는게 await이다. await은 promise가 resolve또는 reject를 호출할때 까지 기다려준다.
await이 없으면 그냥 날것 그대로의 promise가 리턴된다(우리가 영상에서 본것처럼)
await을 쓰려면 함수를 async로 선언해줘야한다, 둘은 세트라고 보면된다.
그것외에도 async로 함수를 선언하면 그함수는 자동으로 promise를 반환한다(그말의 뜻은 또 이함수를 받아다가 다른 비동기 작업이 가능하다는 뜻이다)
```



```javascript
API호출하고 싶을 때 :
const callAPI = async() =>{
    let url = new URL(`url주소`)
    let header = new Headers({헤더내용}) // 이건 필요한 경우만
    let response = await fetch(url,{headers:header})
    let data = await response.json()
}
```