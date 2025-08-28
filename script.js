const player = document.querySelector("#player")
const comp = document.querySelector("#comp")

let playerWin = 0;
let compWin = 0;



const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const drawGame =  () => {
    msg.innerText = "Draw. Play Again";
    msg.style.backgroundColor = "white"
    msg.style.color = "black"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        playerWin++;
        player.innerText = playerWin;
    }
    else{
        msg.innerText = `Comp wins! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        compWin++;
        comp.innerText = compWin;
    }
    
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    
    if(userChoice === compChoice) {
        drawGame()
    }
    else{
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
});