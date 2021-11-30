const app = require('express').Router()
const ApiAddSchedule = require('../controller/addASchedule')
const ApiSelectAschedule = require('../controller/SelectAschedule')


app.post('/addschedule',ApiAddSchedule)

app.get('/selectschedule',ApiSelectAschedule)

module.exports = app