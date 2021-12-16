const title = document.querySelector(".hello:first-child h1"); // hello라는 class 내부에 있는 h1을 가져올 수 있다는 것을 의미.

console.dir(title);

function handleTitleClick() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}
title.addEventListener("click", handleTitleClick);
// handleTitleClick함수를 실행시키지 않음. 유저가 title을 클릭할 경우에 자바스크립트가 실행버튼을 대신 눌러주길 바람.
title.addEventListener("mouseenter", handleMouseEnter); // 마우스를 title에 올릴때 이벤트 발생
title.addEventListener("mouseleave", handleMouseLeave); // 마우스를 title에 내릴때 이벤트 발생
