import { Autocomplete, Box, Button, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect  } from 'react';
import { useHomePageContext } from '../../pages/homePage/HomePage';
import CardShow from '../CardsShow';


export default function SearchField(){
    const {searchUser, setSearchUser, response, getAllPosts} = useHomePageContext()
    
    // useEffect(() => {
    //     if(response !== false){
    //     const filterUsers = () =>{
    //         response.map((el, i) => {
    //             if(el?.user == searchUser){
    //                 console.log(el?.id)
    //             }
    //         })}
    //         filterUsers()
    //     }
    // }, [searchUser])

    
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
            // value={searchUser}
            inputProps={{
            sx:{color:'white',}}}
            sx={{width: '100%',
            borderRadius: '8px',}}
            onChange={(e) => {getAllPosts(e.target.value)}}/>
        </Box>
    )
}
//setSearchUser(e.target.value)