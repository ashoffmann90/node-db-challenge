const express = require('express')

const ProjectRouter = require('./projects/projects-router')

const db = require('./data/db-config')

const server = express()

server.use(express.json())
server.use('/api/projects', ProjectRouter)

module.exports = server