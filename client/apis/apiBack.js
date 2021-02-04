import request from 'superagent'


export function getImages (id) {
    // console.log(id)
    return request
      .get('/')
      .send( {id: id} )
      .then(response => response.body)
  }