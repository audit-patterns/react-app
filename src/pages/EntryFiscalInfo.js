import React from 'react'

import {
  useHistory,
} from 'react-router-dom'

import {
  Button,
} from '@material-ui/core'

const FiscalInfo = () => {
  const history = useHistory()
  const handleClickNext = () => history.push('/multi-entity')
  const handleClickBack = () => history.goBack()
  return (
    <div>
      <p>FiscalInfo page</p>
      <Button color="primary"
        variant="contained"
        onClick={handleClickBack}>Back</Button>&nbsp;
      <Button color="primary"
        variant="contained"
        onClick={handleClickNext}>Next</Button>
    </div>
  )
}

export default FiscalInfo
