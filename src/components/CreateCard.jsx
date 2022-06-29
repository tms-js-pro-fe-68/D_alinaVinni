import { Dialog, DialogContent, DialogTitle, 
    Box, Button, Typography, 
    TextField, LinearProgress, } from "@mui/material";
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import AddIcon from '@mui/icons-material/Add';
import FormikTextField from "./FormikTextField";
import { useFormik } from "formik"
import { useState, useEffect } from 'react'
import { object, string, } from 'yup'
import axiosAPI from "../axiosAPI";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

const schemeForNFT = object().shape({
    description: string().min(1).max(20).required(),
    price: string().min(1).required(),
})



export default function CreateCard(){
    const navigate = useNavigate()

    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

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
            setImagePreview('')
            setIsLoading(false)
        } 
    };

    const [image, setImage] = useState(null)
 

    const handleSubmit = async( values, {setSubmitting}) => {
        console.log(image)
        setIsLoading(true)
        const {data} = await axiosAPI.post('/nfts', {...values}) 

        const resource = 'nft'
        const formData = new FormData()
        formData.append( 'image', image )
        console.log(formData)
        
        const { data: imageUrl } = await axios.post(
            'https://server.kemalkalandarov.lol/api/images', 
            formData,
            { params: {resource, id:data.id} },
        )
        
        await axiosAPI.put(`/nfts/${data.id}`, {imageUrl})

        setSubmitting(false)
        setIsLoading(false)
        setOpen(false)
        console.log('all is done')
    }

    const formik = useFormik({
        initialValues:{
            name: '01',
            description: ``,
            price: ``,
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

        if(!!image){
            reader.readAsDataURL(image)
        }

        return() => {reader.onload = undefined}
    }, [image])


    return(
        <>
        <Box sx={{width:'100%'}}>
            <Button sx={{
            height: '56px', 
            color: 'white',
            border: '3px solid white',
            borderRadius: '14px',
            width: '40%',
            ml: '30%',
            mt:5
            }} onClick={() => {handleClickOpen()}}>
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
        </Box>

            <Dialog
            open={open}
            onClose={handleClose}
            maxWidth='1500px'
            scroll='body'
            PaperProps={{
                sx:{
                background:"#1f1f1f",
                borderRadius: '20px',
                width:'90%',
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
                                height: '450px',
                                background: '#424242',
                                borderRadius: '14px'
                            }}>
                                <TextField
                                id='image'
                                type='file'
                                name='image'
                                sx={{width: '100%',
                                minHeight:'5%',
                                background: '#424242',
                                borderRadius: '14px'}}
                                onChange={e => setImage(e.target.files[0]) }
                                placeholder='Select or drag a file'/>
                                <Box sx={{width: '100%', 
                                height:'90%'}}>
                                <img
                                className='forImages'
                                src={imagePreview}
                                alt='Your nft'/>
                                
                                {!!isLoading && 
                                <>
                                    <Box sx={{ width: '100%' }}>
                                    <LinearProgress color="progress" />
                                    </Box>
                                    <p style={{color:'white', marginTop: '5px'}}>{'If the post tries to send too long(waiting time: 2min). Please LOG OUT and again LOG IN.'}</p>
                                </>}
                                </Box>
                            </Box>


                            <Box 
                            sx={{ 
                                width: {xs: '100%', lg:'40%', }, 
                                ml:{xs: 1, lg:4, }, 
                                mt: {xs:7, lg: 0},
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
                                placeholder='Write a description' 
                                inputProps={{color:'white'}}
                                sx={{width: '100%',
                                mt:{lg: 4, xs: 1},
                                height: '56px',
                                borderRadius: '14px', 
                                background: '#424242'}}/>

                                <Button
                                type='submit'
                                disabled={!formik.isValid && !formik.isSubmitting}
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
            {/* <CircleTheme/> */}
        </>
    )
}