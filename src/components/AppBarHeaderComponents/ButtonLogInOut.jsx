import { Button, Typography, Box } from "@mui/material"
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import { useNavigate } from "react-router-dom"

export default function ButtonLogInOut(){
  const navigate = useNavigate()

  const handleLogOutIn = () => { 
    sessionStorage.token = ''
    sessionStorage.email = ''
    navigate('../login', { replace: true })
  }

  return(
      <Button 
      onClick={() => {handleLogOutIn()}}
        sx={{
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
            Log In/Out
          </Typography>
            </Box>
        </Button>
  )
}