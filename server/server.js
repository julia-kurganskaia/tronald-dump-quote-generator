const path = require('path')
const express = require('express')

const images = require('./routes/images')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/', images)
// server.use('/api/v1/widgets', widgets)

module.exports = server
