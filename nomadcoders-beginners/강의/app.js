// 
const player = {
    name : "nico",
    sayHello : function(other) {
        console.log("hello " +  other  + " nice to me") 
    },
}

console.log(player.name);
player.sayHello('lyn')
player.sayHello('eee')

// 
const days = [1 , 2 , 3 , 4];
console.log(days[2]);

// 
const toBuy = ["potato" , "tomato", "pizza"]
console.log(toBuy[2])

toBuy[2] = 'water';
console.log(toBuy[2])

toBuy.push("meat"); // 배열 추가
console.log(toBuy)





// 
const cal = {
 add:function(a, b) {
    console.log(a ,b);
 },
};

cal.add(100, 500);

/*
// 노마드 문제
const number = {
    plus:function(a ,b) {
        console.log(a + b);
    },
    mul:function( a, b) {
        console.log(a * b);
    },
    min:function(a, b) {
        console.log(a - b);
    },
};

number.plus(7, 5)
number.mul(7, 5)
number.min(7, 8)
*/


const age = 26;
function calKrAge(ageOfForeigner) {
  return  ageOfForeigner + 2;
}

const krAge = calKrAge(age);
console.log(krAge)




// 노마드 리턴 문제
const number = {
    plus:function(a ,b) {
        return a + b ;
    },
    mul:function( a, b) {
        return a * b;
    },
    min:function(a, b) {
        return a - b ;
    },
};

const plusResult = number.plus(7, 5)
const mulResult =  number.mul(plusResult, 5)
const minResult = number.min(7, mulResult)

console.log(plusResult);
console.log(mulResult);
console.log(minResult);


