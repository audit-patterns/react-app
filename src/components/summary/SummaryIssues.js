import React from 'react'

import {
  Backdrop,
  Button,
  Grid,
  Paper,
} from '@material-ui/core'

import {
  EmojiFlagsOutlined,
  Close,
} from '@material-ui/icons'

import useStyles from './FileSummaryStyles'

const SummaryIssues = ({ backdropState = false }) => {
  const classes = useStyles()

  const [state, setState] = React.useState({
    backdropOpen: backdropState,
  })

  const handleToggle = (state) => setState({
    ...state,
    backdropOpen: true,
  })
  const handleClose = (state) => setState({
    ...state,
    backdropOpen: false,
  })
  return (
    <div>
      <h1>Red flag alert</h1>
      <Paper className={classes.paper}>
        <section className={classes.section}>
          <Button startIcon={<EmojiFlagsOutlined color="error" />}
            onClick={handleToggle}>8 issues detected</Button>
        </section>
      </Paper>
      <Backdrop style={{zIndex: 999}} open={state.backdropOpen}>
        <Paper className={classes.backdropPaper}>
          <Grid container direction="vertical" spacing={2}>
            <Grid container item direction="row" alignItems="center">
              <Grid container item xs={11} alignItems="center">
                <EmojiFlagsOutlined color="error" />&nbsp;
                <strong color="primary">8 Issues Detected</strong>
              </Grid>
              <Grid container item xs={1} justify="flex-end">
                <Close onClick={handleClose} style={{cursor: 'pointer'}} />
              </Grid>
            </Grid>
            <Grid container item direction="column">
              <span className={classes.issueSubtitle}>Unable to determine eligibility status</span>
              <ul>
                <li>R17 John Smith</li>
                <li>R25 Jane Johnson</li>
              </ul>
            </Grid>
            <Grid container item direction="column">
              <span className={classes.issueSubtitle}>Participating but not eligible</span>
              <ul>
                <li>R3 Danny Green</li>
                <li>R89 Eric Sandoval</li>
                <li>R90 Tracie Stevens</li>
              </ul>
            </Grid>
            <Grid container item direction="column">
              <span className={classes.issueSubtitle}>Over IRS contribution limit</span>
              <ul>
                <li>R23 Shannon Georgia</li>
                <li>R45 Jorge Hernandez</li>
                <li>R98 Jennifer Reese</li>
              </ul>
            </Grid>
            <Grid container item direction="row" justify="flex-end">
              <Button color="primary" onClick={handleClose}>Close</Button>
            </Grid>
          </Grid>
        </Paper>
      </Backdrop>
    </div>
  )
}

export default SummaryIssues
