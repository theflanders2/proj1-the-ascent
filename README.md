# The Ascent

[Play now!](https://theflanders2.github.io/proj1-the-ascent/)

## Description
Brief description of the project


## MVP
_MVP definition here, list of minimum features_


## Backlog
_List of features you might implement after the MVP_


## Technologies Used
- HTML
- CSS
- JavaScript
- DOM Manipulation

## Project Structure

### game.js
- Game() class
  - this.startScreen
  - this.gameScreen
  - this.gameEndScreen
  - this.gameStats
  - this.player
    - new Player () class
      - this.gamescreen
  - this.height
  - this.width
  - this.obstacles
  - this.collectable
  - this.score
  - this.lives
  - this.gameIsOver
- start() method
- gameLoop () method
- update() method
- endGame() method

### player.js
- Player() class
  - this.gameScreen
  - this.left
  - this.top
  - this.width
  - this.height
  - this.directionX
  - this.directionY
  - this.elementPlayerClimber
- move() method
- updatePosition() method
- didCollide() method

### obstacle.js
- Obstacle() class
  - this.gameScreen
  - this.left
  - this.top
  - this.width
  - this.height
  - this.elementTree
  - this.elementBoulder
  - this.elementBear
- updatePosition() method
- move() method

### collectable.js
- Collectable() class
  - this.gameScreen
  - this.left
  - this.top
  - this.width
  - this.height
  - this.elementGoat
- updatePosition() method
- move() method

### script.js
- window.onload
- startGame() function
- restartGame() function
- handleKeydown() function
- startButton eventListener
- restartButton eventListener


## States
- Intro Screen
- Game Screen
- End Screen


## Task
_List of tasks in order of priority_


## Links

- [Trello Link](https://trello.com/b/mrn2ZLo1)
- [Slides Link](http://slides.com)
- [Github repository Link](https://github.com/theflanders2/proj1-the-ascent)
- [Deployment Link](https://theflanders2.github.io/proj1-the-ascent/)

## Contributors / Team
[Brice Cabioch](https://github.com/Bricebrice), [Kenneth Flanders](https://github.com/theflanders2)