import React from 'react'

import { useSelector } from 'react-redux'

import { useHistory } from 'react-router-dom'

import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Paper,
  Radio,
  RadioGroup,
  Select,
} from '@material-ui/core'

import useStyles from './DataEntryStyles'

const MultiEntityComponent = () => {
  const classes = useStyles()
  const history = useHistory()

  const columnNames = [
    'Column1',
    'Column2',
    'Column3',
    'Column4',
    'Column5',
    'Column6',
    'Column7',
  ]

  const [state, setState] = React.useState({
    multiEntity: 'No',
    entitiesColumn: columnNames[0],
  })

  const [session, setSession] = React.useState(useSelector(state => state.session))
  const { id: sessionId, parametersIRS } = session
  if (!parametersIRS || parametersIRS.auditYear) history.push('/fiscal-info')

  const handleChange = e => setState({
    ...state,
    [e.target.name]: e.target.value,
  })

  const handleClickBack = () => history.goBack()
  const handleClickNext = () => history.push('/contribution-mapping')

  const entityDetails = () => (
    <div>
      <p>Which column in the Excel file represents the participating entities?</p>
      <FormControl variant="outlined" size="small">
        <InputLabel htmlFor="entitiesColumnSelect">Column label</InputLabel>
        <Select native
          label="Column label"
          inputProps={{
            name: 'entitiesColumn',
            id: 'entitiesColumnSelect',
          }}
          style={{ width: '16em' }}
          value={state.entitiesColumn}
          onChange={handleChange} >
            {columnNames.map(column => (
              <option value={column}>{column}</option>
            ))}
          </Select>
      </FormControl>
    </div>
  )

  return (
    <Grid container item direction="row" justify="center">
      <Paper className={classes.paper}>
        <Grid container direction="column">
          <h1>Is this a multi-entity plan?</h1>
          <FormControl component="fieldset">
            <RadioGroup row araia-aria-label="multiEntity"
              name="multiEntity"
              value={state.multiEntity}
              onChange={handleChange}>
              <FormControlLabel value='Yes' control={<Radio />} label="Yes" />
              <FormControlLabel value='No' control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          {state.multiEntity === 'No' ? '' : entityDetails()}
          <Grid container direction="row" spacing={2} style={{ marginTop: '2em' }}>
            <Grid item>
              <Button color="primary"
                className={classes.button}
                variant="outlined"
                onClick={handleClickBack}>Back</Button>
            </Grid>
            <Grid item>
              <Button color="primary"
                className={classes.button}
                variant="contained"
                onClick={handleClickNext}>Next</Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default MultiEntityComponent
