import { useState } from 'react'
import { Box, Button, CardMedia, Dialog, DialogContent, DialogTitle, Skeleton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from "formik"
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import { useHomePageContext } from '../pages/homePage/HomePage';
import FormikTextField from './FormikTextField';
import { object, string} from 'yup'


export default function DialogDeleteOrEdit({id, onClose,...otherProps}){

    const response = useHomePageContext()

    // const formik = useFormik({
    //     initialValues:{
    //         description: '',
    //     },
    //     onSubmit: handleSubmit,
    //     validationSchema: object().shape({
    //         description: string().min(1).max(50).required(),
    //     })
    // })

    return (
        <>
        {response.map((el, i) => {
            if(el.id == id){
                console.log(`read the data`)
                return(
                    <Dialog 
                    {...{onClose, ...otherProps}}
                    id={el.id}
                    key={i}
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
                                {`Ultra NFT   resourse:${el.id}`}
                            </Typography>
                            <Button onClick={onClose} sx={{width:"10%", mr:'-10px'}}>
                                <DoNotDisturbOnOutlinedIcon sx={{color: 'white',}}/>
                            </Button>
                        </DialogTitle>

                        <DialogContent>
                        {!!el?.imageURL && 
                        <CardMedia
                        component='img'
                        height='322'
                        image={`${el?.imageURL}`}
                        alt={`${el?.description}`}
                        sx={{background:'#F2B4B0',
                        width: '400px',
                        height:'400px',
                        m:3,
                        borderRadius: '24px'}}/>}
                        <p>{!el?.imageURL && 
                        <Skeleton
                        variant="rectangular"
                        animation="wave"
                        sx={{background:'rgba(242,180,176, 0.5)',
                        width: '400px',
                        height:'400px',
                        m:3,
                        borderRadius: '24px'}}/>}</p>
                        <Typography 
                        classes={{root: 'secondFont'}}
                        sx={{color:'#FD1C68 !important',
                        fontSize:'16px'}}>You'r can't change a media</Typography>

                        <Typography
                        classes={{root: 'headingFont'}}
                        id={sessionStorage.email}
                        name={sessionStorage.email}
                        value={sessionStorage.email}
                        sx={{color:'white', 
                        fontSize: '24px',
                        width: '100%',
                        lineHeight: '35px',
                        height: '56px',
                        mt: {xs: 2, lg:0}}}>{sessionStorage.email}</Typography>
                        
                        <form>
                        <Typography
                        classes={{root: 'secondFont'}}
                        sx={{fontSize:'16px',
                        color:'#FD1C68 !important',}}>
                            {`Unchangeable value: ${el?.price}  -  dash`}
                        </Typography>


                        <Typography
                        classes={{root: 'secondFont'}}
                        sx={{fontSize:'16px'}}>
                            {`Previous value: ${el?.description}`}
                        </Typography>
                        <FormikTextField 
                        id='description'
                        name='description'
                        // formik={formik}
                        value={el?.description}
                        placeholder='Write a new description' 
                        inputProps={{color:'white'}}
                        sx={{width: '100%',
                        mt:{lg: 4, xs: 1},
                        height: '56px',
                        borderRadius: '14px', 
                        background: '#424242'}}/>

                        <Button
                        type='submit'
                        // disabled={!formik.isValid && !formik.isSubmiting}
                        sx={{background: "linear-gradient(207.67deg, #FDAE8F 3.43%, #FD1C68 104.7%)",
                        color: 'white',
                        borderRadius: '12px',
                        width: '100%',
                        mt: {lg:26, xs: 2},
                        height: '56px',}}
                        >
                            <Box sx={{display: 'flex'}}>
                            <AddIcon sx={{color: 'white', fontSize: '25px',}}/>
                            <Typography
                            classes={{root: 'secondFont'}}
                            sx={{color:'white', 
                            width: '100%', 
                            textAlign:'center',
                            fontSize: '16px',}}>
                                Update
                            </Typography>
                            </Box>
                        </Button>
                        </form>

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