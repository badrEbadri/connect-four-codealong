/*----- constants -----*/


/*----- app's state (variables) -----*/
let board;    // Array of column arrays with 1, -1, or null
let turn;     // 1 or -1 (player)
let winner;   // 1 = Player 1; -1 = Player 2; 'T' = tie; null = no winner/tie

/*----- cached element references -----*/


/*----- event listeners -----*/


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
}