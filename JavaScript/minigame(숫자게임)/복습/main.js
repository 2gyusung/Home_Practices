// 랜덤 번호 지정
// 유저 번호 입력 이후 버튼 클릭
// 정답 확인 후 정답이면 맞췄다 !
// 정답 확인 후 유저번호 down !!
// 랜덤번호가   > 유저번호 up
// 리셋 이후 게임 리셋  
// 5번의 기회 다 쓰면 게임 끝남 버튼 disable
// 유저가 1 ~ 100 범위 밖에 입력 하면 알려준다
//  유저 입력한 숫자 입력 하면 알림창

//  문제
// 남은 기회를 5번이 아닌 10번으로 바꾸고 싶다면? 어디를 바꾸면 될까? O
// 숫자를 맞춘후로 게임을 더이상 플레이 못하게 하기위해 버튼을 disable하는 방법은? O
// if(gameover == true)를(46번째줄 근처) if(gameover)로 해도 똑같이 동작이 될까? 동작이 된다면 왤까? O
// computerNum 를 1~10사이의 랜덤번호를 받고싶다면? O
// input창에 포커스를 두면 내가 그전에 입력한 값이 자동으로 지워지게 하려면 어떻게 해야할까? (유저는 매번 입력한 값을 일일이 지우기 귀찮다) O


let computerNum = 0
let playButton = document.getElementById("play-button")
let userInput = document.getElementById('user-input')
let resultArea = document.getElementById('result-area')
let resetButton = document.getElementById('reset-button')
let chanceArea = document.getElementById('chance-area')
let chances = 5;
let gameOver = false;
let history = []

playButton.addEventListener('click', play)
resetButton.addEventListener('click', reset)
userInput.addEventListener('focus', function () { userInput.value = ''; });


function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 50) + 1
}

function play() {
    let userValue = userInput.value

    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = '1 과 100 사이의 숫자를 입력해주세요'
        return;
    }
    if (history.includes(userValue)) {
        resultArea.textContent = '입력된 숫자입니다.'
        return;
    }
    chances--;
    chanceArea.textContent = `남은 기회 : ${chances}번`


    if (userValue < computerNum) {
        resultArea.textContent = 'up'
    } else if (userValue > computerNum) {
        resultArea.textContent = 'down'
    } else {
        resultArea.textContent = '맞추셨습니다'
        gameOver = true;
    }

    history.push(userValue)

    if (chances < 1) {
        console.log('게임오버');
        resultArea.textContent = '게임오버 !'
        gameOver = true
    }

    if (gameOver == true) {
        playButton.disabled = true;
    }
}

function reset() {
    userInput.value = "";
    pickRandomNum();
}

pickRandomNum() 