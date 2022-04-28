
// nav

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu'); //스크롤 바 
const navLogo = document.querySelector('#navbar__logo');

// display moblie menu 
const moblieMenu = () => { 
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', moblieMenu); /*호출 / 실행*/

// Show active menu when scrolling (메뉴 스크롤 드래그 할 때에 색상 표시)

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);
  
    // adds 'highlight' class to my menu items  (메뉴 스크롤 드래그 할 때에 색상 표시)
    if (window.innerWidth > 960 && scrollPos < 600) {
      homeMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
      aboutMenu.classList.add('highlight');
      homeMenu.classList.remove('highlight');
      servicesMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
      servicesMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      return;
    }
  
    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
      elem.classList.remove('highlight');
    }
  };
  
  window.addEventListener('scroll', highlightMenu); //(메뉴 스크롤 드래그 할 때에 색상 표시)