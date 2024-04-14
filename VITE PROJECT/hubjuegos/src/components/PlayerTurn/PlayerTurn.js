import "./PlayerTurn.css";

export const PrintPlayerTurn = () => {
  const playerTurn = `
    <div class="turn-container">
      <h3>Turn For</h3>
      <div class="turn-box align">X</div>
      <div class="turn-box align">O</div>
      <div id="background" class="bg"></div>
    </div>
`;

  // Coge el archivo contenedor de TicTacToe.js e inyecta el template, pone el html y llama la función
  const containerPlayerTurn = document.getElementById("playerTurnContainer");
  containerPlayerTurn.innerHTML = playerTurn;
};
