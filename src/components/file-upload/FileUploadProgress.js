
import React from 'react'

import {
  Grid,
  LinearProgress,
  Paper,
 } from '@material-ui/core'

import useStyles from './FileUploadStyles'

const FileUploadProgress = (props) => {
  const classes = useStyles()

  return (
    <Grid container direction="row" justify="center">
      <Paper className={classes.paper}>
        <h1 className={classes.h1}>Uploading</h1>
        <div style={{ marginTop: '2rem', marginBottom: '1rem' }}>
          <LinearProgress variant="determinate" value={76} />
        </div>
      </Paper>
    </Grid>
  )
}

export default FileUploadProgress
