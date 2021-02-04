const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getImages (db = connection) {
    return db('trump')
        .select()
  }

module.exports = {
    getImages
}