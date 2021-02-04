import request from 'superagent'



export function getImages () {
    return request
      .get(baseUrl)
      .then(response => response.body)
  }