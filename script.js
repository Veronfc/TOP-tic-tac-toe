const board = document.getElementById('board')

const gameboard = () => {
  const gameboard = ['','','','','','','','','']

  const display = () => {
    board.innerHTML = ''
    gameboard.forEach((index) => {
      let square = document.createElement('div')
      square.className = 'square'
      square.innerText = index
      board.appendChild(square)
    })
  }

  return {gameboard, display}
}

current = gameboard()
current.display()

const player = () => {
  return {}
}

const play = (() => {
  const mark = (index, marker) => {
    if (current.gameboard[index] == '') {
      current.gameboard[index] = marker
    }
  }
  return {}
})();

setTimeout(() => {
  const header = document.querySelector('.header')
  header.style.transform = 'translateX(0px)'
}, 1000)
