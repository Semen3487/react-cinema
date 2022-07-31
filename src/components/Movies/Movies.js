import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import { getAllMoviesAction } from '../../store/actions/moviesActions';
import MovieItem from './MovieItem';
import MoviesList from './MoviesList';

function Movies() {

  const dispatch = useDispatch();

  const {moviesList: {movies}} = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllMoviesAction())
  }, [dispatch]);

  console.log(movies)

  return (
    <>
      <div className='main-button'>
        <Link to='new'>
          <Button type='button' variant='contained' size='small'>
              New
          </Button>
        </Link>
      </div>
      <Routes>
        <Route path='/' element={<MoviesList movies={movies} />} />
        <Route path=':id' element={<MovieItem movies={movies}/>} />
        <Route path='new' element={<Navigate to='/movies/new/:id'/>} />
      </Routes>
    </>
  )
};

export default Movies;

//* :id - параметр id