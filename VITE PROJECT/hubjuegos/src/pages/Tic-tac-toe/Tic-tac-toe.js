import {
  PrintPlayerTurn,
  PrintMainGrid,
  PrintButtonPlayAgain,
} from "../../components";
import "./Tic-tac-toe.css";
const template = () => `
<div id="ticTacToeContainer">
    <div id='playerTurnContainer'></div>
    <div id='mainGridContainer'></div>
    <div id='buttonPlayAgainContainer'></div>
</div>

`;

export const PrintTicTacToePage = () => {
  document.querySelector("main").innerHTML = template();
  PrintPlayerTurn();
  PrintButtonPlayAgain();
  PrintMainGrid();
};
