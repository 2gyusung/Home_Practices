
```
forEach : 반환값이 없다, 단순 for문과 같이 작동한다.
map : 반환값을 배열에 담아 반환한다.
filter: 조건에 충족하는(true) 아이템만 배열에 담아 반환한다.
some: 조건에 충족하는 아이템이 하나라도 있으면 true 반환, 아니면 flase.
every: 모든 배열에 아이템이 조건을 충족하면 true 반환, 아니면 false.
find : 조건에 충족하는 아이템 하나만 반환(여러개라면 첫번째것만 반환)
findIndex : 조건에 충족하는 아이템의 인덱스값 반환 (여러개라면 첫번째아이템의 인덱스번호만 반환)
```

```javascript
let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];
```
- forEach
```javascript
-기본적인 방법

for(let i=0; i<names.length; i++){
    console.log(names[i]);
}


-forEach(기본적인 방법이랑 출력 비슷 하지만 작성법은 다르다)

- function printName(item){
    console.log(item);
}

- names.forEach(printName)
```
```javascript
- names.forEach(function (item) {
    console.log(item);
})

-names.forEach((item)=>{console.log(item);})
```

- map
```javascript
    배열[]로 반환
- let data = names.map((item)=>{
    return item
})
console.log(data);
```

- some

```javascript
결과값이 하나라도 있으면 결과값이 true / false 로 출력된다.
- let data = names.some((item)=>{
    return item.starsWith('E')
})
console.log(data);

```
- every

```javascript
모두 첫 글자가 E로 시작하는 단어가 있으면 true / false 로 출력된다.
- let data = names.every((item)=>{
    return item.starsWith('E')
})
console.log(data);
```

- filter[Array 출력 되서 나온다]

```javascript
찾는거
- let data = names.filter((item)=>{
    return item.starsWith('E')
})
console.log(data);
```

- find[값 출력 해준다]

```javascript
- let data = names.find((item)=>{
    return item == "Lloyd Blankfein"
})
console.log(data);
```

-findIndex

```javascript
- let data = names.findIndex((item)=>{
    return item.starsWith('E')
})
console.log(data);
```