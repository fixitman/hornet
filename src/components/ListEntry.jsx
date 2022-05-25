import React from 'react';
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

const ListEntry = ({ title, listId }) => {

    const handleClick = (list) => {
        alert(JSON.stringify(list))
    }
    return (
        <>
            <Paper elevation={3} onClick={() => handleClick(listId)} sx={{ m: 2, p: 2, backgroundColor: '#eee' }}>
                <Typography variant='h5'>{title}</Typography>
            </Paper>
        </>
    );
}

export default ListEntry;