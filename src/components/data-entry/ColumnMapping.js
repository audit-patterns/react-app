import React from 'react'


import {
  useHistory,
} from 'react-router-dom'

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
    namesSingleColumn: 'true',
    columnFirstLastNames: '',
    columnFirstName: '',
    columnLastName: '',
    columnEmployeeId: '',
    columnBirthDate: '',
    columnHire: '',
    columnTermination: '',
    columnReHire: '',
    columnGrossSalary: '',
    columnHoursWorked: '',
  })

  const handleChange = e => setState({
    ...state,
    [e.target.name]: e.target.value,
  })

  const handleClickBack = () => history.goBack()
  const handleClickNext = () => history.push('/summary')

  const renderOneColumn = () => (
    <div>
      <FormControl variant="outlined" size="small" className={classes.select}>
        <InputLabel htmlFor="temp">First and Last names</InputLabel>
        <Select native
          label="First and Last names"
          inputProps={{
            name: 'columnFirstLastNames',
            id: 'columnFirstLastNamesSelect',
          }}
          style={{ width: '16em' }}
          value={state.columnFirstLastNames}
          onChange={handleChange} >
            {columnNames.map(column => (
              <option value={column}>{column}</option>
            ))}
          </Select>
      </FormControl>
    </div>
  )

  const renderTwoColumn = () => (
    <div>
      <FormControl variant="outlined" size="small" className={classes.select}>
        <InputLabel htmlFor="temp">First name</InputLabel>
        <Select native
          label="First name"
          inputProps={{
            name: 'columnFirstName',
            id: 'columnFirstName',
          }}
          style={{ width: '16em' }}
          value={state.columnFirstName}
          onChange={handleChange} >
            {columnNames.map(column => (
              <option value={column}>{column}</option>
            ))}
          </Select>
      </FormControl>&nbsp;
      <FormControl variant="outlined" size="small" className={classes.select}>
        <InputLabel htmlFor="temp">Last name</InputLabel>
        <Select native
          label="Last name"
          inputProps={{
            name: 'columnLastName',
            id: 'columnLastNameSelect',
          }}
          style={{ width: '16em' }}
          value={state.columnLastName}
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
          <h1>Is the employee's First and Last names stored in the same column?</h1>
          <FormControl component="fieldset">
            <RadioGroup row araia-aria-label="namesSingleColumn"
              name="namesSingleColumn"
              value={state.namesSingleColumn}
              onChange={handleChange}>
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          {state.namesSingleColumn === 'true' ? renderOneColumn() : renderTwoColumn()}
          <FormControl variant="outlined" size="small" className={classes.select}>
            <InputLabel htmlFor="temp">Employee ID or Unique Identifier</InputLabel>
            <Select native
              label="Employee ID or Unique Identifier"
              inputProps={{
                name: 'columnEmployeeId',
                id: 'columnEmployeeIdSelect',
              }}
              style={{ width: '16em' }}
              value={state.columnEmployeeId}
              onChange={handleChange} >
                {columnNames.map(column => (
                  <option value={column}>{column}</option>
                ))}
              </Select>
          </FormControl>
          <FormControl variant="outlined" size="small" className={classes.select}>
            <InputLabel htmlFor="temp">Date of Birth</InputLabel>
            <Select native
              label="Date of Birth"
              inputProps={{
                name: 'columnBirthDate',
                id: 'columnBirthDateSelect',
              }}
              style={{ width: '16em' }}
              value={state.columnBirthDate}
              onChange={handleChange} >
                {columnNames.map(column => (
                  <option value={column}>{column}</option>
                ))}
              </Select>
          </FormControl>
          <FormControl variant="outlined" size="small" className={classes.select}>
            <InputLabel htmlFor="temp">Date of Hire</InputLabel>
            <Select native
              label="Date of Hire"
              inputProps={{
                name: 'columnHire',
                id: 'columnHireSelect',
              }}
              style={{ width: '16em' }}
              value={state.columnHire}
              onChange={handleChange} >
                {columnNames.map(column => (
                  <option value={column}>{column}</option>
                ))}
              </Select>
          </FormControl>
          <FormControl variant="outlined" size="small" className={classes.select}>
            <InputLabel htmlFor="temp">Date of Termination</InputLabel>
            <Select native
              label="Date of Termination"
              inputProps={{
                name: 'columnTermination',
                id: 'columnTerminationSelect',
              }}
              style={{ width: '16em' }}
              value={state.columnTermination}
              onChange={handleChange} >
                {columnNames.map(column => (
                  <option value={column}>{column}</option>
                ))}
              </Select>
          </FormControl>
          <FormControl variant="outlined" size="small" className={classes.select}>
            <InputLabel htmlFor="temp">Date of Re-Hire</InputLabel>
            <Select native
              label="Date of Re-Hire"
              inputProps={{
                name: 'columnReHire',
                id: 'columnReHireSelect',
              }}
              style={{ width: '16em' }}
              value={state.columnReHire}
              onChange={handleChange} >
                {columnNames.map(column => (
                  <option value={column}>{column}</option>
                ))}
              </Select>
          </FormControl>
          <FormControl variant="outlined" size="small" className={classes.select}>
            <InputLabel htmlFor="temp">Gross Salary</InputLabel>
            <Select native
              label="Gross Salary"
              inputProps={{
                name: 'columnGrossSalary',
                id: 'columnGrossSalarySelect',
              }}
              style={{ width: '16em' }}
              value={state.columnGrossSalary}
              onChange={handleChange} >
                {columnNames.map(column => (
                  <option value={column}>{column}</option>
                ))}
              </Select>
          </FormControl>
          <FormControl variant="outlined" size="small" className={classes.select}>
            <InputLabel htmlFor="temp">Hours Worked</InputLabel>
            <Select native
              label="Hours Worked"
              inputProps={{
                name: 'columnHoursWorked',
                id: 'columnHoursWorkedSelect',
              }}
              style={{ width: '16em' }}
              value={state.columnHoursWorked}
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
