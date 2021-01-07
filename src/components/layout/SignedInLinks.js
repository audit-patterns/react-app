import React from 'react'

import {
  Link,
} from 'react-router-dom'

import {
  useDispatch,
} from 'react-redux'

import {
  signOut,
} from '../../store/actions/auth-actions'

import {
  Grid,
} from '@material-ui/core'

const SignedInLinks = () => {
  const dispatch = useDispatch()
  return (
    <Grid item container xs={10} spacing={1} direction="row" justify="flex-end" alignItems="center">
      <Grid item>
        <Link to="/file-upload">Start over</Link>
      </Grid>
      <Grid item>
        <Link to="#" onClick={() => dispatch(signOut())}>Sign out</Link>
      </Grid>
    </Grid>
  )
}

export default SignedInLinks
