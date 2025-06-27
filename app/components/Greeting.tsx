'use client'
import React, { useState } from 'react'

function Greeting() {
    const [state, setState] = useState<{ name: string }>({ name: '' })
    //let state = { name: ''}

    return (
        <div>
            Hello World, Greetings!!
            <br />
            {state.name}
            <br />
            <button className='btn btn-primary'
                onClick={() => { setState({ name: 'HPE' }) }}>
                Click Me
            </button>
        </div>
    )
}

export default Greeting