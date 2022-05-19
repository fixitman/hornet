import { useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Button from '@mui/material/Button'



const LoginOut = () => {
    const theme = useTheme()

    const buttonStyle = {
        color: theme.palette.common.white,
        textAlign: 'start',
        "&:hover": { color: theme.palette.text.secondary }
    }

    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    return (
        <>
            {!user && <Button size='large' onClick={() => navigate('/Login', { state: { from: '/' } })} sx={{ ...buttonStyle }}>Login</Button>}
            {user &&  <Button size='large' onClick={logout} sx={{ ...buttonStyle }}>Logout</Button>}
        </>
    );

}

export default LoginOut;