const hellos = document.getElementsByClassName("hello"); // class는 많은 element를 한번에 가져올 수 있음.
const title = document.querySelector(".hello h1"); // hello라는 class 내부에 있는 h1을 가져올 수 있다는 것을 의미.

title.innerText = "hello";
