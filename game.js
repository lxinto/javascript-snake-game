
import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, score} 
from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideGrid} from "./grid.js"


let lastRenderTime = 0 
let gameOver = false
const gameBoard = document.getElementById("game-board")
let gameScore = document.getElementById("header")


function main(currentTime) {

    if (gameOver) {
        if (confirm("You lost. Press Ok to restard.")) {
        window.location = "/"
        }
        return 
    }

    //game loop that corresponds to snake speed -- faster the snake faster the refresh rate
    window.requestAnimationFrame(main)
    const secodsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secodsSinceLastRender < 1 / SNAKE_SPEED) return 
    
    
    lastRenderTime = currentTime 
    gameScore.textContent = "Score: " + score
    update()
    draw()
    
}

window.requestAnimationFrame(main)

//combining every update function in one 
function update() {
    updateSnake()
    updateFood()
    checkForDeath()
}
//combining every draw function in one 
function draw() {
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkForDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection() 
}
