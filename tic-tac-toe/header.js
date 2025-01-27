import { Score } from "./components.js";
import { game } from "./tictactoe.js";

const header = document.getElementById('header');
header.setAttribute('style', 'display: flex; background: var(--primary-color-lightest); padding: 25px 120px');

const pageTitle = document.createElement('div');
pageTitle.setAttribute('style', 'display: flex; align-items: center; flex: 1; color: vars(--primary-color-darkest); font-size: 26px');
pageTitle.textContent = 'Tic Tac Toe';
header.appendChild(pageTitle);

const PlayerScoreBoard = document.createElement('div');
PlayerScoreBoard.setAttribute('style', 'display: flex;  gap: 10px; justify-content: end; flex: 1;');
const player1 = Score({parent: PlayerScoreBoard, id: 'player1ScoreBoard', name: 'Player 1:', score: 0, styles: '', playerObject: game.getPlayers()[0]});
const player2 = Score({parent: PlayerScoreBoard, id: 'player2ScoreBoard', name: 'Player 2:', score: 0, styles: '', playerObject: game.getPlayers()[1]});
header.appendChild(PlayerScoreBoard);

globalPlayers[0] = player1;
globalPlayers[1] = player2;