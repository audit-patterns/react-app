import thunk from 'redux-thunk'

import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux'

import {
  persistStore,
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {
  getFirebase,
} from 'react-redux-firebase'

import rootReducer from './reducers/root-reducer'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [thunk.withExtraArgument(getFirebase)]

let store = createStore(persistedReducer, {}, compose(applyMiddleware(...middlewares)))
let persistor = persistStore(store)

export { store, persistor }
