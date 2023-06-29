const startButton = document.getElementById('start-button')
startButton.addEventListener('click', () =>{
    DisplayController.start()
})


const Gameboard = (() =>{
    const gameBoard = 
        ['X',' ',' ',
         ' ',' ',' ',
         ' ',' ',' ']

    const displayBoard = () =>{
        Array.from(document.querySelectorAll(".grid"), (grid,index) =>{
            grid.addEventListener("click", DisplayController.mark)
            grid.textContent = gameBoard[index]
        })
    }
    return {
        gameBoard,
        displayBoard
    }
})()

const PlayerFactory = (name, marker) =>{
    return {name, marker}
};

const DisplayController = (() =>{
    const players = []
    let currentPlayer;
    let gameOver;

    const start = () =>{
        let player1 = PlayerFactory(document.getElementById('player1').value, 'X')
        let player2 = PlayerFactory(document.getElementById('player2').value, 'O')
        players.push(player1, player2)
        currentPlayer = 0;
        gameOver = false
        Gameboard.displayBoard()
    }

    const mark = (event) => {
        if(event.target.textContent === 'X' || event.target.textContent === 'O'){
            return
        }
        Gameboard.gameBoard[event.target.dataset.index] = players[currentPlayer].marker
        currentPlayer = currentPlayer === 0 ? 1 : 0
        Gameboard.displayBoard()
    }
    return{
        start,
        mark
    }
})();