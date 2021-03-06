import BoxBG from '../../theme/BoxBG'
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
    const [searchUser, setSearchUser] = useState('')  

    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState(false)

    const getAllPosts = async(search) => {
        setIsLoading(true)
        const answer = await axiosAPI.get('/nfts')
            if(search == undefined){
                setIsLoading(false)
                setResponse(answer.data)
            }else{
                let userPostsArray = []
                answer.data.map((el) =>{
                    if(el.user == search){
                        userPostsArray.push(el)
                    }
                })
                setResponse(userPostsArray.flat())
                setIsLoading(false)
            }
    }

    useEffect(() => {
        getAllPosts()
    }, [])

    return(
        <Context.Provider value={{searchUser, setSearchUser, response, getAllPosts}}>
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
                    </Box>}
                </div>

                    <Box>{!!response && 
                        [...response].reverse().map((el) => 
                            {return(
                                <CardsShow key={el.id} {...el}/>
                                )}
                            )
                        }
                    </Box>
                </Box>
            </BoxBG>
            </ThemeProvider>
        </Context.Provider>
    )
}
