import { Avatar, Card, Button, CardHeader, CardMedia, IconButton, Typography, Box, Skeleton,  Tooltip, } from "@mui/material";
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react'
import DialogDeleteOrEdit from "./DialogDeleteOrEdit";
import axiosAPI from "../axiosAPI";
import { useNavigate } from "react-router-dom";



export default function CardShow({id, imageUrl, likesCount, price, createdAt, description, user}){
    const navigate = useNavigate()

    const [colorLike, setColorLike] = useState('white')
    const [openEditor, setOpenEditor] = useState(false)

    function likeButton (targetID, like) {
       if(colorLike == 'white') {
            setColorLike('red')
            like++
           return(axiosAPI.put(`/nfts/${targetID}`, {likesCount: `${like}`})) 
        }else{
            setColorLike('white') 
            like--
            return(axiosAPI.put(`/nfts/${targetID}`, {likesCount: `${like}`})) 
        } 
    }

    function daTe(data){
        return (`${data.slice(0, 4)} ${data.slice(5, 7)} ${data.slice(8, 10)}`)
    }

    const handleClickOpen = () => {
        if(sessionStorage.email == null){
            navigate('../login', { replace: true })
        }else if(sessionStorage.email !== null){
            setOpenEditor(true)
        }
    }

    // if(props.value !== false){
    //     const response = props.value
        return(
            <Box container>
            <Card
            id={id}
            sx={{
                width:{xs:'370px', md: '80%'},
                height: {xs:'680px', md: '700px'},
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '24px',
                marginLeft: 'auto',
                marginRight: 'auto',
                mt: 4
            }}>
                <Box sx={{
                    display: {xs: 'column', md: 'flex'},
                    width: '100%',
                    height:'100%'
                }}>
                    <Box sx={{
                    width: {xs:'322px', md: '60%'},
                    height:{xs:'322px', md:'90%'},
                    m:3,
                    borderRadius: '24px',
                    background:'rgba(242,180,176, 0.2)',
                    }}>
                        {!!imageUrl && 
                        <img
                            className="forImages"
                            src={`${imageUrl}`}
                            style={{borderRadius: '24px',}}
                            />}
                        <p>{!!!imageUrl && 
                        <Skeleton
                            variant="rectangular"
                            animation="wave"
                            sx={{background:'rgba(242,180,176, 0.5)',
                            width: '100%',
                            height:'100%',
                            borderRadius: '24px'}}/>}
                        </p>
                    </Box>
                    
                    <Box sx={{width: {xs: '100%', md: '40%'}}}>
                    <Box sx={{display: 'flex', 
                    mt:{xs:'-15px', md: 3}, 
                    width:'100%'}}>
                        <CardHeader
                        sx={{ width:'100%'}}
                        avatar={
                            <Avatar sx={{background: '#F2B4B0',
                            width: {xs:'56px', md:'130px'},
                            height:{xs:'56px', md:'130px'}}}>
                                <FaceOutlinedIcon 
                                sx={{color: 'black', 
                                width: '100%',
                                height: '90%'}}/>
                            </Avatar>}
                        title={
                            <Typography 
                            classes={{root: 'headingFont'}}
                            sx={{color:'white', 
                            fontSize:{xs: '24px', md:'40px'},
                            ml:{xs:'-5px', md:'10px'},
                            }}>
                                {`${user}`}
                            </Typography>}
                            subheader={
                                <Typography 
                                classes={{root: 'secondFont'}}
                                sx={{color:'white', 
                                fontSize: {xs:'20px', md:'30px'},
                                ml:{xs:'-5px', md:'10px'},
                                }}>
                                    {daTe(createdAt)}
                                </Typography>}>
                        </CardHeader>
                        <IconButton 
                        id={id}
                        sx={{width: '15%'}}  
                        onClick={(e) => {
                            handleClickOpen()
                        }}>
                            <Tooltip 
                            id={id}
                            title='Manage' 
                            sx={{width: '100%'}}
                            >
                                <MoreVertIcon 
                                id={id}
                                sx={{color:'white', width:'100%', height: '100%'}}/>
                            </Tooltip>
                        </IconButton>
                        
                        {!!openEditor && <DialogDeleteOrEdit 
                        id={id}
                        open={openEditor}
                        onClose={() => {setOpenEditor(false)}}/>}
                    
                    </Box>
                    <Typography
                    classes={{root: 'secondFont'}}
                    sx={{color:'white', 
                    width: '100%',
                    fontSize: {xs:'16px', md:'30px'},
                    ml:3,
                    mt:{xs:0, md:4}}}
                    >{`${description}`}</Typography>
                    <Box sx={{display: 'flex', justifyItems: 'center', m:3, mt:{xs:3, md:'210px'}}}>
                        <Box sx={{width: '50%'}}>
                            <IconButton
                            id={id}
                            onClick={(e) => likeButton(e.target.id, likesCount)} 
                            sx={{justifyContent: 'center', 
                            width: '20%', 
                            ml:'40%'}}>
                                <FavoriteBorderOutlinedIcon
                                id={id}
                                sx={{ color: colorLike, 
                                width: '100%',
                                height: '100%'}}/>
                            </IconButton>
                            <Typography
                            id={id} 
                            classes={{root: 'secondFont'}}
                            sx={{color:'white', 
                            width: '100%', 
                            textAlign:'center',
                            fontSize: '16px',
                            mt: '-2px'}}>
                                {`${likesCount}`}
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
                                {`${price}`}
                                <span style={{color: 'gray', marginLeft:'2px'}}>DASH</span>
                            </Typography>
                        </Box>
                    </Box>
        
                    <Box sx={{width: '100%', display: 'flex', mt: 5}}>
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
                    </Box>
                </Box>
            </Card>
            </Box>
)
    
}