const assert = require('assert')
const WinChecker = require('../WinChecker.js')

describe('WinChecker', () => {
  let winBoard
  let loseBoard
  let winChecker

  beforeEach(() => {
    winBoard = [
      ['x', 'x', 'x'],
      ['x', 'x', 'x'],
      ['x', 'x', 'x']
    ]

    loseBoard = [
      ['x', 'o', 'x'],
      ['x', 'o', 'x'],
      ['o', 'x', 'o'],
    ]

    winChecker = new WinChecker(null)
  })
  
  it('should have a board', () => {
    winChecker = new WinChecker(winBoard)
    assert.deepEqual(winBoard, winChecker.board)
  })

  it('should detect a horizontal win', () => {
    winChecker.board = winBoard
    assert.equal(true, winChecker.horizontalWinCheck())
  })

  it('should detect no horizontal wins', () => {
    winChecker.board = loseBoard
    assert.equal(false, winChecker.horizontalWinCheck())
  })

  it('should detect a vertical win', () => {
    winChecker.board = winBoard
    assert.equal(true, winChecker.verticalWinCheck())
  })

  it('should detect no vertical wins', () => {
    winChecker.board = loseBoard
    assert.equal(false, winChecker.verticalWinCheck())
  })

  it('should detect a diagonal win', () => {
    winChecker.board = winBoard
    assert.equal(true, winChecker.diagonalWinCheck())
  })

  it('should detect no diagonal wins', () => {
    winChecker.board = loseBoard
    assert.equal(false, winChecker.diagonalWinCheck())
  })

})
