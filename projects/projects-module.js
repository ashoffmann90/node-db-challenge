const db = require('../data/db-config')

module.exports = {
    getProjects,
    // getProjectById,
    addProject
}

function getProjects(){
    return db('projects')
}

// function getProjectById(id){
//     return db('projects')
//     .join('tasks as t', 't.project_id', '=', 'projects.id')
//     .select([
//         'projects.id',
//         'projects.name',
//         'projects.project_description',
//         'projects.completed',
//         knex.raw('ARRAY_AGG(t.id, t.task_description, t.notes, t.completed)')
//     ])
//     .groupBy('projects.id')
// }

function addProject(project){
    return db('projects')
    .insert(project)
}
