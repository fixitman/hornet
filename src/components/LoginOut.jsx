import { useTheme } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Button from '@mui/material/Button'





const LoginOut = () => {

    const logout = useStoreActions(actions =>  actions.auth.logout );
    const theme = useTheme();
    const user = useStoreState(state => state.auth.user);
    const buttonStyle = {
        color: theme.palette.common.white,
        textAlign: 'start',
        "&:hover": { color: theme.palette.text.secondary }
    }


    const navigate = useNavigate()

    return (
        <>
            {!user && <Button size='large' onClick={() => navigate('/Login', { state: { from: '/' } })} sx={{ ...buttonStyle }}>Login</Button>}
            {user && <Button size='large' onClick={logout} sx={{ ...buttonStyle }}>Logout</Button>}
        </>
    );

}

export default LoginOut;