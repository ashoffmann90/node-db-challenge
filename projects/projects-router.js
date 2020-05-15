const express = require('express')
const Projects = require('./projects-module')
const router = express.Router()

router.get('/', (req, res) => {
    Projects.findAll()
    .then(projects => {
        res.json(projects)
    })
    .catch(er => {
        res.status(500).json({error: "Could not find projects"})
    })
})