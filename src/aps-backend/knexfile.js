// Update with your config settings.

module.exports = {

 

  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '123456',
    database : 'usuario'
  },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  
};
