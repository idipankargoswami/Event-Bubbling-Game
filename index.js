var timer = 60;
var score = 0;
var randomHit = 0;



function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}


function runTimer() {
  var timerInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerInterval);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}



function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 114; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function getNewHit() {
  randomHit = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = randomHit;
}

document.querySelector("#pbtm").addEventListener("click", (details) => {
  var clickedNum = Number(details.target.textContent);
  if (clickedNum === randomHit) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});


runTimer();
makeBubble();
getNewHit();
