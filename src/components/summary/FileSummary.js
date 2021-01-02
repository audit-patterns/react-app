import React from 'react'
import Paper from '@material-ui/core/Paper'

import useStyles from './FileSummaryStyles'

const FileSummary = () => {
  const classes = useStyles()
  return (
    <div>
      <h1>Summary data</h1>
      <Paper className={classes.paper}>
        <section className={classes.section}>
          <strong>Total Employee Compensation</strong>
          <div className="right">
            <strong>$21,151,651</strong>
          </div>
        </section>
        <section className={classes.section}>
          <strong>Total Employee Contributions</strong>
          <div className="right">
            <strong>$1,205,288</strong>
          </div>
          <div className={classes.subSection}>
            <span>401k (Non-Roth)</span>
            <div className="right">
              <span>$602,644</span>
            </div>
          </div>
          <div className={classes.subSection}>
            <span>Roth</span>
            <div className="right">
              <span>$602,644</span>
            </div>
          </div>
        </section>
        <section className={classes.section}>
          <strong>Total Employer Contributions</strong>
          <div className="right">
            <strong>$1,050,848</strong>
          </div>
          <div className={classes.subSection}>
            <span>Employer Match</span>
            <div className="right">
              <span>$525,424</span>
            </div>
          </div>
          <div className={classes.subSection}>
            <span>Employer Non-Elective</span>
            <div className="right">
              <span>$525,424</span>
            </div>
          </div>
        </section>
        <section className={classes.section}>
          <strong>Average Deferral %</strong>
          <div className="right">
            <strong>5.5%</strong>
          </div>
          <div className={classes.subSection}>
            <span>Highly Compensated Employees (HCE) Average Deferral %</span>
            <div className="right">
              <span>5%</span>
            </div>
          </div>
          <div className={classes.subSection}>
            <span>Non-HCE Average Deferral %</span>
            <div className="right">
              <span>6%</span>
            </div>
          </div>
        </section>
      </Paper>
    </div>
  )
}

export default FileSummary
