import React from 'react';

function MovieItem({movie}) {
  return (
    <>
      <img src={movie.poster} alt={'Poster'} ></img>
    </>
  )
}

export default MovieItem;