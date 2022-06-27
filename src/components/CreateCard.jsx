import { Dialog, DialogContent, DialogTitle, Box, Button, Typography, TextField, containerClasses, CardMedia, } from "@mui/material";
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import AddIcon from '@mui/icons-material/Add';
import FormikTextField from "./FormikTextField";
import { useFormik } from "formik"
import { useState, useEffect } from 'react'
import { object, string, number } from 'yup'
import axiosAPI from "../axiosAPI";
import axios from 'axios'
import getCreationDate from '../getDate'
import { useNavigate } from "react-router-dom";

const schemeForNFT = object().shape({
    description: string().min(1).max(50).required(),
    price: string().min(1).required(),
})


export default function CreateCard(){
    const navigate = useNavigate()

    const [open, setOpen] = useState(false);

    // const [dataEmail, setDataEmail] = useState(sessionStorage.email)

    const createData = getCreationDate()


    const handleClickOpen = () => {
        if(sessionStorage.email == null){
            navigate('../login', { replace: true })
        }else if(sessionStorage.email !== null){
            setOpen(true);
        }
    };

    const handleClose = () => {
    const warning = confirm(`If you close the creation card, you will lose your progress. \nAre you sure you want to close the creation card?`)
        if(warning == true){
            setOpen(false);
        } 
    };

    const [image, setImage] = useState(null)
 
    const data = {}

    const handleSubmit = async( values, {setSubmitting}) => {
        await axiosAPI.post('/nfts', {...values}) 

        const resourse = '/nft'
        const formData = new FormData()
        formData.append( 'image', image )
        
        const { data: imageURL } = await axios.post(
            'https://server.kemalkalandarov.lol/api/images', 
            formData,
            { params: {resourse, id:data.id}})
        
        await axiosAPI.put(`/nfts/${data.id}`, {imageURL})

        setSubmitting(false)
        setOpen(false)
        console.log('all is done')
    }

    const formik = useFormik({
        initialValues:{
            user: sessionStorage.email,
            description: `${data?.description}`,
            price: `${data?.price}`,
            likesCount: 0,
        },
        onSubmit: handleSubmit,
        validationSchema: schemeForNFT,
        validateOnMount: true,
    })

    const [imagePreview, setImagePreview] = useState('')

    useEffect(() => {
        const reader = new FileReader()
        reader.onload = e => setImagePreview(e.target.result)

        if(image){
            reader.readAsDataURL(image)
        }

        return() => {reader.onload = undefined}
    }, [image])


    return(
        <>
            <Button sx={{
            heigth: '72px', 
            color: 'white',
            border: '3px solid white',
            borderRadius: '14px',
            width: '207px',
            height: '56px',}} onClick={() => {handleClickOpen()}}>
                <Box sx={{display: 'flex'}}>
                <AddIcon sx={{color: 'white', fontSize: '25px',}}/>
                <Typography
                classes={{root: 'secondFont'}}
                sx={{color:'white', 
                width: '100%', 
                textAlign:'center',
                fontSize: '20px',}}>
                    Create
                </Typography>
                </Box>
            </Button>

       
            <Dialog
            open={open}
            onClose={handleClose}
            maxWidth='1500px'
            scroll='body'
            PaperProps={{
                sx:{
                background:"#1f1f1f",
                borderRadius: '20px',
                // widht:'90%',
                ml: '5%',}
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
                        <Button onClick={handleClose} sx={{width:"10%", mr:'-10px', color: 'white'}}>
                        <DoNotDisturbOnOutlinedIcon sx={{color: 'white',}}/>
                        </Button>
                    </DialogTitle>

                    <DialogContent>
                        <form onSubmit={formik.handleSubmit}>
                        <Box  sx={{display: {xs:'block', lg: 'flex'}, width: '100%'}}>

                            <Box sx={{
                                width: {lg:'60%', xs: '100%'},
                                height: '500px',
                                background: '#424242',
                                borderRadius: '14px'
                            }}>
                                <TextField
                                id='image'
                                type='file'
                                name='image'
                                sx={{width: '500px',
                                height:'100px',
                                background: '#424242',
                                borderRadius: '14px'}}
                                onChange={e => setImage(e.target.files[0]) }
                                placeholder='Select or drag a file'/>
                                <Box
                                src={imagePreview}
                                alt='Your nft'
                                sx={{width: '400px',
                                heigth: '400px',
                                justifyContent: 'center'}}/>
                            </Box>


                            <Box 
                            sx={{ 
                                width: {xs: '100%', lg:'40%', }, 
                                ml:{xs: 1, lg:4, }, 
                                height: '100%'}}>
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

                                <FormikTextField 
                                id='price'
                                name='price'
                                formik={formik}
                                value={data?.price}
                                placeholder='Set a price' 
                                inputProps={{color:'white',}}
                                sx={{width: '100%',
                                mt:{lg: 4, xs: 1},
                                height: '56px',
                                borderRadius: '14px', 
                                background: '#424242'}}/>

                                <FormikTextField 
                                id='description'
                                name='description'
                                formik={formik}
                                value={data?.description}
                                placeholder='Write a description' 
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
                                        Create
                                    </Typography>
                                    </Box>
                                </Button>
                            </Box>
                        </Box>
                        </form>
                    </DialogContent>
            </Dialog>
        </>
    )
}