console.log(`cow.js is connected..Muuuuuu`);
class Cows {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // the speed that the cow is gonna move in the screen
    this.speed = Math.random() * 7;
    // same thing from the alien
    this.cow = new Image();
    this.cow.src = 'assets/cow.png';
  }
  //method to set where the cows will appear and set 900 width limit
  // And the speed that the cows will move (7)
  limitz() {
    this.x += this.speed;
    // this.x sets the size that the cows will move
    // and OR this.x makes the cows move in the screen...
    // any number being positive will lock the cows in the left side( above 5)
    if (this.x > 920 || this.x < -1) {
      // limit of the screen and make the cow goes back
      this.speed *= -1;
    }
  }
}

