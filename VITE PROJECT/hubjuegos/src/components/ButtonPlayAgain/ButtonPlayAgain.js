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

function listenToButtonClick() {
  const buttonPlayAgainElement = document.querySelector("#play-again");

  buttonPlayAgainElement.addEventListener("click", () => {
    restartGame();
  });
}
