import React, { useState } from 'react'

import { getTranslation } from '../apis/apiFront'

const YodaTalk = (props) => {

    const [translation, setTranslation] = useState('')

    const translateToYoda = (quote) => {
        console.log(quote)
        getTranslation(quote)
            .then(translation => {
                console.log(translation.contents.translated)
                setTranslation(translation.contents.translated)
            })
    }

    return (
        <>
        <button onClick={() => {translateToYoda(props.quote)}}
        className='gradient-button gradient-button-2 bouncy' >
            Click me
        </button>
        {translation && <p>{translation}</p>}
        </>
    )
}

export default YodaTalk