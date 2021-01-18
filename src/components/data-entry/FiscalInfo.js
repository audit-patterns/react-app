import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { useHistory } from 'react-router-dom'

import {
  Button,
  Grid,
  Paper,
  TextField,
} from '@material-ui/core'

import useStyles from './DataEntryStyles'

import { updateSession } from '../../store/actions/session-actions'

const FiscalInfoComponent = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const [session, setSession] = useState(useSelector(state => state.session))
  const {
    id: sessionId,
    parametersIRS: {
      auditYear = (new Date()).getFullYear() - 1,
      contributionLimitsElective = '',
      contributionLimitsCatchup = '',
      highlyCompensatedLimit = '',
    },
  } = session
  if (!sessionId) history.push('/file-upload')

  const handleChange = (e) => setSession({
    ...session,
    parametersIRS: {
      ...session.parametersIRS,
      [e.target.id]: e.target.type === 'number'
        ? Number(e.target.value)
        : e.target.value,
    }
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(await updateSession(session))
    history.push('/multi-entity')
  }

  return (
    <Grid container item direction="row" justify="center">
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit}>
        <Grid container direction="column">
          <h1>What fiscal year is the audit for?</h1>
          <TextField id="auditYear"
            className={classes.textField}
            size="small"
            required
            label="Audit Year"
            helperText="Format: YYYY, Example: 2018"
            type="number"
            defaultValue={auditYear}
            onChange={handleChange}
            variant="outlined" />
          <h1>Employee contribution limits</h1>
          <span>What are the IRS contribution limits for the audit year?</span>
          <TextField id="contributionLimitsElective"
            defaultValue={contributionLimitsElective}
            onChange={handleChange}
            className={classes.textField}
            size="small"
            margin="normal"
            required
            label="Elective contributions"
            helperText="Dollar amount"
            type="number"
            variant="outlined" />
          <TextField id="contributionLimitsCatchup"
            defaultValue={contributionLimitsCatchup}
            onChange={handleChange}
            className={classes.textField}
            size="small"
            margin="normal"
            required
            label="Catch-up contributions"
            helperText="Dollar amount"
            type="number"
            variant="outlined" />
          <span>Highly compensated employee income threshold</span>
          <TextField id="highlyCompensatedLimit"
            defaultValue={highlyCompensatedLimit}
            onChange={handleChange}
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
                type="submit"
                className={classes.button}
                variant="contained">Next</Button>
            </Grid>
          </Grid>
        </Grid>
        </form>
      </Paper>
    </Grid>
  )
}

export default FiscalInfoComponent
