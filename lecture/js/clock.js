const clock = document.querySelector("#clock");

function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000); // 5000ms = 5초
setTimeout(sayHello, 5000);
