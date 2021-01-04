import React from 'react'

import {
  useHistory,
} from 'react-router-dom'

import {
  Button,
  Grid,
} from '@material-ui/core'

const ResultFileDownload = () => {
  const history = useHistory()
  const handleClickBack = () => history.goBack()

  return (
    <div>
      <h1>Summary file</h1>
      <Grid container direction="row" spacing={2} style={{ marginTop: '2em' }}>
        <Grid item>
          <Button color="primary"
            variant="outlined"
            onClick={handleClickBack}>Back</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" disableElevation>
            Download File
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default ResultFileDownload
