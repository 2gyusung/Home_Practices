

const scrollHeader = () => {
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                        : header.classList.remove('scroll-header')
}

window.addEventListener('scroll' , scrollHeader)


// Swiper
let swiperProducts = new Swiper(".products__container", {
    spaceBetween:32, //마진값
    grabCursor : true,
    centeredSlides: true, 
    slidesPerView: "auto", //한번에 보여지는 슬라이드 개수
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      
        1024: {
          spaceBetween: 72,
        },
      },
  });

  