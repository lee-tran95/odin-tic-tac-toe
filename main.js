const startButton = document.getElementById('start-button')
const grid = document.querySelectorAll('.grid')
startButton.addEventListener('click', () =>{
    DisplayController.start()
})

Array.from(grid), grid =>{
    grid.addEventListener("click", DisplayController.mark)
}

const Gameboard = (() =>{
    const gameBoard = 
        [' ',' ',' ',
         ' ',' ',' ',
         ' ',' ',' ']

    const displayBoard = () =>{
        Array.from(document.querySelectorAll(".grid"), (grid,index) =>{
            grid.textContent = board[index]
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
    let currentPlayer = 0;
    let gameOver = false;

    const start = () =>{
        let player1 = PlayerFactory(document.getElementById('player1').value, 'X')
        let player2 = PlayerFactory(document.getElementById('player2').value, 'O')
        players.push(player1, player2)
        Gameboard.displayBoard

    }

    const mark = () => {

    }
    return{
        start
    }
})();