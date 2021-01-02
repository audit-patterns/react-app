import React from 'react'

import {
  AppBar,
  Grid,
} from '@material-ui/core'

import {
  Link,
} from 'react-router-dom'

import SignedInLinks from './SignedInLinks'
import Logo from '../../static/logo.png'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Grid container direction="row" spacing={1} style={{ backgroundColor: 'white' }}>
        <Grid item container xs={2} justify="center" alignItems="center">
          <Link to="/" style={{ paddingTop: 10 }} position="static">
            <img src={Logo} className="" alt="logo" />
          </Link>
        </Grid>
        <SignedInLinks />
      </Grid>
    </AppBar>
  )
}

export default Navbar
