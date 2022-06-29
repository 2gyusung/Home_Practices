let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById('result-area');
let resetButton = document.getElementById('reset-button');
let chanceArea = document.getElementById('chance-area')
let chances = 10;



let gameOver = false;
console.log(chances , "chances");
let history = []

let computerNum = 0;

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 10) + 1;
}

// 입력 구현
function play() {
  let userValue = userInput.value;
  if(userValue < 1 || userValue > 10) {
    resultArea.textContent = " 1 ~ 10 사이 숫자를 입력해 주세요!"
    return ;
  }
  if(history.includes(userValue)) {
    resultArea.textContent
     = "동일한 숫자 입니다 ";
    return 

  }
  chances -- ;
  chanceArea.textContent  = `남은  기회 ${chances}번 ~` 
  console.log(chances);
  console.log(computerNum);
  
  if (userValue < computerNum) {
    userInput.value = "";
    resultArea.textContent = "UP!"
  } else if (userValue > computerNum) {
    userInput.value = "";
    resultArea.textContent = "Down!"
  } else {
    resultArea.textContent = "맞추셨습니다!"
    gameOver = true
  }
  history.push(userValue) //입력한 값 히스토리 배열에 저장
 

  if(chances < 1) {
    gameOver = true;
  }

  if(gameOver == true) {
    playButton.disabled = true;
    chanceArea.textContent = "게임 오버 !!"

  }
}

// 리셋 버튼 구현
function reset() {
  // 깨끗하게 정리
  userInput.value = "";
  // 랜덤 숫자 다시 만들기
  pickRandomNum()
  resultArea.textContent = "결과값이 여기 나옵니다 !"
}


playButton.addEventListener('click', play)
resetButton.addEventListener('click', reset)
userInput.addEventListener('focus' , function(){
  userInput.value = ""
})
pickRandomNum()
