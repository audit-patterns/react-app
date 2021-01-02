import React from 'react'

import {
  useHistory,
} from 'react-router-dom'

import {
  Button,
} from '@material-ui/core'

const ContributionEligibility = () => {
  const history = useHistory()
  const handleClickNext = () => history.push('/column-mapping')
  const handleClickBack = () => history.goBack()
  return (
    <div>
      <p>ContributionEligibility page</p>
      <Button color="primary"
        variant="contained"
        onClick={handleClickBack}>Back</Button>&nbsp;
      <Button color="primary"
        variant="contained"
        onClick={handleClickNext}>Next</Button>
    </div>
  )
}

export default ContributionEligibility
