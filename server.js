const express = require('express')
const app = express()

app.use(express.static('client/build'))

app.listen(3000, function () {
  console.log('Tic Tac Toe running on port', this.address().port)
})
