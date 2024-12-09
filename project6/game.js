
document.addEventListener('DOMContentLoaded', () => {
    const gameTrigger = document.getElementById('game-trigger');
    const gameContainer = document.getElementById('game-container');
    const character = document.getElementById('character');
    const obstacle = document.getElementById('obstacle');
    const startButton = document.getElementById('start-game');
    const scoreDisplay = document.getElementById('score');
    let isJumping = false;
    let score = 0;
    let gameInterval;
    let isGameRunning = false;//+

    if (!gameTrigger || !gameContainer || !character || !obstacle || !startButton || !scoreDisplay) {//+
        console.error('One or more game elements are missing. Please check your HTML.');//+
        return;//+
    }//+
    gameTrigger.addEventListener('click', () => {
        gameTrigger.style.display = 'none';
        gameContainer.style.display = 'block';
        startButton.style.display = 'block';
        scoreDisplay.style.display = 'block';
    });

    function jump() {
        if (isJumping) return;//-
        if (isJumping || !isGameRunning) return;//+
        isJumping = true;
        let jumpCount = 0;
        const jumpInterval = setInterval(() => {
            const characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue('bottom'));
            if (jumpCount < 15 && characterBottom < 150) {
                character.style.bottom = `${characterBottom + 5}px`;
            } else if (jumpCount >= 15 && characterBottom > 0) {
                character.style.bottom = `${characterBottom - 5}px`;
            } else {
                clearInterval(jumpInterval);
                isJumping = false;
                jumpCount = 0;
            }
            jumpCount++;
        }, 20);
    }

    function moveObstacle() {
        let obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));
        if (obstacleRight > 600) {
            obstacleRight = -20;
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
        }
        obstacle.style.right = `${obstacleRight + 5}px`;
    }

    function checkCollision() {
        const characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue('bottom'));
        const obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));
        if (obstacleRight > 500 && obstacleRight < 550 && characterBottom < 40) {
            clearInterval(gameInterval);//-
            alert(`Game Over! Your score: ${score}`);//-
            obstacle.style.right = '0px';//-
            score = 0;//-
            scoreDisplay.textContent = 'Score: 0';//-
            startButton.disabled = false;//-
            endGame();//+
        }
    }

    function startGame() {
        if (isGameRunning) return;//+
        isGameRunning = true;//+
        startButton.disabled = true;
        score = 0;//+
        scoreDisplay.textContent = 'Score: 0';//+
        obstacle.style.right = '0px';//+
        gameInterval = setInterval(() => {
            moveObstacle();
            checkCollision();
        }, 20);
    }

    function endGame() {//+
        clearInterval(gameInterval);//+
        isGameRunning = false;//+
        alert(`Game Over! Your score: ${score}`);//+
        startButton.disabled = false;//+
    }//+
    startButton.addEventListener('click', startGame);
//+
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            event.preventDefault();
            jump();
        }
    });
//+
    // Add touch event for mobile devices//+
    gameContainer.addEventListener('touchstart', (event) => {//+
        event.preventDefault();//+
        jump();//+
    });//+
//+
    // Error handling for game elements//+
    [character, obstacle].forEach(element => {//+
        if (getComputedStyle(element).position !== 'absolute') {//+
            console.warn(`${element.id} should have position: absolute`);//+
        }//+
    });//+
});
>>>>>>> Tabnine >>>>>>>// {"source":"chat"}