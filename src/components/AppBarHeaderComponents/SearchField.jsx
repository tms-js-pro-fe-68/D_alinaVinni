import { Autocomplete, Box, Button, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect  } from 'react';
import { useHomePageContext } from '../../pages/homePage/HomePage';


export default function SearchField(){

    const response = useHomePageContext()
    

    let allUsers = []
    useEffect(() => {
        if(response !== false || allUsers == []){
        response.map((el, i) => {
            allUsers.push({label: `${el?.user}`, key:`${i}`})
        })}
        // console.log(response)
        // console.log(allUsers)
    }, [allUsers])

    
    return(
        <Box sx={{display: 'flex', 
        width: '100%', 
        background: '#434343',
        borderRadius: '8px',}}>

            <Button disabled sx={{minWidth:'12%'}}>
                <SearchIcon disabled sx={{color: 'white',}}/>
            </Button>

            <Autocomplete
            id='usersSearch'
            sx={{width: '88%'}}
            options={allUsers} 
            renderInput={(params) => 
                <TextField
                id='search'
                placeholder='Search...' 
                inputProps={{
                sx:{color:'white',}}}
                sx={{width: '100%',
                borderRadius: '8px',}}
                {...params}
                />
            }/>
        </Box>
    )
}