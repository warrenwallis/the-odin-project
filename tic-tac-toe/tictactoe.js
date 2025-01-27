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
    let allowPlay = true;
    const moves = [];
    const possibleWins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const nextPlayer = () => {
        if (allowPlay) {
            currPlayerIdx = (currPlayerIdx + 1) % players.length;
            globalBanner.setMessage(`Player ${players[currPlayerIdx].name}'s turn`);
        }
    }
    const currPlayerSymbol = () => markings[currPlayerIdx];
    const currPlayerName = () => players[currPlayerIdx].name;
    const win = () => players[currPlayerIdx].incrementPoints();
    const resetGame = () => {
        currPlayerIdx = 0
        globalBanner.setMessage(`Player ${players[currPlayerIdx].name}'s turn`);
        allowPlay = true;
    };
    const resetScores = () => {
        for (let i = 0; i < players.length; i++) {
            players[i].reset();
            globalPlayers[i].updateScore();
        }
        resetGame();
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
    const checkMove = (boardSquares) => {
        for (let [a, b, c] of possibleWins) {
            if (boardSquares[a].boardSquare.textContent !== '' && boardSquares[a].boardSquare.textContent == boardSquares[b].boardSquare.textContent && boardSquares[b].boardSquare.textContent == boardSquares[c].boardSquare.textContent) {
                globalBanner.setMessage(`Player ${currPlayerName()} WINS!`);
                players[currPlayerIdx].incrementPoints();
                globalPlayers[currPlayerIdx].updateScore();
                allowPlay = false;
            }
        }
    }
    const checkAllowPlay = () => allowPlay;
    const getPlayers = () => players;

    return { currPlayerIdx, currPlayerSymbol, currPlayerName, nextPlayer, win, resetGame, resetScores, addMove, redoMove, checkMove, checkAllowPlay, getPlayers };
}

const game = createGame();

export { game };