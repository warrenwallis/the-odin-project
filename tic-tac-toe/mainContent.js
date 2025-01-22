const mainContent = document.getElementById('mainContent');
mainContent.setAttribute('style', 'display: flex; flex-direction: col; width: 100vw');

/* BEGIN : Board */

const leftDiv = document.createElement('div');
leftDiv.setAttribute('style', 'display: flex; justify-content: center; align-items: center; border: 2px solid black; height: 50%; width: 50%');

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
