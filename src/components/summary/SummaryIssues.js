import React from 'react'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import EmojiFlagsOutlined from '@material-ui/icons/EmojiFlagsOutlined'

import useStyles from './FileSummaryStyles'

const SummaryIssues = () => {
  const classes = useStyles()
  return (
    <div>
      <h1>Red flag alert</h1>
      <Paper className={classes.paper}>
        <section className={classes.section}>
          <Button color="primary" startIcon={<EmojiFlagsOutlined color="error" />}>8 issues detected</Button>
        </section>
      </Paper>
    </div>
  )
}

export default SummaryIssues
