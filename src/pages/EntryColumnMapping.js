import React from 'react'

import {
  useHistory,
} from 'react-router-dom'

import {
  Button,
} from '@material-ui/core'

const ColumnMapping = () => {
  const history = useHistory()
  const handleClickNext = () => history.push('/summary')
  const handleClickBack = () => history.goBack()
  return (
    <div>
      <p>ColumnMapping page</p>
      <Button color="primary"
        variant="contained"
        onClick={handleClickBack}>Back</Button>&nbsp;
      <Button color="primary"
        variant="contained"
        onClick={handleClickNext}>Next</Button>
    </div>
  )
}

export default ColumnMapping
