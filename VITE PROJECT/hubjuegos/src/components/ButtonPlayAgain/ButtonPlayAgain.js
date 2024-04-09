import "./ButtonPlayAgain.css";
export const PrintButtonPlayAgain = () => {
  const buttonPlayAgain = `
    <button id="play-again">Play Again</button>
    `;
  const containerButtonPlayAgain = document.getElementById(
    "buttonPlayAgainContainer"
  );
  containerButtonPlayAgain.innerHTML = buttonPlayAgain;
};
