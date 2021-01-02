
import React from 'react'

import {
  useHistory,
} from 'react-router-dom'

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

  const handleSignInSubmit = () => {
    history.push('/file-upload')
  }
  return (
    <Grid container item direction="row" justify="center">
      <Paper className={classes.paper}>
        <h1 className={classes.h1}>Login</h1>
        <TextField id="username"
          className={classes.textField}
          required
          label="username"
          fullWidth={true}
          variant="outlined" />
        <TextField id="password"
          className={classes.textField}
          required
          label="password"
          fullWidth={true}
          type="password"
          variant="outlined" />
        <Button color="primary"
          variant="contained"
          disableElevation
          fullWidth={true}
          onClick={handleSignInSubmit}>Enter</Button>
      </Paper>
    </Grid>
  )
}

export default SignInComponent
