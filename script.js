const board = document.getElementById('board')

const game = () => {
  const board = ['','','','','','','','','']
  const players = []

  const player = (marker) => {
    return {marker}
  }

  const display = () => {
    board.innerHTML = ''
    board.forEach((mark, index) => {
      let square = document.createElement('div')
      square.className = 'square'
      square.innerText = mark
      square.onclick = function() {play(index, currentPlayer)}
      board.appendChild(square)
    })
  }

  const play = (index, player) => {
    if (board[index] == '') {
      board[index] = player.marker
      display()
    }
  }

  const check_winner = () => {
    
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
