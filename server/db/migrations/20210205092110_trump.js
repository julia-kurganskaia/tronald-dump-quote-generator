exports.up = function (knex) {
    return knex.schema.createTable('trump', function (table) {
      table.increments('id').primary()
      table.string('image')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('trump')
  }