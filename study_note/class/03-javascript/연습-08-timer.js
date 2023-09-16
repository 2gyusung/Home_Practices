// setTimeout(function () { //3초 이후 출력 시간 지연 함수
//   console.log("펑 !");
// }, 3000);



// setInterval(function () { //1초 마다  출력 시간 반복 함수
//   console.log("1초가 지났다");
// }, 1000);


// 10초 타이머 코드
// let time = 10;
// let timer = 10;

// setInterval(function () {
//   if (time >= 0) {
//     console.log(time);
//     time = time - 1;
//   }
// }, 1000);


let time = 180; // 3분 타이머 기능 함수

setInterval(function(){
    if(time >= 0 ){
        let min2 = Math.floor(time / 60) //몫
        let sec2  = time % 60 // 나누기
        console.log(min2 + " : " + sec2);
    }
},1000)

//String 형 변환 이후 padStart 2자리 아닐 때 추가된다  
setInterval(function() {
    if(time>= 0) {
        let min = Math.floor(time / 60)
        let sec = String(time % 60).padStart(2 , "0")
        console.log(min + ':' + sec);
    }
}, 1000);

