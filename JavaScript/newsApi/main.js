let news = [];
const getLatestNews = async () => { //async : 비동기 처리
  let url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10`
  );
  // console.log(url);

  let header = new Headers({
    "x-api-key": "rAUPhxgwfv8luapLbJFyH4lfCzoHptF1Tp38pABG7Ys",
  });

  let response = await fetch(url, { headers: header }); //ajax , http , fetch
  let data = await response.json();
  console.log("this is data", data);
  // news = data.articles
  // console.log(news);

  render();
};
const render = () => {
  let newsHTML = "";
  newsHTML = news.map((news) => {
    return `   <div class="row news">
        <div class="col-lg-4"><img class="news-img-size"
            src="https://us.123rf.com/450wm/sanek13744/sanek137441707/sanek13744170700004/81769778-%EC%84%B8%EA%B3%84-%EB%89%B4%EC%8A%A4-%ED%94%8C%EB%9E%AB-%EB%B2%A1%ED%84%B0-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-%EB%89%B4%EC%8A%A4-%EA%B8%B0%ED%98%B8-%EB%A1%9C%EA%B3%A0-%EA%B7%B8%EB%A6%BC%EC%9E%85%EB%8B%88%EB%8B%A4.jpg?ver=6"
            alt=""></div>
        <div class="col-lg-8">가나다라마바사</div>
    </div>`;
  });

  document.getElementById("news-board").innerHTML = newsHTML;
};
getLatestNews();

// //const callAPI = async() =>{
//   let url = new URL(`url주소`)
//   let header = new Headers({헤더내용}) // 이건 필요한 경우만
//   let response = await fetch(url,{headers:header})
//   let data = await response.json()
// }