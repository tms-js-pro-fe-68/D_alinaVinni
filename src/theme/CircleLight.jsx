
export default function CircleLight(...{maxPosition, minPosition}){
    let palette = [ 
        '#FFAA6C', '#FF007E', '#EA72FF', '#FFE198',
        '#6100FF', '#FF008A', '#FFC83A', '#7F9FFF',
        '#82FFF9', '#5D85FF', '#D015FF', '#FF3278',
    ];
    
    let currentColor = [];
    let currentSize = [];
    let currentPosition = [];
    let currentBlur = [];
    let indexLayer = [];

    function randomSettingsLight(maxPosition, minPosition){
        currentColor.push(palette[Math.floor(Math.random() * palette.length)]) ;
        
        for(let i = 0; i < 2; i++){
            currentSize.push(Math.floor(Math.random() * (460 - 180 +1)) + 180)
        }

        for(let i = 0; i < 2; i++){
            currentPosition.push(Math.floor(Math.random() * (maxPosition - minPosition +1)) + minPosition)
        }
        
        currentBlur.push(Math.floor(Math.random() * (100 - 70 +1)) + 70);
        
        indexLayer.push(Math.floor(Math.random() * (9 - 1 +1)) + 1)
    }
    randomSettingsLight()

    return(
        <div style={{
            backgroundColor: `${currentColor.join(',')}`,
            borderRadius: '100%',
            width: `${currentSize[0]}`,
            height: `${currentSize[1]}`,
            marginTop: `${currentPosition[0]}`,
            marginLeft: `${currentPosition[1]}`,
            filter: `blur(${currentBlur}%)`,
            zIndex: `-${indexLayer}`,
        }}/>
    )
}