import HomePageContext from '../components/HomePageContext'
import CirclesLight from './CirclesLight'
import styled from '@emotion/styled'

const bodyWidth = document.documentElement.clientWidth
// console.log(bodyWidth)
const bodyHeight= document.documentElement.clientHeight
// console.log(bodyHeight)

export default function BoxBG(){
    const BackgroundDiv = styled.div`
    background-color: #FFFGGHH;
    width: 100%;
    height: 1000PX;
    z-index: -10;
    `

    return(
        <HomePageContext>
            <div className='parent' style={{background: 'black', 
            width: "100%",
            marginTop:"0px", 
            zIndex: "-20"}}>
                <CirclesLight {...{ bodyWidth, bodyHeight }}/>
            </div>
        </HomePageContext>
    )
}
