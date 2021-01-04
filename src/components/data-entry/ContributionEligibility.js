import React from 'react'

import {
  useHistory,
} from 'react-router-dom'

import {
  Button,
  Grid,
  Paper,
  TextField,
} from '@material-ui/core'

import useStyles from './DataEntryStyles'

const FiscalInfoComponent = () => {
  const classes = useStyles()
  const history = useHistory()

  const [state, setState] = React.useState({
    employeeAge: 18,
    employeeServiceMonths: '',
    employeeServiceHours: '',
    employerMatchAge: 18,
    employerMatchServiceMonths: '',
    employerMatchServiceHours: '',
    employerNonElectiveAge: 18,
    employerNonElectiveServiceMonths: '',
    employerNonElectiveServiceHours: '',
  })

  const handleChange = e => setState({
    ...state,
    [e.target.name]: e.target.value,
  })

  const handleClickBack = () => history.goBack()
  const handleClickNext = () => history.push('/column-mapping')

  return (
    <Grid container item direction="row" justify="center">
      <Paper className={classes.paper}>
        <Grid container direction="column">
          <h1>Employee contribution eligibility requirements</h1>
          <TextField name="employeeAge"
            className={classes.textField}
            size="small"
            required
            label="Age requirement"
            helperText="Minimun age for eligibility"
            type="number"
            defaultValue={state.employeeAge}
            variant="outlined"
            onChange={handleChange} />
          <br /><span>Service requirements</span>
          <TextField name="employeeServiceMonths"
            className={classes.textField}
            size="small"
            margin="normal"
            label="Service months"
            helperText="Leave blank for no minimum"
            type="number"
            defaultValue={state.employeeServiceMonths}
            variant="outlined"
            onChange={handleChange} />
          <TextField name="employeeServiceHours"
            className={classes.textField}
            size="small"
            margin="normal"
            label="Service hours"
            helperText="Leave blank for no minimum"
            type="number"
            defaultValue={state.employeeServiceHours}
            variant="outlined"
            onChange={handleChange} />
          <h1>Employer contribution eligibility requirements</h1>
          <h1 style={{ fontSize: '100%' }}>Contribution Match</h1>
          <TextField name="employerMatchAge"
            className={classes.textField}
            size="small"
            required
            label="Age requirement"
            helperText="Minimun age for eligibility"
            type="number"
            defaultValue={state.employerMatchAge}
            variant="outlined"
            onChange={handleChange} />
          <br /><span>Service requirements</span>
          <TextField name="employerMatchServiceMonths"
            className={classes.textField}
            size="small"
            margin="normal"
            label="Service months"
            helperText="Leave blank for no minimum"
            type="number"
            defaultValue={state.employerMatchServiceMonths}
            variant="outlined"
            onChange={handleChange} />
          <TextField name="employerMatchServiceHours"
            className={classes.textField}
            size="small"
            margin="normal"
            label="Service hours"
            helperText="Leave blank for no minimum"
            type="number"
            defaultValue={state.employerMatchServiceHours}
            variant="outlined"
            onChange={handleChange} />
          <h1 style={{ fontSize: '100%' }}>Non-elective Contributions</h1>
          <TextField name="employerNonElectiveAge"
            className={classes.textField}
            size="small"
            required
            label="Age requirement"
            helperText="Minimun age for eligibility"
            type="number"
            defaultValue={state.employerNonElectiveAge}
            variant="outlined"
            onChange={handleChange} />
          <br /><span>Service requirements</span>
          <TextField name="employerNonElectiveServiceMonths"
            className={classes.textField}
            size="small"
            margin="normal"
            label="Service months"
            helperText="Leave blank for no minimum"
            type="number"
            defaultValue={state.employerNonElectiveServiceMonths}
            variant="outlined"
            onChange={handleChange} />
          <TextField name="employerNonElectiveServiceHours"
            className={classes.textField}
            size="small"
            margin="normal"
            label="Service hours"
            helperText="Leave blank for no minimum"
            type="number"
            defaultValue={state.employerNonElectiveServiceHours}
            variant="outlined"
            onChange={handleChange} />
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

export default FiscalInfoComponent
