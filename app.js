const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  const clickedClass = "clicked"
  if (h1.className === clickedClass) {
    h1.className = ""; // h1의 class name이 active라면 active를 제거하기 위해 h1.className을 비워줌.
  } else {
    h1.className = clickedClass
  } // 만약 h1의 className이 없다면, class name을 active로 추가한다.
}
h1.addEventListener("click", handleTitleClick);
// 이 방법은 className이 말그대로 과거따위는 신경 안쓰고 교체해버리기 때문에 html에서 만든 class를 없애버림.