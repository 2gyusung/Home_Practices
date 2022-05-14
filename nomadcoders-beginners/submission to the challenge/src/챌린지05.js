const change = document.querySelector("body");

function handleReSize() {
  const frame = window.innerWidth;

  if (frame <= 200) {
    change.style.backgroundColor = "blue";
    change.innerText = " blue~~~~~~~~~";
  } else if (frame >= 768) {
    change.style.backgroundColor = "royalblue";
    change.innerText = "royalblue~~~~~~~";
  } else if (frame >= 540) {
    change.style.backgroundColor = "skyblue";
    change.innerText = "skyblue~~~~~~~";
  }
}


// 노마드 코더 코드 답 💡: 
// window.addEventListener("resize", handleReSize);


// const body = document.body;

// const BIG_SCREEN = "bigScreen";
// const MEDIUM_SCREEN = "mediumScreen";
// const SMALL_SCREEN = "smallScreen";

// function handleResize() {
//   const width = window.innerWidth;
//   if (width > 1000) {
//     body.classList.add(BIG_SCREEN);
//     body.classList.remove(MEDIUM_SCREEN);
//   } else if (width <= 1140 && width >= 700) {
//     body.classList.add(MEDIUM_SCREEN);
//     body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
//   } else {
//     body.classList.remove(MEDIUM_SCREEN);
//     body.classList.add(SMALL_SCREEN);
//   }
// }

// window.addEventListener("resize", handleResize);

/* 
style.css

body {
  font-family: sans-serif;
  display: flex;
}

h2 {
  color: white;
}

.bigScreen {
  background-color: #f1c40f;
}

.mediumScreen {
  background-color: #9b59b6;
}

.smallScreen {
  background-color: #3498db;
}
 */