
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          resource_name: 'Stranger',
          resource_description: 'Just some random'
        },
        {
          resource_name: 'Laser watch',
          resource_description: 'Pew pew'
        },
        {
          resource_name: 'Exploding glasses',
          resource_description: 'Ouch'
        },
        {
          resource_name: 'Finger guns',
          resource_description: 'Wow, so powerful'
        }
      ]);
    });
};
