
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const change = document.querySelector("h2");


const superEventHandler = {
    handleMouseOn: function() {
        change.innerText =" The mouse is here !";
        change.style.color = colors[0];
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

