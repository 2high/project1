//  Container
function myArea (){
let gameSpace = document.createElement('div');
gameSpace.setAttribute('id', 'container');
document.body.appendChild(gameSpace);
};
//Paddle
function myPaddle(){
let gamePaddle = document.createElement('div');
gamePaddle.setAttribute('id', 'paddle');
document.getElementById('container').appendChild(gamePaddle);
};

//Ball
function myBall(){
  let gameBall = document.createElement('div');
  gameBall.setAttribute('id', 'ball');
  document.getElementById('container').appendChild(gameBall);
};

// Key

let keys = {LEFT: 37, RIGHT: 39};
let limitsScreen = {
    left: 0;
    rigth: 400;
};

document.getElementById('paddle').addEventListener('key')







myArea();
myPaddle();
myBall();
