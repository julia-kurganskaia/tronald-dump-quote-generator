import request from 'superagent'

const baseUrl = 'api.tronalddump.io/'

export function getImages () {
    return request
      .get(baseUrl)
      .then(response => response.body)
  }