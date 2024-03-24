// import EnemyController from "./EnemyController.js";
import Player from "./Player.js";
import BulletController from "./BulletController.js";
import EnemyController from "./enemyController.js";

const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "images/space.png";

// ENEMY BULLET CONTROLLER INSTANCE
const enemyBulletController = new BulletController(canvas, 4, "white", false); 

// PLAYER BULLET CONTROLLER INSTANCE
const playerBulletController = new BulletController(canvas, 10, "red", true);

// ENEMY CONTROLLER INSTANCE
const enemyController = new EnemyController(canvas, enemyBulletController, playerBulletController);

// PLAYER CONTROL INSTANCE
const player = new Player(canvas, 3, playerBulletController);

// Game Over Variable
let isGameOver = false;
let didWin = false;
  
function game() {
    checkGameOver();
    ctx.drawImage(background, 0, 0 , canvas.width, canvas.height);

    displayGameOVer();  
    if(!isGameOver) {
        enemyController.draw(ctx);
        player.draw(ctx);
        playerBulletController.draw(ctx);
        enemyBulletController.draw(ctx);
    }
}

function displayGameOVer() {
    if(isGameOver) {
        let text = didWin ? "You Win" : "Game Over";
        let textOffset = didWin ? 3.5 : 5;

        ctx.fillStyle = "white";
        ctx.font = "70px Arial";
        ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);
    }
}
function checkGameOver() {
    if (isGameOver) {
        return;
    }
    if(enemyBulletController.collideWith(player)) {
        isGameOver = true;
    }

    if (enemyController.collideWith(player)) {
        isGameOver = true;
    }

    if (enemyController.enemyRows.length === 0) {
        didWin = true;
        isGameOver = true;
    }
}

setInterval(game,1000/60);



/*

let gameBackground = document.querySelector('.game-background');

class Player {
    lives = 3;
    shootingDelay = 2000; // ms
    yPosition = 500;
    xPosition = 500;

    constructor() {

    }

    shoot() {
        // Shoot the laser upward
    }
}

const spaceShip = new Player;
console.log(spaceShip);

class Enemy {
    hp = 1;
    shootingDelay = 9000;
    yPosition;
    xPosition;
    score = 10;

    constructor(yPosition, xPosition) {
        this.yPosition = yPosition;
        this.xPosition = xPosition;        
    }

    shoot() {
        // shoot a mini alien downward
    }
}

const alien1 = new Enemy;
console.log(alien1);

// Alien Class DIV

let aliens = document.querySelector(".aliens");

for (let i = 0; i < 6; i++) {
    aliens;
}

*/