import React from 'react';
import { Grid } from '@mui/material';
import Stack from '@mui/material';
import { useParams } from 'react-router-dom';

// import {emptyDirector} from constants


function DirectorItem({directors}) {

  const {id} = useParams();
  const producer = directors.find((item) => item.id === parseInt(id));
  const director = producer ? producer : {}; // emptyDirector;
                                           
  return (
    <Grid container>
      <Grid item lg={12} md={12} xl={12} sm={12} xs={12}
            className='movie-header'
            >
             <h1>{director.fullName}</h1> 
      </Grid>
      <Grid item lg={6} md={6} xl={6} sm={6} xs={6} >
        <img src={director.image} alt='photto'></img>
      </Grid>
      <Grid item lg={6} md={6} xl={6} sm={6} xs={6} >
        <Stack>
          <h2>About director</h2>
          <h3>{director.fullName}</h3>
          <h3>{director.bithYear}</h3>
          <h3>{director.nationality}</h3>
          <h3>Movies</h3>
          <ul>
            {director.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
            ))}
          </ul>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default DirectorItem;