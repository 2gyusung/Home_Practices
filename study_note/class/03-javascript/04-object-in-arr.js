// 객체들을 배열에 담아서 선언하기
const classmates = [
    {
        name: "철수",  // 1번째 객체
        age: 8,
        school: "다람쥐초등학교"
    },
    {
        name: "영희",  // 2번째 객체
        age: 8,
        school: "다람쥐초등학교"
    },
    {
        name: "훈이",  // 3번째 객체
        age: 7,
        school: "토끼초등학교"
    }
]

// 위 객체들을 깔끔하게 한줄로 적기
const classmates2 = [
    { name: "철수", age: 8, school: "다람쥐초등학교" },
    { name: "영희", age: 8, school: "다람쥐초등학교" },
    { name: "훈이", age: 7, school: "토끼초등학교" }
]

// 배열안의 객체에서 뽑아내기
classmates[0].name     // 철수
classmates[0].age      // 8
classmates[0].school   // 다람쥐초등학교

// 배열 안의 객체에서 원하는 객체(8살 이상)만 뽑아내기
classmates.filter((data) => (data.age >= 8))

    // classmates = [
    //    { name: "철수", age: 8, school: "다람쥐초등학교" },
    //    { name: "영희", age: 8, school: "다람쥐초등학교" },
    // ]

//   과일로 예제 만들기
    const fruits = [
        {num : 1 , title : '레드향'},
        {num : 2 , title : '샤인머스켓'},
        {num : 3 , title : '산청딸기'},
        {num : 4 , title : '한라봉'},
        {num : 5 , title : '사과'},
        {num : 6 , title : '애플망고'},
        {num : 7 , title : '딸기'},
        {num : 8 , title : '천혜향'},
        {num : 9 , title : '과일선물세트'},
        {num : 10 , title : '귤'},


    ]

    fruits[0].num + "" + fruits[0].title
    fruits[1].num + "" + fruits[1].title
    fruits[2].num + "" + fruits[2].title
    fruits[3].num + "" + fruits[3].title
