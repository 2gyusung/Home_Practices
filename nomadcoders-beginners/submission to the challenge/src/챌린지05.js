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

window.addEventListener("resize", handleReSize);
