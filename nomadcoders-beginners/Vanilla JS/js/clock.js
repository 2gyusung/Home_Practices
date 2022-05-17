// const clock = document.querySelector("h2#clock")

// function sayHello() {
//     console.log("hello")
// }

// setInterval(sayHello, 5000) 5초마다 출력

// ----------------------------------------------

// const clock = document.querySelector("h2#clock")

// function getClock() {
//     const date = new Date();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//    clock.innerHTML = (`${date.getHours()} : ${date.getMinutes()}: ${date.getSeconds()}` )
// }

// setInterval(getClock, 1000); //1초 후 출력


/*
setInterval(sayHello, 1000);
sayHello() 라는 펑션을 1초마다 반복한다는 의미.
단 바로 실행되지 않고 1초 후 첫 시작이 되고 계속 1초마다 반복된다.

setTimeout(sayHello, 1000);
1초 기다렸다가 한번만 실행.
*/

/*---------------------------------------------------------------*/

const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes =String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}

setInterval(getClock, 1000); //1초 후 출력