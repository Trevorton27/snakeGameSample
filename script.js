// TEST CASE
// Description: Get entire snake body moving down together, seamlessly. 

// 1. press right arrow btn.
// EXPECTATION: 
// entire snake moves right.
// ACTUAL: works.

// 2. press down arrown btn.
// EXPECTATION: 
// head moves down, 
// midsection goes to head's prior position
// and tail goes to midsection's original position.
// ACTUAL: all 3 snake parts move down, but not in a chain.




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


const snake = {
    direction: 'RIGHT',
    body: [ 
        { x: 20, y: 30 }, 
        { x: 10, y: 30 },
        { x: 0, y: 30 }
    ],
    speed: 10
};


let interval;

window.onload = function()  {
    interval = setInterval(function()  {
        drawEverything(snake.direction);} 
        ,150)
};


document.onkeydown = function (e) { 
    e.preventDefault(); 

    if (e.key == ' ') {        
        snake.direction = 'STOP';    
    }
    else if (e.key == 'ArrowUp' && snake.direction !== 'DOWN') {
        snake.direction = 'UP';   
    }    
    else if (e.key == 'ArrowDown' && snake.direction !== 'UP') {        
        snake.direction = 'DOWN';    
    }
    else if (e.key == 'ArrowLeft' && snake.direction !== 'RIGHT') {
        snake.direction = 'LEFT';    
    }
    else if (e.key == 'ArrowRight' && snake.direction !== 'LEFT') {        
        snake.direction = 'RIGHT';    
    }    
};

function endGame()  {
    snake.direction = 'STOP';
    clearInterval(interval);
    alert('game over!');
}

function checkBorder()  {
    if (snake.body[0].x > canvas.width || 
        snake.body[0].y > canvas.height ||
        snake.body[0].x < 0 ||
        snake.body[0].y < 0)  {
        endGame();
    }
};

function moveSnake()    {
    const snakeCopy = snake.body.map(snakePart => Object.assign({}, snakePart));

    switch(snake.direction) {
        case 'RIGHT':  snake.body[0].x = snake.body[0].x + snake.speed;
        break;

        case 'LEFT':  snake.body[0].x = snake.body[0].x - snake.speed;
        break;

        case 'UP':  snake.body[0].y = snake.body[0].y - snake.speed;
        break;

        case 'DOWN':  snake.body[0].y = snake.body[0].y + snake.speed;
        break;
    }

    for (var i = 1; i < snake.body.length; i++) {
        snake.body[i] = snakeCopy[i - 1]; 
    }
}




// [1 2 3 4 5 6]

// when we map we go through each items so:
// 1
// 2
// 3
// 4
// 5
// 6

// our check is: is our head i.e. 1 equal to x?

// 1 = 1 true
// 2 = 1 false ...
// 3 = 1 false ...


// js how to delete first item in array

// let bodyToCheck = snake.body minus head

// bodyToCheck.map ...

// ;; if condition
// if
// snake.body[0].x == bodyPart.x &&
// snake.body[0].y == bodyPart.y
// endGame()





function checkEatsItself()  {
    snake.body.map(bodyPart => {
        if (snake.body[0].x == bodyPart.x && snake.body[0].y == bodyPart.y)   {
        endGame();
        }
    })
}

function drawEverything() { 
    moveSnake();

    console.log(snake.body[0]);
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    canvasContext.fillStyle = 'limegreen';
    canvasContext.fillRect(snake.body[0].x, snake.body[0].y, 10, 10);
    canvasContext.fillRect(snake.body[1].x, snake.body[1].y, 10, 10);
    canvasContext.fillRect(snake.body[2].x, snake.body[2].y, 10, 10);

    checkBorder();
    checkEatsItself();
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