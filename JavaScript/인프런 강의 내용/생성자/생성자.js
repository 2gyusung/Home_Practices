function Dog(paraName , paraBreed) { // 함수 : 일반 함수이랑 동일 하다.
  this.name = paraName
  this.breed = paraBreed
}

const dog1 = new Dog("콩", "시츄") 
const dog2 = new Dog("방울이", "푸들") 
const dog3 = new Dog("순돌이", "진돗개") 
const dog4 = new Dog("버터", "치와와") 
console.log(dog1)
console.log(dog2)
console.log(dog3)
console.log(dog4)