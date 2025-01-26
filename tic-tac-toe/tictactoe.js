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

    const nextPlayer = () => currPlayerIdx = (currPlayerIdx + 1) % players.length;
    const currPlayerSymbol = () => markings[currPlayerIdx];
    const win = () => players[currPlayerIdx].incrementPoints();
    const resetGame = () => currPlayerIdx = 0;
    const resetScores = () => {
        for (let i = 0; i < players.length; i++) {
            players[i].reset();
        }
    }

    return { currPlayerIdx, currPlayerSymbol, nextPlayer, win, resetGame, resetScores };
}

const game = createGame();

export { game };