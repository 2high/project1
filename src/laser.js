console.log(`Laser.js is connected..BOOM`);

class Missile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // set the speed of the missile in the screen
    this.speed = 7;
    this.missil = new Image();
    this.missil.src = 'assets/missile.png';
  }
  // Vel sets the speed Y
  vel() {
    this.y += this.speed;
  }
}
