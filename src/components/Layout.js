import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, Outlet } from 'react-router-dom';

import AppHeader from './Header/AppHeader';
import CinemaService from '../Service/CinemaService';
import AppFooter from './Footer/AppFooter';


// const stylesFoot = {
//   backgroundColor: 'rgb(25, 118, 210)',
//   border: '1px solid',
// }

function Layout() {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} xl={12} sm={12} xs={12}>
            <AppHeader />
          </Grid>
          <Grid className='container' item lg={3} md={3} xl={3} sm={3} xs={3}>
            <div>
              <h2 className='menu-title'>Menu</h2>
              <ul>
                <li>
                  <Link to={'/movies'}>
                    <div className='menu-item'>Movies</div>
                  </Link>
                </li>
                <li>
                  <Link to={'/actors'}>
                  <div className='menu-item'>Actors</div>
                  </Link>
                </li>
                <li>
                  <Link to={'/directors'}>
                  <div className='menu-item'>Directors</div>
                  </Link>
                </li>
                <li>
                  <Link to={'/studios'}>
                  <div className='menu-item'>Studios</div>
                  </Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item lg={5} md={5} xl={5} sm={5} xs={5}>
            <main>
              <Outlet />
            </main>
          </Grid>
          <Grid item lg={4} md={4} xl={4} sm={4} xs={4}>
           <CinemaService />
          </Grid>
          <Grid item lg={12} md={12} xl={12} sm={12} xs={12}>
            <AppFooter />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Layout;


//* Box, Grid - компоненти material UI
//* Outlet - компонент react-router-dom (6)