
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
  

var timeLeft = 240
var timeLeftEl = document.getElementById("timeLeft");

timeLeftEl.innerHTML= timeLeft