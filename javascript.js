var maxNum;
var guessedNum;
var numOfAttempts = 0;
var numOfCom;

// write number of attempts into HTML tags of id "counter"
document.getElementById("counter").innerHTML = numOfAttempts;

// comparing players number with rdm number of computer "numOfCom"
function compare() {
  if (guessedNum > maxNum) {
    alert("Not so smart, i guess");
  } else if (guessedNum == numOfCom) {
    alert("You guessed the right number");
    // if player guessed the right number, programm resets values and reloading page
    resetAll();
    location.reload();
  } else if (guessedNum > numOfCom) {
    alert("You guessed to high, try again");
    numOfAttempts++;
  } else if (guessedNum < numOfCom) {
    alert("You guessed to low, try again");
    numOfAttempts++;
  }
}

// count the attemps of guesses
function counter() {
  document.getElementById("counter").innerHTML = numOfAttempts;
}

// change display after maxNumber is entered
function setMaxNum() {
  maxNum = parseInt(document.getElementById("maxNum").value);
  numOfCom = Math.floor(Math.random() * maxNum + 1);
  maxNum = parseInt(document.getElementById("maxNum").value);
  console.log("maxNum" + maxNum);
  document.getElementById("maxNum").style.display = "none";
  document.getElementById("maxNumEnter").style.display = "none";
  document.getElementById("showMaxNum").innerHTML = maxNum;
}

// setting the guessedNum variable with .value
function choiceOfPlayer() {
  guessedNum = parseInt(document.getElementById("guessedNumber").value);
  console.log("guessed" + guessedNum);
  playGame();
}

// comparing and counting
function playGame() {
  compare();
  counter();
}

// eventlisteners for the buttons to start playing
document.getElementById("maxNumEnter").addEventListener("click", setMaxNum);
document.getElementById("guess").addEventListener("click", choiceOfPlayer);

// reset play
function resetAll() {
  document.getElementById("maxNum").value = 0;
  document.getElementById("guessedNumber").value = 0;
}
