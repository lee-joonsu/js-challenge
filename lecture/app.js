const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");

function LoginBtnClick() {
  console.dir(loginInput); // input에 대한 정보를 볼 수 있음.
  console.log("hello",loginInput.value); // value는 input의 property로 input의 내용을 가져온다.
}

loginButton.addEventListener("click", LoginBtnClick);
