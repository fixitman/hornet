import React, { useContext } from 'react';
import { Button, Container, Grid, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { AuthContext } from '../contexts/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { Email, Lock, PersonOutline } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from 'yup'



const Login = () => {


    return (
        <>
            <Container maxWidth='sm'>
                <Paper elevation={8} sx={{ mt: 4, p: 2, pb: 8, textAlign: 'center', backgroundColor: '#fff' }} >
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <Typography variant='h4'> Log In</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <PersonOutline color='secondary' sx={{ height: '150px', width: '150px' }} />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 3 }}>
                            <LoginForm />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}


const LoginForm = () => {
    

   
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    
    const handleLogin = (values) => {       
        console.log(values)
        login(values.email, values.password)
            .then((u) => {
                if (u) {                   
                    let dest = location && location.state && location.state.from ? location.state.from : '/'
                    navigate(dest, { replace: true })
                } else {
                    alert('invalid username or password')
                }
            })
    }

    const validationSchema = Yup.object({
        email: Yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: Yup
            .string('Enter your password')
            .required('Password is required'),
    });

    const initialValues = {
        email: '',
        password: ''
    }

    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: initialValues,     
        onSubmit: handleLogin  
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id='email'
                name='email'
                size='small'
                label='Email'
                variant='outlined'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}               
                sx={{ mb: 2 }}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><Email color='#aaa' /></InputAdornment>,
                }}

            />
            <TextField
                fullWidth
                id='password'
                name='password'
                size='small'
                type='password'
                label='Password'
                variant='outlined'                
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}       
                sx={{ mb: 4 }}
                InputProps={{
                    startAdornment: <InputAdornment position="start"> <Lock color='#aaa' /></InputAdornment>,
                }}
            />
            <Button
                variant='contained'
                size='large'
                type='submit'
                fullWidth>Log In</Button>
        </form>
    );
}



// const LoginStatus = () => {
//     const { user, login, logout } = React.useContext(AuthContext)
//     const location = useLocation();
//     let navigate = useNavigate()

//     const loginClicked = () => {
//         login()
//         if (user && location.state.from) {
//             let dest = location.state.from.pathname;
//             navigate(dest, { replace: true })
//         }
//     }

//     if (user) {
//         return (<>
//             <Typography variant='h5'>{`Welcome, ${user.displayName}`}</Typography>
//             <Button variant='contained' onClick={logout}>Log out</Button>
//         </>)
//     } else {
//         return (<Button variant='contained' onClick={loginClicked}>Login</Button>)
//     }
// }

export default Login;

