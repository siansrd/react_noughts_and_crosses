import React, { Component } from 'react'

class GameStatus extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <p>{ this.props.message }</p>
    )
  }

}

export default GameStatus
