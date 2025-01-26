export const PlayerLegend = (parent, id, name, tag, styles = '') => {
    const playerTag = document.createElement('div');

    const constructor = (() => {
        const container = document.createElement('div');
        container.setAttribute('style', `display: flex; background: var(--primary-color-darkest); color: var(--primary-color-lightest); padding: 15px 40px; border-radius: 15px; gap: 5px; width: 80px; height: 20px; font-size: 16px; ${styles}`);

        const playerHandle = document.createElement('div');
        container.textContent = `${name}`;
        container.appendChild(playerHandle);
        
        playerTag.textContent = `${tag}`;
        container.appendChild(playerTag);
        
        parent.appendChild(container);
    })();

    return { playerTag };
}

export const Score = (parent, id, name, score = 0, styles = '') => {
    const player = PlayerLegend(parent, id, name, score, styles);

    const updateScore = () => {
        player.playerTag.textContent = `${++score}`;
    }

    return { id, updateScore };
}

export const Button = (parent, id, content, action) => {

    const constructor = (() => {
        const button = document.createElement('button');
        button.setAttribute('style', 'display: flex; justify-content: center; background: var(--primary-color-lightest); color: var(--primary-color-darkest); padding: 15px 40px; border-radius: 15px; font-size: 16px;');
        button.id = id;
        button.textContent = content;
        button.addEventListener('click', action);

        parent.appendChild(button);
    })();
}

export const Board = (parent) => {
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
        boardSquare.addEventListener('click', () => console.log(`Square ${i} clicked!`));
    
        for (let board of borders[i]) {
            boardSquare.style[borderMappings[board]] = '0px'
        }
    
        board.appendChild(boardSquare);
    }
    
    parent.appendChild(board);
}

export const Legend = (parent) => {
    const playerLegendDiv = document.createElement('div');
    playerLegendDiv.setAttribute('style', 'display: flex; gap: 10px;');
    playerLegendDiv.id = 'playerLegendDiv';
    const player1 = PlayerLegend(playerLegendDiv, 'player1Legend', 'Player 1', 'X', 'background: var(--primary-color-lightest); color: var(--primary-color-darkest)');
    const player2 = PlayerLegend(playerLegendDiv, 'player2Legend', 'Player 2', 'O', 'background: var(--primary-color-lightest); color: var(--primary-color-darkest)');

    parent.appendChild(playerLegendDiv);
}

export const Banner = (parent) => {
    const banner = document.createElement('div');
    banner.setAttribute('style', 'display: flex; justify-content: center; align-items: center; flex: 1;');
    banner.textContent = 'hello';

    parent.appendChild(banner);
}

export const Controls = (parent) => {
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


    parent.appendChild(buttonsDiv);
}