// Set variables
$("#counter").text("100");
var questions = $("#question-txt");
var answers = $("#answer-choices");
var resetBtn = document.getElementById("reset-btn");
var startBtn = document.getElementById("start-btn");
var highScoreSubmit = document.getElementById("high-score-submit");

// Questions

var question1 = {
  Question: "What made Black Sabbath unique?",
  Responses:
    "They were the first band to use distorted guitars,They were responsible for the iconic 'devil's horns' gesture,Their use of the tritone,The members had all played in famous bands prior",
  Correct: "Their use of the tritone",
};
var question2 = {
  Question: "Which style of music most heavily influenced early heavy metal?",
  Responses: "Blues,Rock and Roll,Folk,Psychadelic Rock",
  Correct: "Blues",
};
var question3 = {
  Question: "What is typical of the Doom sub-genre of extreme metal?",
  Responses:
    "Frequent references to the video game 'Doom',Low-tuned guitars and slower tempo music meant to evoke a sense of dread,Angry and nihilistic lyrical themes punctuated with rapid instrumentals,None of the above",
  Correct:
    "Low-tuned guitars and slower tempo music meant to evoke a sense of dread",
};
var question4 = {
  Question: "Who was the first heavy metal band?",
  Responses: "Black Sabbath,Led Zeppelin,Coven,Deep Purple",
  Correct: "Black Sabbath",
};
var question5 = {
  Question: "Who popularized the 'Devil's Horns' hand gesture?",
  Responses: "Ozzy Osborne,Gene Simmons,Ronnie James Dio,Lemmy Kilmister",
  Correct: "Ronnie James Dio",
};
var question6 = {
  Question: "Why is Black Metal infamous?",
  Responses:
    "Lyrical themes,Church burnings and other acts of violence,Raw and unrefined musical content, All of the above",
  Correct: "All of the above",
};
var question7 = {
  Question: "Who is the top-selling Metal band of all time?",
  Responses: "Metallica,Anthrax,Judas Priest,Black Sabbath",
  Correct: "Metallica",
};
var question8 = {
  Question: "Why is metalcore called metalcore?",
  Responses:
    "There isn't a good reason — it's a catch-all term for metal with influences from genres such as rock or punk,It's a fusion of hardcore punk and heavy metal,It's a revivalist movement meant to return metal to its 'core',None of the above",
  Correct: "",
};
var question9 = {
  Question: "How did Black Metal get its name?",
  Responses:
    "From the name of Venom's second album,In reference to the black-and-white facepaint called 'corpsepaint' that musicians will commonly wear,Because of the heavy lyrical focus on Satanism and anti-Christian sentiment within the genre,Musicians will only wear black when performing",
  Correct: "From the name of Venom's second album",
};

// Declare & execute functions
function startGame() {
  // Hide starting block & dispplay first question
  $("#start-block").css("display", "none");
  $("#question-block").css("display", "flex");

  // Set variable for the timer, and what to do when the timer ends
  var timeLeft = 3;

  var timeInterval = setInterval(function () {
    timeLeft--;
    $("#counter").text(timeLeft);

    if (timeLeft === 0) {
      clearInterval(timeInterval);

      $("#counter").text("0");

      highScore();
    }
  }, 1000);

  // Propogate question & answers
  $("#question-txt").text(question1.Question);

  // Split question responses into different segments of the list
  var responses = question1.Responses.split(",");
  console.log(responses);

  for (i = 0; i < responses.length; i++) {
    $("#answer-choices").append(
      "<li class='answers'>" + responses[i] + "</li>"
    );
  }

  // Create list items for each response
}

function highScore() {
  $("#question-block").css("display", "none");
  $("#high-scores-block").css("display", "flex");
}

function saveScore() {
  var gameScore = document.getElementById("high-score-initials");
  localStorage.setItem("Initials:", gameScore.value);
}

function resetGame() {
  window.top.location = window.top.location;
}

// Attach event listers to appropriate buttons
startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);
highScoreSubmit.addEventListener("click", saveScore);
