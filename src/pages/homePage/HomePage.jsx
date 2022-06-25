import BoxBG from '../../theme/BoxBG'
import CircleTheme from '../../theme/CirclesLight'
import AppBarHeader from '../../components/AppBarHeader.jsx'
import CardsShow from '../../components/CardsShow.jsx'
import { Box, CircularProgress  } from '@mui/material'
import CreateCard from '../../components/CreateCard.jsx'
import { useContext, createContext, useState, useEffect } from 'react'
import axiosAPI from '../../axiosAPI'


const Context = createContext()

export const useHomePageContext = () => useContext(Context)



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
            <BoxBG  className='BoxBG'>
                <AppBarHeader/>
                <Box sx={{mt: '95px', width: '100%'}}>
                <CreateCard/>
                <p>{!!isLoading && <CircularProgress color="inherit" />}</p>
                <Box>{!!response && <CardsShow/>}</Box>
                {/* <CircleTheme/> */}
                </Box>
            </BoxBG>
        </Context.Provider>
    )
}