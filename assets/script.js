// Set variables
$("#counter").text("100");
var questions = $("#question-txt");
var answers = $("#answer-choices");
var resetBtn = document.getElementById("reset-btn");
var startBtn = document.getElementById("start-btn");
var highScoreSubmit = document.getElementById("high-score-submit");
var answerBtns = document.getElementsByClassName("answers");
var finalScore = document.getElementById("final-score");
var resetScore = document.getElementById("reset-btn");
let currentQuestion = 0;
var timeLeft = 100;

// Questions
var qArray = [
  {
    Question: "What made Black Sabbath unique?",
    Responses: [
      "They were the first band to use distorted guitars",
      "They were responsible for the iconic 'devil's horns' gesture",
      "Their use of the tritone",
      "The members had all played in famous bands prior",
    ],
    Correct: "Their use of the tritone",
  },
  {
    Question: "Which style of music most heavily influenced early heavy metal?",
    Responses: ["Blues", "Rock and Roll", "Folk", "Psychadelic Rock"],
    Correct: "Blues",
  },
  {
    Question: "What is typical of the Doom sub-genre of extreme metal?",
    Responses: [
      "Frequent references to the video game 'Doom'",
      "Low-tuned guitars and slower tempo music meant to evoke a sense of dread",
      "Angry and nihilistic lyrical themes punctuated with rapid instrumentals",
      "None of the above",
    ],
    Correct:
      "Low-tuned guitars and slower tempo music meant to evoke a sense of dread",
  },
  {
    Question: "Who was the first heavy metal band?",
    Responses: ["Black Sabbath", "Led Zeppelin", "Coven", "Deep Purple"],
    Correct: "Black Sabbath",
  },
  {
    Question: "Who popularized the 'Devil's Horns' hand gesture?",
    Responses: [
      "Ozzy Osborne",
      "Gene Simmons",
      "Ronnie James Dio",
      "Lemmy Kilmister",
    ],
    Correct: "Ronnie James Dio",
  },
  {
    Question: "Why is Black Metal infamous?",
    Responses: [
      "Lyrical themes",
      "Church burnings and other acts of violence",
      "Raw and unrefined musical content",
      "All of the above",
    ],
    Correct: "All of the above",
  },
  {
    Question: "Who is the top-selling Metal band of all time?",
    Responses: ["Metallica", "Anthrax", "Judas Priest", "Black Sabbath"],
    Correct: "Metallica",
  },
  {
    Question: "Why is metalcore called metalcore?",
    Responses: [
      "There isn't a good reason — it's a catch-all term for metal with influences from genres such as rock or punk",
      "It's a fusion of hardcore punk and heavy metal",
      "It's a revivalist movement meant to return metal to its 'core'",
      "None of the above",
    ],
    Correct: "It's a fusion of hardcore punk and heavy metal",
  },
  {
    Question: "How did Black Metal get its name?",
    Responses: [
      "From the name of Venom's second album",
      "In reference to the black-and-white facepaint called 'corpsepaint' that musicians will commonly wear",
      "Because of the heavy lyrical focus on Satanism and anti-Christian sentiment within the genre",
      "Musicians will only wear black when performing",
    ],
    Correct: "From the name of Venom's second album",
  },
];

// Declare & execute functions
function startGame() {
  // Hide starting block & dispplay first question
  $("#start-block").css("display", "none");
  $("#question-block").css("display", "flex");

  // Set variable for the timer, and what to do when the timer ends

  var timeInterval = setInterval(function () {
    timeLeft--;
    $("#counter").text(timeLeft);

    if (currentQuestion >= qArray.length) {
      clearInterval(timeInterval);
    } else if (timeLeft === 0) {
      clearInterval(timeInterval);

      $("#counter").text("0");

      highScore();
    }
  }, 1000);

  // Propogate question & answers
  getQuestion();
  getAnswer();
}

function getQuestion() {
  if (currentQuestion < qArray.length) {
    $("#question-txt").text(qArray[currentQuestion].Question);
    $("#answer1").text(qArray[currentQuestion].Responses[0]);
    $("#answer2").text(qArray[currentQuestion].Responses[1]);
    $("#answer3").text(qArray[currentQuestion].Responses[2]);
    $("#answer4").text(qArray[currentQuestion].Responses[3]);
  } else {
    $("#final-score").text("Your Score is " + timeLeft + "!");
    console.log(timeLeft);
    highScore();
  }
}

$(".answers").click(getAnswer);

function getAnswer(event) {
  if (qArray[currentQuestion].Correct == event.target.innerText) {
  } else {
    timeLeft -= 5;
  }

  currentQuestion++;
  getQuestion();
}

function highScore() {
  $("#question-block").css("display", "none");
  $("#high-scores-block").css("display", "flex");
}

function resetGame() {
  window.location = window.location.href = "index.html";
}

function saveScore() {
  let hallOfFame = JSON.parse(localStorage.getItem("dataKey")) || [];

  let topScores = {
    Initials: document.getElementById("high-score-initials").value,
    Score: timeLeft,
  };

  hallOfFame.push(topScores);

  localStorage.setItem("dataKey", JSON.stringify(hallOfFame));

  for (let i = 0; i < hallOfFame.length; i++) {
    $("#top-scores").append(
      "<li class='scores'>" +
        hallOfFame[i].Initials +
        " — " +
        hallOfFame[i].Score +
        "</li>"
    );
  }
}

function resetSave() {
  localStorage.clear();
}

// Attach event listers to appropriate buttons
startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);
highScoreSubmit.addEventListener("click", saveScore);
resetScore.addEventListener("click", resetSave);
// 2nd page for High Scores
