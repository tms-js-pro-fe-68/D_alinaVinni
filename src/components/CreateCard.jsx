import { Dialog, DialogContent, DialogTitle, Box, Container, Button, Typography, TextField, } from "@mui/material";
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import AddIcon from '@mui/icons-material/Add';
import FormikTextField from "./FormikTextField";
import { useFormik } from "formik"
import { useState, useEffect } from 'react'
import { object, string, number } from 'yup'


export default function CreateCard(){

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
    setOpen(true);
    };
    const handleClose = () => {
    const warning = confirm(`If you close the creation card, you will lose your progress. \nAre you sure you want to close the creation card?`)
        if(warning == true){
            setOpen(false);
        } 
    };
    
    const [image, setImage] = useState(null)

    const baseURL = 'https://tms-js-pro-back-end.herokuapp.com/api'

    const handleSubmit = async( values, {setSubmitting}) => {
        const { data } = await fetch(`${baseURL}/nfts`, values)

        const resourse = '/nft'
        const formData = new FormData()
        formData.append( 'image', image )
        
        // const { data: imageURL } = await fetch(`${baseURL}`, {//wtf
        //     method: 'POST',
        //     body: formData,
        //     { params: {resourse, id:data.id} }})
    }

    const formik = useFormik({
        initialValues:{
            name: '',
            description: '',
            price: '',
        },
        onsubmit: handleSubmit,
        validationSchema: object().shape({
            name: string().required(),
            description: string(),
            price: number().min(1),
        }),
        validateOnMount: true,
    })

    const [imagePreview, setImagePreview] = useState('')
    useEffect(() => {
        const reader = new FileReader()
        reader.onload() = e => setImagePreview(e.target.result)

        if(image){
            reader.readAsDataURL(image)
        }

        return() => {reader.onload() = undefined}
    }, [image])

    return(
        <Container maxWidth='xl' >
            <Button sx={{
            heigth: '72px', 
            color: 'white',
            border: '3px solid white',
            borderRadius: '14px',
            width: '207px',
            mt: 38,
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
            maxWidth='800px'
            PaperProps={{
                sx:{
                background:"#1f1f1f",
                borderRadius: '20px',
                widht:'90%',
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
                        <Box  sx={{display: 'flex', width: '100%'}}>
                            <Box sx={{
                                width: '500px', 
                                height: '500px',
                                background: '#424242',
                                border: '2px dashed white',
                                borderRadius: '14px'
                            }}>
                                <TextField
                                type='file'
                                name='image'
                                sx={{width: '500px',
                                height:'100px',
                                background: '#424242',
                                border: '2px dashed white',
                                borderRadius: '14px'}}
                                onChange={e => setImage(e.target.files[0]) }
                                placeholder='Select or drag a file'/>
                                <Box
                                src={imagePreview}
                                sx={{width: '400px',
                                heigth: '400px',
                                justifyContent: 'center'}}/>
                            </Box>

                            <Box sx={{ width: '300px', ml:4, height: '500px'}}>
                                <Typography
                                classes={{root: 'headingFont'}}
                                sx={{color:'white', 
                                fontSize: '24px',
                                width: '100%',
                                lineHeight: '35px',
                                height: '56px',}}>Default Email</Typography>

                                <FormikTextField 
                                id='price'
                                name='price'
                                formik={formik}
                                placeholder='Set a price' 
                                inputProps={{color:'white',}}
                                sx={{width: '100%',
                                mt: 4,
                                height: '56px',
                                border: '2px dashed white',
                                borderRadius: '14px', 
                                background: '#424242'}}/>

                                <FormikTextField 
                                id='description'
                                name='description'
                                formik={formik}
                                placeholder='Write a description' 
                                inputProps={{color:'white'}}
                                sx={{width: '100%',
                                mt: 4,
                                height: '56px',
                                border: '2px dashed white',
                                borderRadius: '14px', 
                                background: '#424242'}}/>

                                <Button
                                sx={{background: "linear-gradient(207.67deg, #FDAE8F 3.43%, #FD1C68 104.7%)",
                                color: 'white',
                                borderRadius: '12px',
                                width: '100%',
                                mt: 26,
                                height: '56px',}}
                                >
                                    <Box sx={{display: 'flex'}}
                                    type='submit'>
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
        </Container>
    )
}