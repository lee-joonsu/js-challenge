const calculator = {
  plus: function (a, b) {
    console.log("hello");
    return a + b; // return을 하면 function은 작동을 멈추고 결과 값을 return하고 끝내버림.
    console.log("bye bye"); // 콘솔 상에 나타나지 않음.
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
// 변수들끼리 상호의존적임. function 안에서 console.log할 때와는 차원이 다름.
// 원하는 변수만 콕 집어서 결과를 알 수 있음.
