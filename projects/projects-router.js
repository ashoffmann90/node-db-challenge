const express = require('express')
const Projects = require('./projects-module')
const router = express.Router()

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.json(projects)
    })
    .catch(er => {
        res.status(500).json({error: "Could not find projects"})
    })
})

// router.get('/:id', (req, res) => {
//     const id = req.params.id
//     Projects.getProjectById(id)
//     .then(project => {
//         res.json(project)
//     })
//     .catch(er => {
//         res.status(500).json({ error: 'Could not get project'})
//     })
// })

router.post('/', (req, res) => {
    Projects.addProject(req.body)
    .then(project => {
        res.json(project)
    })
    .catch(er => {
        res.status(500).json({error: 'Could not add project'})
    })
})

module.exports = router