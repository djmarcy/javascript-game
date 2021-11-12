function saveScore() {

    // set score equal to counter when done with quiz
    var gameScore = {
      Initials: document.getElementById("high-score-initials"),
      Score: $("#counter").text,
    }
  
    localStorage.setItem("dataKey", JSON.stringify(gameScore));
     
  }
  
  // switch to HS page: window.location.pageURL
highScoreSubmit.addEventListener("click", saveScore);