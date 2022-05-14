import React from 'react';

import { Button, Typography } from "@mui/material";
import { AuthContext } from '../contexts/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';



const Login = () => {

    return (
        <>
            <Typography variant="h3">
                Login
            </Typography>
            <LoginStatus />
        </>
    );
}



const LoginStatus = () => {
    const { user, login, logout } = React.useContext(AuthContext)
    const location = useLocation();
    let navigate = useNavigate()

    const loginClicked = () => {
        login()
        if(user && location.state.from){            
            let dest = location.state.from.pathname;
            navigate(dest,{replace:true})
        }
    }

    if (user) {
        return (<>
                <Typography variant='h5'>{`Welcome, ${user.displayName}`}</Typography>
                <Button variant='contained' onClick={logout}>Log out</Button>
            </>)
    } else {
        return (<Button variant='contained' onClick={loginClicked}>Login</Button>)
    }
}

export default Login;

