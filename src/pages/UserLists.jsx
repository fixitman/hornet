import React, {useContext, useState, useEffect} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { getListsByUser } from '../data';
import { Typography } from '@mui/material';

const UserLists = () => {

    const {user} = useContext(AuthContext)

    const [lists, setLists] = useState([])


    useEffect(()=>{        
        let userlists = getListsByUser(user.id);       
        setLists([...userlists])       
    },[user, setLists])   
    
    
    
    return (  
        <>
            {lists.map((l)=>{
                console.log('l',l)
                return(
                <Typography variant='h5' key={l.id}>{l.title}</Typography>
                )
            })}
        
        </>
    );




}
 
export default UserLists
;