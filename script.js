let hours = document.getElementById("hours");
let min = document.getElementById("minitus");
let sec = document.getElementById("second");

setInterval(() => {
  let currnetTime = new Date();

  hours.innerHTML = (currnetTime.getHours() < 10 ? "0" : "") + currnetTime.getHours();
  min.innerHTML = (currnetTime.getMinutes() < 10 ? "0" : "") + currnetTime.getMinutes();
  sec.innerHTML = (currnetTime.getSeconds() < 10 ? "0" : "") + currnetTime.getSeconds();
}, 1000);
