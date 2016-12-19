console.log('app is connected');
// CREATE a variable alien and store the class AlienKilla..
// inside the parameters the position x and y (height and width)
const alien = new Alienkilla(400, 0);
// key comands
alien.setControls();

// SET missils array and set shitft to shoot
let missils = [];
document.body.addEventListener('keydown', (event) => {
  // When press Shift shoot
  if (event.keyCode === 16) {
    // where the laser goes down
    missils.push(new Missile(alien.x, 1));
  }
});

//create an empty variable to store the cows
let cows = [];
// for loop and create 6 cows in the screen
for (let i = 0; i < 6; i++) {
  //The Math.floor() function returns the largest integer less than or equal to a given number
  //The Math.random() function returns a floating-point 0 / 1
  //Math.random() returns something like 0.8747230430599302 between [0,1)
  //.floor to round it down to the nearest integer
  //cow height on the canvas 500
  cows.push(new Cows(Math.floor(Math.random()), 500))
}
// I set that when i press space and missile falls anything close with the let collision size
// will be hit
let collision = 10;
//function to show  the objects in the canvas
function show() {
  //Use document.querySelector() to get a reference to a canvas.
  ////Call getContext('2d') on the canvas to get the graphics context
  const gameArea = document.querySelector("canvas").getContext("2d");
//clearRect() method of the Canvas 2D
//API sets all pixels in the rectangle defined by starting point
// (x, y) and size (width, height) to transparent black,
// erasing any previously drawn content.
// ClearRect avoid when i move the space do not repeat the image
  gameArea.clearRect(0, 0, 1000, 600);
//clearRect(x,y,width,height);
//Alien in the screen
// call the class methods
// set the alien size in the screen  = 150 - 150
  gameArea.drawImage(alien.et, alien.x, alien.y, 150, 150);
//Cow
//in the screen
  missils = missils.map((laser) => {
    gameArea.drawImage(laser.missil, laser.x, laser.y, 60, 50);
    //vell from Class missiles
    laser.vel();
    cows.forEach((target) => {
      //The Math.abs() function returns the absolute value of a number
      if (Math.abs(laser.x - target.x) < collision &&
        Math.abs(laser.y - target.y) < collision) {
        let index = cows.indexOf(target);
      //The splice() method adds/removes items to/from an array, and returns the removed item(s).
      //Remove one cow when hit
        cows.splice(index, 1);
      }
    });
    // IF the laser is less the negative 100px return null
    // ELSE return
    if (laser.y < -100) {
      return null;
    } else {
      return laser;
    }
  });
  cows.forEach((target) => {
    target.limitz();
    gameArea.drawImage(target.cow, target.x, target.y, 70, 70);
  });
  
 window.requestAnimationFrame(show);

}

show();
