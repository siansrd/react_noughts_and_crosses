import React, { Component } from 'react'

import WinChecker from '../models/WinChecker.js'
import Board from '../components/Board.jsx'
import GameStatus from '../components/GameStatus.jsx'
import ScoreBoard from '../components/ScoreBoard.jsx'
import NewGameButton from '../components/NewGameButton.jsx'

class TicTacToeContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentPlayer: 'x',
      gameIsWon: false,

      score: {
        x: 0,
        y: 0
      },
      
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ]
    }

    this.state.status = `It's ${ this.state.currentPlayer }'s turn!`,

    this.winChecker = new WinChecker()
    this.handleTileClick = this.handleTileClick.bind(this)
  }

  switchPlayer() {
    return this.state.currentPlayer === 'x' ? 'o' : 'x'
  }

  handleTileClick(xCoord, yCoord) {
    const newState = {}

    const newBoard = [...this.state.board]
    newBoard[yCoord][xCoord] = this.state.currentPlayer

    newState.board = newBoard
    
    if (this.winChecker.gameIsWon(newBoard)) {
      newState.status = `${ this.state.currentPlayer } wins!`

      this.setState((prevState) => { 
        prevState.score[this.state.currentPlayer] ++
      })
    }
    else {
      const newPlayer = this.switchPlayer()
      newState.currentPlayer = newPlayer
      newState.status = `It's ${ newPlayer }'s turn!`
    }

    this.setState(newState)
  }

  render() {
    return (
      <div>
        <Board board={ this.state.board } handleTileClick={ this.handleTileClick } />
        <GameStatus currentPlayer={ this.state.currentPlayer } message={ this.state.status } />
        <ScoreBoard score={ this.state.score } />
        <NewGameButton />
      </div>
    )
  }

}

export default TicTacToeContainer
