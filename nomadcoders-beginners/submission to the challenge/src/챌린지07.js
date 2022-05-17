// // 랜덤 한 숫자를 찾는 방법은 이 강의에서 공부할 수 있습니다
// <form> : 사용자로부터 입력을 받을 수 있는 입력 폼(form)을 정의할 때 사용하는 태그입니다. 입력된 정보를 제출할 수 있습니다. 참고 자료
// querySelector : CSS 선택자 형식을 사용해 HTML의 요소를 JS에서 사용하도록 가져올 수 있습니다. 다만, 같은 클래스명을 가지고 있다면 가장 첫 번째 요소만을 가지고 옵니다. 참고 자료
// preventDefault() : 이벤트마다 가지고 있는 브라우저에서 발생하는 고유 동작을 막기 위해 사용할 수 있습니다. 참고 자료
// Math.ceil() : 주어진 숫자를 올림 하기 위해 사용하는 함수입니다. 숫자는 정수 형태로 반환됩니다. 참고 자료
// parseInt() : 주어진 문자열을 정수형으로 변환해서 반환하는 함수입니다. 참고 자료
// innerHTML : 요소 내에 포함된 HTML을 나타내는 프로퍼티입니다. HTML을 읽어들이거나 설정할 수 있습니다. 참고 자료


const form = document.querySelector(".js-form"),
  range = form.querySelector(".js-range"),
  input = form.querySelector(".js-input"),
  submitBtn = form.querySelector("button"),
  choose = document.querySelector(".js-choose"),
  result = document.querySelector(".js-result"),
  rangeText = document.querySelector(".js-rangeText");

let maxValue = range.max;
let randomNumber = Math.floor(Math.random() * maxValue);

function handleRange(event) {
  const changedMax = event.target.value;
  rangeText.innerHTML = `Generate a number between 0 and ${changedMax}`;
  maxValue = changedMax;
}

function handleSubmit(event) {
  event.preventDefault();
}

function handleChoose() {
  if (parseInt(maxValue) < parseInt(input.value)) {
    alert("최대값보다 입력값이 커요!");
    input.value = "";
  } else {
    randomNumber = Math.floor(Math.random() * maxValue);
    choose.innerHTML = `You chose : ${input.value}, the machine chose : ${randomNumber}`;
    if (randomNumber === parseInt(input.value)) {
      result.innerHTML = "You Win!!";
    } else {
      result.innerHTML = "You Lost..";
    }
  }
}

function init() {}

range.addEventListener("change", handleRange);
form.addEventListener("submit", handleSubmit);
submitBtn.addEventListener("click", handleChoose);

init();






// const form = document.querySelector(".js-form"),
//   range = form.querySelector(".js-range"),
//   input = form.querySelector(".js-input"),
//   submitBtn = form.querySelector("button"),
//   choose = document.querySelector(".js-choose"),
//   result = document.querySelector(".js-result"),
//   rangeText = document.querySelector(".js-rangeText");

// let maxValue = range.max;
// let randomNumber = Math.floor(Math.random() * maxValue);

// function handleRange(event) {
//   const changedMax = event.target.value;
//   rangeText.innerHTML = `Generate a number between 0 and ${changedMax}`;
//   maxValue = changedMax;
// }

// function handleSubmit(event) {
//   event.preventDefault();
// }

// function handleChoose() {
//   if (parseInt(maxValue) < parseInt(input.value)) {
//     alert("최대값보다 입력값이 커요!");
//     input.value = "";
//   } else {
//     randomNumber = Math.floor(Math.random() * maxValue);
//     choose.innerHTML = `You chose : ${input.value}, the machine chose : ${randomNumber}`;
//     if (randomNumber === parseInt(input.value)) {
//       result.innerHTML = "You Win!!";
//     } else {
//       result.innerHTML = "You Lost..";
//     }
//   }
// }

// function init() {}

// range.addEventListener("change", handleRange);
// form.addEventListener("submit", handleSubmit);
// submitBtn.addEventListener("click", handleChoose);

// init();
