console.log ("Hello World");
var x = 15;
var y = 20;

console.log('x의 값은 '  + x + ' 입니다.');
console.log('y의 값은 ' + y + ' 입니다.');

var result = x + y;
if (result == 35) {
  console.log('맞습니다.');
}

for (var i = 0; i<10; i++) {
  if (i%2 == 0) {
    console.log(i+ "짝수입니다.")
  }
  else {
    console.log(i + "홀수입니다.")
  }
}
