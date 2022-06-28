import { Autocomplete, Box, Button, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect  } from 'react';
import { useHomePageContext } from '../../pages/homePage/HomePage';


export default function SearchField(){
    const [inputUser, setInputUser] = useState('')

    const response = useHomePageContext()
    
    useEffect(() => {
        if(response !== false){
        const filterUsers = () =>{
            response.map((el, i) => {
                if(el?.user == inputUser){
                    console.log(el, i)
                }
            })}
            filterUsers()
        }
    }, [inputUser])

    
    return(
        <Box sx={{display: 'flex', 
        width: '100%', 
        background: '#434343',
        borderRadius: '8px',}}>

            <Button disabled sx={{minWidth:'12%'}}>
                <SearchIcon disabled sx={{color: 'white',}}/>
            </Button>

            <TextField
            id='search'
            placeholder='Search...' 
            inputProps={{
            sx:{color:'white',}}}
            sx={{width: '100%',
            borderRadius: '8px',}}
            onChange={(e) => {setInputUser(e.target.value)}}/>
        </Box>
    )
}