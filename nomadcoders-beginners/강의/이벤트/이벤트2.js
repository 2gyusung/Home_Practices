
const h1 = document.getElementById("title");// 1. element(HTML) 찾아라


function handleTitleClick() {// 3. event 반응
    const currentColor = h1.style.color;
    let newColor;
if(currentColor === "blue") {
    newColor = "tomato"
}else {
   newColor = "blue"

}
h1.style.color = newColor;
}


h1.addEventListener("click" , handleTitleClick); // 이벤트 지정// 2. event listen

// 1. element(HTML) 찾아라
// 2. event listen
// 3. event 반응