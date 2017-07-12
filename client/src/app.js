import React from 'react'
import { render } from 'react-dom'
import TicTacToeContainer from './containers/TicTacToeContainer.jsx'

window.addEventListener('load', () => {
  const container = document.querySelector('div')

  render(
    <TicTacToeContainer />,
    container
  )
})
