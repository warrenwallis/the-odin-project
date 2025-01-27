import { game } from './tictactoe.js';

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

export const Score = (props) => {
    const { parent, id, name, score, styles, playerObject } = props;
    const player = PlayerLegend(parent, id, name, score, styles);

    const updateScore = () => {
        player.playerTag.textContent = playerObject.getPoints();
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
    const borders = [
        [1, 2], [1], [0, 1],
        [2], [], [0],
        [2, 3], [3], [0, 3]
    ];
    const borderMappings = ['border-right', 'border-top', 'border-left', 'border-bottom'];
    const boardSquares = [];

    const checkBoard = () => {
        game.checkMove(boardSquares);
    }

    const constructor = (() => {
        const board = document.createElement('div');
        board.setAttribute('style', 'display: grid; grid-template-columns: repeat(3, 1fr)');
        
        for (let i = 0; i < borders.length; i++) {
            const boardSquare = BoardSquare({ board, numbers: i, borders, borderMappings, checkBoard });
            boardSquares.push(boardSquare);
        }
        
        parent.appendChild(board);
    })();

    const resetGame = () => {
        for (let boardSquare of boardSquares) {
            boardSquare.resetSquare();
        }

        console.log(boardSquares);
    }

    const resetSquare = (idx) => {
        boardSquares[idx].resetSquare();
    }

    return { resetGame, resetSquare };
}

export const BoardSquare = (props) => {
    const { board, numbers, borders, borderMappings, checkBoard } = props;

    const boardSquare = document.createElement('div');

    const constructor = (() => {
        boardSquare.setAttribute('style', 'display: flex; justify-content: center; align-items: center; box-sizing: border-box; padding: 25px; width: 150px; height: 150px');
        boardSquare.id = `boardSquare${numbers}`;
        boardSquare.setAttribute('key', numbers);
        boardSquare.className = 'borders';
        boardSquare.addEventListener('click', () => {
            if (boardSquare.textContent === '' && game.checkAllowPlay()) {
                boardSquare.textContent = game.currPlayerSymbol();
                game.addMove(boardSquare);
                checkBoard();
                game.nextPlayer();
            }
        });

        for (let board of borders[numbers]) {
            boardSquare.style[borderMappings[board]] = '0px'
        }

        board.appendChild(boardSquare);
    })();

    const resetSquare = () => {
        boardSquare.textContent = '';
    }

    return { boardSquare, resetSquare };
}

export const Legend = (parent) => {
    const playerLegendDiv = document.createElement('div');
    playerLegendDiv.setAttribute('style', 'display: flex; gap: 10px;');
    playerLegendDiv.id = 'playerLegendDiv';
    const player1 = PlayerLegend(playerLegendDiv, 'player1Legend', 'Player 1', 'X', 'background: var(--primary-color-lightest); color: var(--primary-color-darkest); width: 100%; justify-content: center');
    const player2 = PlayerLegend(playerLegendDiv, 'player2Legend', 'Player 2', 'O', 'background: var(--primary-color-lightest); color: var(--primary-color-darkest); width: 100%; justify-content: center');

    parent.appendChild(playerLegendDiv);
}

export const Banner = (parent) => {
    const banner = document.createElement('div');

    const constructor = (() => {
        banner.setAttribute('style', 'display: flex; justify-content: center; align-items: center; flex: 1;');
        banner.textContent = `Player ${game.currPlayerName()}'s turn`;

        parent.appendChild(banner);
    })();

    const setMessage = (message) => {
        banner.textContent = message;
    }

    return { setMessage };
}

export const Controls = (props) => {
    const { parent, board, banner } = props;

    const buttonsDiv = document.createElement('div');
    buttonsDiv.setAttribute('style', 'display: flex; flex-direction: column; gap: 10px;');
    const redoButton = Button(buttonsDiv, 'redoButton', 'Redo', () => {
        game.redoMove(board, banner);
    });
    const resetGameButton = Button(buttonsDiv, 'resetGameButton', 'Reset Game', () => {
        game.resetGame();
        board.resetGame();
    });
    const resetScoresButton = Button(buttonsDiv, 'resetScoresButton', 'Reset Scores', () => {
        game.resetScores();
        board.resetGame();
    });


    parent.appendChild(buttonsDiv);
}