// hola
<<<<<<< HEAD
const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
=======
>>>>>>> 228d64a874a028efc55998e70fabe886fbce25c6
