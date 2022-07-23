import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteDirectorAction } from '../../store/actions/directorActions';

function DirectorList({directors}) {

  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteDirectorAction(id))
  }

  return (
    <>
      <ul>
        
          {directors.map ((director) => (
            <li key={director.id}>
              <Link to={`${director.id}`} >
                <span>{director.fullName}</span>
              </Link>
              <Link to={`new/${director.id}`} >
                <span>Edit</span>
              </Link>
            </li>
          ))}
      
        
      </ul>
    </>
  )
}

export default DirectorList;