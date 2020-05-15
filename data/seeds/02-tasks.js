
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          task_description: "Hack Grandma's database",
          notes: "Super Secret",
          project_id: 1,
        },
        {
          task_description: "Act innocent",
          notes: "Super Safe",
          project_id: 2,
        },
        {
          task_description: "Bake cookies",
          notes: "They will smell so good",
          project_id: 3,
        },
        {
          task_description: "EAT",          
          notes: "MMM",
          project_id: 4,
        }
      ]);
    });
};
