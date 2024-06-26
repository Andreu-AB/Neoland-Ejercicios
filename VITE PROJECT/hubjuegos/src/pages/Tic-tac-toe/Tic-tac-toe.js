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

// Importa y llama los componentes de la app del 3 en raya

export const PrintTicTacToePage = () => {
  document.querySelector("main").innerHTML = template();
  PrintPlayerTurn();
  PrintMainGrid();
  PrintButtonPlayAgain();
};
