import HomePageContextProvider from './HomePageContext.jsx'
import BoxBG from '../../theme/BoxBG'
import CircleTheme from '../../theme/CirclesLight'
import Theme from '../../theme/Theme'
import { useNavigate } from 'react-router-dom'
import AppBarHeader from '../../components/AppBarHeader.jsx'

export default function HomePage(){
    let navigate = useNavigate()

    if(sessionStorage.token == ''){
        navigate('/login', { replace:true })
    }

    return(
        <HomePageContextProvider>
            <BoxBG  className='BoxBG'>
            <Theme>
                <AppBarHeader/>
                {/* <CircleTheme/> */}
            </Theme>
            </BoxBG>
        </HomePageContextProvider>
    )
}