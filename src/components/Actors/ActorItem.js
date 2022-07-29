import React from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { initActor } from '../../constants';


function ActorItem({actors}) {

  const { id } = useParams();
  const person = actors.find((actor) => actor.id === parseInt(id));
  const actor = person ? person : initActor;
                                           
  return (
    <div className='item-content'>
      <Grid container>
        <Grid item lg={12} md={12} xl={12} sm={12} xs={12}>
          <h1>{actor.fullName}</h1>
        </Grid>
        <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
          <img src={actor.image} alt='poster'/>
        </Grid>
        <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
          <Stack>
            <h2>Movies</h2>
            {actor.movies.map((movie, index) => (
              <span key={index}>{movie}</span>
            ))}
            <h2>Birthyear</h2>
            {actor.birthYear}
            <h2>Nationality</h2>
            {actor.nationality}
           
          </Stack>
        </Grid>
      </Grid>
    </div>
  )
}

export default ActorItem;

