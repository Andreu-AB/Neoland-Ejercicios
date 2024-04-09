import {
  PrintPlayerTurn,
  PrintMainGrid,
  PrintButtonPlayAgain,
} from "../../components";
const template = () => `
<div>
    <div id='playerTurnContainer'></div>
    <div id='mainGridContainer'></div>
    <div id='buttonPlayAgainContainer'></div>
</div>

`;

export const PrintTicTacToePage = () => {
  document.querySelector("main").innerHTML = template();
  PrintPlayerTurn();
  PrintMainGrid();
  PrintButtonPlayAgain();
};