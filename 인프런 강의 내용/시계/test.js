// 요소
const todayDiv1 = document.getElementById('today');
const timeDiv1 = document.getElementById('time');

//getTime 함수 
function getTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()  +   1;
    let date = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    month = month < 10 ? `0${month}` : month;
    date = date < 10 ? `0${date}` : date;
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}  ` :minute;
    second = second < 10 ? `0${second}` : second;

    todayDiv1.textContent = `${year}년 ${month}월 ${date}일`
    timeDiv1.textContent  =`${hour}:${minute}:${second}`

}
getTime()
setInterval(getTime, 1000)