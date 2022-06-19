// 랜덤

const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
      },
      {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
      },
      {
        quote:
          "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
      },
      {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
      },
      {
        quote: "To Travel is to Live",
        author: "Hans Christian Andersen",
      },
      {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein",
      },
      {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
      },
      {
        quote: "Never go on trips with anyone you do ntot love.",
        author: "Hemmingway",
      },
      {
        quote: "We wander for distraction, but we travel for fulfilment.",
        author: "Hilaire Belloc",
      },
      {
        quote: "Travel expands the mind and fills the gap.",
        author: "Sheda Savage",
      },
]
const 명언 = document.querySelector('#quote span:first-child');
const 작가 = document.querySelector('#quote span:last-child');
//                              내림차                      배열 길이
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

명언.innerHTML = todayQuote.quote;
작가.innerHTML = todayQuote.author;

// https://joy-codeing-lee.tistory.com/19
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math\

// //Math 객체 기능
// Math.random() 0부터 1사이 무작위의 값을 반환해줌
// Math.floor() 내림
// Math.ceil() 올림
// Math.round() 반올림
// // 