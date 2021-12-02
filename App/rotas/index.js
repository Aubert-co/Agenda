const app = require('express').Router()
const ApiAddSchedule = require('../controller/addASchedule')
const ApiSelectAschedule = require('../controller/SelectAschedule')
const ApiRemoveSchedule = require('../controller/removeASchedule')

app
.post('/addschedule',ApiAddSchedule)
.post('/removeschedule',ApiRemoveSchedule)
.get('/selectschedule',ApiSelectAschedule)

module.exports = app