const age =parseInt( prompt("How old are you?")); //String > number 변경

// console.log(typeof age); // typeof 타입 확인

console.log(age);
// console.log(isNaN(age)); true false 비교

if(isNaN(age)) { // '1' String이 1 변환 해서 비교
    // condition === false
    console.log("please number");
}else {
    console.log("Thank you");
}

// console.log(age, parseInt(age)) 방법 1