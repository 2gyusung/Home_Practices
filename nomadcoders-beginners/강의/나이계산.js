const age = parseInt(prompt("How old are you?"));
//            parseInt:  String > number 변경 해줌

if(isNaN(age) || age < 0) {
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