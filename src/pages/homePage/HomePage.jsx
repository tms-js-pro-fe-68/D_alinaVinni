import BoxBG from '../../theme/BoxBG'
import CircleTheme from '../../theme/CirclesLight'
import AppBarHeader from '../../components/AppBarHeader.jsx'
import CardsShow from '../../components/CardsShow.jsx'
import { Box, CircularProgress, createTheme, ThemeProvider  } from '@mui/material'
import CreateCard from '../../components/CreateCard.jsx'
import { useContext, createContext, useState, useEffect } from 'react'
import axiosAPI from '../../axiosAPI'
import Introduce from '../../components/Introduce'


const Context = createContext()

export const useHomePageContext = () => useContext(Context)

const theme = createTheme({
    palette: {
        progress: {
            main: '#FD1C68'
        }
    }
})

export default function HomePage(){  
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState(false)

    useEffect(() => {
        const getAllPosts = async() => {
            setIsLoading(true)
            const answer = await axiosAPI.get('/nfts')
            setIsLoading(false)
            setResponse(answer.data)
        }
        getAllPosts()
    }, [])

    return(
        <Context.Provider value={response}>
            <ThemeProvider theme={theme}>
            <BoxBG  className='BoxBG'>
                <AppBarHeader/>
                <Box container sx={{mt: {xs:'100px',md:'200px'}, width: '100%',
            marginLeft:'auto',
            marginRight:'auto',}}>
                    <Introduce/>
                    <CreateCard/>
                <div style={{textAlign:'center'}}>{!!isLoading && 
                <Box sx={{height:'100vh'}}>
                    <CircularProgress color='progress' 
                    sx={{ml: 'auto', 
                    mr: 'auto', 
                    width: '70px !important', 
                    height: '70px !important',
                    mt: '20%'}}/>
                </Box>}</div>
                <Box>{!!response && <CardsShow/>}</Box>
                {/* <CircleTheme/> */}
                </Box>
            </BoxBG>
            </ThemeProvider>
        </Context.Provider>
    )
}