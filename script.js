const gameboard = document.getElementById('board')
start = document.querySelector('.start')
winner = document.querySelector('.winner')
turn = document.querySelector('.turn')

const game = () => {
  const board = ['','','','','','','','','']
  const players = []

  const player = (marker) => {
    return {marker}
  }

  const display = () => {
    gameboard.innerHTML = ''
    board.forEach((mark, index) => {
      let square = document.createElement('div')
      square.className = 'square'
      square.innerText = mark
      if (mark == 'X') {
        square.style.backgroundColor = 'red'
      }
      else if (mark == 'O') {
        square.style.backgroundColor = 'blue'
      }
      else {square.style.backgroundColor = 'rgb(240,240,240)'}
      square.onclick = function() {play(index, currentPlayer)}
      gameboard.appendChild(square)
    })
  }

  const play = (index) => {
    if (board[index] == '') {
      board[index] = currentPlayer.marker
      display()

      setTimeout(() => {
        check_winner()
      }, 500)
    }
  }

  const check_winner = () => {
    /*win cases 012-036-048-147-246-258-345-678*/
    let win = false
    let tie = 0

    for (let i = 0; i < 9; i++) {
      let mark = board[i]

      if (mark != '') {
        tie++
      }

      if (mark == currentPlayer.marker) {
        if (i == 0 && (mark == board[1] && mark == board[2] ||
          mark == board[3] && mark == board[6] ||
          mark == board[4] && mark == board[8])) {
          win = true
          break
        } 
        else if (i == 1 && (mark == board[4] && mark == board[7])) {
          win = true
          break
        }
        else if (i == 2 && (mark == board[4] && mark == board[6] || mark == board[5] && mark == board[8])) {
          win = true
          break
        }
        else if (i == 3 && (mark == board[4] && mark == board[5])) {
          win = true
          break
        }
        else if (i == 6 && (mark == board[7] && mark == board[8])) {
          win = true
          break
        }
        else {win = false}
      }
      else {win = false}
    }

    if (win) {
      winner.innerText = `Player ${currentPlayer.marker} has won`
      winner.style.transform = 'translate(-50%, -50%)'
      
      setTimeout(() => {
        winner.style.transform = 'translate(100%, -50%)'
        start.style.transform = 'translate(-50%, -50%)'
      },1500)

      board.forEach((marker, index) => {
        board[index] = ''
        display()
      })
    }

    if (!win && tie == 9) {
      winner.innerText = 'Draw'
      winner.style.transform = 'translate(-50%, -50%)'
      
      setTimeout(() => {
        winner.style.transform = 'translate(100%, -50%)'
        start.style.transform = 'translate(-50%, -50%)'
      },1500)

      board.forEach((marker, index) => {
        board[index] = ''
        display()
      })
    }

    if (currentPlayer == current.players[0]) {
      currentPlayer = current.players[1]
      turn.innerText = 'Its your turn Player O'
    }
    else {
      currentPlayer = current.players[0]
      turn.innerText = 'Its your turn Player X'
    }
    
    if (win || tie == 9) {
      turn.innerText = ''
    }
  }

  return {player, players, display, board}
}

current = game()
current.players.push(current.player('X'))
current.players.push(current.player('O'))
current.display()

function setPlayer(element) {
  start.style.transform = 'translate(-200%, -50%)'
  current.players[0].marker == element.innerText ? currentPlayer = current.players[0] : currentPlayer = current.players[1]
}

setTimeout(() => {
  start.style.transform = 'translate(-50%, -50%)'
}, 500)