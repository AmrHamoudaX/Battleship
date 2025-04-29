export { TogglePassScreen };
function TogglePassScreen(name = "player1") {
  const passScreen = document.querySelector(".pass-screen");
  const readyBtn = document.querySelector("button");
  const playerTurn = document.querySelector(".player-turn");

  passScreen.className = "pass-screen";
  playerTurn.textContent = `${name}'s turn to play`;

  readyBtn.addEventListener("click", () => {
    console.log("yayy");
    passScreen.classList.add("hidden");
  });
}
