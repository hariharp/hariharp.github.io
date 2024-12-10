document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#6b340f';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#8B4513';
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('.gallery-item img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s';
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
    });

    // Event listener to trigger the game when the first gallery item is clicked
    const playGameItem = document.querySelector('#playGame');
    const originalImage = playGameItem.innerHTML;  
    playGameItem.addEventListener('click', () => {
        // Check if the game is already loaded to prevent reloading
        if (playGameItem.querySelector('.game-container')) return;

        // Hide the image and display the game inside the gallery item
        const gameHTML = `
            <div class="game-container">
                <h1>Guess the Number</h1>
                <p>I'm thinking of a number between 1 and 100. Can you guess it?</p>
                <input type="number" id="guessInput" placeholder="Enter your guess" />
                <button id="submitGuess">Guess</button>
                <p id="message"></p>
                <button id="restart">Restart Game</button>
            </div>
        `;
        playGameItem.innerHTML = gameHTML;

        // Game logic
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        // Attach event listeners to the game elements
        const submitButton = document.getElementById("submitGuess");
        const guessInput = document.getElementById("guessInput");
        const restartButton = document.getElementById("restart");
        const messageElement = document.getElementById("message");

        // Handle the guess submission
        submitButton.addEventListener("click", () => {
            const guess = parseInt(guessInput.value);
            attempts++;

            if (isNaN(guess)) {
                messageElement.textContent = "Please enter a valid number.";
                return;
            }

            if (guess === randomNumber) {
                messageElement.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
                // After winning, restore the image
                setTimeout(() => {
                    playGameItem.innerHTML = originalImage;  // Replace the game with the original image
                }, 2000); // Delay to give time for the win message
            } else if (guess > randomNumber) {
                messageElement.textContent = "📉 Too high! Try again.";
            } else {
                messageElement.textContent = "📈 Too low! Try again.";
            }
        });

        // Restart the game
        restartButton.addEventListener("click", () => {
            randomNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
            messageElement.textContent = "";
            guessInput.value = "";
        });
    });
});
