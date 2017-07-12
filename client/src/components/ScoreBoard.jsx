import React, { Component } from 'react'

const ScoreBoard = (props) => {
  return (
    <div>
      <div id="score">
        <p>Player X has {props.score.x} wins</p>
        <p>Player O has {props.score.y} wins</p>
      </div>
    </div>
  )

} 

export default ScoreBoard
