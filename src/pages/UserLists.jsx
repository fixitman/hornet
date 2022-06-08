import React, { useState, useEffect } from 'react';
import { useStoreState } from 'easy-peasy';
import { getListsByUser } from '../data';
import { Typography } from '@mui/material';
import ListEntry from '../components/ListEntry';

const UserLists = () => {

    const user = useStoreState(state => state.auth.user)
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
                    <ListEntry key={l.id} title={l.title} listId={l.id} />
                )
            })}
        </>
    );




}

export default UserLists;
