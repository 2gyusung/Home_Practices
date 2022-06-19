// 요소 선택
const todayDiv = document.getElementById('today');
const timeDiv = document.getElementById('time');

// getTime 함수
function getTime(){
  let now = new Date(); //현재 날짜 및 시간
  let year = now.getFullYear(); //현재 시각 년도 
  let month = now.getMonth() + 1; //현재 시각 월 
  let date = now.getDate(); // 현재 시각 일
  let hour = now.getHours();  // 현지 시각으로 현재 시각에 해당하는 숫자를 반환함.
  let minute = now.getMinutes(); //현재 시각의 분에 해당하는 숫자
  let second = now.getSeconds();   // 현재 시각의 초
  

  // 삼항 연산           true        false
  month = month < 10 ? `0${month}` : month; //? 10보다 작으면 0을 붙히고 출력
  date = date < 10 ? `0${date}` : date;
  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  todayDiv.textContent = `${year}년 ${month}월 ${date}일` // 날짜와 시간을 표시
  timeDiv.textContent = `${hour}:${minute}:${second}`
}

// setInterval 메소드
getTime()
setInterval(getTime, 1000); //getTime 함수를 1초마다 호출하기 위해 setInterval 메소드를 사용