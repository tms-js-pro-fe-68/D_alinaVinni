import { Avatar, Card, Button, CardHeader, CardMedia, IconButton, Typography, Box, Skeleton,  Tooltip, } from "@mui/material";
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, createContext, useContext } from 'react'
import { useHomePageContext } from "../pages/homePage/HomePage";
import DialogDeleteOrEdit from "./DialogDeleteOrEdir";



export default function CardShow(){
    const [colorLike, setColorLike] = useState('white')
    const [openEditor, setOpenEditor] = useState(false)

    function likeButton() {
        return( colorLike == 'white' ? setColorLike('red') : setColorLike('white') )
    }

    const handleClickOpen = () => {
        setOpenEditor(true)
        console.log(`handle click open`)}

    const response = useHomePageContext()

    return(
        <Box
        sx={{width: '100%',}}> 
            {response.map((el, i) => {
                return(
                    <Card
                    id={`${el?.id}`}
                    key={i}
                    sx={{
                        width:'370px',
                        height: '606px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '24px',
                        justifyContent:'center',
                        mt: 4
                    }}>
                        {!!el?.imageURL && 
                        <CardMedia
                        component='img'
                        height='322'
                        image={`${el?.imageURL}`}
                        alt={`${el?.description}`}
                        sx={{background:'#F2B4B0',
                        width: '322px',
                        height:'322px',
                        m:3,
                        borderRadius: '24px'}}/>}
                        <p>{!el?.imageURL && 
                        <Skeleton
                        variant="rectangular"
                        animation="wave"
                        sx={{background:'rgba(242,180,176, 0.5)',
                        width: '322px',
                        height:'322px',
                        m:3,
                        borderRadius: '24px'}}/>}</p>
            
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
                                    {`${el?.user}`}
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
                            <IconButton 
                            id={el?.id}
                            sx={{width: '15%'}}  
                            onClick={(e) => {
                                handleClickOpen()
                            }}>
                                <Tooltip 
                                id={el?.id}
                                title='Manage' 
                                sx={{width: '100%'}}
                                >
                                    <MoreVertIcon 
                                    id={el?.id}
                                    sx={{color:'white', width:'100%', height: '100%'}}/>
                                </Tooltip>
                            </IconButton>
                            
                            <DialogDeleteOrEdit 
                            id={`${el?.id}`}
                            open={openEditor}
                            onClose={() => {
                            const warning = confirm(`If you close the Edit card, you will lose your progress. \nAre you sure you want to close the Edit card?`)
                            if(warning == true){
                                setOpenEditor(false);
                            } }}/>
                        
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
                                    {`${el?.likesCount}`}
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
                                    {`${el?.price}`}
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
                )
            })}
        </Box>
    )
}