// const h1 = document.querySelector("div.hello:first-child h1")

// function handleTitleClick() {
//     h1.className = "active"
// }

// h1.addEventListener("click" , handleTitleClick);

// ------------------------------------------------------

// const h1 = document.querySelector("div.hello:first-child h1")

// function handleTitleClick() {
//     const clickedClass = "clicked"; //에러 축소 할 수 있음
//     if(h1.className === clickedClass) {
//         h1.className = "";
//     }else {
//         h1.className = clickedClass;
//     }
// }

// h1.addEventListener("click" , handleTitleClick);

// ------------------------------------------------------------
// const h1 = document.querySelector("div.hello:first-child h1")

// function handleTitleClick() {
//     const clickedClass = "clicked"; //에러 축소 할 수 있음
//     if(h1.classList.contains(clickedClass)) {
//         h1.className.remove(clickedClass);
//     }else {
//         h1.className.add(clickedClass);
//     }
// }

// h1.addEventListener("click" , handleTitleClick);


// ------------------------------------------------------------
const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick() {

   h1.classList.toggle("clicked");
}

h1.addEventListener("click" , handleTitleClick);