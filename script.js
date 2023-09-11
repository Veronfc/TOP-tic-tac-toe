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

  const play = (index, player) => {
    if (board[index] == '') {
      board[index] = player.marker
      display()
      check_winner(player)
    }
  }

  const check_winner = () => {
    /*win cases 012-036-048-147-246-258-345-678*/
    let win = false

    for (let i = 0; i < board.length; i++) {
      let mark = board[i].marker
      if (mark != '') {
        if (i == 0 && (mark == board[1].marker && mark == board[2].marker ||
          mark == board[3].marker && mark == board[6].marker ||
          mark == board[4].marker && mark == board[8].marker)) {
          win = true
          break
        } 
        else if (i == 1 && (mark == board[4].marker && mark == board[7].marker)) {
          win = true
          break
        }
        else if (i == 2 && (mark == board[4].marker && mark == board[6].marker || mark == board[5].marker && mark == board[8].marker)) {
          win = true
          break
        }
        else if (i == 3 && (mark == board[4].marker && mark == board[5].marker)) {
          win = true
          break
        }
        else if (i == 6 && (mark == board[7].marker && mark == board[8].marker)) {
          win = true
          break
        }
        else {win = false}
      }
    }

    if (win) {
      alert('you won')
    }
  }

  return {player, players, display}
}

current = game()
current.players.push(current.player('X'))
current.players.push(current.player('O'))
let currentPlayer = current.players[1]
current.display()

setTimeout(() => {
  const header = document.querySelector('.header')
  header.style.transform = 'translateX(0px)'
}, 500)
