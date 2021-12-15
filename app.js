const age = 96;
function calculateKrAge(ageOfForeigner) {
  ageOfForeigner + 2; // function이 function의 밖과 소통하는 방법.
  return "hello";
} // 작업을 하고 그 작업의 결과를 알려주는 function

const krAge = calculateKrAge(age); // function을 호출하는 코드. function의 return 값이 됨.

console.log(krAge);
// function에서 console.log하는 것이 아니라 function의 return값과 같은 variable을 console.log하고 있음. 
