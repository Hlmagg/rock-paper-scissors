const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  if ( userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    // we add 'bomb' as a secret user type
    return userInput;
  } else {
    console.log('Error');
  }
  }; 
  
  const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3); // we choose a number from 3
  switch (randomNumber) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
  }
  };
  // we determine a winner by see user and computer choices
  const determineWinner = (getUserChoice, getComputerChoice) => {
  if (getUserChoice === getComputerChoice) {
  return 'the game was a tie';
  } 
  if (getUserChoice === 'rock') {
  if  (getComputerChoice === 'paper') {
    return 'Computer Won';
  } else { return 'User Won'; 
  }
  } if (getUserChoice === 'paper') {
    if (getComputerChoice === 'scissors') {
      return 'Computer Won';
    } else {
      return 'User Won';
    }
  } if (getUserChoice === 'scissors') {
    if (getComputerChoice === 'rock') {
      return 'Computer Won';
    } else {
      return 'User Won'
    }
  } if (getUserChoice === 'bomb') {
    if (getComputerChoice === 'paper') {
      return 'User Won';
    } else {
      return 'User Won';
    }
  }
  };
  // we determine who won by creating this function playGame
  const playGame = () => {
    // here we chose a userChoice to test game
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
  console.log('you threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  };
  // here we start game by calling function
  playGame();
