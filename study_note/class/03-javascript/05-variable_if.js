20 + 2     // 22
20 - 2     // 18
20 * 2     // 40
20 / 2     // 10
20 % 3     // 2 (20을 3으로 나눈 나머지)


//숫자 타입 연산

89 + 54
// 결과 : 140


// 문자 타입 연산

"89" + "54"
// 결과  : "8954"


20 < 30       // true
20 > 30       // false
10 <= 10      // true
20 >= 20      // true

20 === 20     // true
20 !== 10     // true


if( 조건1 ) {
    // 조건1이 참이면 실행
} else if( 조건2 ) {
    // 조건1은 거짓, 조건2는 참이면 실행
} else {
    // 모두 거짓이면 실행
}


// if문 적용
if(1+1 === 2) {
    console.log("정답입니다!")     // 정답입니다!
}

// if ... else문 적용
if(1+1 === 3) {
    console.log("정답입니다!")
} else {
    console.log("틀렸습니다!")     // 틀렸습니다!
}




// const profile = {
//     name = '철수',
//     age = 12,
//     school = '다람쥐'
// }

// // if , else if , else 문 적용
// if(profile.age >= 20) {
//     console.log("성인입니다")
// } else if(profile.age> 8 && profile.age<= 19) {
//     console.log("학생입니다") // 3학년은 13살 미만 8살 이상입니다.
// } else if(profile.age > 0){
//     console.log("어린이")
// }else {
//     console.log('잘못');
// }

