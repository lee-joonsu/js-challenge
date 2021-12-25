const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = []; // array를 만듦. newToDo가 그려질 때마다 그 텍스트를 array에 push함(넣음).
// toDos array를 localStorage에 넣기

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
} // toDos array의 내용을 localStorage에 넣는 것임.
// JSON.stringify는 자바스크립트 object나 array 또는 어떤 자바스크립트 코드건 간에 그걸 string으로 만들어 줌.
function deleteToDo(event) {
  const li = event.target.parentElement; // 이게 우리가 삭제하고 싶은 li임.
  li.remove();
}

function paintTodo(newTodo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  list.appendChild(span); // span을 li 안에 넣는 방법
  toDoList.appendChild(list);
  list.appendChild(button);
} // todo를 그리는 역할을 담당. 여기서 인수 newTodo는 text임.

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // 이 시점에서 우리가 하는 건 input의 value를 새로운 변수에 복사하는 것임.
  toDoInput.value = "";
  toDos.push(newTodo); // newToDo를 그리기 전에 newTodo 변수를 toDos array로 보냄.
  paintTodo(newTodo); // paintTodo 함수에게 newTodo 변수를 보냄.
  saveToDos(); // toDos array를 localStorage에 집어넣는 역할을 함.
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) { // 자바스크립트는 지금 처리되고 있는 item 또한 그냥 제공해줌.  
  console.log("this is the turn of", item);
} // sayHello 함수를 길게 나타내는 방법

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach((item) => console.log("this is the turn of", item)); // sayHello function을 짧게 나타내는 방법. arrow function이라고 함.
  // forEach는 각각의 item에 대해 sayHello function을 실행시킴.
}
