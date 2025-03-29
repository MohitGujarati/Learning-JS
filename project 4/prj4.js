let randomNum = Math.floor(Math.random() * 100) + 1;

    // Get elements
    const submit = document.querySelector("#subt");
    const userInput = document.querySelector("#guessField");
    const guessSlot = document.querySelector(".guesses");
    const remaining = document.querySelector(".lastResult");
    const lowOrHi = document.querySelector(".lowOrHi");
    const resetButton = document.querySelector("#reset");

    let prevGuesses = [];
    let numGuesses = 1;
    let playGame = true;

    if (playGame) {
      submit.addEventListener("click", function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
      });
    }

    function validateGuess(guess) {
      if (isNaN(guess)) {
        alert('Please enter a valid number');
      } else if (guess < 1) {
        alert('Please enter a number greater than or equal to 1');
      } else if (guess > 100) {
        alert("Please enter a number less than or equal to 100");
      } else {
        prevGuesses.push(guess);
        if (numGuesses > 10) {
          displayGuess(guess);
          displayMessage(`Game Over! The random number was ${randomNum}`);
          endGame();
        } else {
          displayGuess(guess);
          checkGuess(guess);
        }
      }
    }

    function checkGuess(guess) {
      if (guess === randomNum) {
        displayMessage("🎉 You guessed it right! Congratulations!");
        endGame();
      } else if (guess < randomNum) {
        displayMessage("📉 Your guess is too low.");
      } else {
        displayMessage("📈 Your guess is too high.");
      }
    }

    function displayGuess(guess) {
      userInput.value = "";
      guessSlot.innerHTML += `${guess} , `;
      numGuesses++;
      remaining.innerHTML = `${11 - numGuesses}`;
    }

    function displayMessage(msg) {
      lowOrHi.innerHTML = `<h2>${msg}</h2>`;
    }

    function endGame() {
      userInput.disabled = true;
      submit.disabled = true;
      resetButton.style.display = "block";
      resetButton.addEventListener("click", newGame);
    }

    function newGame() {
      randomNum = Math.floor(Math.random() * 100) + 1;
      prevGuesses = [];
      numGuesses = 1;
      guessSlot.innerHTML = "";
      remaining.innerHTML = "10";
      lowOrHi.innerHTML = "";
      userInput.disabled = false;
      submit.disabled = false;
      resetButton.style.display = "none";
      displayMessage("New game started! Try guessing the number.");
    }