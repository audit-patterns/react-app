import React from 'react'

import {
  useSelector
} from 'react-redux'

import {
  Grid,
  LinearProgress,
  Paper,
 } from '@material-ui/core'

import useStyles from './FileUploadStyles'

const FileUploadProgress = (props) => {
  const classes = useStyles()
  const session = useSelector(state => state.session)
  const { uploadProgress } = session

  return (
    <Grid container direction="row" justify="center">
      <Paper className={classes.paper}>
        <h1 className={classes.h1}>Uploading</h1>
        <div style={{ marginTop: '2rem', marginBottom: '1rem' }}>
          <LinearProgress variant="determinate" value={uploadProgress} />
        </div>
      </Paper>
    </Grid>
  )
}

export default FileUploadProgress
