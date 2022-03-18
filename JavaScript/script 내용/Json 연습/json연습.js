emp = 
{
  empno : 7369,
  ename : "smith",
  mgr : [7902, 7370]
}
var information = {
  // 왼쪽은  key( 중복 불가능) 오른쪽 (중복 가능)
  "name" : "Lee Gyusung",
  "age" : 26,
  "address" : "대전 월평북로 11",
  isMarri : false
  //  데이터 타입이  boolean형 일 떄 변수 이름 is + ~ 로 적을것.
}
console.log(information);
console.log(information.address);

// 사원 ID가 3450인 사원 이름은  smith고, 급여는 3400을 받는다.
// 부서는   개발팀과 영업팀, 입사 날짜 21-12-31, 상사가 brian과  king인 데이터를 json으로 만들어서 추가한다.

  var emp = {
    empno :3450,
    ename : 'SMITH',
    sal : 3400,
    dname : ['개발','영업'],
    hiredate : '21-12-31',
    상사이름 : ['Brian','king']
``  }
// 만약 개발팀의 인원 수가 5명이라는 내용을 넣고 싶다면, 개발팀에 대한 상세 내용을 dname 안에 json을 추가한다.
var emp = {
  empno : 3450,
  ename :'smith',
  sal :3400,
dname : "개발",

}