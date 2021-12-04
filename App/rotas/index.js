const app = require('express').Router()
const ApiAddSchedule = require('../controller/addASchedule')
const ApiSelectAschedule = require('../controller/SelectAschedule')
const ApiRemoveSchedule = require('../controller/removeASchedule')
const ApiUpdateSchedule = require('../controller/updateSchedule')
app
.post('/addschedule',ApiAddSchedule)
.post('/removeschedule',ApiRemoveSchedule)
.post('/updateschedule',ApiUpdateSchedule)
.get('/selectschedule',ApiSelectAschedule)

module.exports = app