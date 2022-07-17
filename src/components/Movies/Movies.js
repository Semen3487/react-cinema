import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import MovieForm from './MovieForm';
import MovieItem from './MovieItem';
import MoviesList from './MoviesList';

function Movies() {
  return (
    <>
      <div>
        <Link to='new' >New</Link>
      </div>
      <Routes>
        <Route path='new' element={<MovieForm/>} />
        <Route path='new/:id' element={<MovieForm/>} />
        <Route path='/' element={<MoviesList/>} />
        <Route path=':id' element={<MovieItem/>} />
        <Route path='new' element={<Navigate to='new/:id'/>} />
      </Routes>
    </>
  )
};

export default Movies;