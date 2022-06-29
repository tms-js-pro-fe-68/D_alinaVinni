import BoxBG from "../../theme/BoxBG"
import { object, string } from 'yup'
import { useNavigate } from "react-router-dom"
import { useFormik } from 'formik'
import { Box, 
    TextField, 
    Typography, 
    Button, 
    Container,
    Grid   } from '@mui/material'
import axiosAPI from "../../axiosAPI"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const schemaSignIn = object().shape({
    email: string().email().required(),
    password: string().min(2).required()
})

export default function LoginPage(){
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting }) => {
        const {email, password} = values;

        const { data } = await axiosAPI.post(`/users/signin`, { email, password })

        sessionStorage.token = data.token;
        sessionStorage.email = data.email;

        axiosAPI.setup(data.token)

        navigate('/', {replace: true});

        setSubmitting(false)
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: handleSubmit,
        validationSchema: schemaSignIn,
        validateOnMount: true 
    })

    return(
        <BoxBG  className='BoxBG'  
        sx={{
            height: '100%',
        }}>
            <Button 
            onClick={() => {navigate('/', {replace: true});}}><ArrowBackIcon sx={{color: 'white', fontSize: '30px',}}/></Button>
             <Container maxWidth='xl' sx={{mt: 6,}}>
                <Grid container sx={{justifyContent:'center'}}>
                    <Grid item xs={12} md={8}>
                    <form onSubmit={formik.handleSubmit}>
                    <Box 
                    container
                    item
                    spacing={2}
                    sx={{
                    borderRadius: '20px',
                    background: 'white',
                    flexDirection: 'column'}}>

                        <Typography variant='h3' className='headingFont'
                        sx={{textAlign: 'center', m:'5%', pt:'10px', color: 'black'}}>Please sign in</Typography>

                        <TextField
                        label='Email Address'
                        id='email'
                        name='email'
                        type='email'
                        sx={{width: '90%', 
                        justifyContent:'center', 
                        borderRadius: '15px', 
                        ml:'5%',
                        mt:'3%'}}
                        onBlur={formik.handleBlur}
                        value={formik.values.email} 
                        onChange={formik.handleChange}
                        error={formik.touched.email && !!formik.errors.email}
                        helperText={
                            formik.touched.email && !!formik.errors.email && formik.errors.email
                        }/>

                        <TextField
                        label='Password' 
                        value={formik.values.password} 
                        name='password'
                        type='password'
                        id='password'
                        sx={{width: '90%', justifyContent:'center', borderRadius: '15px', m:'5%'}}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={formik.touched.password && !!formik.errors.password}
                        helperText={
                            formik.touched.password && !!formik.errors.password && formik.errors.password
                        }/>

                        <Button 
                        type='submit' 
                        disabled={!formik.isValid && !formik.isSubmiting}
                        sx={{
                            width: '90%', 
                            justifyContent:'center', 
                            borderRadius: '15px', 
                            ml:'5%',  
                            mb:'5%',
                            height:'60px',
                            background: 'linear-gradient(207.67deg, #FDAE8F 3.43%, #FD1C68 104.7%)',
                        }}>
                            <Typography 
                            className='headingFont textButton'>
                                Sign in
                            </Typography>
                        </Button>
                    </Box>
                    </form>
                    </Grid>
                </Grid>
             </Container>
        </BoxBG>
    )
}