import React from 'react'

import {
  Grid,
  Link,
} from '@material-ui/core'

const SignedInLinks = () => {
  const test = () => {
    alert()
  }
  return (
    <Grid item container xs={10} spacing={1} direction="row" justify="flex-end" alignItems="center">
      <Grid item>
        <Link to="/welcome">Start over</Link>
      </Grid>
      <Grid item>
        <Link to="/" onClick={test}>Sign out</Link>
      </Grid>
    </Grid>
  )
}

export default SignedInLinks
