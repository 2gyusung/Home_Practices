const h1 = document.querySelector('h1')
const addBtn = document.querySelector('#add')
const removeBtn = document.querySelector('#remove')
const toggleBtn = document.querySelector('#toggle')

console.log(h1.classList);  //요소가 가지고 있는 목록을 반환

addBtn.addEventListener('click' , function() {
    h1.classList.add('text')
})
removeBtn.addEventListener('click' , function() {
    h1.classList.add('text')
})
toggleBtn.addEventListener('click' , function() {
    h1.classList.add('text')
})
