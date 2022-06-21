const age = parseInt(prompt("How old are you?"));
//            parseInt:  String > number 변경 해줌

if(isNaN(age) || age < 0) { //NaN 는 Not a Number 으로써, 숫자가 아닌 것으로 정의하고 있다. 그로인해, 타입이 숫자인지 아닌지를 판별할 경우 많이 사용한다.
    
    
    
    
    console.log("Please Number")
}else if(age < 18) {
    console.log("어리다")
}else if(age >= 18 || age <= 50) {
    console.log("drink")
}else if(age >= 50 || age <= 80) {
    console.log("exercise")
}else if(age === 100) {
    console.log("wise")
}else if(age > 80) {
    console.log("whatever you want")
}

if((a && b) || (c && d))