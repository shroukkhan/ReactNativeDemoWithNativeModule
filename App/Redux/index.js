import {combineReducers} from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    temperature: require('./TemperatureRedux').reducer,
    login: require('./LoginRedux').reducer,
    fingiSdk: require('./FingiSdkRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
