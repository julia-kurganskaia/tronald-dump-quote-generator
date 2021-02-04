import request from 'superagent'

export function getImages (id) {
    console.log('api', id)
    return request
      .get('/api/images/' + id)
      .then(response => response.body)
  }