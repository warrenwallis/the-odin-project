import { Score } from "./components.js";

const header = document.getElementById('header');
header.setAttribute('style', 'display: flex; background: var(--primary-color-lightest); padding: 25px 120px');

const pageTitle = document.createElement('div');
pageTitle.setAttribute('style', 'display: flex; align-items: center; flex: 1; color: vars(--primary-color-darkest); font-size: 26px');
pageTitle.textContent = 'Tic Tac Toe';
header.appendChild(pageTitle);

const PlayerScoreBoard = document.createElement('div');
PlayerScoreBoard.setAttribute('style', 'display: flex;  gap: 10px; justify-content: end; flex: 1;');
const player1 = Score(PlayerScoreBoard, 'player1ScoreBoard', 'Player 1');
const player2 = Score(PlayerScoreBoard, 'player2ScoreBoard', 'Player 2');
header.appendChild(PlayerScoreBoard);
