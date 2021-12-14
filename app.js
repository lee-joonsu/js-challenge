const player = {
  name: "nico",
  points: 10,
  fat: true,
}; // object임.
console.log(player);
console.log(player.name); //object(player)안에 있는 property(name)를 부름.

player.fat = false; // fat이라는 프로퍼티의 값을 true에서 false로 바꿈(업데이트함).
console.log(player);
player.lastName = "potato"; // object에 lastName이라는 property와 그 값을 추가함.
player.points = player.points + 15;
console.log(player);
