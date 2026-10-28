//Generate random choice of rock, paper, or scissors for the computer player, return result.
function getComputerChoice()
{
  let choice1 = "rock", choice2 = "paper", choice3 = "scissors";
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum == 0)
  {
    return choice1;
  }
  else if (randomNum == 1)
  {
    return choice2;
  }
  else if (randomNum == 2)
  {
return choice3;
  }
}

//Compare player choices, display round winner message, increment winner's score by 1.
function playRound (playerChoice,computerChoice)
{
  //Make user input all lower case for compatibility with conditional logic.
  playerChoice = playerChoice.toLowerCase();

  console.log("Computer choice: " + computerChoice);

  //Check round winner, update display.
  //Tie
  if (playerChoice === computerChoice)
  {
    computerText.textContent = "Tied!";
    computerText.style.color = "white";
    computerContainer.style.borderColor = "white";
    playerText.textContent = "Tied!";
    playerText.style.color = "white";
    playerContainer.style.borderColor = "white";
  }
  //Computer wins
  else if (playerChoice === "rock" && computerChoice === "paper"
  || playerChoice === "paper" && computerChoice === "scissors"
  || playerChoice === "scissors" && computerChoice === "rock")
  {
    computerText.textContent = "Winner!";
    computerText.style.color = "limegreen";
    computerContainer.style.borderColor = "limegreen";
    playerText.textContent = "Loser :(";
    playerText.style.color = "red";
    playerContainer.style.borderColor = "red";
    
    computerScore++;
  }
  //Player wins
  else if (playerChoice === "rock" && computerChoice === "scissors"
    || playerChoice === "paper" && computerChoice === "rock"
    || playerChoice === "scissors" && computerChoice === "paper")
  {
    computerText.textContent = "Loser :(";
    computerText.style.color = "red";
    computerContainer.style.borderColor = "red";
    playerText.textContent = "Winner!";
    playerText.style.color = "limegreen";
    playerContainer.style.borderColor = "limegreen";
 
    playerScore++;
  }

  updateScore();
}

function updateScore()
{
  gameInfo.textContent = "Round: " + roundCounter;
  playerScoreTxt.textContent = "Score: " + playerScore;
  computerScoreTxt.textContent = "Score: " + computerScore;
  roundCounter++;
 
  //Update score info.
  if (roundCounter > 1)
  {
  }

  if (playerScore == 5 || computerScore == 5)
  {
    checkWinner();
  }
}

//Check which player wins, return string with formatted result.
function checkWinner ()
{
  btnContainer.removeChild(rockBtn);
  btnContainer.removeChild(paperBtn);
  btnContainer.removeChild(scissorsBtn);

  const myTimout = setTimeout(() => {

    //Display winner and play again button
    if (playerScore > computerScore)
    {
      playerText.textContent = "You win the game!";
      playerText.style.color = "limegreen";
      playerContainer.style.borderColor = "limegreen";

      computerText.textContent = "Computer lost the game!";
      computerText.style.color = "red";
      computerContainer.style.borderColor = "red";
    }
    else if (playerScore < computerScore)
    {
      playerText.textContent = "You lost the game!";
      playerText.style.color = "red";
      playerContainer.style.borderColor = "red";

      computerText.textContent = "Computer won the game!";
      computerText.style.color = "limegreen";
      computerContainer.style.borderColor = "limegreen";
    }

    btnContainer.appendChild(playAgainBtn);

  }, 2000);
}

function styleButton (element, btnName)
{
  element.style.height = "40px";
  element.style.paddingLeft = "5px";
  element.style.paddingRight = "5px";
  element.style.border = "2px dashed white";
  element.style.borderRadius = "5px";
  element.style.backgroundColor = "black";
  element.style.fontSize = "24px";
  element.textContent = btnName;
  element.addEventListener("mouseover", () => element.style.borderColor = "limegreen");
  element.addEventListener("mouseout", () => {
    element.style.borderColor = "white";
    element.style.color = "white";
  });
  element.addEventListener("mousedown", () => {
    element.style.borderColor = "green";
    element.style.color = "lightgray";
  });
  element.addEventListener("mouseup", () => {
    element.style.borderColor = "white";
    element.style.color = "white";
  });
}

//Display game.
function displayGame ()
{
  //Display buttons when game starts.
  btnContainer.removeChild(playBtn);
  btnContainer.appendChild(rockBtn); 
  btnContainer.appendChild(paperBtn);
  btnContainer.appendChild(scissorsBtn);

  computerTitle.textContent = "Computer";
  playerTitle.textContent = "Player";

  computerContainer.style.borderColor = "white";
  playerContainer.style.borderColor = "white";

  updateScore();
}

//Set display to default after play again button is pressed.
function resetGame ()
{
  btnContainer.removeChild(playAgainBtn);
  btnContainer.appendChild(rockBtn);
  btnContainer.appendChild(paperBtn);
  btnContainer.appendChild(scissorsBtn);

  playerText.textContent = "";
  playerContainer.style.borderColor = "white";

  computerText.textContent = "";
  computerContainer.style.borderColor = "white";

  computerScore = 0;
  playerScore = 0;
  roundCounter = 1;

  updateScore();
}

//Variables for node manipulation.
const playBtn = document.querySelector("#play-button");

//Variable initialization.
let playerScore = 0, computerScore = 0;
let roundCounter = 1;

//Create buttons for user selection.
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const playAgainBtn = document.createElement("button");

//Style buttons and add click event listeners for playing a round.
styleButton(rockBtn, "Rock");
styleButton(paperBtn, "Paper");
styleButton(scissorsBtn, "Scissors");
styleButton(playAgainBtn, "Play Again");

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
playAgainBtn.addEventListener("click", () => resetGame());
    
//Create variables to store elements.
const playerContainer = document.querySelector("#player-choice");
const computerContainer = document.querySelector("#computer-choice");    
const btnContainer = document.querySelector("#button-container");
const infoContainer = document.querySelector("#infoContainer");
const computerTitle = document.querySelector("#computer-title");
const computerText = document.querySelector("#computer-text");
const playerTitle = document.querySelector("#player-title");
const playerText = document.querySelector("#player-text");
const playerScoreTxt = document.querySelector("#player-score");
const computerScoreTxt = document.querySelector("#computer-score");
const gameInfo = document.querySelector("#game-info");

//Start game when play button is pressed.
playBtn.addEventListener("click", (e)=>{
  displayGame();
});
