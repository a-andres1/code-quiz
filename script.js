// global indexer


// Countdown timer
function countdown() {
  var timeLeft = 240
  var timeLeftEl = document.getElementById("timeLeft");

  timeLeftEl.innerHTML = timeLeft

  // console.log(timeLeftEl)
  // console.log(timeLeft)

  var timerInterval = setInterval(function () {

    // console.log(timeLeft)

    if (timeLeft === 1) {
      timeLeftEl.innerHTML = (timeLeft--) + " second left";
    }

    else if (timeLeft > 0) {
      timeLeftEl.innerHTML = (timeLeft--) + " seconds left";
    }

    else {
      clearInterval(timerInterval);
      alert("Time's up.")
    }

  }, 1000);
}

// countdown();


// Welcome Page
// Variables from Welcome message
var welcomeBanner = document.getElementById("welcomemessage");
var startBtn = document.getElementById("startbtn");

// creates divs for Welcome message
var header = document.createElement("h1");
var message = document.createElement("p");

// styling for the Welcome message div
document.getElementById("welcomemessage").style.textAlign = "center";

// creates content 
header.textContent = "Coding Quiz";
message.textContent = "Try to answer the following javasript questions within the given time. Any incorrect answers will take 5 seconds off your remaining time."
welcomeBanner.appendChild(header);
welcomeBanner.appendChild(message);
welcomeBanner.appendChild(startBtn);

// add event listeners for Start button

startBtn.addEventListener("click", function () {
  hideWelcome();
  displayCard();
  countdown();
  codeQuiz();
})


// Quiz Logic

// variables for quiz card
var card = document.getElementById("card")
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");
var questionDiv = document.getElementById("question");
var ansbtns = document.getElementsByClassName("abtn");



//  initially hides card
card.style.display = "none";

// fuction to display the Quiz card on click
function displayCard() {
  console.log("Displaycard function ran");
  // once the start button is clicked, sets the card to its initial state
  if (card.style.display === "none") {
    card.style.display = "initial";
  }
  // if start button is clicked again, will rehide the card
  else {
    card.style.display = "none";
  }
}

// hides welcome screen
function hideWelcome() {
  welcomeBanner.style.display = "none";
}

// fuction that populates the quiz card
var gindex = 0;
function codeQuiz() {

  
  // compare to the correct answer - wrong, take away 5 seconds
  // display the next question - global indexer ++ - gindexer
  // increment when you click these buttons. 
  // event.target? 
  // needs to call codequiz() again

  var currentQuestion = questions[gindex].question;
  questionDiv.innerHTML = currentQuestion;
  var currentAns1 = questions[gindex].answers[0];
  ans1.innerHTML = currentAns1
  var currentAns2 = questions[gindex].answers[1];
  ans2.innerHTML = currentAns2
  var currentAns3 = questions[gindex].answers[2];
  ans3.innerHTML = currentAns3
  var currentAns4 = questions[gindex].answers[3];
  ans4.innerHTML = currentAns4

  ans1.addEventListener("click", function () {
    console.log((this).textContent);

    if ((this).textContent == questions[gindex].correctAnswer) {
      nextQuestion();
    }
    else {
      timeLeft -= 5;
      nextQuestion();
      console.log("else");
    }
  });

  ans2.addEventListener("click", function () {
    console.log((this).textContent);

    if ((this).textContent == questions[gindex].correctAnswer) {
      nextQuestion();
    }
    else {
      timeLeft -= 5;
      nextQuestion();
    }
  });

  ans3.addEventListener("click", function () {
    console.log((this).textContent);

    if ((this).textContent == questions[gindex].correctAnswer) {
      nextQuestion();
    }
    else {
      timeLeft -= 5;
      nextQuestion();
    }
  });
  ans4.addEventListener("click", function () {
    console.log((this).textContent);

    if ((this).textContent == questions[gindex].correctAnswer) {
      nextQuestion();
    }
    else {
      timeLeft -= 5;
      nextQuestion();
    }
  });


  console.log("gindex: " + gindex);
}

function nextQuestion() {
  gindex++;
  codeQuiz();
  console.log("next question called");
}


// clearTimeout() <- to stop timer

// store score in local storage 


// High scores initial input
var initialInput = document.getElementById("initials");
initialInput.style.display = "none";

// questions 1-3 attributed to geeksforgeeks, questions 4-6 attributed to tutorialspoint.com, I came up with 7, you're welcome

var questions = [
  {
    question: "What is the tag under which one can write Javascript?",
    answers: [
      "javascript",
      "scrapt",
      "script",
      "javascripts",
    ],
    correctAnswer: "<script>"
  },
  {
    question: "Which of the following is the correct syntax to display the text \"I'm tired.\" in an alert box?",
    answers: [
      "alertbox(\"I'm tired.\")",
      "message(\"I'm tired.\"",
      "box(\"I'm tired.\")",
      "alert(\"I'm tired.\")",
    ],
    correctAnswer: "alert(\"I'm tired.\")",
  },
  {
    question: "What is the correct syntax to refer to an external script called \"sleepy.js\"?",
    answers: [
      "script src=\"sleepy.js\"",
      "script href=\"sleepy.js\"",
      "script ref=\"sleepy.js\"",
      "script rel=\"sleepy.js\"",
    ],
    correctAnswer: "<script src=\"sleepy.js\">",
  },
  {
    question: "Which of the following type of variable is visible everywhere in your JavaScript code?",
    answers: [
      "global constiable",
      "local constiable",
      "None of the above",
      "All of the above",
    ],
    correctAnswer: "global constiable",
  },
  {
    question: "Which built-in method returns the string representation of the number's value?",
    answers: [
      "toValue()",
      "toNumber()",
      "toString()",
      "None of the above",
    ],
    correctAnswer: "toString()",
  },
  {
    question: "Which of the following function of String object returns the calling string value converted to lower case?",
    answers: [
      "toLocaleLowerCase()",
      "toLowerCase()",
      "toString(),",
      "substring()",
    ],
    correctAnswer: "toLowerCase()",
  },
  {
    question: "What is the name for the notation used to type in JavaScript?",
    answers: [
      "HorseyCase",
      "DonkeyScript",
      "CamelCase",
      "PonyType",
    ],
    correctAnswer: "<script>"
  },
]


// get question to display on page 