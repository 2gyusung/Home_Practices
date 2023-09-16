const children = ["a", "b", "c"];

for (let i = 0; i < children.length; i++) {
  console.log(children[i] + "입니다");
}

let person = [{name : '철수', age : 20 },
{name : '철수2', age : 22 },
{name : '철수3', age : 23 },
{name : '철수5', age : 24 }]

for(let cnt = 0; cnt < person.length; cnt++){

    if(person[cnt].age >= 19){
        console.log(person[cnt].name + '님 성인');
    }else{
        console.log('노 성인');
    }
}


const fruits = [
    { number:  1, title: "레드향"　　　　},
    { number:  2, title: "샤인머스켓"　　},
    { number:  3, title: "산청딸기"　　　},
    { number:  4, title: "한라봉"　　　　},
    { number:  5, title: "사과"　　　　　},
    { number:  6, title: "애플망고"　　　},
    { number:  7, title: "딸기"　　　　　},
    { number:  8, title: "천혜향"　　　　},
    { number:  9, title: "과일선물세트"　},
    { number: 10, title: "귤"　　　　　 },
]
for(let i = 0; i<=9; i++) {
    console.log(fruits[i].number + "" + fruits[i].title);
    console.log(`${fruits[i].number}  ${fruits[i].title}`);
}