const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  h1.classList.toggle("clicked"); // toggle을 사용하면 가장 간단하게(한 줄의 코드로) css를 자바스크립트에 반영할 수 있음.
}
h1.addEventListener("click", handleTitleClick);
