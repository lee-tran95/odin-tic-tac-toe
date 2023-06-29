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
            grid.textContent = gameBoard[index]
            grid.addEventListener("click", () =>{
                console.log(index)
            })
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
        Gameboard.displayBoard()

    }

    const mark = () => {

    }
    return{
        start
    }
})();