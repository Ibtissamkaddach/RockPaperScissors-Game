document.addEventListener("DOMContentLoaded", () => {
    const choices = ["rock", "paper", "scissors"];
    const buttons = document.querySelectorAll("button");
    const resultText = document.getElementById("result-text");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const userChoice = button.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            const result = getResult(userChoice, computerChoice);
            resultText.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
        });
    });

    function getResult(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a tie!";
        }
        if ((userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")) {
            return "You win!";
        }
        return "You lose!";
    }
});
