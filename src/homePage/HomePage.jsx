import HomePageContextProvider from './HomePageContext.jsx'
import BoxBG from '../theme/BoxBG'
import CircleTheme from '../theme/CirclesLight'
import SearchPanel from '../components/SearchPanel'

export default function HomePage(){
    return(
        <HomePageContextProvider>
            <BoxBG  className='BoxBG'>
                <SearchPanel></SearchPanel>
                <CircleTheme/>
            </BoxBG>
        </HomePageContextProvider>
    )
}