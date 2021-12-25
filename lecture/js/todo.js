const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintTodo(newTodo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  list.appendChild(span); // span을 li 안에 넣는 방법
  span.innerText = newTodo;
  toDoList.appendChild(list);
} // todo를 그리는 역할을 담당. 여기서 인수 newTodo는 text임.

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // 이 시점에서 우리가 하는 건 input의 value를 새로운 변수에 복사하는 것임.
  toDoInput.value = "";
  // toDoInput을 비웠다고 해서 newTodo가 비워지는 것을 의미하는 건 아님.
  //변수를 저장(변수 선언)한 이후에 input의 value를 가지고 무엇을 하든 그 변수 저장한 것에는 아무런 영향이 없음.
  paintTodo(newTodo); // paintTodo 함수에게 newTodo 변수를 보냄.
}

toDoForm.addEventListener("submit", handleToDoSubmit);
