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
      <Grid container direction="row" spacing={0} alignItems="center"
        style={{ backgroundColor: 'white', padding: '0.2em 1.0em' }}>
        <Grid item container xs={2}>
          <img src={Logo} className="" alt="logo" />
          {/* <Link to="/" style={{ paddingTop: 10 }} position="static">
            <img src={Logo} className="" alt="logo" />
          </Link> */}
        </Grid>
        <SignedInLinks />
      </Grid>
    </AppBar>
  )
}

export default Navbar
