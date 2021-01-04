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

import useStyles from './DataEntryStyles'

const FiscalInfoComponent = () => {
  const classes = useStyles()
  const history = useHistory()
  const handleClickNext = () => history.push('/multi-entity')

  return (
    <Grid container item direction="row" justify="center">
      <Paper className={classes.paper}>
        <Grid container direction="column">
          <h1>What fiscal year is the audit for?</h1>
          <TextField id="auditYear"
            className={classes.textField}
            size="small"
            required
            label="Audit Year"
            helperText="Format: YYYY, Example: 2018"
            type="number"
            defaultValue={(new Date()).getFullYear() - 1}
            variant="outlined" />
          <h1>Employee contribution limits</h1>
          <span>What are the IRS contribution limits for the audit year?</span>
          <TextField id="contributionLimitsElective"
            className={classes.textField}
            size="small"
            margin="normal"
            required
            label="Elective contributions"
            helperText="Dollar amount"
            type="number"
            variant="outlined" />
          <TextField id="contributionLimitsCatchup"
            className={classes.textField}
            size="small"
            margin="normal"
            required
            label="Catch-up contributions"
            helperText="Dollar amount"
            type="number"
            variant="outlined" />
          <span>Highly compensated employee income threshold</span>
          <TextField id="incomeLimitHighCompensation"
            className={classes.textField}
            size="small"
            margin="normal"
            required
            label="Income threshold"
            helperText="Dollar amount"
            type="number"
            variant="outlined" />
          <Grid container direction="row" spacing={2} style={{ marginTop: '1em' }}>
            <Grid item>
              <Button color="primary"
                className={classes.button}
                variant="contained"
                onClick={handleClickNext}>Next</Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default FiscalInfoComponent
