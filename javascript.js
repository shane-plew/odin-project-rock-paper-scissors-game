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
function playRound (humanChoice, computerChoice)
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

//Play five rounds of game. Declare winner at the end.
function playGame ()
{
  for (let i = 0; i < 5; i++)
  {
    console.log("Round number " + (i + 1));

    playRound (getHumanChoice(), getComputerChoice());
    
    console.log("Current score\n" + 
      "-------------\n" +
      "You: " + humanScore + "\n" + 
      "Computer: " + computerScore);
  }

  //Display game over results and goodbye message.
  console.log("Game over, " + checkWinner() + "\n" +
    "Goodbye!");
}

//Initialize player scores to zero.
let humanScore = 0, computerScore = 0;

//Call playGame.
playGame();
