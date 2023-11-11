window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
    let game;
  });

  function startGame() {
    game = new Game();
    // console.log("start-game");
    game.start();
  }
};
