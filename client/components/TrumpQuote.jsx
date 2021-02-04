import React, { useState } from 'react'
import { getQuote } from '../apis/apiFront'
// import { getImages } form '../apis/apiBack' 

const TrumpQuote = () => {
    const [quote, setQuote] = useState('')
    const [image, setImage] = useState('')

    const fetchQuote = () => {
        getQuote()
            .then(quote => {
                setQuote(quote.value)
                    .then(setImage)
            })
    }

    const handleClick = () => {
        fetchQuote()
            .the
    }
   
    return (
        <>
            <button onClick={handleClick}>
                Click me!
            </button>
            {quote && <p>{quote}</p>}
            {image && <><img src={} /><button>translate</button></>}

        </>
    )

}

export default TrumpQuote