
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const change = document.querySelector("h2");
const test = document.querySelector("p");


const superEventHandler = {
    handleMouseOn: function() {
        change.innerText =" The mouse is here !";
        change.style.color = colors[0];
        test.innerText = " 연습합니다 자바스크립트"
        test.style.color = 'blue'
    },
    handleMouseLeave: function() {
        change.innerText =" The mouse is gone !";
        change.style.color = colors[1];
    },
    handleMouseResize: function() {
        change.innerText =" The mouse is resized !";
        change.style.color = colors[2];
    },
    handleMouseRightClick: function() {
        change.innerText =" The was a right Click !";
        change.style.color = colors[3];
    },
   
  
  
};

change.addEventListener("mouseenter",superEventHandler.handleMouseOn);
change.addEventListener("mouseleave",superEventHandler.handleMouseLeave);
change.addEventListener("resize",superEventHandler.handleMouseResize);
change.addEventListener("contextmenu",superEventHandler.handleMouseRightClick);
test.addEventListener("mouseenter",superEventHandler.handleMouseOn);

