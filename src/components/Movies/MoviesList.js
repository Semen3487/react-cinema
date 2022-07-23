import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { recieveMoviesAction } from '../../store/actions/moviesActions';

function MoviesList({movies}) {

  const dispatch = useDispatch()

  // const {moviesList: {movies}} = useSelector(state => state)

  useEffect(() => {
    dispatch(recieveMoviesAction())
  }, [dispatch])

  return (
    <>
      <ul>
        
          {movies.map ((movie) => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} >
                <span>{movie.title}</span>
              </Link>
              <Link to={`new/${movie.id}`} >
                <span>Edit</span>
              </Link>
            </li>
          ))}
      
        
      </ul>
    </>
  )
}

export default MoviesList;