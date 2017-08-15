
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'coolkid2', password: 'abc123', email: 'banana@aol.com',age: '15'},
        {username: 'skaterkid', password: 'boobz', email: 'ghettoracer@hotmail.com',age: '12'},
        {username: 'vandal234', password: 'goblins', email: 'kacey2@gmail.com',age: '11'},
        {username: 'fewafewafea', password: 'a23423422', email: 'fewafewaa@aol.com',age: '15'},
        {username: 'ccvxdvffdsv', password: 'affffff', email: 'bfefefefea@aol.com',age: '18'},
        {username: 'cofffff2', password: 'abcfefe123', email: 'banafffna@aol.com',age: '15'},
        {username: 'coolwwwwwwkid2', password: 'abcfef123', email: 'bananaffff@aol.com',age: '15'}
      ]);
    });
};
