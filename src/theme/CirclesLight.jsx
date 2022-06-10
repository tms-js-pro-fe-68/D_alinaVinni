import styled from '@emotion/styled'
import { useEffect } from 'react';

// не перерисовываются круги стр: 69-72
// не установился npm install react-gradient
// на каждые 1000рх высоту ставить по одному кругу => изменить randomTimesCallLights()
// console.log(`${storageCircles} clear`)
// console.log(`${storageCircles} new state`) - выкидывает дважды
// useEffect - срабатывает первый раз
// постоянное измерение bodyHeight

const bodyWidth = document.documentElement.clientWidth;
const bodyHeight = document.documentElement.clientHeight;

let palette = [ 
    '#FFAA6C', '#FF007E', '#EA72FF', '#FFE198',
    '#6100FF', '#FF008A', '#FFC83A', '#7F9FFF',
    '#82FFF9', '#5D85FF', '#D015FF', '#FF3278',
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

    currSettLight.Size.push(Math.floor(Math.random() * (1200 - 700 +1)) + 700)

    currSettLight.PositionTop.push(Math.floor(Math.random() * ((bodyHeight/2) - 220 +1)) + 220)

    currSettLight.PositionLeft.push(Math.floor(Math.random() * (bodyWidth - 0 +1)) + 0)
    
    currSettLight.indexLayer.push(Math.floor(Math.random() * (10 - 5 +1)) + 5)
}

export default function CirclesLight(){

    const CircleTheme = styled.div`
    margin-top: 10px;
    widht: 100%;
    z-index: -20;
    `
    let storageCircles = [];

    function randomTimesCallLights(){
        let timesCallLight = Math.floor(Math.random() * ((bodyHeight/50) - (bodyHeight/200))) + (bodyHeight/200);

        for(let i=0; i<timesCallLight; i++){
            randomSettingsLight()

            let CircleLight = 
            {backgroundColor: `${currSettLight.Color}`,
            borderRadius: `50%`,
            width: `${currSettLight.Size}px`,
            height: `${currSettLight.Size}px`,
            paddingTop: `200px`,
            marginLeft: `${currSettLight.PositionLeft}px`,
            zIndex: `-${currSettLight.indexLayer}`,
            opacity: '70%'}

            storageCircles.push(CircleLight)
        }
        // console.log(storageCircles)
    }
    randomTimesCallLights() //default call

    // setInterval(() => {
    //     storageCircles.length = 0;
    //     console.log(`${storageCircles} clear`)
    // }, 10000) //repeating call

    // useEffect(() => {
    //     randomTimesCallLights()
    //     console.log(`${storageCircles} new state`)
    // }, [storageCircles])
   
    return(
        <CircleTheme className='CircleTheme'>
            {storageCircles.map((el, index) => {
                return(
                    <div className='filter-blur-light animation_light' key={index} style={el}></div> //вынести в кач-ве функции
                )
            })}
        </CircleTheme>
    )
}