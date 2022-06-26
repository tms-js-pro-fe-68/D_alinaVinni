import { useState } from 'react'
import { Box, Button, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";

import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import { useHomePageContext } from '../pages/homePage/HomePage';


export default function DialogDeleteOrEdit({id, onClose,...otherProps}){

    const response = useHomePageContext()

    return (
        <>
        {response.map((el) => {
            if(el.id == id){
                console.log(`read the data`)
                return(
                    <Dialog 
                    {...{onClose, ...otherProps}}
                    id={el.id}
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
                    sx={{backgroundColor: 'rgba(255, 255, 255, 0.2)', }}
                    {...otherProps}>
                        
                        <DialogTitle sx={{display: 'flex'}}>
                            <Typography
                            classes={{root: 'headingFont'}}
                            sx={{
                                fontSize: '32px',
                                lineHeight: '48px',
                                width: "90%",
                                color: 'white'}}>
                                {`Ultra NFT ${el.id}`}
                            </Typography>
                            <Button onClick={onClose} sx={{width:"10%", mr:'-10px'}}>
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
                )
            }else{
                console.log(`does't found`)
            }
        })}
        </>
    )
}