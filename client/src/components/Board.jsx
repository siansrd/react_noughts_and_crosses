import React, { Component } from 'react'
import Tile from './Tile.jsx'

class Board extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const rowNodes = []

    this.props.board.forEach((row, yIndex) => {
      const tileNodes = row.map((tile, xIndex) => {
        return (
          <Tile
            key={ "" + yIndex + xIndex }
            xCoord={ xIndex }
            yCoord={ yIndex }
            character={ tile } 
            handleTileClick={ this.props.handleTileClick } />
        )
      })
      rowNodes.push(tileNodes)
    })


    return (
      <div id="board">
        { rowNodes }
      </div>
    )
  }

}

export default Board
