

const h2 = document.getElementById("title");


function handleTitleClick() {
if(h2.style.color === "blue") {
    h2.style.color = "tomato"
}else {
    h2.style.color = "blue"

}
}



h2.addEventListener("click" , handleTitleClick); // 이벤트 지정