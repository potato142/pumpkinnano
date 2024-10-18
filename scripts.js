document.addEventListener('DOMContentLoaded', function () {
    const playButtons = document.querySelectorAll('.play-btn');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Show the game/app when "Play Online" is clicked
    playButtons.forEach(button => {
        button.addEventListener('click', function () {
            const gameId = this.getAttribute('data-game');
            const overlay = document.getElementById(gameId + '-overlay');
            const iframe = document.getElementById(gameId + '-iframe');

            // Set the src of the iframe to load the game/app
            if (gameId === 'game1') {
                iframe.src = 'games/mother/index.html'; // Set the correct path for game 1
            } else if (gameId === 'game2') {
                iframe.src = 'games/PumpkinsQuestTheMagicEggAdventure/index.html'; // Set the correct path for game 2
            } else if (gameId === 'app1') {
                iframe.src = 'apps/app1/index.html'; // Set the correct path for app 1
            } else if (gameId === 'app2') {
                iframe.src = 'apps/app2/index.html'; // Set the correct path for app 2
            }

            // Show the overlay
            overlay.style.display = 'flex';
        });
    });

    // Hide the overlay when the close button is clicked
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const overlay = this.closest('.overlay');
            const iframe = overlay.querySelector('iframe');
            iframe.src = ''; // Clear the src to stop the game/app
            overlay.style.display = 'none';
        });
    });

    // Hide the overlay when clicking outside of the popup
    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.addEventListener('click', function (event) {
            if (event.target === this) {
                const iframe = this.querySelector('iframe');
                iframe.src = ''; // Clear the src to stop the game/app
                this.style.display = 'none';
            }
        });
    });
});
