// Initialize game variables
var timer = 60; // Timer starts at 60 seconds
var score = 0; // Initial score is 0
var randomHit = 0; // Random number to hit
var timerInterval; // Variable to store the timer interval


// Function to increase the score
function increaseScore() {
  score += 10; // Increase score by 10
  document.querySelector("#scoreval").textContent = score; // Update score display
}


// Function to run the game timer
function runTimer() {
  clearInterval(timerInterval); // Clear any existing timer
  timerInterval = setInterval(function () {
    if (timer > 0) {
      timer--; // Decrease timer by 1 every second
      document.querySelector("#timerval").textContent = timer; // Update timer display
    } else {
      clearInterval(timerInterval); // Stop timer when it reaches 0
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`; // Display game over message
    }
  }, 1000);
}


// Function to create bubbles with random numbers
function makeBubble() {
  var clutter = ""; // Initialize empty string for bubbles

  for (var i = 1; i <= 114; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`; // Create a bubble with a random number
  }

  document.querySelector("#pbtm").innerHTML = clutter; // Display bubbles in the game area
}

// Function to generate a new random number to hit
function getNewHit() {
  randomHit = Math.floor(Math.random() * 10); // Generate a random number
  document.querySelector("#hitval").textContent = randomHit; // Display the number to hit
}

// Function to start the game
function startGame() {
  makeBubble(); // Create bubbles
  runTimer(); // Start the timer
  getNewHit(); // Generate a number to hit
}

document.querySelector("#pbtm").addEventListener("click", (details) => {
  var clickedNum = Number(details.target.textContent);
  if (clickedNum === randomHit) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

document.querySelector("#restart").addEventListener("click", () => {
  score = 0;
  document.querySelector("#scoreval").textContent = score;
  timer = 60;
  document.querySelector("#timerval").textContent = timer;
  startGame();
})


startGame();
