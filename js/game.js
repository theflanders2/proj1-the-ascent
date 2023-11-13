class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro"); // access elements in HTML file with ID #game-intro
    this.gameScreen = document.getElementById("game-screen"); // access elements in HTML file with ID #game-screen
    this.gameEndScreen = document.getElementById("game-end"); // access elements in HTML file with ID #game-end
    this.player = new Player( // new Player () class instance
      this.gameScreen,
      10, // horizontal position of player in pixels
      550, // vertical position of player in pixels
      60, // width of image element representing player in pixels
      80, // height of image element representing player in pixels
      "./images/playerClimber.png" // image element representing player
    );
    this.height = 600; // height of game screen
    this.width = 500; // width of game screen
    this.obstacles = []; // new Obstacle ()
    this.collectable = []; // new Collectable ()
    this.score = 0; // track player's score, score increases every time an obstacle is passed
    this.lives = 3; // track number of lives the player has left
    this.gameIsOver = false; // track whether the game is over
  }

  start() {
    // initialize the game
    this.gameScreen.style.height = `${this.height}px`; // set the height of the game screen
    this.gameScreen.style.width = `${this.width}px`; // set the width of the game screen
    this.startScreen.style.display = "none"; // hide the start screen
    this.gameScreen.style.display = "block"; // show game screen
    this.gameLoop(); // player, obstacles and collectable start at specific position
  }

  gameLoop() {
    // loops game as long as this.gameIsOver === false
    if (this.gameIsOver) {
      // interrupt function to stop loop if this.gameIsOver === true
      return; // empty return interrupts/stops loop/iteration
    }

    this.update(); // update the game

    window.requestAnimationFrame(() => this.gameLoop());
    // invoke gameLoop () within itself to ensure the function runs repeatedly (recursive function)
    // use window.requestAnimationFrame() to invoke gameLoop to ensure a consistent frame rate
  }

  update() {
    // responsible for updating the game state during each loop iteration
    this.player.move(); // return new positions of player, obstacles and collectable to update game

    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      if (this.player.didCollide(obstacle)) {
        // if player collides with an obstacle
        obstacle.elementTree.remove(); // remove obstacle from the DOM
        this.obstacles.splice(i, 1); // remove obstacle object from the array
        this.lives--; // reduce lives by 1
        document.getElementById("lives").textContent = this.lives; // update number of lives displayed
        i--; // update the counter variable to account for removed obstacle
      } else if (obstacle.top > this.height) {
        this.score++; // increase the score by 1
        document.getElementById("score").textContent = this.score; // update score displayed
        obstacle.elementTree.remove(); // remove obstacle from the DOM
        this.obstacles.splice(i, 1); // remove obstacle object from the array
        i--; // update the counter variable to account for the removed obstacle
      }
    }

    if (this.lives === 0) {
      // end the game
      this.endGame();
    }

    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      // create new obstacle based on random probability when there are no other obstacles on screen
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }

  endGame() {
    // method responsible for ending the game
    this.player.elementPlayerClimber.remove(); // remove player from screen
    this.obstacles.forEach((obstacle) => obstacle.element.remove()); // remove the obstacles from the screen

    this.gameIsOver = true; // cancel the execution of gameLoop()

    this.gameScreen.style.display = "none"; // hide game screen

    this.gameEndScreen.style.display = "block"; // show end game screen
  }
}
