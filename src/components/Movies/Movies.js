import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { recieveMoviesAction } from '../../store/actions/moviesActions';
import MovieForm from './MovieForm';
import MovieItem from './MovieItem';
import MoviesList from './MoviesList';

function Movies() {

  const dispatch = useDispatch();

  const {moviesList: {movies}} = useSelector((state) => state)

  useEffect(() => {
    dispatch(recieveMoviesAction())
  }, [dispatch]);

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