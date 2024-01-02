function playRound(playerSelection, computerSelection) {
    // your code here!
    
  }
  let hands = ["rock", "paper", "scissors"]

function getComputerChoice() {
	let randomIndex = Math.floor( Math.random() * 3)
	return hands[randomIndex]
}
console.log( getComputerChoice() )
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));