import React, { useContext } from 'react';
import {AuthContext} from '../contexts/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

    if(!user) return (<Navigate to='/Login' state={{from: location}} replace />)
    else return children;
    
}
 
export default RequireAuth;