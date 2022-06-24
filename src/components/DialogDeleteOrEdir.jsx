import { Box, Button, Dialog, DialogContent, DialogTitle, Tooltip, IconButton, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import { useState } from 'react'

export default function DialogDeleteOrEdit(){

    console.log(11)

    const [open, setOpen] = useState(false);
    
    const handleClickOpen = () => {
    setOpen(true)
    console.log('dialog')
    }

    const handleClose = () => {
    const warning = confirm(`If you close the Edit card, you will lose your progress. \nAre you sure you want to close the Edit card?`)
        if(warning == true){
            setOpen(false);
        } 
    };

    return (
        <>
            <IconButton sx={{width: '15%'}} onClick={() => {handleClickOpen()}}>
                <Tooltip title='Manage' sx={{width: '100%'}}>
                    <MoreVertIcon sx={{color:'white', width:'100%', height: '100%'}}/>
                </Tooltip>
            </IconButton>
        

            <Dialog 
            open={open}
            onClose={handleClose}
            maxWidth='800px'
            scroll='body'
            fullWidth
            PaperProps={{
            sx:{
                background:"#1f1f1f",
                borderRadius: '20px',
                widht:'90%',
                ml: '5%',
            }
            }}
            sx={{backgroundColor: 'rgba(255, 255, 255, 0.2)', }}>
                
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
                    <Box 
                    sx={{width: '100%', heigth: '100%'}}>
                        <Box sx={{
                            background: `url(./defaultContent.png)`,
                            backgroundSize: '322px 322px'
                        }}/>
                    </Box>
                </DialogContent>

            </Dialog>
        </>
    )
}