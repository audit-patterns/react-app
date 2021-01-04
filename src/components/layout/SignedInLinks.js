import React from 'react'

import {
  Link,
} from 'react-router-dom'
import {
  Grid,
} from '@material-ui/core'

const SignedInLinks = () => {
  const test = () => {
    alert()
  }
  return (
    <Grid item container xs={10} spacing={1} direction="row" justify="flex-end" alignItems="center">
      <Grid item>
        <Link to="/file-upload">Start over</Link>
      </Grid>
      <Grid item>
        <Link to="/" onClick={test}>Sign out</Link>
      </Grid>
    </Grid>
  )
}

export default SignedInLinks
