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
    let playerIdx = 0;

    const nextPlayer = () => (playerIdx + 1) % players.length;
    const win = () => players[playerIdx].incrementPoints();
    const resetGame = () => playerIdx = 0;
    const resetScores = () => {
        for (let i = 0; i < players.length; i++) {
            players[i].reset();
        }
    }

    return { nextPlayer, win, resetGame, resetScores };
}