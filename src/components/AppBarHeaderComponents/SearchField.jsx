import { Box, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchField(){
    return(
        <Box sx={{display: 'flex', 
        width: '100%', 
        background: '#434343',
        borderRadius: '8px',}}>
            <SearchIcon disabled sx={{color: 'white', ml: '13px', mt:2}}/>
            <TextField
            id='search'
            placeholder='Search...' 
            inputProps={{
            sx:{color:'white',}}}
            sx={{width: '100%',
            borderRadius: '8px',}}
            />
        </Box>
    )
}