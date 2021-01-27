import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { useHistory } from 'react-router-dom'

import {
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  Paper,
  Select,
} from '@material-ui/core'

import {
  Add,
  Delete,
} from '@material-ui/icons'

import isArray from 'lodash/isArray'
import isEmpty from 'lodash/isEmpty'

import useStyles from './DataEntryStyles'

import actions from '../../store/actions'

const ContributionMappingComponent = () => {
  const session = useSelector(state => state.session)
  const {
    id: sessionId,
    originalCols: columnNames = [],
    mappedCols,
  } = session

  const [state, setState] = React.useState({
    mappedCols: {
      ...mappedCols,
      contributions401k: mappedCols.contributions401k || [''],
      contributionsRoth: mappedCols.contributionsRoth || [''],
      employerMatch: mappedCols.employerMatch || '',
      employerNonElective: mappedCols.employerNonElective || '',
    }
  })
  const [invalidForm, setInvalidForm] = React.useState(false)

  const dispatch = useDispatch()
  if (!columnNames.length) dispatch(actions['SESSION/FETCH'](sessionId))

  const handleChange = e => setState({
    mappedCols: {
      ...state.mappedCols,
      [e.target.name]: e.target.value,
    },
  })
  const handleComplexChange = e => {
    const [target, idx] = e.target.name.split('-')
    const arr = [...state.mappedCols[target]]
    arr[idx] = e.target.value
    setState({
      mappedCols: {
        ...state.mappedCols,
        [target]: arr,
      },
    })
  }
  const handleAddColumn = id => setState({
    mappedCols: {
      ...state.mappedCols,
      [id]: [...state.mappedCols[id], ''],
    },
  })
  const handleRemoveColumn = (id, idx) => {
    const arr = [...state.mappedCols[id]]
    arr.splice(idx, 1)
    setState({
      mappedCols: {
        ...state.mappedCols,
        [id]: arr,
      },
    })
  }

  const history = useHistory()

  const handleClickBack = () => history.goBack()

  const pageMappings = ['contributions401k', 'contributionsRoth', 'employerMatch', 'employerNonElective']
  const handleClickNext = e => {
    e.preventDefault()
    const persistState = pageMappings
      .reduce((acc, cur) => {
        let value = state.mappedCols[cur]
        if (isArray(value)) {
          value = value.filter(subItem => !isEmpty(subItem))
          value = value.length ? value : null
        } else {
          value = isEmpty(value) ? null : value
        }
        console.info(value)
        return {
          mappedCols: {
            ...acc.mappedCols,
            [cur]: value,
          }
        }
      }, state)
    console.info(persistState)
    const arraysTotalLength = Object.values(persistState.mappedCols)
      .reduce((acc, cur) => isArray(cur) ? acc + cur.length : acc, 0)
    const evalInvalidForm = arraysTotalLength === 0
    setInvalidForm(evalInvalidForm)
    if (evalInvalidForm) return
    dispatch(actions['SESSION/UPDATE'](sessionId, persistState))
    history.push('/contribution-eligibility')
  }

  const classes = useStyles()

  const invalidFormAlert = () => (
    <div style={{ color: 'red', marginTop: '2em' }}>At least one column for Employees 401k or Roth Contributions is required</div>
  )

  return (
    <Grid container item direction="row" justify="center">
      <Paper className={classes.paper}>
        <form onSubmit={handleClickNext}>
        <Grid container direction="column">
          {(!invalidForm) ? '' : invalidFormAlert()}
          <h1>Map columns for each contribution type in this plan</h1>
          <h1 style={{fontSize: '100%'}}>Employee 401k (non-Roth)</h1>
          <span>Which columns have 401k employee contribution data?</span>
          {state.mappedCols.contributions401k.map((colName, idx) => (
            <Grid container direction="row" spacing={2} alignItems="center" style={{marginTop: '0.5em'}}>
              <Grid item>
                <FormControl variant="outlined" size="small">
                  <InputLabel htmlFor={`contributions401k'-${idx}`}>Select a column</InputLabel>
                  <Select native
                    label="Select a column"
                    inputProps={{ name: `contributions401k-${idx}`, id: `contributions401k-${idx}` }}
                    style={{ width: '16em' }}
                    value={colName}
                    onChange={handleComplexChange} >
                      {/* Select > Options */}
                      {columnNames.map(column => (
                        <option value={column}>{column}</option>
                      ))}
                    </Select>
                </FormControl>
              </Grid>
              <Grid item>
                {idx === 0
                  ? <span>&nbsp;</span>
                  : <Delete style={{cursor: 'pointer'}} onClick={() => handleRemoveColumn('contributions401k', idx)} />
                }
              </Grid>
            </Grid>
          ))}
          <Button startIcon={<Add />}
            color="primary"
            style={{ maxWidth: '16em', marginTop: '0.5em' }}
            onClick={() => handleAddColumn('contributions401k')}>Map Another Column</Button>

          <h1 style={{fontSize: '100%'}}>Employee Roth contributions</h1>
          <span>Which columns have Roth employee contribution data?</span>
          {state.mappedCols.contributionsRoth.map((colName, idx) => (
            <Grid container direction="row" spacing={2} alignItems="center" style={{marginTop: '0.5em'}}>
              <Grid item>
                <FormControl variant="outlined" size="small">
                  <InputLabel htmlFor={`contributionsRoth-${idx}`}>Select a column</InputLabel>
                  <Select native
                    label="Select a column"
                    inputProps={{
                      name: `contributionsRoth-${idx}`,
                      id: `contributionsRoth-${idx}`,
                    }}
                    style={{ width: '16em' }}
                    value={colName}
                    onChange={handleComplexChange} >
                      {/* Select > Options */}
                      {columnNames.map(column => (
                        <option value={column}>{column}</option>
                      ))}
                    </Select>
                </FormControl>
              </Grid>
              <Grid item>
                {idx === 0
                  ? <span>&nbsp;</span>
                  : <Delete style={{cursor: 'pointer'}} onClick={() => handleRemoveColumn('contributionsRoth', idx)} />
                }
              </Grid>
            </Grid>
          ))}
          <Button startIcon={<Add />}
            color="primary"
            style={{ maxWidth: '16em', marginTop: '0.5em' }}
            onClick={() => handleAddColumn('contributionsRoth')}>Map Another Column</Button>
          <Divider style={{marginTop: '1em'}} />
          <h1 style={{fontSize: '100%'}}>Employer Match contributions</h1>
          <span>Which column has the Employer Match contribution data?</span>
          <FormControl variant="outlined" size="small" className={classes.select}>
            <InputLabel htmlFor="temp">Select a column</InputLabel>
            <Select native
              label="Select a column"
              inputProps={{ name: 'employerMatch', id: 'employerMatch' }}
              style={{ width: '16em' }}
              value={state.mappedCols.employerMatch}
              onChange={handleChange}>
                {columnNames.map(column => (
                  <option value={column}>{column}</option>
                ))}
              </Select>
          </FormControl>
          <Divider style={{marginTop: '1em'}} />
          <h1 style={{fontSize: '100%'}}>Employer Non-Elective contributions</h1>
          <span>Which column has the Employer Non-Elective contribution data?</span>
          <FormControl variant="outlined" size="small" className={classes.select}>
            <InputLabel htmlFor="temp">Select a column</InputLabel>
            <Select native
              label="Select a column"
              inputProps={{ name: 'employerNonElective', id: 'employerNonElective' }}
              style={{ width: '16em' }}
              value={state.mappedCols.employerNonElective}
              onChange={handleChange}>
                {columnNames.map(column => (
                  <option value={column}>{column}</option>
                ))}
              </Select>
          </FormControl>
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
        </form>
      </Paper>
    </Grid>
  )
}

export default ContributionMappingComponent
