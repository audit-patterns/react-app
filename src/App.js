import React from 'react'

import {
  ThemeProvider,
} from '@material-ui/core/styles'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

import {
  Grid,
} from '@material-ui/core'

import theme from './theme'
import Navbar from './components/layout/Navbar'

import FileUpload from './pages/FileUpload'
import EntryColumnMapping from './pages/EntryColumnMapping'
import EntryContributionEligibility from './pages/EntryContributionEligibility'
import EntryContributionMapping from './pages/EntryContributionMapping'
import EntryFiscalInfo from './pages/EntryFiscalInfo'
import EntryMultiEntity from './pages/EntryMultiEntity'
import SignIn from './pages/SignIn'
import Summary from './pages/Summary'
import Welcome from './pages/Welcome'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Grid item xs={12} style={{ padding: '1rem' }}>
          <Switch>
            <Route path="/sign-in" component={SignIn} />
            <Route exact path="/" component={SignIn} />
            <Route path="/column-mapping" component={EntryColumnMapping} />
            <Route path="/contribution-eligibility" component={EntryContributionEligibility} />
            <Route path="/contribution-mapping" component={EntryContributionMapping} />
            <Route path="/file-upload" component={FileUpload} />
            <Route path="/fiscal-info" component={EntryFiscalInfo} />
            <Route path="/multi-entity" component={EntryMultiEntity} />
            <Route path="/summary" component={Summary} />
          </Switch>
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
