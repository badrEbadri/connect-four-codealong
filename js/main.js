/*----- constants -----*/


/*----- app's state (variables) -----*/
let board;    // Array of column arrays with 1, -1, or null
let turn;     // 1 or -1 (player)
let winner;   // 1 = Player 1; -1 = Player 2; 'T' = tie; null = no winner/tie

/*----- cached element references -----*/


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

function render() {

}

function handleClick(evt) {
  console.log(evt.target);

}