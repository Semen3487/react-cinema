import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import  Stack  from '@mui/material/Stack/Stack';
import EditIcon from '@mui/icons-material/Edit';
import  DeleteIcon  from '@mui/icons-material/Delete';

import { deleteActorAction } from '../../store/actions/actorActions';


function ActorsList({actors}) {

  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteActorAction(id))
  };

  return (
    <>
      <ul>
          {actors.map((actor) => (
            <li key={actor.id}
                className='main-item'>
              <Stack direction='row' 
                     spacing={3}
                     justifyContent='flex-end'
                     alignItems='center'>
                <Link to={`${actor.id}`} >
                  <div className='main-item-title'>{actor.fullName}</div>
                </Link>
                <Link to={`new/${actor.id}`} >
                  <EditIcon />
                </Link>
                <DeleteIcon onClick={() => onDelete(actor.id)} />
              </Stack>
            </li>
          ))}
      </ul>
    </>
  )
}

export default ActorsList;