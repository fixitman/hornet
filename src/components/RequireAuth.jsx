import React from 'react';
import { useStoreState } from 'easy-peasy';

import { Navigate, useLocation } from 'react-router-dom';


const RequireAuth = ({children}) => {
    const user = useStoreState(state => state.user);    
    const location = useLocation();

    if(!user) return (<Navigate to='/Login' state={{from: location}} replace />)
    else return children;
    
}
 
export default RequireAuth;