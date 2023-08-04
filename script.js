var score = 0;
var hit;
function makeBubble() {
  document.querySelector(".btm").innerHtml = "";

  for (let i = 0; i < 176; i++) {
    var rn = Math.floor(Math.random() * 10);
    document.querySelector(
      ".btm"
    ).innerHTML += `<div class="bubble">${rn}</div>`;
  }
}
function timer() {
  var time = 60;
  setInterval(function () {
    time--;
    if (time >= 0) document.querySelector(".timer_screen").textContent = time;
    else document.querySelector(".btm").innerHTML = "Game Over";
  }, 1000);
}
function hitNumber() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector(".hit_screen").textContent = hit;
}
function incscore() {
  score += 10;
  document.querySelector(".score_screen").textContent = score;
}
document.querySelector(".btm").addEventListener("click", function (a) {
  if (hit === Number(a.target.textContent)) {
    incscore();
    makeBubble();
    hitNumber();
  }
});
makeBubble();
timer();
hitNumber();
