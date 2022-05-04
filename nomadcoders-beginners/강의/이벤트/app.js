// // document.title = "hi" html title 변경



// // **document.querySelector ,  document.getElementById("title"); : html 불러오기


// const title = document.getElementById("title");
// title.innerText = "Hello";

// // console.dir 내부

// -------------------------------------------------------

// const title = document.getElementById("title"); //html 불러오기
// const content = document.querySelector("p");


// function handleTitleClick() { // 기능(함수) 실행
//     alert("title Click!!");
// }

// function clickContent() {
//     alert("content Click!!!");
// }

//                         // 클릭시, 함수실행         
// title.addEventListener("click" ,handleTitleClick); // 이벤트 지정
// content.addEventListener("click", clickContent);



// handleTitleClick(); //유저가 title 클릭 후 나 대신 실행
// clickContent();
// ----------------------------------------------------------

// const title = document.getElementById("title");

// function handleTitleClick() {
//     title.style.color = "blue";
// }

// function handleMouseEnter() {
//     title.innerHTML = "Mouse is here!"
// }

// function handleMouseLeave() {
//     title.innerHTML = "Mouse is gone!!"
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = "yellow"
// }

// title.addEventListener("click" , handleTitleClick); // 이벤트 지정
// title.addEventListener("mouseenter", handleMouseEnter); // 이벤트 지정
// title.addEventListener("mouseleave",  handleMouseLeave); // 이벤트 지정
// widow.addEventListener("resize" , handleWindowResize);

// title.onclick = handleTitleClick; === * title.addEventListener("click" , handleTitleClick);
// title.onmouseenter = handleMouseEnter;
// title.onmouseleave = handleMouseLeave;


const h1 = document.getElementById("title");

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerHTML = "Mouse is here!"
}

function handleMouseLeave() {
    h1.innerHTML = "Mouse is gone!!"
}

function handleWindowResize() {
    document.body.style.backgroundColor = "yellow";
}
function handleWindowCopy() {
    alert("copier!!")
}
function handleWindowOfffline() {
    alert("SOS no WIFI")
}
function  handleWindowOnline() {
    alert("ON WIFI")
}
h1.addEventListener("click" , handleTitleClick); // 이벤트 지정
h1.addEventListener("mouseenter", handleMouseEnter); // 이벤트 지정
h1.addEventListener("mouseleave",  handleMouseLeave); // 이벤트 지정


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOfffline); //wifi off
window.addEventListener("online", handleWindowOnline);  //wifi on