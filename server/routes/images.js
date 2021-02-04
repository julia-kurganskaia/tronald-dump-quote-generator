const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/:id', (req, res) => {
    db.getImages(req.params.id)
      .then(images => {
        res.json(images)
        // return null
      })
      .catch(err => {
          console.log(err)
        res.status(500).send(err.message)
      })
  })

module.exports = router