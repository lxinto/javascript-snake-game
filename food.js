import { onSnake, expandSnake } from "./snake.js" 
import { randomGridPosition } from "./grid.js"

let food = getRandomFoodPosition()
//expansion rate is how many segments will be added to the body after consuming food 
const EXPANSION_RATE = 1


export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard) {
    
    const foodElement = document.createElement("div")
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add("food")
    gameBoard.appendChild(foodElement)
    
}

//random food position generator -- while loop prevents food from spawning on snakes body 
function getRandomFoodPosition() {
    let newFoodPosition 
    while( newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
} 