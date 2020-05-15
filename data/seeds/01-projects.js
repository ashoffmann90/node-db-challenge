
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_name: 'My first project',
          project_description: "I'm supposed to do a thing.",
          completed: false
        },
        {
          project_name: "Someone else's project that I'm sabotaging",
          project_description: "I'm 'not' guilty.",
          completed: false
        },
        {
          project_name: "Steal Grandma's super secret cookie recipe",
          project_description: "*Mission Impossible Theme Song*",
          completed: false
        },
        {
          project_name: "FREAK OUT",
          project_description: "*DISCO*",
          completed: false
        }
      ]);
    });
};
