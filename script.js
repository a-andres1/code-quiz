
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
// Variables from Welcome page
var welcomeBanner = document.getElementById("welcomemessage");
var startBtn = document.getElementById("startbtn");

// creates divs for Welcome page
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
startBtn.addEventListener("click", displayCard);
startBtn.addEventListener("click", countdown);


// Quiz Logic

// variables for quiz card
var card = document.getElementById("card")
var question = document.getElementById("question");
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");

//  initially hides card
card.style.display = "none";

// fuction to display the Quiz card on click
function displayCard() {
  // once the start button is clicked, sets the card to its initial state
  if (card.style.display === "none") {
    card.style.display = "initial";
  }
// if start button is clicked again, will rehide the card
  else {
    card.style.display = "none"
  }
}

