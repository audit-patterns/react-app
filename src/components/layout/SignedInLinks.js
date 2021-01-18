import React from 'react'

import { useDispatch } from 'react-redux'

import { useHistory } from 'react-router-dom'

import { signOut } from '../../store/actions/auth-actions'
import { resetSession } from '../../store/actions/session-actions'

import {
  Link,
} from 'react-router-dom'

import {
  Grid,
} from '@material-ui/core'

const SignedInLinks = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleReset = () => {
    dispatch(resetSession())
    history.push('/file-upload')
  }

  return (
    <Grid item container xs={10} spacing={1} direction="row" justify="flex-end" alignItems="center">
      <Grid item>
        <Link onClick={handleReset}>Start over</Link>
      </Grid>
      <Grid item>
        <Link to="#" onClick={() => dispatch(signOut())}>Sign out</Link>
      </Grid>
    </Grid>
  )
}

export default SignedInLinks
