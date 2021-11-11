// Set variables
var count = $("#count");
var questions = $("#question-txt")
var answers = $("#answer-choices")
var resetBtn = document.querySelector("#reset-btn")
var startBtn = document.querySelector("#start-btn")

// Declare & execute functions
function startGame() {
    
}

function resetGame () {
    window.top.location = window.top.location
    
}

// Attach functions to appropriate buttons
startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);