const db = require('../data/db-config')

module.exports ={
    getTasks,
    addTask
}

function getTasks(){
    return db('tasks')
    .join('projects', 'tasks.project_id', '=', 'projects.id')
}

function addTask(task){
    return db('tasks')
    .insert(task)
}