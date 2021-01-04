import React from 'react'

import {
  Grid,
  Paper,
} from '@material-ui/core'

import useStyles from './FileSummaryStyles'

const FileSummary = () => {
  const classes = useStyles()
  return (
    <div>
      <h1>Summary data</h1>
      <Paper className={classes.paper}>
        <Grid container direction="row" className={classes.section}>
          <Grid item xs={9}>
            <strong>Total Employee Compensation</strong>
          </Grid>
          <Grid container item xs={3} justify="flex-end">
            <strong>$21,151,651</strong>
          </Grid>
        </Grid>
        <Grid container direction="column" className={classes.section}>
          <Grid container direction="row">
            <Grid item xs={9}>
              <strong>Total Employee Contributions</strong>
            </Grid>
            <Grid container item xs={3} justify="flex-end">
              <strong>$1,205,288</strong>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={9} style={{paddingLeft: '1em'}}>
              <span>401k (Non-Roth)</span>
            </Grid>
            <Grid container item xs={3} justify="flex-end">
              <span>$602,644</span>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={9} style={{paddingLeft: '1em'}}>
              <span>Roth</span>
            </Grid>
            <Grid container item xs={3} justify="flex-end">
              <span>$602,644</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="column" className={classes.section}>
          <Grid container direction="row">
            <Grid item xs={9}>
              <strong>Total Employer Contributions</strong>
            </Grid>
            <Grid container item xs={3} justify="flex-end">
              <strong>$1,050,848</strong>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={9} style={{paddingLeft: '1em'}}>
              <span>Employer Match</span>
            </Grid>
            <Grid container item xs={3} justify="flex-end">
              <span>$525,424</span>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={9} style={{paddingLeft: '1em'}}>
              <span>Employer Non-Elective</span>
            </Grid>
            <Grid container item xs={3} justify="flex-end">
              <span>$525,424</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="column" className={classes.section}>
          <Grid container direction="row">
            <Grid item xs={9}>
              <strong>Average Deferral %</strong>
            </Grid>
            <Grid container item xs={3} justify="flex-end">
              <strong>5.5%</strong>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={9} style={{paddingLeft: '1em'}}>
              <span>Highly Compensated Employees (HCE) Average Deferral %</span>
            </Grid>
            <Grid container item xs={3} justify="flex-end">
              <span>5.0%</span>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={9} style={{paddingLeft: '1em'}}>
              <span>Non-HCE Average Deferral %</span>
            </Grid>
            <Grid container item xs={3} justify="flex-end">
              <span>6.0%</span>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default FileSummary
