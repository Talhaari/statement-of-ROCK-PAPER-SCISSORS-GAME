//IF ELSE STATEMENT USING ROCK PAPER SCISSORS GAME
var player1 = "Rock";
var player2 = "Paper";
if (player1 === player2) {
    console.log("its a tie!");
}
else if ((player1 === "Rock" && player2 === "Scissors") ||
    (player1 === "Scissors" && player2 === "Paper") ||
    (player1 === "Paper" && player2 === "Rock")) {
    console.log("player 1 win this match");
}
else {
    console.log("player 2 win this match sucessfully");
}
