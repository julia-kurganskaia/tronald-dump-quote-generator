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
        <div className='yoda-button bouncy' onClick={() => {translateToYoda(props.quote)}}>
            <img src='/troda.jpeg' alt='yoda trump translate' className='troda-img' />
        </div>
        {translation && <p>{translation}</p>}
        </>
    )
}

export default YodaTalk