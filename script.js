// TEST CASE
// Description: Get entire snake body moving down together, seamlessly. 

// 1. Press down arrow btn

// EXPECTATION: 
// Head moves down, 
// midsection goes to head's prior position
// and tail goes to midsection's original position.

// ACTUAL: All merge to head, leaving an apparency of one single square.




const canvas = document.getElementById('canvas');
const canvasContext = canvas.getContext('2d');

let originalSnake = {
    direction: null,
    body: [ 
        { x: 20, y: 30 }, 
        { x: 10, y: 30 },
        { x: 0, y: 30 }
    ],
    speed: 5
};


let snake = {
    direction: null,
    body: [ 
        { x: 20, y: 30 }, 
        { x: 10, y: 30 },
        { x: 0, y: 30 }
    ],
    speed: 5
};


window.onload = function()  {
    setInterval(function()  {
        drawEverything(snake.direction);} 
        ,500)
};

document.onkeydown = function (e) { 
    e.preventDefault();    
    if (e.key == ' ') {        
        snake.direction = 'STOP';    
    }
    if (e.key == 'ArrowUp') {
        snake.direction = 'UP';   
    }    
    if (e.key == 'ArrowDown') {        
        snake.direction = 'DOWN';    
    }
    if (e.key == 'ArrowLeft') {
        snake.direction = 'LEFT';    
    }
    if (e.key == 'ArrowRight') {        
        snake.direction = 'RIGHT';    
    }    
};


function drawEverything() {
    if (snake.direction === 'RIGHT')  {
        snake.body[0].x = snake.body[0].x + 10;
        snake.body[1].x = snake.body[1].x + 10;
        snake.body[2].x = snake.body[2].x + 10;
    }  

    if (snake.direction === 'LEFT')  {
        snake.body[0].x = snake.body[0].x - 10;
        snake.body[1].x = snake.body[1].x - 10;
        snake.body[2].x = snake.body[2].x - 10;
    }  

    if (snake.direction === 'UP')  {
        snake.body[0].y = snake.body[0].y - 10;
    }  

// add 10 to y to go down each time down arrow pressed (consider x position will also move for rest of body not head)
    if (snake.direction === 'DOWN')  {
        snake.body[0].y = snake.body[0].y + 10;
        snake.body[1] = originalSnake[0];
        snake.body[2] = originalSnake[1];
    }  

    console.log(snake.body[0]);
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    canvasContext.fillStyle = 'limegreen';
    canvasContext.fillRect(snake.body[0].x,snake.body[0].y,10,10);
    canvasContext.fillRect(snake.body[1].x,snake.body[1].y,10,10);
    canvasContext.fillRect(snake.body[2].x,snake.body[2].y,10,10);
    // for loop any continuation of the above so snake grows as he eats.
};







// 10x10 pixels 
// add 10 to x to go right each time right arrow pressed
// subtract 10 to x to go left each time left arrow pressed
// add 10 to y to go down each time down arrow pressed (consider x position will also move for rest of body not head)
// subtract 10 to y to go up each time up arrow pressed (consider x position will also move for rest of body not head)












// Requirements
// Project will be written in:
// HTML
// CSS
// Javascript
// No Javascript libraries, frameworks, etc.
// No following tutorials of snake game apps/projects
// No copying code of other existing snake game apps/projects
// Deliverables
// Snake game ends when:
// Snake touches itself
// Snake touches the outside border
// When the game ends, the gameplay should stop and the user should be notified that the game is over
// The snake should grow one length whenever it eats the apple
// The apple should randomly place itself on the board after snake consumes the apple
// The snake should be controlled by the arrow keys on the keyboard
// The game will  show a score of how many apples have been eaten
