const express= require('express')
const server = express()
const cors = require('cors')

const rotas = require('./rotas/index')


server.use(cors())
server.use(express.json())
server.use(rotas)




module.exports = server