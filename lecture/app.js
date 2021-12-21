const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function LoginSubmit(event) {
  event.preventDefault(); //  어떤 event의 기본 행동이든지 발생되지 않도록 막는 함수임.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); //localStorage에 유저 이름 저장함.
  paintGreetings(username); // paintGreetings 함수 호출(인자는 username)
}// localStorage에 유저정보가 없다면, form이 submit되서 우리는 input으로부터 유저정보를 받고, 
//input에서 받은 user를 가진 paintGreetings를 호출함.

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
} // 겹치는 것 함수로 만듦. 위에 함수안에 들어있는 내용이 겹치는 내용임.

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", LoginSubmit);
} else {
  paintGreetings(savedUsername); // paintGreeting 함수 호출(인자는 savedUsername)
} // localStorage에 유저정보가 있다면 localStorage에서 받아온 user를 인자로 가지는 paintGreetings를 호출함.
