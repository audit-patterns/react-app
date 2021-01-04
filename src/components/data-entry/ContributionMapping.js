import React from 'react'

import {
  useHistory,
} from 'react-router-dom'

import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Paper,
  Radio,
  RadioGroup,
  Select,
} from '@material-ui/core'

import {
  Add,
  Delete,
} from '@material-ui/icons'

import useStyles from './DataEntryStyles'

const MultiEntityComponent = () => {
  const classes = useStyles()
  const history = useHistory()

  const columnNames = [
    '',
    'Column1',
    'Column2',
    'Column3',
    'Column4',
    'Column5',
    'Column6',
    'Column7',
  ]

  const [state, setState] = React.useState({
    cols401k: [''],
    colsRoth: [''],
    colEmployerMatch: '',
    colEmployerNonElective: '',
  })

  const handleChange = e => setState({
    ...state,
    [e.target.name]: e.target.value,
  })
  const handleComplexChange = e => {
    const [target, idx] = e.target.name.split('-')
    const arr = [...state[target]]
    arr[idx] = e.target.value
    setState({
      ...state,
      [target]: arr,
    })
  }
  const handleAddColumn = id => setState({
    ...state,
    [id]: [...state[id], ''],
  })
  const handleRemoveColumn = (id, idx) => {
    const arr = [...state[id]]
    arr.splice(idx, 1)
    setState({
      ...state,
      [id]: arr,
    })
  }
  const handleClickBack = () => history.goBack()
  const handleClickNext = () => history.push('/contribution-eligibility')

  return (
    <Grid container item direction="row" justify="center">
      <Paper className={classes.paper}>
        <Grid container direction="column">
          <h1>Map columns for each contribution type in this plan</h1>
          <h1 style={{fontSize: '100%'}}>Employee 401k (non-Roth)</h1>
          <span>Which columns have 401k employee contribution data?</span>
          {state.cols401k.map((colName, idx) => (
            <Grid container direction="row" spacing={2} alignItems="center" style={{marginTop: '0.5em'}}>
              <Grid item>
                <FormControl variant="outlined" size="small">
                  <InputLabel htmlFor={`cols401k-${idx}`}>Select a column</InputLabel>
                  <Select native
                    label="Select a column"
                    inputProps={{
                      name: `cols401k-${idx}`,
                      id: `cols401k-${idx}`,
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
                  : <Delete style={{cursor: 'pointer'}} onClick={() => handleRemoveColumn('cols401k', idx)} />
                }
              </Grid>
            </Grid>
          ))}
          <Button startIcon={<Add />}
            color="primary"
            style={{ maxWidth: '16em', marginTop: '0.5em' }}
            onClick={() => handleAddColumn('cols401k')}>Map Another Column</Button>

          <h1 style={{fontSize: '100%'}}>Employee Roth contributions</h1>
          <span>Which columns have Roth employee contribution data?</span>
          {state.colsRoth.map((colName, idx) => (
            <Grid container direction="row" spacing={2} alignItems="center" style={{marginTop: '0.5em'}}>
              <Grid item>
                <FormControl variant="outlined" size="small">
                  <InputLabel htmlFor={`colsRoth-${idx}`}>Select a column</InputLabel>
                  <Select native
                    label="Select a column"
                    inputProps={{
                      name: `colsRoth-${idx}`,
                      id: `colsRoth-${idx}`,
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
                  : <Delete style={{cursor: 'pointer'}} onClick={() => handleRemoveColumn('colsRoth', idx)} />
                }
              </Grid>
            </Grid>
          ))}
          <Button startIcon={<Add />}
            color="primary"
            style={{ maxWidth: '16em', marginTop: '0.5em' }}
            onClick={() => handleAddColumn('colsRoth')}>Map Another Column</Button>
          <Divider style={{marginTop: '1em'}} />
          <h1 style={{fontSize: '100%'}}>Employer Match contributions</h1>
          <span>Which column has the Employer Match contribution data?</span>
          <FormControl variant="outlined" size="small" className={classes.select}>
            <InputLabel htmlFor="temp">Select a column</InputLabel>
            <Select native
              label="Select a column"
              inputProps={{
                name: 'colEmployerMatch',
                id: 'colEmployerMatch',
              }}
              style={{ width: '16em' }}
              value={state.colEmployerMatch}
              onChange={handleChange} >
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
              inputProps={{
                name: 'colEmployerNonElective',
                id: 'colEmployerNonElective',
              }}
              style={{ width: '16em' }}
              value={state.colEmployerNonElective}
              onChange={handleChange} >
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
      </Paper>
    </Grid>
  )
}

export default MultiEntityComponent
