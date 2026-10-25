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

  if (playerChoice === computerChoice)
  {
    console.log("Tied!")
  }
  else if (playerChoice === "rock" && computerChoice === "paper"
  || playerChoice === "paper" && computerChoice === "scissors"
  || playerChoice === "scissors" && computerChoice === "rock")
  {
    console.log("Computer wins, " + computerChoice + " beats " + playerChoice + "!");
    computerScore++;
  }
  else if (playerChoice === "rock" && computerChoice === "scissors"
    || playerChoice === "paper" && computerChoice === "rock"
    || playerChoice === "scissors" && computerChoice === "paper")
  {
    console.log("You win, " + playerChoice + " beats " + computerChoice + "!");
    playerScore++;
  }
}

//Check which player wins, return string with formatted result.
function checkWinner ()
{
  if (playerScore > computerScore)
  {
    return "you win!";
  }
  else if (playerScore < computerScore)
  {
    return "computer wins!";
  }
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
    element.style.borderColor = "limegreen";
    element.style.color = "white";
  });
}

//Game loop.
function playGame ()
{
  //Variable initialization.
  let playerScore = 0, computerScore = 0;

  //Create variables to store elements.
  let playerChoice = document.querySelector("#player-choice");
  let computerChoice = document.querySelector("#computer-choice");    
  let btnContainer = document.querySelector("#button-container");
  let gameInfo = document.querySelector("#game-info");
  let playBtn = document.querySelector("#play-button");

  //Create buttons for user selection.
  const rockBtn = document.createElement("button");
  const paperBtn = document.createElement("button");
  const scissorsBtn = document.createElement("button");
  const playAgainBtn = document.createElement("button");

  //Remove play button.
  btnContainer.removeChild(playBtn);

  //Game loop.
  do
  {
    let counter = 1;
    
    //Style buttons and add click event listeners for playing a round.
    styleButton(rockBtn, "Rock");
    styleButton(paperBtn, "Paper");
    styleButton(scissorsBtn, "Scissors");

    rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
    
    
    //Display buttons when game starts.
    btnContainer.appendChild(rockBtn); 
    btnContainer.appendChild(paperBtn);
    btnContainer.appendChild(scissorsBtn);

    console.log("Round number " + (counter));
    counter++;
    
    console.log("Current score\n" + 
      "-------------\n" +
      "You: " + playerScore + "\n" + 
      "Computer: " + computerScore);

  }while (playerScore <=5 && computerScore <=5);

  //Display game over, results, and goodbye message.
  console.log("Game over, " + checkWinner() + "\n" +
    "Goodbye!");
}

//Variables for node manipulation.
const playBtn = document.querySelector("#play-button");

//Start game when play button is pressed.
playBtn.addEventListener("click", (e)=>{
  playGame();
});
