const h1 = document.querySelector(".hello:first-child h1"); // hello라는 class 내부에 있는 h1을 가져올 수 있다는 것을 의미.

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("All GOOODS!")
}

h1.addEventListener("click", handleTitleClick); // event를 listen하는 또다른 방법
// handleTitleClick함수를 실행시키지 않음. 유저가 title을 클릭할 경우에 자바스크립트가 실행버튼을 대신 눌러주길 바람.
h1.addEventListener("mouseenter", handleMouseEnter); // 마우스를 title에 올릴때 이벤트 발생
h1.addEventListener("mouseleave", handleMouseLeave); // 마우스를 title에 내릴때 이벤트 발생
// addEventListener()를 자주 사용하는 이유는 나중에 removeEventListner를 통해서 event listener를 제거할 수 있기 때문임.

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);