import React, { Component } from 'react'

class Tile extends Component {

  constructor(props) {
    super(props)
    this.handleTileClick = this.handleTileClick.bind(this)
  }

  handleTileClick(event) {
    this.props.handleTileClick(this.props.xCoord, this.props.yCoord)
  }

  render() {
    return (
      <div className="tile" onClick={ this.handleTileClick }>
        { this.props.character }
      </div>
    )
  }

}

export default Tile
