import styled from '@emotion/styled'
// import { useState } from 'react'
import CircleLight from './CircleLight'

export default function BoxBG(){
    const BackgroundDiv = styled.div`
    background-color: #FFFGGHH;
    width: 100%;
    height: 1000PX;
    z-index: -10;
    `

    return(
        <div style={{background: 'black'}}>
            <CircleLight {...(200, 0)}/>
        </div>
    )
}
