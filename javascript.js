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

//Ask user for choice between rock, paper, or scissors.
function getHumanChoice()
{
  return prompt("Please type your choice: 'rock', 'paper', or 'scissors'");
}

//Compare player choices, display round winner message, increment winner's score by 1.
function playRound (humanChoice,computerChoice)
{
  //Make user input all lower case for compatibility with conditional logic.
  humanChoice = humanChoice.toLowerCase();

  console.log("Computer choice: " + computerChoice);

  if (humanChoice === computerChoice)
  {
    console.log("Tied!")
  }
  else if (humanChoice === "rock" && computerChoice === "paper"
  || humanChoice === "paper" && computerChoice === "scissors"
  || humanChoice === "scissors" && computerChoice === "rock")
  {
    console.log("Computer wins, " + computerChoice + " beats " + humanChoice + "!");
    computerScore++;
  }
  else if (humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "scissors" && computerChoice === "paper")
  {
    console.log("You win, " + humanChoice + " beats " + computerChoice + "!");
    humanScore++;
  }
}

//Check which player wins, return string with formatted result.
function checkWinner ()
{
  if (humanScore > computerScore)
  {
    return "you win!";
  }
  else if (humanScore < computerScore)
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
}

//Game loop.
function playGame ()
{
  //Game loop.
  do
  {
    //Create buttons for user selection.
    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorsBtn = document.createElement("button");
    const playAgainBtn = document.createElement("button");

    //Style buttons.
    styleButton(rockBtn, "Rock");
    styleButton(paperBtn, "Paper");
    styleButton(scissorsBtn, "Scissors");
    

    //Create variables to store elements.
    let playerChoice = document.querySelector("#player-choice");
    let computerChoice = document.querySelector("#computer-choice");    
    let btnContainer = document.querySelector("#button-container");
    let gameInfo = document.querySelector("#game-info");
    let playBtn = document.querySelector("#play-button");

    //Display buttons when game starts.
    btnContainer.removeChild(playBtn);
    btnContainer.appendChild(rockBtn); 
    btnContainer.appendChild(paperBtn);
    btnContainer.appendChild(scissorsBtn);

    console.log("Round number " + (i + 1));

    playRound (getHumanChoice(), getComputerChoice());
    
    console.log("Current score\n" + 
      "-------------\n" +
      "You: " + humanScore + "\n" + 
      "Computer: " + computerScore);

  }while (humanScore <=5 && computerScore <=5);


  //Display game over, results, and goodbye message.
  console.log("Game over, " + checkWinner() + "\n" +
    "Goodbye!");
}

//Variables for node manipulation.
const playBtn = document.querySelector("#play-button");

//Variable declarations.
let humanScore = 0, computerScore = 0;

//Start game when play button is pressed.
playBtn.addEventListener("click", (e)=>{
  playGame();
});
