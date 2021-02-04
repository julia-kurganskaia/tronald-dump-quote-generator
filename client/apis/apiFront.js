import request from 'superagent'

const baseUrl = 'http://api.tronalddump.io/'

export function getQuote () {
    return request.get(baseUrl + 'random/quote')
        .then(res => res.body)
}