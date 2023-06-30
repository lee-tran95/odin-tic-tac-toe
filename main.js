const startButton = document.getElementById('start-button')
startButton.addEventListener('click', () =>{
    DisplayController.start()
})


const Gameboard = (() =>{
    const gameBoard = 
        ['','','',
         '','','',
         '','','']

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
    let turns;
    let gameOver;

    const start = () =>{
        if(players.length > 0) return
        let player1 = PlayerFactory(document.getElementById('player1').value || "1", 'X')
        let player2 = PlayerFactory(document.getElementById('player2').value || "2", 'O')
        players.push(player1, player2)
        turns = 1;
        currentPlayer = 0;
        gameOver = false
        Gameboard.displayBoard()
    }

    const mark = (event) => {
        if(event.target.textContent === 'X' || event.target.textContent === 'O' || gameOver){
            return
        }
        Gameboard.gameBoard[event.target.dataset.index] = players[currentPlayer].marker
        turns++
        Gameboard.displayBoard()
        if(winConditions()){
            document.getElementById('message').textContent = `Player ${players[currentPlayer].name} Wins!`
            gameOver = true
        }
        if(!winConditions() && turns > 9){
            document.getElementById('message').textContent = "It's a tie! Click the reset button to play again"
            gameOver = true
        }
        currentPlayer = currentPlayer === 0 ? 1 : 0
        
    }

    const winConditions = () =>{
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for(let i = 0; i < winningCombinations.length; i++){
            const [a, b, c] = winningCombinations[i]
            if(Gameboard.gameBoard[a] && Gameboard.gameBoard[a] === Gameboard.gameBoard[b] && Gameboard.gameBoard[a] === Gameboard.gameBoard[c]){
                return true
            }
        }
        return false
    }
    return{
        start,
        mark,
        winConditions
    }
})();