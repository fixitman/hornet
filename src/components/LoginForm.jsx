import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, InputAdornment, TextField,  Checkbox, FormControlLabel, Box } from "@mui/material";
import { Email, Lock } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useStoreActions } from 'easy-peasy';
import ResetPasswordDialog from '../components/ResetPasswordDialog';

const LoginForm = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const login = useStoreActions(actions => actions.auth.login);
    
    const handleSubmit = async (values) => {
        let u = await login(values)
        if (u) {
            let dest = location?.state?.from ? location.state.from : '/'
            navigate(dest, { replace: true })
        }
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
        password: '',
        rememberMe: false
    }

    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: initialValues,
        onSubmit: handleSubmit
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit} autoComplete='false'>
                <TextField
                    fullWidth
                    id='email'
                    name='email'
                    size='small'
                    label='Email'
                    variant='standard'
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
                    variant='standard'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    sx={{ mb: 0 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"> <Lock color='#aaa' /></InputAdornment>,
                    }}
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <FormControlLabel
                        id='rememberMe'
                        name='rememberMe'
                        label="Remember Me"
                        control={<Checkbox checked={formik.values.rememberMe} onChange={formik.handleChange} size='small' />}
                        sx={{ color: 'rgba(0,0,0,0.6)' }}
                    />
                    
                    <ResetPasswordDialog sendTo={formik.values.email} open={false} />

                </Box>

                <Button
                    variant='contained'
                    size='large'
                    type='submit'
                    fullWidth>
                    Log In
                </Button>
            </form>
        </>
    );
}

export default LoginForm;
