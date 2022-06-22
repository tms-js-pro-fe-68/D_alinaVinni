import HomePageContextProvider from './HomePageContext.jsx'
import BoxBG from '../../theme/BoxBG'
import CircleTheme from '../../theme/CirclesLight'
import { useNavigate } from 'react-router-dom'
import AppBarHeader from '../../components/AppBarHeader.jsx'
import CardShow from '../../components/CardShow.jsx'
import { Container } from '@mui/material'
import CreateCard from '../../components/CreateCard.jsx'
export default function HomePage(){
    let navigate = useNavigate()

    return(
        <HomePageContextProvider>
            <BoxBG  className='BoxBG'>
                <AppBarHeader/>
                <Container sx={{mt: '95px', display: 'flex'}}>
                <CardShow/>
                <CreateCard/>
                {/* <CircleTheme/> */}
                </Container>
            </BoxBG>
        </HomePageContextProvider>
    )
}