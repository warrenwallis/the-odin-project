const Score = (parent, id, name, score = 0) => {

    const createElement = () => {
        const container = document.createElement('div');
        container.setAttribute('style', 'display: flex; flex-direction: col; background: var(--primary-color-darkest); color: var(--primary-color-lightest); padding: 15px 40px; border-radius: 15px; gap: 5px');

        const playerHandle = document.createElement('div');
        container.textContent = `${name}:`;
        container.appendChild(playerHandle);
        
        const playerScore = document.createElement('div');
        playerScore.textContent = `${score}`;
        container.appendChild(playerScore);
        
        parent.appendChild(container);
    }

    const display = () => {
        score++;

        const currScore = document.getElementById(`${id}`);

    }

    return { id, createElement };
}

const header = document.getElementById('header');
header.setAttribute('style', 'display: flex; background: var(--primary-color-lightest); padding: 25px 120px');

const pageTitle = document.createElement('div');
pageTitle.setAttribute('style', 'display: flex; align-items: center; flex: 1;');
pageTitle.textContent = 'Tic Tac Toe';
header.appendChild(pageTitle);

const PlayerScoreBoard = document.createElement('div');
PlayerScoreBoard.setAttribute('style', 'display: flex;  gap: 10px; justify-content: end; flex: 1;');
const player1 = Score(PlayerScoreBoard, 'player1ScoreBoard', 'Player 1');
player1.createElement();
const player2 = Score(PlayerScoreBoard, 'player2ScoreBoard', 'Player 2');
player2.createElement();
header.appendChild(PlayerScoreBoard);
