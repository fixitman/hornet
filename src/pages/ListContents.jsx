import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom'
import { getListById } from '../data';

const ListContents = () => {

    const { id } = useParams();
    const list = getListById(Number(id));
    
    return (
        <>
            <Typography variant='h4'>
                {`${list.id} -- ${list.title}`}
            </Typography>

            {list.items.map((i) => {
                return (
                    <Typography variant='body1' key={i.id}>
                        {i.itemText}
                    </Typography>
                )
            })}
        </>
    );
}

export default ListContents;