import styled from '@emotion/styled'
import { useEffect } from 'react';

// не перерисовываются круги стр: 69-72
// не установился npm install react-gradient
// на каждые 1000рх высоту ставить по одному кругу => изменить randomTimesCallLights()
// console.log(`${storageCircles} clear`)
// console.log(`${storageCircles} new state`) - выкидывает дважды
// useEffect - срабатывает первый раз
// постоянное измерение bodyHeight


let palette = [ 
    '#FF8A30', '#FF007E', '#E115FF', '#FFBC00',
    '#6100FF', '#FF008A', '#FFC83A', '#011BFF',
    '#0AFFF8', '#3665FF', '#FF00F7', '#FF1433',
    '#82FF14'
];

let currSettLight;

function randomSettingsLight(){
    currSettLight = {
        Color: [],
        Size: [],
        PositionTop: [],
        PositionLeft: [],
        indexLayer: [],
    };
    currSettLight.Color.push(palette[Math.floor(Math.random() * palette.length)]) 

    currSettLight.Size.push(Math.floor(Math.random() * (60 - 30 +1)) + 30)

    currSettLight.PositionTop.push(Math.floor(Math.random() * (20 - 0 +1)) + 0)

    currSettLight.PositionLeft.push(Math.floor(Math.random() * (65 - 0 +1)) + 0)
    
    currSettLight.indexLayer.push(Math.floor(Math.random() * (10 - 5 +1)) + 5)
}

export default function CirclesLight(){

    const CircleTheme = styled.div`
    margin-top: 0px;
    width: 100%;
    height: 100px;
    z-index: -19;
    position: relative;
    `
    let storageCircles = [];

    function randomTimesCallLights(){
        let timesCallLight = Math.floor(Math.random() * (3 - 1)) + 1;

        for(let i=0; i<timesCallLight; i++){
            randomSettingsLight()

            let CircleLight = 
            {backgroundColor: `${currSettLight.Color}`,
            borderRadius: `50%`,
            width: `${currSettLight.Size}%`,
            height: `${currSettLight.Size}%`,
            marginLeft: `${currSettLight.PositionLeft}%`,
            zIndex: `-${currSettLight.indexLayer}`,
            opacity: '100%',
            position: 'relative',}

            storageCircles.push(CircleLight)
        }
    }
    randomTimesCallLights()

    return(
        <CircleTheme className='CircleTheme'>
            {storageCircles.map((el, index) => {
                return(
                    <div className='filter-blur-light animation_light' key={index} style={el}/>
                )
            })}
        </CircleTheme>
    )
}