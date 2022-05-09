// const clock = document.querySelector("h2#clock")

// function sayHello() {
//     console.log("hello")
// }

// setInterval(sayHello, 5000) 5초마다 출력

// ----------------------------------------------

const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();
    console.log(`${date.getHours()} : ${date.getMinutes()}: ${date.getSeconds()}` )
}

setInterval(getClock, 1000); //1초 후 출력

/*setInterval(sayHello, 1000);
sayHello() 라는 펑션을 1초마다 반복한다는 의미.
단 바로 실행되지 않고 1초 후 첫 시작이 되고 계속 1초마다 반복된다.

setTimeout(sayHello, 1000);
1초 기다렸다가 한번만 실행. */