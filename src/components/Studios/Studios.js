import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import { getAllStudiosAction } from '../../store/actions/studioActions';
import StudioItem from './StudioItem';
import StudiosList from './StudiosList';

function Studios() {

  const dispatch = useDispatch();

  const {studiosList: {studios}} = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllStudiosAction())
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
        <Route path='/' element={<StudiosList studios={studios} />} />
        <Route path=':id' element={<StudioItem studios={studios}/>} />
        <Route path='new' element={<Navigate to='/studios/new/:id'/>} />
      </Routes>
    </>
  )
};

export default Studios;
