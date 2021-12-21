const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function LoginSubmit(event) {
  event.preventDefault(); //  어떤 event의 기본 행동이든지 발생되지 않도록 막는 함수임.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerText = `Hello ${username} keep going`; // string과 변수를 하나로 합치는 방법.
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", LoginSubmit);
// 브라우저는 브라우저 내에서 event로부터 정보(중요한 정보일 수 있음)를 잡아내서 LoginSubmit function 실행 버튼을 누르고 있음.
// 모든 eventListener function의 첫번째 argument는 항상 지금 막 벌어진 일들에 대한 정보가 됨.