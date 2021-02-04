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
                    // .then(setImage)
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
        // fetchImage(rando)
    }
   
    return (
        <>
            <button onClick={handleClick}>
                Click me!
            </button>
            {quote && <p>{quote}</p>}
            {quote && <YodaTalk quote={quote} />}
            {/* {image && <><img src={image} />} */}

        </>
    )

}

export default TrumpQuote