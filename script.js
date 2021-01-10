
// Variables


// Countdown timer
function countdown() {
    var timeLeft = 240
    var timeLeftEl = document.getElementById("timeLeft");

    timeLeftEl.innerHTML = timeLeft
    
    console.log(timeLeftEl)
    console.log(timeLeft)

    var timerInterval = setInterval(function() {

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

  countdown();


  // Welcome Page
  var welcomeBanner = document.getElementById("welcomemessage");
  var startBtn = document.getElementById("startbtn");
  var header = document.createElement("h1");
  var message = document.createElement("p");
  


  document.getElementById("welcomemessage").style.textAlign = "center";
  document.getElementById("startbtn").style.textAlign = "center";


  header.textContent = "Coding Quiz";
  message.textContent = "Try to answer the following javasript questions within the given time. Any incorrect answers will take 5 seconds off your remaining time."
  welcomeBanner.appendChild(header);
  welcomeBanner.appendChild(message);




  // Quiz
  var card = document.getElementById("card")
  var question = document.getElementById("question");
  var ans1 = document.getElementById("answer1");
  var ans2 = document.getElementById("answer2");
  var ans3 = document.getElementById("answer3");
  var ans4 = document.getElementById("answer4");

  function hideCard() {
    document.getElementById("card").style.display = "none";
  }

  hideCard();