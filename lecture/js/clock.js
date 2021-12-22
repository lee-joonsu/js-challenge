const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();   //website가 load되자마자 getClock()을 즉시 호출하고,
setInterval(getClock, 1000); // 매초마다 다시 실행되도록 함.
