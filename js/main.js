/*----- constants -----*/


/*----- app's state (variables) -----*/
let board;    // Array of column arrays with 1, -1, or null
let turn;     // 1 or -1 (player)
let winner;   // 1 = Player 1; -1 = Player 2; 'T' = tie; null = no winner/tie

/*----- cached element references -----*/
const markerEls = Array.from(document.querySelectorAll('#markers > div'));
// OR
// const markerEls = [...document.querySelectorAll('#markers > div')];

/*----- event listeners -----*/
document.getElementById('markers')
  .addEventListener('click', handleClick);

/*----- functions -----*/
init();

function init() {
  board = [
    [1, null, null, null, null, null],  // Column 0
    [-1, 1, null, null, null, null],  // Column 1
    [null, null, -1, null, null, null],  // etc.
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
  ];
  turn = 1;
  winner = null;
  render();
}

function render() {
  // Render the board
  board.forEach(function(colArr, colIdx) {
    colArr.forEach(function(cell, rowIdx) {
      const div = document.getElementById(`c${colIdx}r${rowIdx}`);
      console.log(div)
    });
  });
}

function handleClick(evt) {
  // Get col index of clicked marker
  const colIdx = markerEls.indexOf(evt.target);
  // Ensure actual col marker was clicked
  if (colIdx === -1) return;

}