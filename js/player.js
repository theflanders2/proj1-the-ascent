class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.elementPlayerClimber = document.createElement("img");

    this.elementPlayerClimber.src = imgSrc;
    this.elementPlayerClimber.style.position = "absolute";
    this.elementPlayerClimber.style.width = `${width}px`;
    this.elementPlayerClimber.style.height = `${height}px`;
    this.elementPlayerClimber.style.left = `${left}px`;
    this.elementPlayerClimber.style.top = `${top}px`;

    this.gameScreen.appendChild(this.elementPlayerClimber);
  }

  move() {
    // update player position based on directionX and directionY
    this.left += this.directionX;
    this.top += this.directionY;

    if (this.left < 10) {
      this.left = 10;
    }

    if (this.top < 10) {
      // handles top side
      this.top = 10;
    }

    if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
      // handles right hand side
      this.left = this.gameScreen.offsetWidth - this.width - 10;
    }

    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      // handles bottom side
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }

    this.updatePosition(); // update the player's position on screen
  }

  updatePosition() {
    this.elementPlayerClimber.style.left = `${this.left}px`;
    this.elementPlayerClimber.style.top = `${this.top}px`;
  }

  didCollide(obstacle) {
    const playerRect = this.elementPlayerClimber.getBoundingClientRect();
    const obstacleRectTree = obstacle.elementTree.getBoundingClientRect();
    const obstacleBoulder = obstacle.elementBoulder.getBoundingClientRect();
    const obstacleBear = obstacle.elementBear.getBoundingClientRect();

    if (
      playerRect.left <
        (obstacleRectTree.right ||
          obstacleBoulder.right ||
          obstacleBear.right) &&
      playerRect.right >
        (obstacleRectTree.left || obstacleBoulder.left || obstacleBear.left) &&
      playerRect.top <
        (obstacleRectTree.bottom ||
          obstacleBoulder.bottom ||
          obstacleBear.bottom) &&
      playerRect.bottom >
        (obstacleRectTree.top || obstacleBoulder.top || obstacleBear.top)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
