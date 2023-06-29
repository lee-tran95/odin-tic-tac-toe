const Gameboard = (() =>{
    const gameBoard = 
        [1,2,3,
         4,5,6,
         7,8,9,]
    return {gameBoard}
})()

const PlayerFactory = (name, marker) =>{
    return {name, marker}
};

const DisplayController = (() =>{
    const board = Gameboard.gameBoard
    let turn = 1;

    const displayBoard = (() =>{
        Array.from(document.querySelectorAll(".grid"), (grid,index) =>{
            grid.textContent = board[index]
        })
    })()

    // const PlayTurn = (())
    return {
        displayBoard
    }
})();