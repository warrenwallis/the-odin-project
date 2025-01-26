import { Button, PlayerLegend } from "./components.js";

const mainContent = document.getElementById('mainContent');
mainContent.setAttribute('style', 'display: flex; padding: 50px 120px; gap: 75px');

/* BEGIN : Board */

const leftDiv = document.createElement('div');
leftDiv.setAttribute('style', 'display: flex; justify-content: center; align-items: center; height: 50vw; width: 65vw');

const board = document.createElement('div');
board.setAttribute('style', 'display: grid; grid-template-columns: repeat(3, 1fr)');

const borders = [
    [1, 2], [1], [0, 1],
    [2], [], [0],
    [2, 3], [3], [0, 3]
]
const borderMappings = ['border-right', 'border-top', 'border-left', 'border-bottom'];

for (let i = 0; i < borders.length; i++) {
    const boardSquare = document.createElement('div');
    boardSquare.setAttribute('style', 'display: flex; justify-content: center; align-items: center; box-sizing: border-box; padding: 25px');
    boardSquare.id = `boardSquare${i}`;
    boardSquare.className = 'borders';
    boardSquare.textContent = `boardSquare${i}`;

    for (let board of borders[i]) {
        boardSquare.style[borderMappings[board]] = '0px'
    }

    board.appendChild(boardSquare);
}

leftDiv.appendChild(board);
mainContent.appendChild(leftDiv);

/* END : Board */

/* BEGIN : Controls */

const rightDiv = document.createElement('div');
rightDiv.setAttribute('style', 'display: flex; flex-direction: column; justify-content: end; height: 50vw; width: 35vw;');
rightDiv.id = 'mainContentRightDiv';

const playerLegendDiv = document.createElement('div');
playerLegendDiv.setAttribute('style', 'display: flex; gap: 10px;');
playerLegendDiv.id = 'playerLegendDiv';
const player1 = PlayerLegend(playerLegendDiv, 'player1Legend', 'Player 1', 'X', 'background: var(--primary-color-lightest); color: var(--primary-color-darkest)');
const player2 = PlayerLegend(playerLegendDiv, 'player2Legend', 'Player 2', 'O', 'background: var(--primary-color-lightest); color: var(--primary-color-darkest)');

rightDiv.appendChild(playerLegendDiv);

const banner = document.createElement('div');
banner.setAttribute('style', 'display: flex; justify-content: center; align-items: center; flex: 1;');
banner.textContent = 'hello';

rightDiv.appendChild(banner);

const buttonsDiv = document.createElement('div');
buttonsDiv.setAttribute('style', 'display: flex; flex-direction: column; gap: 10px;');
const redoButton = Button(buttonsDiv, 'redoButton', 'Redo', () => {
    console.log('redo');
});
const resetGameButton = Button(buttonsDiv, 'resetGameButton', 'Reset Game', () => {
    console.log('resetGame');
});
const resetScoresButton = Button(buttonsDiv, 'resetScoresButton', 'Reset Scores', () => {
    console.log('resetScores');
});


rightDiv.appendChild(buttonsDiv);

mainContent.appendChild(rightDiv);



/* END : Controls */