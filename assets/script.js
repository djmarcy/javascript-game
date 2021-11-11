// Set variables
var count = $("#count");
var questions = $("#question-txt")
var answers = $("#answer-choices")
var resetBtn = document.getElementById("reset-btn")
var startBtn = document.getElementById("start-btn")

// Declare & execute functions
function startGame() {
    $("#start-block").css("display", "none");

}

function resetGame () {
    window.top.location = window.top.location
    
}

// Attach functions to appropriate buttons
startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);