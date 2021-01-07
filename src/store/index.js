import thunk from 'redux-thunk'

import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux'

import {
  getFirebase,
} from 'react-redux-firebase'

import rootReducer from './reducers/root-reducer'

const middlewares = [thunk.withExtraArgument(getFirebase)]

const store = createStore(rootReducer, {}, compose(applyMiddleware(...middlewares)))

export default store
