import "./MainGrid.css";
export const PrintMainGrid = () => {
  const mainGrid = `
        <div class="main-grid">
          <div class="box align">0</div>
          <div class="box align">1</div>
          <div class="box align">2</div>
          <div class="box align">3</div>
          <div class="box align">4</div>
          <div class="box align">5</div>
          <div class="box align">6</div>
          <div class="box align">7</div>
          <div class="box align">8</div>
        </div>
    <h2 id="results">X Win</h2>

    `;
  const containerMainGrid = document.getElementById("mainGridContainer");
  containerMainGrid.innerHTML = mainGrid;
};

let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;

boxes.forEach((e) => {
  // e.innerHTML = ""
  e.addEventListener("click", () => {
    if (!isGameOver && e.innerHTML === "") {
      e.innerHTML = turn;
      cheakWin();
      cheakDraw();
      changeTurn();
    }
  });
});

function changeTurn() {
  if (turn === "X") {
    turn = "O";
    document.querySelector(".bg").computedStyleMap.left = "85px";
  } else {
    turn = "X";
    document.querySelector(".bg").computedStyleMap.left = "0";
  }
}

function cheakWin() {
  let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winCondition.length; i++) {
    let v0 = boxes[winCondition[i][0]].innerHTML;
    let v1 = boxes[winCondition[i][1]].innerHTML;
    let v2 = boxes[winCondition[i][2]].innerHTML;

    if (v0 != "" && v0 === v1 && v0 === v2) {
      isGameOver = true;
    }
  }
}

function cheakDraw() {}