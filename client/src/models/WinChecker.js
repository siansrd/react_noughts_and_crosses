class WinChecker {

  gameIsWon(board) {
    const results = []

    results.push(this.horizontalWinCheck(board))
    results.push(this.verticalWinCheck(board))
    results.push(this.diagonalWinCheck(board))

    return results.includes(true)
  }

  horizontalWinCheck(board) {
    for (let i = 0; i < board.length; i++) {
      const rowIsWon = board[i].every(tile => {
        return (tile !== "") && (tile === board[i][0])
      })

      if (rowIsWon) return true
    }

    return false
  }

  verticalWinCheck(board) {
    for (let i = 0; i < board.length; i++) {
      if (board[0][i] !== "") {
        if (board[0][i] === board[0][i + 1] 
          && board[0][i] === board[0][i + 2]) {
          return true
        }
      }
    }

    return false
  }

  diagonalWinCheck(board) {
    const middleIndex = Math.floor(board.length / 2)
    const middleTile = board[middleIndex][middleIndex]

    if (middleTile === "") return false

    if (middleTile === board[0][0]
        && middleTile === board[2][2]) {
      return true
    }

    if (middleTile === board[0][2]
        && middleTile === board[2][0]) {
      return true
    }

    return false
  }

}

module.exports = WinChecker
