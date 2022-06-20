const todayDiv = document.getElementById('today');
const timeDiv = document.getElementById('time');

function getTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  month = month  < 10 ? `0${month}` : month;
  date = date  < 10 ? `0${date}` : month;
  hour = hour  < 10 ? `0${date}` : hour;
  minute = minute  < 10 ? `0${minute}` : hour;
  second = second  < 10 ? `0${second}` : hour;

  todayDiv.textContent = `${year}년 ${month}월 ${date}일`
  timeDiv.textContent = `${hour}:${month}:${second}`




}
getTime();
setInterval(getTime, 1000);

