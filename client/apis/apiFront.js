import request from 'superagent'

const baseUrl = 'http://api.tronalddump.io/'
// const yodaURL = 'http://yoda-api.appspot.com/api/v1/yodish?text='
const yodaURL = 'https://api.funtranslations.com/translate/yoda.json'

export function getQuote () {
    return request.get(baseUrl + 'random/quote')
        .then(res => res.body)
}

// export function getTranslation (quote) {
    
//     const query = encodeURIComponent(quote)
//     console.log(query)
//     return request.get('/yoda/' + query)
//         .then(response => response.body)
// }

export function getTranslation (quote) {
    return request.get('yoda/' + quote)
        .send({ "text" : quote })
        .then(res => res.body)
}