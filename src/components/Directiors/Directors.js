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
      <div>
        <Link to='new' >New</Link>
      </div>
      <Routes>
        {/* <Route path='new' element={<MovieForm/>} />
        <Route path='new/:id' element={<MovieForm/>} /> */}
        <Route path='/' element={<DirectorList/>} />
        <Route path=':id' element={<DirectorItem/>} />
        <Route path='new' element={<Navigate to='/directors/new/:id'/>} />
      </Routes>
    </>
  )
}

export default Directors;