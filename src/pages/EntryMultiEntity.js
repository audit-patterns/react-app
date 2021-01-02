import React from 'react'

import {
  useHistory,
} from 'react-router-dom'

import {
  Button,
} from '@material-ui/core'

const MultiEntity = () => {
  const history = useHistory()
  const handleClickNext = () => history.push('/contribution-mapping')
  const handleClickBack = () => history.goBack()
  return (
    <div>
      <p>MultiEntity page</p>
      <Button color="primary"
        variant="contained"
        onClick={handleClickBack}>Back</Button>&nbsp;
      <Button color="primary"
        variant="contained"
        onClick={handleClickNext}>Next</Button>
    </div>
  )
}

export default MultiEntity
