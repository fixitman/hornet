import React, { } from 'react';
import { Container, Grid,  Paper, Typography } from "@mui/material";
import {PersonOutline } from '@mui/icons-material';
import LoginForm from '../components/LoginForm';

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

export default Login;
