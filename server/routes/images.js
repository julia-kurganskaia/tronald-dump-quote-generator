const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
    db.getImages(req.body.id)
      .then(images => {
        res.json(images)
        // return null
      })
      .catch(err => {
        res.status(500).send(err.message)
      })
  })

module.exports = router