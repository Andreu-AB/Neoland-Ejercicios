import "./ButtonPlayAgain.css";
import { restartGame } from "../index";
export const PrintButtonPlayAgain = () => {
  const buttonPlayAgain = `

    <h2 id="results"></h2>
    <button id="play-again">Play Again</button>
    `;
  const containerButtonPlayAgain = document.getElementById(
    "buttonPlayAgainContainer"
  );
  containerButtonPlayAgain.innerHTML = buttonPlayAgain;
  listenToButtonClick();
};

// Botón que ejecuta la función de reiniciar el juego que aparece en MainGrid.js

function listenToButtonClick() {
  const buttonPlayAgainElement = document.querySelector("#play-again");

  buttonPlayAgainElement.addEventListener("click", () => {
    restartGame();
  });
}
