import {
  Typography,
  Button,
  Grid,
  Container,
  Stack,
} from "@mui/material";
import { Box, } from "@mui/system";
import ButtonLogInOut from "./AppBarHeaderComponents/ButtonLogInOut";
import ButtonMenu from "./AppBarHeaderComponents/ButtonMenu";
import SearchField from "./AppBarHeaderComponents/SearchField";



export default function AppBarHeader(){

  const ListMenu = [ 'Home', 'Explore', 'Pages', 'Contact us']

    return(
        <Box container 
        component='header' 
        display='flex' 
        sx={{position: 'fixed', 
        width:'100%', 
        background:'rgba(0,0,0, 0.8)', 
        height: "95px", 
        zIndex:50}}>
        <Grid container justifyContent="center" alignItems="center" columns={14}>
          <Grid item xs={14} >
            
              
              <Box xs={14} sx={{mt:2.9, width: '100%'}} display='flex'>
                <Grid item xs={1}>
                <ButtonMenu/>
                </Grid>

                <Grid item lg={2} sx={{display: { xs: 'none', lg: 'block'},}}>
                <Typography 
                classes={{root: 'headingFont'}}
                sx={{
                  fontSize: '32px',
                  lineHeight: '48px',
                  textAlign: 'center'}}>
                    Ultra NFT
                </Typography>
                </Grid>

                <Grid item xs={1} sx={{width:'100%',
                  display: {xs: 'block', lg: 'none'}}}/>

                <Grid item sm={12} md={5} xl={3} sx={{display: {xs: 'none', sm: 'block'},}}>
                  <Box sx={{ 
                  borderRadius: '8px',
                  width: '90%',
                  height: '56px',
                  mr: '10%',
                  justifyContent: 'center'}}>
                    <SearchField/>
                  </Box>
                </Grid>

                <Grid item xs={3}
                sx={{width:'100%',
                display: {xs: 'none', md: 'block', xl: 'none'}}}/>
              
              <Grid item xl={5} sx={{display:{xs: 'none', xl: 'block'},}}>
              <Stack direction="row"  sx={{justifyContent: 'center', 
              width: '100%'}}>
                {ListMenu.map((el, i) => {
                  return(
                  <Button 
                  key={i} 
                  sx={{
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
              
              <Grid item md={3} lg={2} sx={{display:{xs:'none', md: 'block'}}}>
                  <ButtonLogInOut/>
              </Grid>

              </Box>
           
          </Grid>
        </Grid>
        </Box>
    )
}
