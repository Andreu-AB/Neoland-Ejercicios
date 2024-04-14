import { initControler, getInfo } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761508/pngwing.com_r0hr9b.png"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateTicTacToe">
          <img
          class="TicTacToeImage"
            src="https://res.cloudinary.com/df10msx47/image/upload/v1712817279/TicTacToe_dk1ahf.webp"
            alt=" go to Tic Tac Toe game"
          />
          <h2>TIC TAC TOE</h2>
        </figure>
      </li>
      <li class="MemoryGameLi">
        <h2 class="comingSoonTitle">COMING SOON</h2>
        <figure class="MemoryGameFigure">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761735/6168776_kfna36.png"
            alt="go to memory game"
          />
          <h2>MEMORY GAME</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

// Muestrario de los elementos de la app con addEventListener de cada aplicación

const addEventListeners = () => {
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });
  const navigateTicTacToe = document.getElementById("navigateTicTacToe");
  navigateTicTacToe.addEventListener("click", () => {
    initControler("TicTacToe");
  });
};

export const printTemplateDashboard = () => {
  document.querySelector("main").innerHTML = template();

  document.querySelector("nav").style.display = "flex";

  addEventListeners();

  getInfo();
};
