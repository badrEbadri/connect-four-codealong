/*----- constants -----*/
const playerLookup = {
  '1': 'purple',
  '-1': 'lime',
  'null': 'transparent' 
};

/*----- app's state (variables) -----*/
let board;    // Array of column arrays with 1, -1, or null
let turn;     // 1 or -1 (player)
let winner;   // 1 = Player 1; -1 = Player 2; 'T' = tie; null = no winner/tie

/*----- cached element references -----*/
const markerEls = Array.from(document.querySelectorAll('#markers > div'));
// OR
// const markerEls = [...document.querySelectorAll('#markers > div')];
const msgEl = document.getElementById('msg');

/*----- event listeners -----*/
document.getElementById('markers')
  .addEventListener('click', handleClick);

/*----- functions -----*/
init();

function init() {
  board = [
    [null, null, null, null, null, null],  // Column 0
    [null, null, null, null, null, null],  // Column 1
    [null, null, null, null, null, null],  // etc.
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
  ];
  turn = 1;
  winner = null;
  render();
}

// Transfer ALL state to the DOM
function render() {
  // Render the board
  board.forEach(function(colArr, colIdx) {
    colArr.forEach(function(cell, rowIdx) {
      const div = document.getElementById(`c${colIdx}r${rowIdx}`);
      div.style.backgroundColor = playerLookup[cell];
    });
  });
  // Render turn or winner message
  if (winner) {

  } else {
    // Render whose turn
    msgEl.innerHTML = `<span style="color: ${playerLookup[turn]}">${playerLookup[turn].toUpperCase()}'s</span> Turn`;
  }
}

function handleClick(evt) {
  // Get col index of clicked marker
  const colIdx = markerEls.indexOf(evt.target);
  // Ensure actual col marker was clicked
  if (colIdx === -1) return;

}