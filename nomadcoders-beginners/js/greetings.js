// // const loginForm = document.getElementById("login-form")
// const loginInput = document.querySelector("#login-form input")
// const loginButton = document.querySelector("#login-form button")

// function handleLoginBtnClick() {
// //    console.dir(loginInput); //내부 확인
//     console.log(loginInput.value); //값 출렫
//    console.log("click!!")
// }



// loginButton.addEventListener("click",handleLoginBtnClick);


// ----------------------------------------------------

// const loginForm = document.getElementById("login-form")
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function handleLoginBtnClick() {
// const username = loginInput.value;
// if(username === "") {
//     alert("Please write your Name!!!!!!!!!!!!!!!!!!!!!!!!!!!");
// }else if(username.length > 15){
//     alert("Your name is long!!")
// }
// }




// loginButton.addEventListener("click",handleLoginBtnClick);

// ------------------------------------------------------------------------------------

// // const loginForm = document.getElementById("login-form")
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function handleLoginBtnClick() {
// const username = loginInput.value;
// console.log(username);
// }




// loginButton.addEventListener("click",handleLoginBtnClick);


// ----------------------------------------------------------------------------------------

// const loginForm = document.getElementById("login-form")
// const loginForm = document.getElementById("login-form");
// const loginInput = document.querySelector("#login-form input");


// function onLogintSubmit(event) {
//     event.preventDefault();기본 설정 막는다.[기본 동작을 실행하지 않도록 지정합니다.]
// console.log(loginInput.value);
// }

// loginForm.addEventListener("submit", onLogintSubmit);



// -------------------------------------------------------------------------------------------
// const loginForm = document.getElementById("login-form")
// const loginForm = document.getElementById("login-form");
// const loginInput = document.querySelector("#login-form input");

// const link = document.querySelector("a");

// function onLogintSubmit(event) {
//     event.preventDefault();
// console.log(loginInput.value);
// }

// function handleLinkCilck(event) {
//     event.preventDefault(); // 기본 설정 막는다.[기본 동작을 실행하지 않도록 지정합니다.]
//     alert("Clicked") //
// }

// loginForm.addEventListener("submit", onLogintSubmit);
// link.addEventListener("click" ,handleLinkCilck)

/*addEventListener 안에 있는 함수는 직접 실행하지 않는다
브라우저가 실행시켜주고
브라우저에서 해당 이벤트에 대한 정보 즉, object를 가지게 된다.
addEventListener의 함수에서 object에 대한 자리만 할당해주면
해당 이벤트가 발생시킨 정보들에 대한 object들을 볼 수 있다!
이때 해당 이벤트가 가진 기본 Default값을 발생시키지 않기 하게 위해선 preventDefault를 이용하여 막을 수 있다!*/ 
// -----------------------------------------------------------------------------------------------------

// const loginForm = document.getElementById("login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting")
// const HIDDEN_CLASSNAME = "hidden";


// function onLogintSubmit(event) {
//     event.preventDefault(); // click 이후  value(값) 안 사라짐
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     greeting.innerHTML = `Hello ! ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME)
    
// }



// loginForm.addEventListener("submit", onLogintSubmit);

// -------------------------------------------------------------------------

// const loginForm = document.getElementById("login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting")
// const HIDDEN_CLASSNAME = "hidden"; //string 대문자


// function onLogintSubmit(event) {
//     event.preventDefault(); // click 이후  value(값) 안 사라짐
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     greeting.innerHTML = `Hello ! ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME)
    
// }



// loginForm.addEventListener("submit", onLogintSubmit);

// ----------------------------------------------------------------

// const loginForm = document.getElementById("login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting")
// const HIDDEN_CLASSNAME = "hidden"; //string 대문자
// const USERNAME_KEY ="username";//string 대문자


// function onLogintSubmit(event) {
//     event.preventDefault(); // click 이후  value(값) 안 사라짐
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//                             // key           value
//     localStorage.setItem("USERNAME_KEY " , username); //값 저장
//     paintGreetings(username);
    
// }



// function paintGreetings(username) {// 반복 줄이기 위해서 함수
//     greeting.innerHTML = `Hello ! ${savedUsername}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }



// loginForm.addEventListener("submit", onLogintSubmit);




// // 유저 정보 기억

// const savedUsername = localStorage.getItem("USERNAME_KEY "); // 첫번째 단계

// // console.log(savedUsername)

// if(savedUsername === null) {
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit", onLogintSubmit);
// }else {
//    paintGreetings(savedUsername);
// }

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // 첫번째 단계

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}