import {
    Avatar,
    Toolbar, 
    Typography,
    AppBar,
    Button,
    TextField, InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Box, } from "@mui/system";
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const Links = ['Home', 'Explore', 'Pages', 'Contact us']

export default function AppBarHeader(){
    return(
        <Box>
            <AppBar style={{
              background: 'rgba(255,255,255,0)'
            }}>
                <Toolbar>
                    <Avatar alt='logo' src='../images/Logo.png'/>

                    <Typography className='headingFont'style={{
                        fontSize:'32px',
                    }}>
                        Ultra NFT
                    </Typography>

                    <TextField style={{background: '#3C485D',
                  borderRadius: '8px',
                  height: '48px',}}>
                        <SearchIcon style={{color: 'white', height:'13px', width:'13px'}}/>
                    </TextField>

                    <Box sx={{
                        display:{ xs:'none', md:'flex'},
                        alignItems: 'center',
                    }}>
                      {Links.map((el, i) => {
                        <Button id={i} variant='text' sx={{
                          color: 'white',
                          width: '79px',
                          height: '24px',
                        }}>{el}</Button>
                      })}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}