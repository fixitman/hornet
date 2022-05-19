import React, { useContext, useState } from 'react';
import { Button, Container, Grid, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { AuthContext } from '../contexts/AuthContext';
import {useLocation, useNavigate } from 'react-router-dom';
import { Email, Lock, PersonOutline } from '@mui/icons-material';



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
                            <LoginForm/>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}


const LoginForm = () => {
    const initialValues = {
        email: '',
        password: ''
    }

    const [values, setValues] = useState(initialValues)
    const { login } = useContext(AuthContext)
    const  navigate = useNavigate()
    const location = useLocation()
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const handleLogin = () => {
        console.log(values)
        login(values.email, values.password)
            .then((u) => {
                if (u) {
                    setValues(initialValues)
                    let dest = location && location.state && location.state.from ? location.state.from : '/'
                    navigate(dest, {replace:true})
                }else{
                    alert('invalid username or password')
                }
            })
    }

    return (
        <form>
            <TextField
                fullWidth
                name='email'
                size='small'
                label='Email'
                variant='outlined'
                onChange={handleChange}
                value={values.email}
                sx={{ mb: 2 }}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><Email color='#aaa' /></InputAdornment>,
                }}

            />
            <TextField
                fullWidth
                name='password'
                size='small'
                type='password'
                label='Password'
                variant='outlined'
                onChange={handleChange}
                value={values.password}
                sx={{ mb: 4 }}
                InputProps={{
                    startAdornment: <InputAdornment position="start"> <Lock color='#aaa' /></InputAdornment>,
                }}
            />
            <Button
                variant='contained'
                size='large'
                onClick={handleLogin}
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

