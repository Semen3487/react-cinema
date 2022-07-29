import React from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { initDirector } from '../../constants';


function DirectorItem({directors}) {

  const { id } = useParams();
  const producer = directors.find((director) => director.id === parseInt(id));
  const director = producer ? producer : initDirector;
                                           
  return (
    <div className='item-content'>
      <Grid container>
        <Grid item lg={12} md={12} xl={12} sm={12} xs={12}>
          <h1>{director.fullName}</h1>
        </Grid>
        <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
          <img src={director.image} alt='poster'/>
        </Grid>
        <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
          <Stack>
            <h2>Movies</h2>
            {director.movies.map((movie, index) => (
              <span key={index}>{movie}</span>
            ))}
            <h2>Birthyear</h2>
            {director.birthYear}
            <h2>Nationality</h2>
            {director.nationality}
           
          </Stack>
        </Grid>
      </Grid>
    </div>
  )
}

export default DirectorItem;

