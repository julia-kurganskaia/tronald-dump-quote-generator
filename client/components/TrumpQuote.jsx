import React, { useState } from 'react'

import { getQuote } from '../apis/apiFront'
import { getImages } from '../apis/apiBack' 
import YodaTalk from './YodaTalk'

const TrumpQuote = () => {
    const [quote, setQuote] = useState('')
    const [image, setImage] = useState('')

    const fetchQuote = () => {
        getQuote()
            .then(quote => {
                setQuote(quote.value)
            })
    }

    const fetchImage = (id) => {
        getImages(id)
            .then(img => {
                console.log('fetchimage', img)
                setImage(img.image)
            })
    }
    // const fetchImage = (id) => {
    //     getImages(id)
    //         .then(img => {
    //             console.log(img)
    //             setImage(img.image)
    //         })
    // }

    const handleClick = () => {
        const rando = Math.floor( (Math.random() * 14) +1)
        fetchQuote()
        fetchImage(rando)
    }
   
    return (
        <>
            <button onClick={handleClick} className='gradient-button gradient-button-2 bouncy'>
                Generate Quote
            </button>
            {quote && <p>"{quote}"</p>}
            {image && <img className="main-img" src={image} />}
            
            {quote && <YodaTalk 
                quote={quote} 
                />}
            
        </>
    )

}

export default TrumpQuote