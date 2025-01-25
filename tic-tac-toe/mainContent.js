import { playerLegend } from "./components.js";

const mainContent = document.getElementById('mainContent');
mainContent.setAttribute('style', 'display: flex; flex-direction: col; padding: 50px 120px');

/* BEGIN : Board */

const leftDiv = document.createElement('div');
leftDiv.setAttribute('style', 'display: flex; justify-content: center; align-items: center; border: 2px solid black; height: 50vw; width: 70vw');

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
rightDiv.setAttribute('style', 'display: flex; justify-content: center; border: 2px solid black; height: 50vw; width: 30vw');

const playerLegendDiv = document.createElement('div');
playerLegendDiv.setAttribute('style', 'display: flex; flex-direction: col');
const playerLegend1 = playerLegend(playerLegendDiv, 'player1Legend', 'Player 1');
const playerlegend2 = playerLegend(playerLegendDiv, 'player2Legend', 'Player 2');

rightDiv
mainContent.appendChild(rightDiv);


/* END : Controls */