const h1 = document.querySelector("div.hello:first-child");

function handleTitleClick() {
  const currentColor = h1.style.color; // element의 style을 자바스크립트에서 변경함. 별로 선호하지 않음.
  let newColor; // newColor는 아무것도 없는 비어있는 let 변수임.
  if (currentColor === "blue") {
    newColor = "tomato"; //할당되지 않았던 newColor변수에 "tomato"라는 값을 할당함.
  } else {
    newColor = "blue"; 
  }
  h1.style.color = newColor; //newColor 변수가 h1의 style 요소라는 것을 알려줌.
}

h1.addEventListener("click", handleTitleClick);
