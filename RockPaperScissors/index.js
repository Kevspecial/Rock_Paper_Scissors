const playermove = document.querySelector("#playermove");

const computermove = document.querySelector("#computermove");

const resultShow = document.querySelector("#resultShow");

const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;

let computer;

let result;



choiceBtns.forEach(button => button.addEventListener("click", () => {



    player = button.textContent;

    computerTurn();

    playermove.textContent = `Player: ${player}`;

    computermove.textContent = `Computer: ${computer}`;

    resultShow.textContent = checkWinner();

}));



function computerTurn(){



    const randNum = Math.floor(Math.random() * 3) + 1;



    switch(randNum){

      case 1:

        computer = "ROCK";

        break;

      case 2:

        computer = "PAPER";

        break;

      case 3:

        computer = "SCISSORS";

        break;

    }

}

function checkWinner(){

    if(player == computer){

      return "Draw!";

    }

    else if(computer == "ROCK"){

      return (player == "PAPER") ? "You Win!" : "You Lose!"

    }

    else if(computer == "PAPER"){

      return (player == "SCISSORS") ? "You Win!" : "You Lose!"

    }

    else if(computer == "SCISSORS"){

      return (player == "ROCK") ? "You Win!" : "You Lose!"

    }

}