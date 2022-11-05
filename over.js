const game = document.getElementById("playAgain")
const Score_now = document.getElementById("score")
const Ranmdom_display = document.getElementById("gameOver")
var New_Score = localStorage.getItem("Score");
Score_now.innerText = New_Score;
game.onclick = playAgain;

var End_audio = new Audio("musicclosing.mp3")
window.onload = End_audio.play();

function playAgain(){
    window.location.assign("homepage.html")
}