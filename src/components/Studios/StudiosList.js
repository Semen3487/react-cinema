import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import  Stack  from '@mui/material/Stack/Stack';
import EditIcon from '@mui/icons-material/Edit';
import  DeleteIcon  from '@mui/icons-material/Delete';

import { deleteStudioAction } from '../../store/actions/studioActions';


function StudiosList({studios}) {

  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteStudioAction(id))
  };

  return (
    <>
      <ul>
          {studios.map((studio) => (
            <li key={studio.id}
                className='main-item'>
              <Stack direction='row' 
                     spacing={3}
                     justifyContent='flex-end'
                     alignItems='center'>
                <Link to={`${studio.id}`} >
                  <div className='main-item-title'>{studio.title}</div>
                </Link>
                <Link to={`new/${studio.id}`} >
                  <EditIcon />
                </Link>
                <DeleteIcon onClick={() => onDelete(studio.id)} />
              </Stack>
            </li>
          ))}
      </ul>
    </>
  )
}

export default StudiosList;