
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

import authReducer from './auth-reducer'
import sessionReducer from './session-reducer'

export default combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  session: sessionReducer,
})
