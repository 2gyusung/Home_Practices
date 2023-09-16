const menuHome = () => {
    document.getElementById("contentFrame").setAttribute("src","home.html") //setAttribute :세팅
    document.getElementById("menuHome").style = 'color : black; background-color: white;'
    document.getElementById("menuJukeBox").style = 'color : white; background-color: black;'
    document.getElementById("menuGame").style = 'color : white; background-color: black;'


}


const menuJukeBox = () => { 
    document.getElementById("contentFrame").setAttribute("src","jukebox.html") //setAttribute :세팅
    document.getElementById("menuJukeBox").style = 'color : black; background-color: white;'
    document.getElementById("menuHome").style = 'color : white; background-color: black;'
    document.getElementById("menuGame").style = 'color : white; background-color: black;'



}


const menuGame = () => {
    document.getElementById("contentFrame").setAttribute("src","game.html") //setAttribute :세팅
    document.getElementById("menuGame").style = 'color : black; background-color: white;'
    document.getElementById("menuHome").style = 'color : white; background-color: black;'
    document.getElementById("menuJukeBox").style = 'color : white; background-color: black;'

}
