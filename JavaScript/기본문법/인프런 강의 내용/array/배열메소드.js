const pet = ['강아지', '고양이', '앵무새']


pet.push('햄스터', '거북이') // 배열 추가
console.log(pet);
pet.pop() // 마지막 배열 제외



let result = pet.indexOf('앵무새')

// 배열 검사

pet.splice(0) // 배열 제거
console.log(pet);

pet.splice(0, 1, '호랑이') // 배열 제거 한 후 호랑이 채운다
console.log(pet);


pet.forEach(function() { // 요소 수 만큼 출력
    
})
