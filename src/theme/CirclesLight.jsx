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

    let currentColor = [];
    let currentSize = [];
    let currentPositionTop = [];
    let currentPositionLeft = [];
    let indexLayer = [];

    function randomSettingsLight(){
        currentColor.push(palette[Math.floor(Math.random() * palette.length)]) ;
        
        for(let i = 0; i < 2; i++){
            currentSize.push(Math.floor(Math.random() * (650 - 400 +1)) + 400)
        }

        currentPositionTop.push(Math.floor(Math.random() * ((bodyHeight/2) - 220 +1)) + 220) //отступ от верха

        currentPositionLeft.push(Math.floor(Math.random() * (bodyWidth - 0 +1)) + 0) //отступ от лева 
        
        indexLayer.push(Math.floor(Math.random() * (10 - 5 +1)) + 5)
    }
    randomSettingsLight()

    const CircleTheme = styled.div`
    margin-top: ${currentPositionTop};
    z-index: -15;
    `
    const CircleLight = styled.div`
    background: ${currentColor.join(',')};
    border-radius: 50%;
    width: ${currentSize[0]}px;
    height: ${currentSize[1]}px;
    margin-top: 0px;
    margin-left: ${currentPositionLeft}px;
    z-index: -${indexLayer};
    `
    function styleEveryCircle(){
        return (CircleLight)
    }

    function randomTimesCallLights(){
        const timesCalling = Math.floor(Math.random() * (5 - 0)) + 0;
        for(let i=0; i<timesCalling; i++){
            randomSettingsLight()
            setCurrentTimesCallLight(styleEveryCircle())
        }
    }
    
    console.log(currentTimesCallLight)

    const [currentState, setCurrentState] = useState(randomTimesCallLights())
    setInterval(() => setCurrentState(randomTimesCallLights()), 15000)
    return(
        <CircleTheme>
            {currentState}
        </CircleTheme>
        // <CircleLight className='filter-blur-light animation_light' />
    )
}