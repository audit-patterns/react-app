import React from 'react'

import {
  Grid,
} from '@material-ui/core'

import FileSummary from '../components/summary/FileSummary'
import ResultFileDownload from '../components/summary/ResultFileDownload'
import SummaryIssues from '../components/summary/SummaryIssues'

const Summary = () => {
  return (
    <Grid container spacing={2} direction="row">
      <Grid item xs={12} md={7}>
        <FileSummary />
        <SummaryIssues />
      </Grid>
      <Grid item xs={12} md={5}>
        <ResultFileDownload />
      </Grid>
    </Grid>
  )
}

export default Summary
