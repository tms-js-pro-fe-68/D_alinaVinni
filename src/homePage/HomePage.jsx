import HomePageContextProvider from './HomePageContext.jsx'
import BoxBG from '../theme/BoxBG'
import CircleTheme from '../theme/CirclesLight'

export default function HomePage(){
    return(
        <HomePageContextProvider>
            <BoxBG  className='BoxBG'>
                <CircleTheme>
                    <h1 style={{zIndex: 'auto'}}>jhvgcfrtc</h1>
                </CircleTheme>
            </BoxBG>
        </HomePageContextProvider>
    )
}