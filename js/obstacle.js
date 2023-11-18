class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 400 + 10);
    // if Math.random generates 0, 10 will be added
    // so obstacle is not off screen - final number converted to px
    this.top = 0;
    this.width = 90;
    this.height = 110;
    this.elementBoulder = document.createElement("img"); // tree obstacle
    // this.elementBoulder = document.createElement("img"); // boudler obstacle
    // this.elementBear = document.createElement("img"); // bear obstacle*/

    // define tree obstacle and set its default property values
    this.elementBoulder.src = "./images/obstacleBoulder.png";
    this.elementBoulder.style.position = "absolute";
    this.elementBoulder.style.width = `${this.width}px`;
    this.elementBoulder.style.height = `${this.height}px`;
    this.elementBoulder.style.top = `${this.top}px`;
    this.elementBoulder.style.left = `${this.left}px`;

    // // define boulder obstacle and set its default property values
    // this.elementBoulder.src = "./images/obstacleBoulder.png";
    // this.elementBoulder.style.position = "absolute";
    // this.elementBoulder.style.width = `${this.width}px`;
    // this.elementBoulder.style.height = `${this.height}px`;
    // this.elementBoulder.style.top = `${this.top}px`;
    // this.elementBoulder.style.left = `${this.left}px`;

    // // define bear obstacle and set its default property values
    // this.elementBear.src = "./images/obstacleBear.png";
    // this.elementBear.style.position = "absolute";
    // this.elementBear.style.width = `${this.width}px`;
    // this.elementBear.style.height = `${this.height}px`;
    // this.elementBear.style.top = `${this.top}px`;
    // this.elementBear.style.left = `${this.left}px`;

    this.gameScreen.appendChild(this.elementBoulder);
    // this.gameScreen.appendChild(this.elementBoulder);
    // this.gameScreen.appendChild(this.elementBear);
  }

  updatePosition() {
    // update obstacles positions based on properties left and top
    this.elementBoulder.style.left = `${this.left}px`;
    this.elementBoulder.style.top = `${this.top}px`;

    // this.elementBoulder.style.left = `${this.left}px`;
    // this.elementBoulder.style.top = `${this.top}px`;

    // this.elementBear.style.left = `${this.left}px`;
    // this.elementBear.style.top = `${this.top}px`;
  }

  move() {
    this.top += 3; // move the obstacles down by 3 px
    this.updatePosition(); // update the obstacles' positions
  }
}
