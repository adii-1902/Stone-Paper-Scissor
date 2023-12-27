let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// function to generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

// function for draw game condition
const drawGame = () => {
    // console.log("Game was draw !");
    msg.innerText = "It's draw ! Play again."
    msg.style.backgroundColor = "#081b31";
}

// function to show the winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You win !");
        msg.innerText = `You win ! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lose !");
        msg.innerText = `You lose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// function to play game
const playGame = (userChoice) => {
    // console.log("User choice = ", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    // console.log("Computer choice = ", compChoice);

    if (userChoice === compChoice) {
        // draw game condition
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = (compChoice === "paper") ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = (compChoice === "scissors") ? false : true;
        }
        else {
            userWin = (compChoice === "rock") ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});