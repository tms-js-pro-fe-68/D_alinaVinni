import { Box, Button, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useHomePageContext } from '../../pages/homePage/HomePage';


export default function SearchField(){
    const {searchUser, setSearchUser, response, getAllPosts} = useHomePageContext()
 
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
            onChange={(e) => {getAllPosts(e.target.value)}}/>
        </Box>
    )
}