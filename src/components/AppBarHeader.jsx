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
  ListItemButton,} from "@mui/material";
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
    let data = sessionStorage.getItem('value')
    if(data == null){
      return('Log In')
    } else if(data !== null){
      return('Log Out')
    }
  }

  const ListMenu = [ 'Home', 'Explore', 'Pages', 'Contact us']

    return(
      <Container maxWidth='xl' disableGutters>
        <Grid container justifyContent="center" alignItems="center" columns={14}>
          <Grid item xs={14} >
            <Box component='header' display='flex' sx={{position: 'fixed', width:'100%', background:'rgba(0,0,0, 0.8)', height: "95px"}}>
              
              <Box xs={14} sx={{mt:2.9, width: '100%'}} display='flex'>
              <Grid item xs={1}>
              <Button 
              sx={{
                height: '56px',
                width: '100%',
                justifyContent: 'center',
                color: '#FD1C68',
                display: 'inline',
                // background: 'black',
                borderRadius: '15px',
                ml:1}}
                onClick={() => handleClickOpen()}>

                <Box sx={{
                background: `center no-repeat url('./Logo.png')`,
                height: '50px',
                // width: '100%',
                justifyContent: 'center',
                textAlign: 'center',
                // mt: '-5px'
                }}/>
              </Button>
              </Grid>

              <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                PaperProps={{
                  sx:{
                    background:"#1f1f1f",
                    borderRadius: '20px',
                    widht:'90%',
                    ml: '5%',
                  }
                }}
                sx={{backgroundColor: 'rgba(255, 255, 255, 0.2)', }}
              >
                  <DialogTitle sx={{display: 'flex'}}>
                    <Typography 
                    classes={{root: 'headingFont'}}
                    sx={{
                      fontSize: '32px',
                      lineHeight: '48px',
                      width: "90%",
                      color: 'white'}}>
                        Ultra NFT
                    </Typography>
                    <Button onClick={handleClose} sx={{width:"10%", mr:'-10px'}}>
                      <DoNotDisturbOnOutlinedIcon sx={{color: 'white',}}/>
                    </Button>
                  </DialogTitle>

                <DialogContent>

                  <List>
                      <ListItem>
                        <ListItemButton>
                          <Box sx={{ 
                          alignItems:'flex-start', 
                          background: '#434343',
                          borderRadius: '8px',
                          width: '100%',
                          height: '56px',}}>
                            <Box sx={{display: 'flex', width: '100%'}}>
                              <SearchIcon disabled sx={{color: 'white', ml: '13px', mt:2}}/>
                              <TextField
                              id='search'
                              placeholder='Search...' 
                              inputProps={{color:'white'}}
                              sx={{width: '100%'}}
                              />
                            </Box>
                          </Box>
                        </ListItemButton>
                      </ListItem>

                    {ListMenu.map((el, i) =>{
                      return(
                      <ListItem sx={{width: '100%', mt:'-5px', height: '80px', borderRadius:'8px'}}>
                        <ListItemButton sx={{width: '100%', height: '100%',borderRadius:'8px'}}>
                          <Box sx={{border: '2px solid #434343',
                        width:'100%',
                        borderRadius: '8px', 
                        height: '100%'}}>
                            <Typography 
                            classes={{root: 'secondFont'}}
                            key={i} 
                            id={el}
                            sx={{
                            textAlign: 'center',
                            fontSize: '24px',
                            lineHeight: '50px',
                            width: '100%',
                            height: '100%',
                            }}>
                              {el}
                            </Typography>
                            </Box>
                        </ListItemButton>
                      </ListItem>)
                    })
                    }
                    <ListItem>
                      <ListItemButton sx={{width: '100%',
                      height: '57px',}}>
                      <Button
                      sx={{
                      width: '100%',
                      height: '56px',
                      background: 'linear-gradient(207.67deg, #FDAE8F 3.43%, #FD1C68 104.7%)',
                      color: '#FD1C68',
                      borderRadius: '12px',}}>
                      <Box sx={{display:'flex', width: '100%', justifyContent:'center', height:'100%'}}>
                      <AssignmentIndOutlinedIcon sx={{color: 'white', mt: '13px'}}/>
                      <Typography
                      classes={{root: 'secondFont'}}
                      sx={{ml: 1, lineHeight: '50px', fontSize: '24px'}}>
                        {logInOrLogOut()}
                      </Typography>
                        </Box>
                      </Button>
                      </ListItemButton>
                    </ListItem>
                  </List>

                </DialogContent>

              </Dialog>

              
              <Grid item lg={2}>
              <Typography 
              classes={{root: 'headingFont'}}
              sx={{
                display: { xs: 'none', lg: 'block'},
                fontSize: '32px',
                lineHeight: '48px',
                textAlign: 'center'}}>
                  Ultra NFT
              </Typography>
              </Grid>

              <Grid item xs={1}>
                <Box 
                sx={{width:'100%',
                display: {xs: 'block', lg: 'none'}}}/>
              </Grid>

              <Grid item sm={12} md={5} xl={3}>
              <Box sx={{ 
              // alignItems:'flex-start', 
              background: '#3C485D',
              borderRadius: '8px',
              width: '90%',
              height: '56px',
              display: {xs: 'none', sm: 'block'},
              mr: '10%',
              justifyContent: 'center'}}>
                <Box sx={{display: 'flex', width: '100%'}}>
                  <SearchIcon disabled sx={{color: 'white', ml: '13px', mt:2}}/>
                  <TextField
                  id='search'
                  placeholder='Search...' 
                  inputProps={{
                    sx:{color:'white',}}}
                  sx={{width: '100%',}}
                  />
                </Box>
              </Box>
              </Grid>

              {/* <Grid item md={4} lg={0}>
                <Box sx={{width:'100%',
              display: {md: 'block', lg: 'none'}}}
              className='space'/>
              </Grid> */}
              
              <Grid item xl={5}>
              <Stack direction="row"  sx={{justifyContent: 'center', 
              display:{xs: 'none', xl: 'block'},
              width: '100%'}}>
                {ListMenu.map((el, i) => {
                  return(
                  <Button sx={{
                    height: '56px',
                    width: '25%',
                    justifyContent: 'center',
                    color: '#FD1C68',
                    borderRadius: '15px'}}>
                      <Typography 
                      classes={{root: 'secondFont'}}
                      key={i} 
                      id={el}
                      sx={{
                      textAlign: 'center',
                      fontSize: '16px',
                      lineHeight: '24px',
                      width: '100%'
                      }}>
                        {el}
                      </Typography>
                  </Button>
                  )
                })}
              </Stack>
              </Grid>
              
              <Grid item md={3}>
              <Button sx={{
                width: '185px',
                height: '56px',
                background: 'linear-gradient(207.67deg, #FDAE8F 3.43%, #FD1C68 104.7%)',
                color: '#FD1C68',
                display:{xs:'none', md: 'block'},
                borderRadius: '12px',
                mr:4,
                ml:1}}>
                <Box sx={{display:'flex', width: '100%', justifyContent:'center'}}>
                <AssignmentIndOutlinedIcon sx={{color: 'white',}}/>
                <Typography
                classes={{root: 'secondFont'}}
                sx={{ml: 1}}>
                  {logInOrLogOut()}
                </Typography>
                  </Box>
              </Button>
              </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    )
}
