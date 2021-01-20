import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

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

import isEmpty from 'lodash/isEmpty'

import useStyles from './DataEntryStyles'

import actions from '../../store/actions'

const MultiEntityComponent = () => {
  const session = useSelector(state => state.session)
  const {
    id: sessionId,
    multiEntityFile = false,
    originalCols: columnNames = [],
    mappedCols,
  } = session
  const [invalidForm, setInvalidForm] = React.useState(false)
  const [state, setState] = React.useState({
    multiEntityFile,
    mappedCols,
  })
  const pageMappings = ['entities']

  const dispatch = useDispatch()
  if (!columnNames.length) dispatch(actions['SESSION/FETCH'](sessionId))

  const handleRadioBoolChange = e => setState({
    ...state,
    [e.target.name]: e.target.value === 'true',
    mappedCols: {
      ...state.mappedCols,
      entities: null,
    }
  })
  const handleColMappingChange = e => setState({
    ...state,
    mappedCols: {
      ...state.mappedCols,
      [e.target.name]: e.target.value,
    }
  })

  const history = useHistory()
  // if (!Object.values(parametersIRS).length) history.push('/fiscal-info')
  const handleClickBack = () => history.goBack()

  const handleClickNext = async e => {
    e.preventDefault()
    const evalInvalidForm = pageMappings
      .map(item => !state.multiEntityFile ? false : isEmpty(state.mappedCols[item]))
      .includes(true)
    setInvalidForm(evalInvalidForm)
    if (evalInvalidForm) return
    dispatch(actions['SESSION/UPDATE'](sessionId, state))
    history.push('/contribution-mapping')
  }

  const classes = useStyles()

  const invalidFormAlert = () => (
    <div style={{ color: 'red' }}>Please complete all required fields</div>
  )

  const entityDetails = () => (
    <div>
      <p>Which column in the Excel file represents the participating entities?</p>
      <FormControl variant="outlined" size="small">
        <InputLabel htmlFor="entitiesColumnSelect" required>Column label</InputLabel>
        <Select native
          label="Column label"
          inputProps={{
            name: 'entities',
            id: 'entitiesColumnSelect',
          }}
          style={{ width: '16em' }}
          value={state.mappedCols.entities}
          required
          onChange={handleColMappingChange} >
            {['', ...columnNames].map((column, idx) => (
              <option key={idx} value={column}>{column}</option>
            ))}
          </Select>
      </FormControl>
    </div>
  )

  return (
    <Grid container item direction="row" justify="center">
      <Paper className={classes.paper}>
        <form onSubmit={handleClickNext}>
        <Grid container direction="column">
          <h1>Is this a multi-entity plan?</h1>
          {(!invalidForm) ? '' : invalidFormAlert()}
          <FormControl component="fieldset">
            <RadioGroup row araia-aria-label="multiEntity"
              name="multiEntityFile"
              value={state.multiEntityFile.toString()}// ? 'true' : 'false'}
              onChange={handleRadioBoolChange}>
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          {(!state.multiEntityFile) ? '' : entityDetails()}
          <Grid container direction="row" spacing={2} style={{ marginTop: '2em' }}>
            <Grid item>
              <Button color="primary"
                className={classes.button}
                variant="outlined"
                onClick={handleClickBack}>Back</Button>
            </Grid>
            <Grid item>
              <Button color="primary"
                type="submit"
                className={classes.button}
                variant="contained"
                onClick={handleClickNext}>Next</Button>
            </Grid>
          </Grid>
        </Grid>
        </form>
      </Paper>
    </Grid>
  )
}

export default MultiEntityComponent
