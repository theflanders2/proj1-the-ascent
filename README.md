# The Ascent

[Play now!](https://theflanders2.github.io/proj1-the-ascent/)

## Description
***The Ascent*** is a game where players try to survive as long as possible. The game ends when the climber has collided with three obstacles. After the game ends, the time (in seconds) is displayed on the end screen to let the player know how long they were able to survive.

## Main Functionalities
- Obstacles appear randomly, on different levels and move automatically
- Player changes direction by using the following arrows `left`, `right`, `up` and `down`.
- Time elapsed is tracked and displayed at the end end screen.

## Backlog
- Add the ability to set the game difficulty
- Add logic to increase the speed of the obstacle

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
- gameLoop() method
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
  - this.elementBoulder
- updatePosition() method
- move() method
<!-- 
### collectable.js

- Collectable() class
  - this.gameScreen
  - this.left
  - this.top
  - this.width
  - this.height
  - this.elementGoat
- updatePosition() method
- move() method -->

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

## Links

- [Trello Link](https://trello.com/b/mrn2ZLo1)
- [Google Slides Link](https://docs.google.com/presentation/d/e/2PACX-1vQ4hH55SilmgT_bm-CBjRfk5C8Q61GvYJtxBHxHoFVwNycoPinKGzlR9w-zkHB4X1JSXCvA8C1wftRM/pub?start=false&loop=false&delayms=3000)
- [Github repository Link](https://github.com/theflanders2/proj1-the-ascent)
- [Deployment Link](https://theflanders2.github.io/proj1-the-ascent/)

## Contributors / Team

[Brice Cabioch](https://github.com/Bricebrice), [Kenneth Flanders](https://github.com/theflanders2)
