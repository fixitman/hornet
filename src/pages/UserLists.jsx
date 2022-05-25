import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { getListsByUser } from '../data';
import { Typography } from '@mui/material';
import ListEntry from '../components/ListEntry';

const UserLists = () => {

    const { user } = useContext(AuthContext)

    const [lists, setLists] = useState([])


    useEffect(() => {
        let userlists = getListsByUser(user.id);
        setLists([...userlists])
    }, [user, setLists])

  



    return (
        <>
            <Typography variant='h5' sx={{ m: 3 }}>
                {` Welcome, ${user.displayName}`}
            </Typography>
            
            {lists.map((l) => {
                return (
                    <ListEntry key={ l.id } title={ l.title } listId={ l.id } />
                )
            })}
        </>
    );




}

export default UserLists
    ;