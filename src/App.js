import React from 'react'

import {
  Provider,
  useSelector,
} from 'react-redux'

import {
  ReactReduxFirebaseProvider,
  isLoaded,
  isEmpty,
} from 'react-redux-firebase'

import store from './store'
import firebase from './config/firebase-config'

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import {
  ThemeProvider,
} from '@material-ui/core/styles'

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

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
}

function PrivateRoute(props) {
  const auth = useSelector(state => state.firebase.auth)
  return (
    isEmpty(auth)
      ? (<Redirect to={{ pathname: '/sign-in'}} />)
      : (<Route {...props} />)
  )
}

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Navbar />
            <Grid item xs={12} style={{ padding: '1rem' }}>
              <Switch>
                <Route path="/sign-in" component={SignIn} />
                <Route exact path="/" component={SignIn} />
                <PrivateRoute path="/column-mapping" component={EntryColumnMapping} />
                <PrivateRoute path="/contribution-eligibility" component={EntryContributionEligibility} />
                <PrivateRoute path="/contribution-mapping" component={EntryContributionMapping} />
                <PrivateRoute path="/file-upload" component={FileUpload} />
                <PrivateRoute path="/fiscal-info" component={EntryFiscalInfo} />
                <PrivateRoute path="/multi-entity" component={EntryMultiEntity} />
                <PrivateRoute path="/summary" component={Summary} />
              </Switch>
            </Grid>
          </BrowserRouter>
        </ThemeProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
