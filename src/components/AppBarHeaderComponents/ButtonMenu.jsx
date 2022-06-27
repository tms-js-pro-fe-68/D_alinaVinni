 import { useState } from 'react'
 import { Grid, Button, Box, Dialog, DialogTitle, Typography, DialogContent, List, ListItem, ListItemButton, } from '@mui/material'
 import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
 import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
 import SearchField from './SearchField'
import ButtonLogInOut from './ButtonLogInOut';

 
 export default function ButtonMenu(){
    const ListMenu = [ 'Home', 'Explore', 'Pages', 'Contact us']

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    function logInOrLogOut(){
        let data = sessionStorage.getItem('value')
        if(data == null){
          return('Log In')
        } else if(data !== null){
          return('Log Out')
        }
      }
    return(
        <>
        <Grid item xs={1}>
              <Button 
              sx={{
                height: '60px',
                width: '100%',
                justifyContent: 'center',
                color: '#FD1C68',
                display: 'inline',
                borderRadius: '15px',
                ml:1}}
                onClick={() => handleClickOpen()}>

                <Box sx={{
                background: `center no-repeat url('./Logo.png')`,
                height: '56px',
                justifyContent: 'center',
                textAlign: 'center',
                mt: '-3px'
                }}/>
              </Button>
              </Grid>

              <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                scroll='body'
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
                          <SearchField/>
                        </ListItemButton>
                      </ListItem>

                    {ListMenu.map((el, i) =>{
                      return(
                      <ListItem key={i}  sx={{width: '100%', mt:'-5px', height: '80px', borderRadius:'8px'}}>
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
                        <ButtonLogInOut/>
                      </ListItemButton>
                    </ListItem>
                  </List>

                </DialogContent>

              </Dialog>
        </>
    )
 }