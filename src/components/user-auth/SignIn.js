
import React, { useState } from 'react'

import {
  useSelector,
  useDispatch,
} from 'react-redux'

import {
  useHistory,
} from 'react-router-dom'

import {
  signIn,
} from '../../store/actions/auth-actions'

import {
  Button,
  Grid,
  Paper,
  TextField,
 } from '@material-ui/core'

import useStyles from './SignInStyles'


const SignInComponent = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const fbState = useSelector(state => state.firebase)
  const authState = useSelector(state => state.auth)
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
  })

  !fbState.auth.isEmpty && history.push('/file-upload')

  const handleChange = (e) => setCredentials({
    ...credentials,
    [e.target.id]: e.target.value,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signIn(credentials))
  }

  return (
    <Grid container item direction="row" justify="center">
      <Paper className={classes.paper}>
        <h1 className={classes.h1}>Login</h1>
        <form onSubmit={handleSubmit}>
          <TextField id="email"
            className={classes.textField}
            size="small"
            required
            label="Email"
            fullWidth={true}
            onChange={handleChange}
            variant="outlined" />
          <TextField id="password"
            className={classes.textField}
            size="small"
            required
            label="Password"
            fullWidth={true}
            type="password"
            onChange={handleChange}
            on
            variant="outlined" />
          <Button color="primary"
            type="submit"
            variant="contained"
            disableElevation
            fullWidth={true}>Login</Button>
        </form>
        <div style={{ marginTop: '0.5em', color: 'red' }}>{authState.authError
          ? <span>invalid email or password</span>
          : <span>&nbsp;</span>}
        </div>
      </Paper>
    </Grid>
  )
}

export default SignInComponent
