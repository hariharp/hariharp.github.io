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

    // Add a click listener to the first gallery item (id="playGame")
    const playGameItem = document.getElementById('playGame'); // Ensure we're using `getElementById`
    
    // Make sure the event listener is working
    if (playGameItem) {
        playGameItem.addEventListener('click', () => {
            // Replace content with the game
            playGameItem.innerHTML = `
                <div class="game-container">
                    <h1>Guess the Number</h1>
                    <p>I'm thinking of a number between 1 and 100. Can you guess it?</p>
                    <input type="number" id="guessInput" placeholder="Enter your guess">
                    <button id="submitGuess">Guess</button>
                    <p id="message"></p>
                    <button id="restart">Restart Game</button>
                </div>
            `;

            // Game logic
            let randomNumber = Math.floor(Math.random() * 100) + 1;
            let attempts = 0;

            // Handle Guessing
            document.getElementById("submitGuess").addEventListener("click", () => {
                const guess = parseInt(document.getElementById("guessInput").value);
                attempts++;

                if (isNaN(guess)) {
                    document.getElementById("message").textContent = "Please enter a valid number.";
                    return;
                }

                if (guess === randomNumber) {
                    document.getElementById("message").textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
                } else if (guess > randomNumber) {
                    document.getElementById("message").textContent = "📉 Too high! Try again.";
                } else {
                    document.getElementById("message").textContent = "📈 Too low! Try again.";
                }
            });

            // Restart the game
            document.getElementById("restart").addEventListener("click", () => {
                randomNumber = Math.floor(Math.random() * 100) + 1;
                attempts = 0;
                document.getElementById("message").textContent = "";
                document.getElementById("guessInput").value = "";
            });
        });
    } else {
        console.log('Error: The playGame element was not found!');
    }
});
