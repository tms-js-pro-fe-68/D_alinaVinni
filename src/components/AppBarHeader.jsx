import {
  Typography,
  Button,
  TextField, 
  Grid,
  Container,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemButton,
  DialogActions} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import { Box, } from "@mui/system";
import { useState } from "react";


export default function AppBarHeader(){
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function navigationList(){
    console.log('The list for phons will be soon')
  }

  function logInOrLogOut(){
    if(sessionStorage.token == ''){
      return('Log In')
    } else{
      return('Log Out')
    }
  }

  let ListMenu = [ 'Home', 'Explore', 'Pages', 'Contact us']

    return(
      <Container maxWidth='xl'>
        <Grid container sx={{justifyContent:'center'}}>
          <Grid item xs={12} >
            <Box component='header' display='flex' sx={{mt:2.9, justifyContent:'center'}}>
              
              <Grid item xs={1}>
              <Button sx={{
                height: '56px',
                width: '48px',
                justifyContent: 'center',
                color: '#FD1C68',
                borderRadius: '10px',
                display: 'inline',}}
                onClick={() => handleClickOpen()}>

                <Box sx={{
                background: `url('./Logo.png')`,
                height: '54px',
                width: '47px',
                justifyContent: 'center',
                mt: '0px'
                }}/>
              </Button>
              </Grid>

              <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                scroll='body'
                sx={{
                backgroundColor:"black",
                background: 'rgba(0, 0, 0, 0.1)', //does't works
                widht:'90%',
                ml: '5%'}}
              >
                  <DialogTitle>
                    
                    <Typography 
                    className='headingFont'
                    sx={{
                      fontSize: '32px',
                      lineHeight: '48px',
                      textAlign: 'center',
                      width: "100%",}}>
                        Ultra NFT
                    </Typography>
                  </DialogTitle>

                  {/* <DialogActions>     //console: to much re-renders
                    <Button onClick={handleClose()} >
                      <DoNotDisturbOnOutlinedIcon sx={{color: 'black', mr:2}}/>
                    </Button>
                  </DialogActions> */}

                <DialogContent>

                  <List>
                      <ListItem>
                        <ListItemButton>
                          <Box sx={{ 
                          alignItems:'flex-start', 
                          background: '#3C485D',
                          borderRadius: '8px',
                          width: '100%',
                          height: '56px',}}>
                            <Box sx={{display: 'flex', width: '100%'}}>
                              <SearchIcon disabled sx={{color: 'white', ml: '13px', mt:2}}/>
                              <TextField
                              className='styledPlaceholder headingFont'
                              id='search'
                              placeholder='Search...' 
                              sx={{
                                width: '100%',
                                height: '48px',    //fit the size
                                outline: 0,       //need remove this border-line when focus
                                color:'white'    //need text-color when inputting
                              }}
                              />
                            </Box>
                          </Box>
                        </ListItemButton>
                      </ListItem>

                    {ListMenu.map((el, i) =>{
                      return(
                      <ListItem>
                        <ListItemButton>
                            <Typography 
                            key={i} 
                            id={el}
                            className='headingFont'
                            sx={{
                            marginTop: '12px',
                            ml: 11,
                            color: 'white',
                            fontSize: '16px',
                            lineHeight: '24px',
                            height: '56px'
                            }}>
                              {el}
                            </Typography>
                        </ListItemButton>
                      </ListItem>)
                    })
                    }
                  </List>

                </DialogContent>

              </Dialog>
              
              <Grid item lg={2}>
              <Typography 
              className='headingFont'
              sx={{
                display: { xs: 'none', lg: 'block'},
                fontSize: '32px',
                lineHeight: '48px',
                color: 'white',
                ml:2.5}}>
                  Ultra NFT
              </Typography>
              </Grid>

              <Grid item sm={10} md={4}>
              <Box sx={{ 
              alignItems:'flex-start', 
              background: '#3C485D',
              borderRadius: '8px',
              width: '100%',
              height: '56px',
              display: {xs: 'none', sm: 'block'},
              ml:4.5}}>
                <Box sx={{display: 'flex', width: '100%'}}>
                  <SearchIcon disabled sx={{color: 'white', ml: '13px', mt:2}}/>
                  <TextField
                  className='styledPlaceholder headingFont'
                  id='search'
                  placeholder='Search...' 
                  sx={{
                    width: '100%',
                    height: '48px',    //fit the size
                    outline: 0,       //need remove this border-line when focus
                    color:'white'    //need text-color when inputting
                  }}
                  />
                </Box>
              </Box>
              </Grid>
              
              <Grid item xs={4} md={4}>
              <Stack direction="row" spacing={4} sx={{justifyContent: 'center'}}>

                <Button               
                sx={{
                  width: '186px',
                  height: '56px',
                  display:{xs:'none', md: 'block', lg: 'none'},
                  justifyContent: 'center',
                  borderRadius: '10px',
                  background: 'linear-gradient(207.67deg, #FDAE8F 3.43%, #FD1C68 104.7%)',
                  color: '#FD1C68',
                  ml: 6,}}
                  onClick={() => navigationList()}>
                  <Typography className='headingFont textButton'>
                    Navigation
                  </Typography>
                </Button>

                {ListMenu.map((el, i) => {
                  return(
                  <Typography 
                  key={i} 
                  id={el}
                  className='headingFont'
                  sx={{
                  marginTop: '12px',
                  ml: 11,
                  color: 'white',
                  fontSize: '16px',
                  lineHeight: '24px',
                  display:{xs: 'none', lg: 'block'},
                  height: '56px'
                  }}>
                    {el}
                  </Typography>
                  )
                })}

              </Stack>
              </Grid>
              
              <Grid item xs={4}>
              <Button sx={{
                width: '185px',
                height: '56px',
                background: 'linear-gradient(207.67deg, #FDAE8F 3.43%, #FD1C68 104.7%)',
                color: '#FD1C68',
                display:{xs:'none', md: 'block'},
                borderRadius: '12px',
                ml: 4,}}>
                  <Box sx={{display:'flex', width: '100%', justifyContent:'center'}}>
                <AssignmentIndOutlinedIcon sx={{color: 'white',}}/>
                <Typography
                className='headingFont textButton'
                sx={{ml: 1}}>
                  {logInOrLogOut()}
                </Typography>
                  </Box>
              </Button>
              </Grid>

            </Box>
          </Grid>
        </Grid>
      </Container>
    )
}
