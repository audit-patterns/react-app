
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
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
  })

  !fbState.auth.isEmpty && history.push('/file-upload')

  const handleChange = (e) => setCredentials({
    ...credentials,
    [e.target.id]: e.target.value,
  })

  return (
    <Grid container item direction="row" justify="center">
      <Paper className={classes.paper}>
        <h1 className={classes.h1}>Login</h1>
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
          variant="outlined" />
        <Button color="primary"
          variant="contained"
          disableElevation
          fullWidth={true}
          onClick={() => dispatch(signIn(credentials))}>Login</Button>
      </Paper>
    </Grid>
  )
}

export default SignInComponent
