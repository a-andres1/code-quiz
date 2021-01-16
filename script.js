// global indexer
var gindex = 0;

// Countdown timer
function countdown() {
  var timeLeft = 240
  var timeLeftEl = document.getElementById("timeLeft");

  timeLeftEl.innerHTML = timeLeft

  console.log(timeLeftEl)
  console.log(timeLeft)

  var timerInterval = setInterval(function () {

    console.log(timeLeft)

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

function hideWelcome() {
  welcomeBanner.style.display = "none";
}

// fuction that populates the quiz card

function codeQuiz() {


  var currentQuestion = questions[gindex].question;
  questionDiv.textContent = currentQuestion;
  var currentAns1 = questions[gindex].answers[0];
  ans1.textContent = currentAns1
  var currentAns2 = questions[gindex].answers[1];
  ans2.textContent = currentAns2
  var currentAns3 = questions[gindex].answers[2];
  ans3.textContent = currentAns3
  var currentAns4 = questions[gindex].answers[3];
  ans4.textContent = currentAns4
  // hides welcome screen


  //   // Answer button click listener
  //   // query all the buttons
  //   document.querySelectorAll('.abtn').forEach(item => {
  //     // creates an array
  //     // adds an event listener to each button you create 
  //     item.addEventListener('click', event => {
  //       // global indexer ++ - this will progress through an array representes your question. - go at the top of my script. 
  //         //handle click
  //         // answerSelected(item, item.getAttribute("data-array"));
  //         console.log((this).textContent);
  //     })
  // })


  ans1.addEventListener("click", function () {
    console.log((this).textContent);

    if ((this).textContent == questions[gindex].correctAnswer) {

      gindex++
      codeQuiz();
      console.log("if");

    }
    else {
      timeLeft -= 5;
      console.log(questions[gindex].correctAnswer)
      gindex++
      codeQuiz();
      console.log("else");

    }

    // compare to the correct answer - wrong, take away 5 seconds
    // display the next question - global indexer ++ - gindexer
    // increment when you click these buttons. 
    // event.target? 
    // needs to call codequiz() again
  });
  ans2.addEventListener("click", function () {
    console.log((this).textContent);

    if ((this).textContent == questions[gindex].correctAnswer) {
      gindex++

      codeQuiz();
      console.log("if");

    }
    else {
      timeLeft -= 5;
      console.log(questions[gindex].correctAnswer)
      gindex++
      codeQuiz();
      console.log("else");

    }
  });
  ans3.addEventListener("click", function () {
    console.log((this).textContent);

    if ((this).textContent == questions[gindex].correctAnswer) {

      gindex++
      codeQuiz();
      console.log("if");

    }
    else {
      timeLeft -= 5;
      console.log(questions[gindex].correctAnswer)
      gindex++
      codeQuiz();
      console.log("else");

    }
  });
  ans4.addEventListener("click", function () {
    console.log((this).textContent);

    if ((this).textContent == questions[gindex].correctAnswer) {

      gindex++
      codeQuiz();
      console.log("if");

    }
    else {
      timeLeft -= 5;
      console.log(questions[gindex].correctAnswer)
      gindex++
      codeQuiz();
      console.log("else");

    }

    
  });
 


  console.log("gindex: " + gindex);



  // i++
}


// clearTimeout() <- to stop timer

// store score in local storage 


// High scores initial input
var initialInput = document.getElementById("initials");
initialInput.style.display = "none"


// Arrays for questions

// const questionArray = [ , "What is the correct syntax to referring to an external script called \"sleepy.js\"?", "Which of the following type of variable is visible everywhere in your JavaScript code?", "Which built-in method returns the string representation of the number's value?", "Which of the following function of String object returns the calling string value converted to lower case?", "What is the name for the notation used to type in JavaScript?"]
// const answer1Array = [ , "<script src=\"sleepy.js\">", "global constiable", "toValue()", "toLocaleLowerCase()", "HorseyCase"]
// const answer2Array = [ , "<script href=\"sleepy.js\">", "local constiable", "toNumber()", "toLowerCase()", "DonkeyScript"]
// const answer3Array = [, "<script ref=\"sleepy.js\">", "None of the above", "toString()", "toString(),", "CamelCase"]
// const answer4Array = [  "<script rel=\"sleepy.js\">", "All of the above", "None of the above", "substring()", "PonyType"]

// questions 1-3 attributed to geeksforgeeks, questions 4-6 attributed to tutorialspoint.com, I came up with 7, you're welcome

var questions = [
  {
    question: "What is the tag under which one can write Javascript?",
    answers: [
      "<javascript>",
      "<scrapt>",
      "<script>",
      "<javascripts>",
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
    question: "question 2",
    answers: [
      "<javascript>",
      "<scrapt>",
      "<script>",
      "<javascripts>",
    ],
    correctAnswer: "<script>"
  },
  {
    question: "question 3",
    answers: [
      "<javascript>",
      "<scrapt>",
      "<script>",
      "<javascripts>",
    ],
    correctAnswer: "<script>"
  },
  {
    question: "question 4",
    answers: [
      "<javascript>",
      "<scrapt>",
      "<script>",
      "<javascripts>",
    ],
    correctAnswer: "<script>"
  },
  {
    question: "question 5",
    answers: [
      "<javascript>",
      "<scrapt>",
      "<script>",
      "<javascripts>",
    ],
    correctAnswer: "<script>"
  },
  {
    question: "question 6",
    answers: [
      "<javascript>",
      "<scrapt>",
      "<script>",
      "<javascripts>",
    ],
    correctAnswer: "<script>"
  },
]


// get question to display on page 