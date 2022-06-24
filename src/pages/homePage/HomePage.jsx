import BoxBG from '../../theme/BoxBG'
import CircleTheme from '../../theme/CirclesLight'
import AppBarHeader from '../../components/AppBarHeader.jsx'
import CardShow from '../../components/CardShow.jsx'
import { Container } from '@mui/material'
import CreateCard from '../../components/CreateCard.jsx'
import { useContext, createContext } from 'react'


const Context = createContext()

export const useHomePageContext = () => useContext(Context)


export default function HomePage(){

    const responseHomePage = [22, 'place for fetch, which the get all nfts and hand over them to children throw useHomePageContext', 1, 2, 3]

    // console.log(responseHomePage)

    return(
        <Context.Provider value={responseHomePage}>
            <BoxBG  className='BoxBG'>
                <AppBarHeader/>
                <Container sx={{mt: '95px', display: 'flex'}}>
                <CardShow/>
                <CreateCard/>
                {/* <CircleTheme/> */}
                </Container>
            </BoxBG>
        </Context.Provider>
    )
}