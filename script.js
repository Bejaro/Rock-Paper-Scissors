const buttons = document.querySelectorAll('.gameButton');
buttons.forEach (function (button){
    button.addEventListener('click', buttonClicked);
    button.addEventListener('transitionend', removeTransition);
});

function buttonClicked(clicked){
    clicked.target.classList.add('clicked');
    console.log(clicked);
    if (clicked.target.id = "Play"){
        startGame();
    }
    if (clicked.target.id = "Rock"){
        playerPlay("Rock");
    }
    if (clicked.target.id = "Paper"){
        playerPlay("Paper");
    }
    if (clicked.target.id = "Scissors"){
        playerPlay("Scissors");
    }
}

function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('clicked');
  }

function startGame(){
    const gameScreen = document.querySelector('.choices');
    gameScreen.classList.remove('hidden');
}
    
var choiceArray = ["Rock", "Paper", "Scissors"];
var computerChoice;
var playerChoice;

function computerPlay() {
    var computerChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)];
    return computerChoice;
}
function playerPlay(choice){
    console.log (choice);
    /*var playerChoice = prompt ("What will you choose?: ");
    playerChoiceLowerCase = playerChoice.toLowerCase();
    if (choiceArray.includes(playerChoiceLowerCase)){
        return playerChoiceLowerCase;
    }
    else{
        alert("Choose Rock, Paper or Scissors!")
        game();
        
    }
    */
}
function playRound(){
    const playerChoice = playerPlay()
    const computerChoice = computerPlay()
    
    if (playerChoice == "rock" && computerChoice == "paper") {winnerReport = -1}
    if (playerChoice == "rock" && computerChoice == "scissors") {winnerReport = +1}
    if (playerChoice == "paper" && computerChoice == "rock") {winnerReport = +1}
    if (playerChoice == "paper" && computerChoice == "scissors") {winnerReport = -1}
    if (playerChoice == "scissors" && computerChoice == "paper") {winnerReport = +1}
    if (playerChoice == "scissors" && computerChoice == "rock") {winnerReport = -1}
    if (playerChoice === computerChoice) {winnerReport = 0}

    console.log("You chose " + playerChoice +". The computer chose " + computerChoice +". " + winnerReport + " to your score!");
    javaOutput.innerHTML = ("You chose " + playerChoice +". The computer chose " + computerChoice +". " + winnerReport + " to your score!");
    return (winnerReport);
}
function game(){
    var score = 0
    for (let i = 0; i < 5; i++){
        var result = playRound()
        score = score + winnerReport;
        console.log("Current score: " + score);
        javaOutput.innerHTML = score;
    }
    var finalResult;
    if (score>0){finalResult = "You won!"}
    if (score<0) {finalResult = "You lost!"}
    if (score===0) {finalResult = "A draw!"}
    console.log("End of the game! Your final score is: " + score + ". " + finalResult)
    javaOutput.innerHTML = ("End of the game! Your final score is: " + score + ". " + finalResult);

}