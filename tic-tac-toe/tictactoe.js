const gameBoard = [];
const markings = ['X', 'O']

function createPlayer(name, marking, points) {
    const mark = markings[marking]

    const getPoints = () => points;
    const incrementPoints = () => points++;
    const reset = () => points = 0;

    return { name, mark, getPoints, incrementPoints, reset };
}

function createGame() {
    const players = [ createPlayer(1, 0, 0), createPlayer(2, 1, 0) ];
    let currPlayerIdx = 0;
    const moves = [];

    const nextPlayer = () => {
        currPlayerIdx = (currPlayerIdx + 1) % players.length;
        globalBanner.setMessage(`Player ${players[currPlayerIdx].name}'s turn`);
    }
    const currPlayerSymbol = () => markings[currPlayerIdx];
    const currPlayerName = () => players[currPlayerIdx].name;
    const win = () => players[currPlayerIdx].incrementPoints();
    const resetGame = () => {
        currPlayerIdx = 0
        globalBanner.setMessage(`Player ${players[currPlayerIdx].name}'s turn`);
    };
    const resetScores = () => {
        for (let i = 0; i < players.length; i++) {
            players[i].reset();
        }
    }
    const addMove = (boardSquare) => {
        moves.push(boardSquare);
        console.log(moves);
    }
    const redoMove = (board, banner) => {
        if (moves.length > 0) {
            const boardSquare = moves.pop();
            board.resetSquare(boardSquare.getAttribute('key'));
            nextPlayer(banner);
        } else banner.setMessage("No Moves to Redo!");

        console.log(moves);
    }

    return { currPlayerIdx, currPlayerSymbol, currPlayerName, nextPlayer, win, resetGame, resetScores, addMove, redoMove };
}

const game = createGame();

export { game };