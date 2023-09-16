// 최대값, 최소값
Math.max(4, 29, 1, 12)     // 29
Math.min(4, 29, 1, 12)     // 1

// 반올림, 올림, 버림
Math.round(2.712)          // 3
Math.ceil(4.1)             // 5
Math.floor(12.8)           // 12


// 랜덤
Math.random()              // 0.822...(0 ~ 1 까지의 임의의 수)


// 루트
Math.sqrt(2)               // 1.414...







const number2 = Math.random()                 // 0.77621523...
const token2 = Math.floor(number * 1000000)   // 776215
console.log("휴대폰 인증번호: " + token)


const number = 0.002345    // 만약 Math.random() 의 결과가 0.002345 인 경우,
const token = 2345         // Math.floor(0.002345 * 100000)
const paddedToken = String(token).padStart(6, "0")     // 002345
console.log("휴대폰 인증번호: " + paddedToken)