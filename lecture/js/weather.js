function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
} // 위치를 얻는데 성공했을 때
function onGeoError() {
  alert("can't find you. No weather for you");
} // 만약 user가 위치 받는게 불가능할 때

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
