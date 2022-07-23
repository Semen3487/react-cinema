import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AppHeader from './Header/AppHeader';
import { Link, Outlet } from 'react-router-dom';
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
          <Grid item lg={2} md={2} xl={2} sm={2} xs={2}>
            <div>
              <h3>Menu</h3>
              <ul>
                <li>
                  <Link to={'/movies'}>Movies</Link>
                </li>
                <li>
                  <Link to={'/actors'}>actors</Link>
                </li>
                <li>
                  <Link to={'/directors'}>directors</Link>
                </li>
                <li>
                  <Link to={'/studios'}>studios</Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item lg={5} md={5} xl={5} sm={5} xs={5}>
            <main>
              <Outlet />
            </main>
          </Grid>
          <Grid item lg={5} md={5} xl={5} sm={5} xs={5}>
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