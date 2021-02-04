const express = require('express')
const request = require('superagent')
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

router.get('/yoda/:query', (req, res) => {
  console.log('hi there')
  const yodaURL = 'https://api.funtranslations.com/translate/yoda.json'
  // const yodaURL = 'http://yoda-api.appspot.com/api/v1/yodish?text='
    request
      .post(yodaURL)
      .send( {'text': req.params.query } )
      .end((err, response) => {
        res.json(response.body)
      })
      // .then(response => {_
      //   res.json(response.body)
      // })
      // .catch(err => {
      //   console.log(err.message)
      // })
})

module.exports = router