import React from 'react'
import Button from '@material-ui/core/Button'

const ResultFileDownload = () => {
  return (
    <div>
      <h1>Summary file</h1>
      <Button variant="outlined" color="primary" style={{ marginRight: '1rem' }}>
        Back
      </Button>
      <Button variant="contained" color="primary" disableElevation>
        Download File
      </Button>
    </div>
  )
}

export default ResultFileDownload
