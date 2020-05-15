const express = require('express')
const Resources = require('./resources-module')
const router = express.Router()

router.get('/', (req, res) => {
    Resources.getResources()
    .then(projects => {
        res.json(projects)
    })
    .catch(er => {
        res.status(500).json({error: "Could not find projects"})
    })
})

router.post('/', (req, res) => {
    Resources.addResource(req.body)
    .then(resource => {
        res.json(resource)
    })
    .catch(er => {
        res.status(500).json({error: 'Could not add resource'})
    })
})

module.exports = router