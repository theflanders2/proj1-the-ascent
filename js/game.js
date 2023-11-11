class Game {
    constructor () {
        this.startScreen = document.getElementById('game-intro'); // access elements in HTML file with ID #game-intro
        this.gameScreen = document.getElementById('game-screen'); // access elements in HTML file with ID #game-screen
        this.gameEndScreen = document.getElementById('game-end'); // access elements in HTML file with ID #game-end
        this.player = new Player ( // new Player () class instance
            this.gameScreen,
            300, // horizontal position of player in pixels
            500, // vertical position of player in pixels
            100, // width of image element representing player in pixels
            100, // height of image element representing player in pixels
            './assets/playerClimber.png' // image element representing player
        );
        this.height = 600; // height of game screen
        this.width = 500; // width of game screen
        this.obstacles = []; // new Obstacle ()
        this.collectable = []; // new Collectable ()
        this.score = 0; // track player's score, score increases every time an obstacle is passed
        this.lives = 3; // track number of lives the player has left
        this.gameIsOver = false; // track whether the game is over
    }

    start () { // initialize the game
        this.gameScreen.style.height = `${this.height}px`; // set the height of the game screen
        this.gameScreen.style.width = `${this.width}px`; // set the width of the game screen
        this.startScreen.style.display = 'none'; // hide the start screen
        this.gameScreen.style.display = 'block' // show game screen
        this.gameLoop (); // player, obstacles and collectable start at specific position
    }

    gameLoop () { // loops game as long as this.gameIsOver === false
        if (this.gameIsOver) { // interrupt function to stop loop if this.gameIsOver === true
            return; // empty return interrupts/stops loop/iteration
        }
    }
}