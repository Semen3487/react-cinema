import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import { getAllDirectorsAction } from '../../store/actions/directorActions';
import DirectorItem from './DirectorItem';
import DirectorList from './DirectorList';


function Directors() {

  const dispatch = useDispatch();

  const {directorsList: {directors}} = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllDirectorsAction())
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
        <Route path='/' element={<DirectorList directors={directors}/>} />
        <Route path=':id' element={<DirectorItem directors={directors}/>} />
        <Route path='new' element={<Navigate to='/directors/new/:id'/>} />
      </Routes>
    </>
  )
}

export default Directors;