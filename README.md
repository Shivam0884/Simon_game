# Simon_game

The Simon Game project is the classic memory game "Simon" using HTML, CSS, and JavaScript. This project involves designing a user-friendly interface and implementing the game logic to provide an engaging and interactive experience.

*Project Overview:*

1. *User Interface:*
   - The game interface consists of four colored buttons (red, green, blue, and yellow).
   - The buttons are arranged in a square grid to mimic the original Simon game layout.
   - A central display shows the current game level and status messages (e.g., "Game Over", "Level 1").

2. *Game Logic:*
   - The game generates a random sequence of button presses that the player must memorize and reproduce.
   - Each level, the sequence grows by one additional button press.
   - Players must repeat the sequence correctly to advance to the next level.
   - If the player makes a mistake, the game displays a "Game Over" message and resets.

3. *JavaScript Implementation:*
   - *Event Listeners:* JavaScript handles user interactions by adding event listeners to the buttons. These listeners detect button presses and trigger the corresponding game actions.
   - *Sequence Generation:* A function generates the random sequence of button presses, ensuring each level's sequence is correctly stored and extended.
   - *User Input Handling:* User input is compared to the generated sequence, checking for correctness and determining if the player progresses or the game ends.
     
4. *Game Flow:*
   - The game starts with a single button press sequence.
   - After displaying the sequence to the player, the game waits for the player to repeat the sequence.
   - Correct sequences result in progression to the next level, with a longer sequence.
   - Incorrect sequences result in a game over, prompting the player to restart.

   
This project serves as an excellent opportunity to deepen your understanding of JavaScript, DOM manipulation and event handling.
