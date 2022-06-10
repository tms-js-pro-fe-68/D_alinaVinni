import styled from '@emotion/styled'
import { useState } from 'react';
import { useHomePageContext } from '../components/HomePageContext.jsx'

export default function CirclesLight({ bodyWidth, bodyHeight }){
    const [currentTimesCallLight, setCurrentTimesCallLight] = useState([])
    const {isInitialized} = useHomePageContext();

    let palette = [ 
        '#FFAA6C', '#FF007E', '#EA72FF', '#FFE198',
        '#6100FF', '#FF008A', '#FFC83A', '#7F9FFF',
        '#82FFF9', '#5D85FF', '#D015FF', '#FF3278',
    ];

    let currSettLight = {
        Color: [],
        Size: [],
        PositionTop: [],
        PositionLeft: [],
        indexLayer: [],
    }

    function randomSettingsLight(){
        currSettLight.Color.push(palette[Math.floor(Math.random() * palette.length)]) ;
        
        for(let i = 0; i < 2; i++){
            currSettLight.Size.push(Math.floor(Math.random() * ((bodyWidth/2,5) - 400 +1)) + 400)
        }

        currSettLight.PositionTop.push(Math.floor(Math.random() * ((bodyHeight/2) - 220 +1)) + 220)

        currSettLight.PositionLeft.push(Math.floor(Math.random() * (bodyWidth - 0 +1)) + 0)
        
        currSettLight.indexLayer.push(Math.floor(Math.random() * (10 - 5 +1)) + 5)
    }
    randomSettingsLight() //default first time call
    console.log(currSettLight)

    const CircleTheme = styled.div`
    margin-top: 0px;
    z-index: -15;
    `

    return(
        <CircleTheme className='filter-blur-light animation_light'>
        </CircleTheme>
    )
}


    // ${currentPositionTop}
    // const CircleLight = styled.div`
    // background: ${currentColor.join(',')};
    // border-radius: 50%;
    // width: ${currentSize[0]}px;
    // height: ${currentSize[1]}px;
    // margin-top: 0px;
    // margin-left: ${currentPositionLeft}px;
    // z-index: -${indexLayer};
    // `
    // function styleEveryCircle(){
    //     return (CircleLight)
    // }

    // function randomTimesCallLights(){
    //     const timesCalling = 3;
    //     // Math.floor(Math.random() * (5 - 0)) + 0;
    //     for(let i=0; i<timesCalling; i++){
    //         setCurrentTimesCallLight(styleEveryCircle())
    //     }
    //     return currentTimesCallLight
    // }

    // const [currentState, setCurrentState] = useState(randomTimesCallLights()) //default first time call

    // setInterval(() => setCurrentState(randomTimesCallLights()), 15000) //overwriting - next times calls

    // console.log(currentState)

 // <CircleLight className='filter-blur-light animation_light' />