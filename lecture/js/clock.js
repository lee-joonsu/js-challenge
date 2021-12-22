const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();           
  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const seconds = String(date.getSeconds()).padStart(2, "0")
 // padStart()는 string이 가져야하는 길이를 2로 설정하고, 
 // 그렇지 않다면 string의 앞쪽에 0을 추가하도록 함. 
clock.innerText = `${hours}:${minutes}:${seconds}`;
} 

getClock();   //website가 load되자마자 getClock()을 즉시 호출하고,
setInterval(getClock, 1000); // 매초마다 다시 실행되도록 함.
