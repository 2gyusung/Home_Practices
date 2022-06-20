

const clockTitle = document.querySelector(".js-clock");
dDay = clockTitle.querySelector("h2");
// getTime 은 1970 년 1 월 1 일 00:00:00 UTC와 주어진 날짜 사이의 경과 시간 (밀리 초)를 가져오는 메소드이다.
function getTime() {
const xmasDay = new Date("2022-12-24:00:00:00+0900");
const today = new Date();
const gap = xmasDay.getTime() - today.getTime();
const date = Math.ceil(gap / (60 * 60 * 24 * 1000));
const hours = Math.floor((gap % (60 * 60 * 24 * 1000)) /(60 * 60 *1000));
const minutes = Math.floor((gap % (60 * 60 *1000)) / (60 *1000));
const seconds = Math.floor((gap % (60 * 1000)) / 1000);
`${date < 10 ? `0${date}` : date}d  ${
    hours < 10 ? `0${hours}` : hours
  }h ${minutes < 10 ? `0${minutes}` : minutes}m  ${
    seconds < 10 ? `0${seconds}` : seconds
  }s `;
}

function init () {
    getTime();
    setInterval(getTime, 1000);
}
init();

https://velog.io/@zhd5379/%EC%B9%B4%EC%9A%B4%ED%8A%B8%EB%8B%A4%EC%9A%B4-%EA%B3%84%EC%82%B0%EA%B8%B0-%EB%A7%8C%EB%93%A4%EA%B8%B0