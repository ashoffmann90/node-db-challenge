const express = require('express')
const Tasks = require('./tasks-module')
const router = express.Router()

router.get('/', (req, res) => {
    Tasks.getTasks()
    .then(projects => {
        res.json(projects)
    })
    .catch(er => {
        res.status(500).json({error: "Could not find projects"})
    })
})

router.post('/', (req, res) => {
    Tasks.addTask(req.body)
    .then(task => {
        res.json(task)
    })
    .catch(er => {
        res.status(500).json({error: 'Could not add task'})
    })
})

module.exports = router