const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getImages (id, db = connection) {
    return db('trump')
        .where('id', id)
        .select()
        .first()
  }

module.exports = {
    getImages
}