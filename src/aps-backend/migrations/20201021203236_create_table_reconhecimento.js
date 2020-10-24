
exports.up = function(knex) {
    return knex,schema.createTable('reconhecimento',table => {
        table.increments('id'),primary()
        table.string('desc').notNull()
        table.integer('userId').references(id).inTable('users').notNull()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable(reconhecimento)
};
