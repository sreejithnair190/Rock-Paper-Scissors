function rpsGame(Choice) {

  let playerChoice = Choice.id;
  let botChoice = randomChoice();
  
  let result = winner(playerChoice, botChoice);
  console.log(result[0])

  let message = Message(result[0]);
  console.log(message)

  display(playerChoice, botChoice, message, result[0]);
}

function randomChoice() {
  let number = Math.floor(Math.random() * 3);
  return ["rock", "paper", "scissors"][number];
}

function winner(playerChoice, botChoice) {
  let events = {
    'rock': {
      'rock': 0.5,
      'paper': 0,
      'scissors': 1
    },
    'paper': {
      'rock': 1,
      'paper': 0.5,
      'scissors': 0
    },
    'scissors': {
      'rock': 0,
      'paper': 1,
      'scissors': 0.5
    }
  };
  let playerScore = events[playerChoice][botChoice];
  let botScore = events[botChoice][playerChoice];
  return [playerScore,botScore];
}

function Message(result) {
  if (result==1) {
    return {'message':"You Won!",'color':'green'}
  } else if (result==0.5) {
    return {'message':"You Tied!",'color':'#ff9900'}
  } else {
    return {'message':"You Lost!",'color':'red'}
  }
}

function display(playerChoice, botChoice, resultMessage, result) {
  images ={
    'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissors':document.getElementById('scissors').src
  };

  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  let playerDiv = document.createElement('div');
  let botDiv = document.createElement('div');
  let messageDiv = document.createElement('div');

  playerDiv.innerHTML="<img src='"+images[playerChoice]+"'width=200px style='box-shadow: 0px 10px 50px blue;'>";
  messageDiv.innerHTML="<h2 style='color:"+resultMessage['color']+"; font-size:60px; padding:30px'>"+resultMessage['message']+"<h2>";
  botDiv.innerHTML="<img src='"+images[botChoice]+"'width=200px style='box-shadow: 0px 10px 50px red;'>";

  document.getElementById("flex-box-rps-div").appendChild(playerDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);

  wildKazumaAppeared(result);
}

function wildKazumaAppeared(result){
  let kazuma = document.createElement('img')
  if (result==0) {
    kazuma.src="./images/lost.gif";
  } else {
    kazuma.src="./images/won.gif";
  }

  document.getElementById("result").appendChild(kazuma);
}