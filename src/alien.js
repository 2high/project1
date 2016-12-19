console.log('Alien is connected..Ω≈çΩ©ßß¥∑');
// Class Alien where i'm gonna set the position and add the image to the alien
class Alienkilla {
  constructor(x, y) {
    // X direction
    this.x = x;
    //Y direction
    this.y = y;
    // add image
    this.et = new Image();
    // call the image
    this.et.src = 'assets/ufo.png';
  }
  //set eventListener with arrow function to move LEFT AND RIGHT
  setControls() {
    document.body.addEventListener('keydown', (event) => {
      //left
      if (event.keyCode === 37) {
        // if keydown left minus 20
        this.x -= 10;
      // right
      } else if (event.keyCode === 39) {
        //if keydown right plus 20
        this.x += 10;
      }
    });
  }
}

