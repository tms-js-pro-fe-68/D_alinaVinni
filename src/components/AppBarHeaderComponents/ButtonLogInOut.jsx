import { Button, Typography, Box } from "@mui/material"
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";

export default function ButtonLogInOut(){
  const [dataLogIn, setDataLogIn] = useState(sessionStorage.getItem('value'))
  const navigate = useNavigate()

  // useEffect(() => {
  //   setDataLogIn(sessionStorage.getItem('value'))
  // }, [dataLogIn])
  
  const logInOrLogOut = () => {
      if(dataLogIn == null){
        return('Log In')
      } else if(dataLogIn !== null){
        return('Log Out')
      }
    }

  const letNavigate = () => {
    return(
      dataLogIn == null ? navigate('../login', {replace: true}) : setDataLogIn(sessionStorage.clear())
    )
  }

  return(
      <Button 
      onClick={() => {letNavigate()}}
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
            {logInOrLogOut()}
          </Typography>
            </Box>
        </Button>
  )
}