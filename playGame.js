exports.handler = async (event) => {
    const choice = event.body; // İstemciden gelen seçim
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    let result = '';
    if (choice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')
    ) {
      result = `You win! Computer chose ${computerChoice}`;
    } else {
      result = `You lose! Computer chose ${computerChoice}`;
    }
  
    return {
      statusCode: 200,
      body: result,
    };
  };
  