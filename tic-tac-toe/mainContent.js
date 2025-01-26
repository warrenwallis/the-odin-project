import { Banner, Board, Button, Controls, Legend, PlayerLegend } from "./components.js";

const mainContent = document.getElementById('mainContent');
mainContent.setAttribute('style', 'display: flex; padding: 50px 120px; gap: 75px');

/* BEGIN : Board */

const leftDiv = document.createElement('div');
leftDiv.setAttribute('style', 'display: flex; justify-content: center; align-items: center; height: 50vw; width: 65vw');

const board = Board(leftDiv);
mainContent.appendChild(leftDiv);

/* END : Board */

/* BEGIN : Controls */

const rightDiv = document.createElement('div');
rightDiv.setAttribute('style', 'display: flex; flex-direction: column; justify-content: end; height: 50vw; width: 35vw;');
rightDiv.id = 'mainContentRightDiv';

const playerLegendDiv = Legend(rightDiv);
const banner = Banner(rightDiv);
const buttonsDiv = Controls({ parent: rightDiv, board, banner });

mainContent.appendChild(rightDiv);

/* END : Controls */