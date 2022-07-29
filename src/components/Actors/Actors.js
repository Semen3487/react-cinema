import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import { getAllActorsAction } from '../../store/actions/actorActions';
import ActorItem from './ActorItem';
import ActorsList from './ActorsList';

function Actors() {

  const dispatch = useDispatch();

  const {actorsList: {actors}} = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllActorsAction())
  }, [dispatch]);


  return (
    <>
      <div className='main-button'>
        <Link to='new'>
          <Button type='button' variant='contained'size='small'>
              New
          </Button>
        </Link>
      </div>
      <Routes>
        <Route path='/' element={<ActorsList actors={actors} />} />
        <Route path=':id' element={<ActorItem actors={actors}/>} />
        <Route path='new' element={<Navigate to='/actors/new/:id'/>} />
      </Routes>
    </>
  )
};

export default Actors;

