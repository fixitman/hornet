import React from 'react';
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { useNavigate } from 'react-router-dom';

const ListEntry = ({ title, listId }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/List/${listId}`)
    }
    return (
        <>
            <Paper elevation={3} onClick={handleClick} sx={{ m: 2, p: 2, backgroundColor: '#eee' }}>
                <Typography variant='h5'>{title}</Typography>
            </Paper>
        </>
    );
}

export default ListEntry;