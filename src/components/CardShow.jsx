import { Avatar, Card, Button, CardHeader, CardMedia, IconButton, Typography, Box, Tooltip, Dialog } from "@mui/material";
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { useState } from 'react'
import DialogDeleteOrEdit from "./DialogDeleteOrEdir";
import { useHomePageContext } from "../pages/homePage/HomePage";

export default function CardShow(props){
    const [colorLike, setColorLike] = useState('white')

    function likeButton() {
        return( colorLike == 'white' ? setColorLike('red') : setColorLike('white') )
    }

    const defaultInfo = {
        email: 'Default User',
        img: './defaultContent.png',
        description: 'defaultContent.png',
        likes: 25484,
        price: 1.5,
    }

    // const responseHomePage = useHomePageContext()

    return(
        <>  
        <Card
        sx={{
            width:'370px',
            height: '606px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '24px',
            // justifyContent:'center'
        }}>
            <CardMedia
            component='img'
            height='322'
            image={`${defaultInfo.img}`}
            alt={`${defaultInfo.description}`}
            sx={{background:'#F2B4B0',
            width: '322px',
            height:'322px',
            m:3,
            borderRadius: '24px'}}/>

            <Box sx={{display: 'flex', mt:'-15px',}}>
                <CardHeader
                sx={{ width:'85%'}}
                avatar={
                    <Avatar sx={{background: '#F2B4B0',
                    width: '56px',
                    height: '56px'}}>
                        <FaceOutlinedIcon 
                        sx={{color: 'black', 
                        width: '100%',
                        height: '90%'}}/>
                    </Avatar>}
                title={
                    <Typography 
                    classes={{root: 'headingFont'}}
                    sx={{color:'white', 
                    fontSize: '24px',
                    ml:'-5px',
                    }}>
                        {`${defaultInfo.email}`}
                    </Typography>}
                    subheader={<Typography 
                    classes={{root: 'secondFont'}}
                    sx={{color:'white', 
                    fontSize: '20px',
                    ml:'-5px',
                    }}>
                    Time...
                    </Typography>}>
                </CardHeader>
                
               <DialogDeleteOrEdit/>
               
            </Box>

            <Box sx={{display: 'flex', justifyItems: 'center'}}>
                <Box sx={{width: '50%'}}>
                    <IconButton onClick={() => likeButton()} 
                    sx={{justifyContent: 'center', 
                    width: '20%', 
                    ml:'40%'}}>
                        <FavoriteBorderOutlinedIcon
                        sx={{ color: colorLike, 
                        width: '100%',
                        height: '100%'}}/>
                    </IconButton>
                    <Typography 
                    classes={{root: 'secondFont'}}
                    sx={{color:'white', 
                    width: '100%', 
                    textAlign:'center',
                    fontSize: '16px',
                    mt: '-2px'}}>
                        {`${defaultInfo.likes}`}
                    </Typography>
                </Box>
                
                <Box sx={{width: '50%'}}>
                    <IconButton
                    sx={{justifyContent: 'center', 
                    width: '20%', 
                    ml:'40%'}}>
                        <TokenOutlinedIcon
                        sx={{color:'white', width:'100%', height: '100%'}}/>
                    </IconButton>
                    <Typography 
                    classes={{root: 'secondFont'}}
                    sx={{color:'white', 
                    width: '100%', 
                    textAlign:'center',
                    fontSize: '16px',
                    mt: '-2px'}}>
                        {`${defaultInfo.price}`}
                        <span style={{color: 'gray', marginLeft:'2px'}}>DASH</span>
                    </Typography>
                </Box>
            </Box>

            <Box sx={{width: '100%', display: 'flex', mt: 3}}>
                <Box sx={{width:'50%'}}> 
                    <Button 
                    sx={{background: "linear-gradient(207.67deg, #3C485D 3.43%, #3C485D 104.7%)",
                        color: 'white',
                        borderRadius: '12px',
                        width: '85%',
                        height: '56px',
                        ml: '10%'}}>
                        <Box sx={{display:'flex'}}>
                        <HistoryOutlinedIcon sx={{color: 'white', width: '25px'}}/>
                        <Typography 
                        classes={{root: 'secondFont'}}
                        sx={{color:'white', fontSize:'16px', ml:1}}>
                            View History
                        </Typography>
                        </Box>
                    </Button>
                </Box>
                <Box sx={{width:'50%'}}> 
                    <Button 
                    sx={{background: "linear-gradient(207.67deg, #FDAE8F 3.43%, #FD1C68 104.7%)",
                        color: 'white',
                        borderRadius: '12px',
                        width: '85%',
                        height: '56px',
                        ml:'5%'}}>
                        <Box sx={{display:'flex'}}>
                        <AutoGraphIcon sx={{color: 'white', width: '25px'}}/>
                        <Typography 
                        classes={{root: 'secondFont'}}
                        sx={{color:'white', fontSize:'16px', ml:1}}>
                            Place Bid
                        </Typography>
                        </Box>
                    </Button>
                </Box>
            </Box>
        </Card>
        </>
    )
}