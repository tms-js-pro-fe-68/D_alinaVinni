import { useState } from 'react'
import { Box, Button, CardMedia, Dialog, DialogContent, DialogTitle, Skeleton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from "formik"
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useHomePageContext } from '../pages/homePage/HomePage';
import FormikTextField from './FormikTextField';
import { object, string} from 'yup'
import axiosAPI from '../axiosAPI';


export default function DialogDeleteOrEdit({id, onClose,...otherProps}){

    const response = useHomePageContext()

    const handleSubmit = async( values, {setSubmitting}) => {
        await axiosAPI.post(`/nfts/${id}`, {...values})

        setSubmitting(false)
        console.log('handleSubmit')
    }

    const formik = useFormik({
        initialValues:{
            description: '',
        },
        onSubmit: handleSubmit,
        validationSchema: object().shape({
            description: string().min(1).max(50).required(),
        })
    })
    
    const deletePost = async() => {
        console.log(11)
        const warning = confirm('Do you really want to delete this post?')
        if(warning == true){
            await axiosAPI.delete(`/nfts/${id}`)
            onClose
        }
    }

    return (
        <>
        {response.map((el, i) => {
            if(el.id == id){
                return(
                    <Dialog 
                    {...{onClose, ...otherProps}}
                    id={el.id}
                    key={i}
                    scroll='body'
                    fullWidth
                    PaperProps={{
                    sx:{
                        background:"#1f1f1f",
                        borderRadius: '20px',
                        widht:'70%',
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
                        <Box sx={{m:3, height:'400px'}}>
                        {!!el?.imageURL && 
                            <img
                            className='forImages'
                            src={`${el?.imageURL}`}
                            alt={`${el?.description}`}
                            style={{height:'400px !important'}}/>}
                        <p>{!el?.imageURL && 
                        <Skeleton
                        variant="rectangular"
                        animation="wave"
                        sx={{background:'rgba(242,180,176, 0.5)',
                        width: '100%',
                        height:'400px',
                        mt:3,
                        borderRadius: '24px'}}/>}</p>
                        </Box>
                        <Typography 
                        classes={{root: 'secondFont'}}
                        sx={{color:'#FD1C68 !important',
                        fontSize:'16px'}}>You'r can't change a media</Typography>

                        <Typography
                        classes={{root: 'headingFont'}}
                        id={el?.user}
                        name={el?.user}
                        value={el?.user}
                        sx={{color:'white', 
                        fontSize: '24px',
                        width: '100%',
                        lineHeight: '35px',
                        height: '56px',
                        mt: 2}}>{el?.user}</Typography>
                        
                        <form onSubmit={formik.handleSubmit}>
                        <Typography
                        classes={{root: 'secondFont'}}
                        sx={{fontSize:'16px',}}>
                            {`Unchangeable value: ${el?.price}  -  dash`}
                        </Typography>


                        <Typography
                        classes={{root: 'secondFont'}}
                        sx={{fontSize:'16px', mt:3}}>
                            {`Previous value: ${el?.description}`}
                        </Typography>
                        <FormikTextField 
                        id='description'
                        name='description'
                        formik={formik}
                        placeholder='Write a new description' 
                        inputProps={{color:'white'}}
                        sx={{width: '100%',
                        mt:{lg: 4, xs: 1},
                        height: '56px',
                        borderRadius: '14px', 
                        background: '#424242'}}/>
                        
                        <Button
                        type='submit'
                        disabled={!formik.isValid && !formik.isSubmiting}
                        sx={{background: "linear-gradient(207.67deg, #FDAE8F 3.43%, #FD1C68 104.7%)",
                        color: 'white',
                        borderRadius: '12px',
                        width: '100%',
                        mt:2,
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

                        <Button
                        onClick={() => {deletePost()}}
                        sx={{background: "linear-gradient(207.67deg, #FDAE8F 3.43%, #FD1C68 104.7%)",
                        color: 'white',
                        borderRadius: '12px',
                        width: '100%',
                        mt: 4,
                        height: '56px',}}
                        >
                            <Box sx={{display: 'flex'}}>
                            <DeleteOutlineOutlinedIcon sx={{color: 'white', fontSize: '25px',}}/>
                            <Typography
                            classes={{root: 'secondFont'}}
                            sx={{color:'white', 
                            width: '100%', 
                            textAlign:'center',
                            fontSize: '16px',}}>
                                Delete
                            </Typography>
                            </Box>
                        </Button>
                        </form>

                        </DialogContent>

                    </Dialog>
                )
            }
        })}
        </>
    )
}