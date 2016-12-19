## Alien Attack
You are responsible to control the space ship and destroy all the cows.

## Technologies Used
- HTML5
- CANVAS
- CSS
- JAVASCRIPT

## MVP
- Space Ship goes left and right with keypress
- The missile hits an object 

## Possible future additions
Timer and Score working.

## Game Screenshots
https://cloud.githubusercontent.com/assets/6751376/21300434/f229ad76-c571-11e6-8d5d-1fb3e5badac5.png

## My Code:

.class Alienkilla {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.et = new Image();
    this.et.src = 'assets/ufo.png';
  }
  setControls() {
    document.body.addEventListener('keydown', (event) => {
      if (event.keyCode === 37) {
        // if keydown left minus 20
        this.x -= 10;
      } else if (event.keyCode === 39) {
        //if keydown right plus 20
        this.x += 10;
      }
    });
  }
}

## Author

Shauan
