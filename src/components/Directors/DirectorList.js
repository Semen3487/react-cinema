import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import  Stack  from '@mui/material/Stack/Stack';
import EditIcon from '@mui/icons-material/Edit';
import  DeleteIcon  from '@mui/icons-material/Delete';

import { deleteDirectorAction } from '../../store/actions/directorActions';

function DirectorList({directors}) {

  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteDirectorAction(id))
  }

  return (
    <>
      <ul>
          {directors.map((director) => (
            <li key={director.id}
                className='main-item'>
              <Stack direction='row' 
                     spacing={3}
                     justifyContent='flex-end'
                     alignItems='center'>
                <Link to={`${director.id}`} >
                  <div className='main-item-title'>{director.fullName}</div>
                </Link>
                <Link to={`new/${director.id}`} >
                  <EditIcon />
                </Link>
                <DeleteIcon onClick={() => onDelete(director.id)} />
              </Stack>
            </li>
          ))}
      </ul>
    </>
  )
}

export default DirectorList;