import { Button, Typography, Box } from "@mui/material"
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';

export default function ButtonLogInOut(){

    function logInOrLogOut(){
        let data = sessionStorage.getItem('value')
        if(data == null){
          return('Log In')
        } else if(data !== null){
          return('Log Out')
        }
      }

    return(
        <Button sx={{
            width: '100%',
            height: '56px',
            background: 'linear-gradient(207.67deg, #FDAE8F 3.43%, #FD1C68 104.7%)',
            color: '#FD1C68',
            borderRadius: '12px',}}>
            <Box sx={{display:'flex', width: '100%', justifyContent:'center'}}>
            <AssignmentIndOutlinedIcon sx={{color: 'white',}}/>
            <Typography
            classes={{root: 'secondFont'}}
            sx={{ml: 1}}>
              {logInOrLogOut()}
            </Typography>
              </Box>
          </Button>
    )
}