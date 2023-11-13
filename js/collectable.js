class Collectable {
    constructor (gameScreen) {
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 300 + 70)
        // if Math.random generates 0, 70 will be added
        // so obstacle is not off screen - final number converted to px
        this.top = 0;
        this.width = 100;
        this.height = 150;
        this.elementGoat = document.createElement('img'); // goat collectable

        // define goat collectable and set its default property values
        this.elementGoat.src = './images/collectableGoat.png';
        this.elementGoat.style.position = 'absolute';
        this.elementGoat.style.width = `${this.width}px`;
        this.elementGoat.style.height = `${this.height}px`;
        this.elementGoat.style.top = `${this.top}px`;
        this.elementGoat.style.left = `${this.left}px`;

        this.gameScreen.appendChild(this.elementGoat);
    }

    updatePosition() { // update collectable position based on properties left and top
        this.elementGoat.style.left = `${this.left}px`;
        this.elementGoat.style.left = `${this.top}px`;
    }

    move () { 
        this.top += 3; // move the collectable down by 3 px
        this.updatePosition(); // update the collectable's position
    }
}