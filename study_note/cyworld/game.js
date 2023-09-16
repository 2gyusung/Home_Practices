// 로직
// 단어를 입력하고 버튼을 누르면 
// input 태그 값을 읽는다 
// 제시어의 끝 글자와 입력값의 첫 글자와 비교
// 제시어의 끝 글자와 입력값의 첫 글자와 비교 정답 표시 이후 입력 값 변경
// 제시어의 끝 글자와 입력값의 첫 글자가 다르면 결과란에 땡 표시 이후 제시어 변경 ㄴㄴ

const startWord = ()  => {
    let myword = document.getElementById("myword").value
    let word  = document.getElementById("word").innerText

   let lastword =  word[word.length - 1]
   let firstword = myword[0]

   if(lastword === firstword) {
    //정답일때
    document.getElementById("result").innerText = "정답 !"
    document.getElementById('word').innerText = myword
    document.getElementById("myword").value = ""
   }else {
    // 오답일 때
    document.getElementById("result").innerText = " 땡 !"
    // document.getElementById("word").innerText = myword
    document.getElementById("myword").value = ''
   }
}