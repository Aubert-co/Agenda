const express= require('express')
const server = express()
const cors = require('cors')

const rotas = require('./rotas/index')


server.use(cors())
server.use(express.json())
server.use(rotas)


server.listen(8080)

module.exports = server