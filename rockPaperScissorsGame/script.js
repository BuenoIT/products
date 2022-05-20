let userScore = 0;
let computerScore = 0;

let instructions = document.getElementById('instructions');

function startGame() {
  instructions.remove();
  let userChoice = parseInt(
    prompt('Choose 1 for rock, 2 for scissors, or 3 for paper')
  );
  while (isNaN(userChoice) || userChoice < 0 || userChoice > 3) {
    userChoice = prompt(
      'Please, choose 1 for rock, 2 for scissors or 3 for paper'
    );
  }

  let computerChoice = Math.floor(Math.random() * 3) + 1;

  if (userChoice == 1 && computerChoice == 1) {
    alert(`Tied Game. The computer and you both chose rock`);
  } else if (userChoice == 2 && computerChoice == 2) {
    alert(`Tied Game. The computer and you both chose scissors`);
  } else if (userChoice == 3 && computerChoice == 3) {
    alert(`Tied Game. The computer and you both chose paper`);
  } else if (userChoice == 1 && computerChoice == 2) {
    alert(
      `You've won. The computer chose scissors, you chose rock. The rock smashes the scissors`
    );
    userScore++;
  } else if (userChoice == 1 && computerChoice == 3) {
    alert(
      `You've lost. The computer chose paper, you chose rock. The paper covers the rock`
    );
    computerScore++;
  } else if (userChoice == 2 && computerChoice == 1) {
    alert(
      `You've lost. The computer chose rock, you chose scissors. The rock smashes the scissors`
    );
    computerScore++;
  } else if (userChoice == 2 && computerChoice == 3) {
    alert(
      `You've won. The computer chose paper, you chose scissors. The scissors cut the paper`
    );
    userScore++;
  } else if (userChoice == 3 && computerChoice == 1) {
    alert(
      `You've won. The computer chose rock, you chose paper. The paper covers the rock`
    );
    userScore++;
  } else if (userChoice == 3 && computerChoice == 2) {
    alert(
      `You've lost. The computer chose scissors, you chose paper. The scissors cut the paper`
    );
    computerScore++;
  }

  playAgain();
}

function playAgain() {
  let userOption = confirm('Do you want to play again?');

  if (userOption) {
    startGame();
  } else {
    if (userScore > computerScore) {
      var h3 = document.createElement('h3');
      h3.textContent = 'Congratulations, you are the best player !';
      document.getElementById('backGame').appendChild(h3);
      var img = document.createElement('img');
      img.src = 'imgs/winner.jpg';
      //winner.jpg from Google by Make a Meme (2022). winner.jpg.*/
      document.getElementById('backGame').appendChild(img);
      alert(
        `You've won the game. You scored ${userScore} points while the computer scored ${computerScore} points`
      );
    } else if (userScore < computerScore) {
      var h3 = document.createElement('h3');
      h3.textContent =
        "I'm sorry that you lost this game. I wish you luck next time.";
      document.getElementById('backGame').appendChild(h3);
      var img = document.createElement('img');
      img.src = 'imgs/loser.webp';
      //loser.webp from Google by Make a Meme (2022). loser.webp.*/
      document.getElementById('backGame').appendChild(img);
      alert(
        `You've lost the game. You scored ${userScore} points while the computer scored ${computerScore} points`
      );
    } else {
      var h3 = document.createElement('h3');
      h3.textContent = "Nearly there, let's try again later";
      document.getElementById('backGame').appendChild(h3);
      var img = document.createElement('img');
      img.src = 'imgs/almost-there.jpg';
      //almost-there.jpg from Google by Make a Meme (2022). almost-there.jpg.*/
      document.getElementById('backGame').appendChild(img);
      alert(
        `Tied Game. You scored ${userScore} points while the computer scored ${computerScore} points`
      );
    }
  }
}
