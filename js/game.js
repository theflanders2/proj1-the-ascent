class Game {
    constructor () {
        this.startScreen = document.getElementById('game-intro'); // access elements in HTML file with ID #game-intro
        this.gameScreen = document.getElementById('game-screen'); // access elements in HTML file with ID #game-screen
        this.gameEndScreen = document.getElementById('game-end'); // access elements in HTML file with ID #game-end
        this.player = null;
        this.height = 600; // height of game screen
        this.width = 500; // width of game screen
        this.obstacles = []; // new Obstacle ()
        this.collectable = []; // new Collectable ()
        this.score = 0; // track player's score, score increases every time an obstacle is passed
        this.lives = 3; // track number of lives the player has left
        this.gameIsOver = false; // track whether the game is over
    }
}