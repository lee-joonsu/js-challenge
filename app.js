function sayHello(nameOfPerson, age) {
  // 여기서의 sayHello()는 아래 값이나 데이터를 받음. 괄호 안에는 아무 값이나 변수가 들어갈 수 있음.
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21); // 함수를 실행시킴. 괄호 안의 값이나 데이터를 function에 보냄.

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
} // function 안에 있는 firstNumber와 secondNumber는 중괄호{} 밖에서 존재할 수 없음.

function divide(a, b) {
  console.log(a / b);
}
plus(); // NaN이 나옴. Not a Number(숫자가 아님)이라는 뜻
plus(8, 60);
divide(98, 20);
