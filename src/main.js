class Container {
  constructor(value){
    this.value = value;
  }
    myArea (){
      let gameSpace = document.createElement('div');
      gameSpace.setAttribute('id', 'container');
      document.body.appendChild(gameSpace);
    }
    myPaddle(){
      let gamePaddle = document.createElement('div');
      gamePaddle.setAttribute('id', 'paddle');
      document.getElementById('container').appendChild(gamePaddle);
    }
    myBall(){
      let gameBall = document.createElement('div');
      gameBall.setAttribute('id', 'ball');
      document.getElementById('container').appendChild(gameBall);
    }
    // myBallMoveUp(){
    //   let  ballMove = document.getElementById("ball"),
    //     bottom = 0,
    //     timer;
    //   // Move the element 10px top every 16ms
    //   timer = setInterval(function() {
    //     ballMove.style.bottom = ( bottom += 10 ) + "px";
    //     if ( bottom == 370 ) {
    //       clearInterval( timer);
    //     }
    //   }, 16);
    //   }
      myBallMoveDown(){
        let  ballMove2 = document.getElementById("ball"),
          top = 40,
          timer;
        // Move the element 10px top every 16ms
        timer = setInterval(function() {
          ballMove2.style.top = ( top+= 10 ) + "px";
          if ( top == 380 ) {
            clearInterval( timer);
          }
        },  16);
      }

};



let newcontainer = new Container();

newcontainer.myArea();
newcontainer.myPaddle();
newcontainer.myBall();

newcontainer.myBallMoveDown();










//  Container

// //Paddle
// function myPaddle(){
// let gamePaddle = document.createElement('div');
// gamePaddle.setAttribute('id', 'paddle');
// document.getElementById('container').appendChild(gamePaddle);
// };

// //Ball
// function myBall(){
//   let gameBall = document.createElement('div');
//   gameBall.setAttribute('id', 'ball');
//   document.getElementById('container').appendChild(gameBall);
// };

// // Key
// function myBallMove(){
// let  ballMove = document.getElementById("ball"),
//   bottom = 0,
//   timer;
// // Move the element 10px top every 16ms
// timer = setInterval(function() {
//   ballMove.style.bottom = ( bottom += 10 ) + "px";
//   // clear the timer at 400px to stop the animation
//   if ( bottom == 370 ) {
//     clearInterval(  timer);
//   }
// }, 16);
// }



// myArea();
// myPaddle();
// myBall();
// myBallMove();
