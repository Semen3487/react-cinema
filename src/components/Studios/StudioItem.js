import React from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { initStudio } from '../../constants';


function StudioItem({studios}) {

  const { id } = useParams();
  const company = studios.find((studio) => studio.id === parseInt(id));
  const studio = company ? company : initStudio;
                                           
  return (
    <div className='item-content'>
      <Grid container>
        <Grid item lg={12} md={12} xl={12} sm={12} xs={12}>
          <h1>{studio.title}</h1>
        </Grid>
        <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
          <img src={studio.logo} alt='poster'/>
        </Grid>
        <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
          <Stack>
            <h2>Location</h2>
            {studio.location}
            <h2>Foundationyear</h2>
            {studio.foundationYear} 
          </Stack>
        </Grid>
      </Grid>
    </div>
  )
}

export default StudioItem;

