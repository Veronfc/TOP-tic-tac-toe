const gameboard = document.getElementById('board')

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

    for (let i = 0; i < 9; i++) {
      let mark = board[i]
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
      alert(`Player ${currentPlayer.marker} is the winner!`)

      board.forEach((marker, index) => {
        board[index] = ''
        display()
      })
    }

    currentPlayer == current.players[0] ? currentPlayer = current.players[1] : currentPlayer = current.players[0]
  }

  return {player, players, display, board}
}

current = game()
current.players.push(current.player('X'))
current.players.push(current.player('O'))
let currentPlayer = current.players[0]
current.display()

setTimeout(() => {
  const header = document.querySelector('.header')
  header.style.transform = 'translateX(0px)'
}, 500)
