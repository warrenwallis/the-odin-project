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

const playerLegend = (parent, id, name, tag) => {
    const playerTag = document.createElement('div');

    const constructor = (() => {
        const container = document.createElement('div');
        container.setAttribute('style', 'display: flex; flex-direction: col; background: var(--primary-color-darkest); color: var(--primary-color-lightest); padding: 15px 40px; border-radius: 15px; gap: 5px');

        const playerHandle = document.createElement('div');
        container.textContent = `${name}:`;
        container.appendChild(playerHandle);
        
        playerTag.textContent = `${tag}`;
        container.appendChild(playerTag);
        
        parent.appendChild(container);
    })();

    return { playerTag };
}

const rightDiv = document.createElement('div');
rightDiv.setAttribute('styles', 'display: flex; justify-content: center');




/* END : Controls */