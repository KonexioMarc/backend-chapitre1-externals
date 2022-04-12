const express = require('express')
const app = express()
const port = 3003
const pokeapiRoutes = require('./routes/pokeapi')
const gameOfThronesRoutes = require('./routes/gameOfThrones')


app.use(pokeapiRoutes)
app.use(gameOfThronesRoutes)

app.listen(port, function() {
    console.log('The server is started at port :' + port)
})