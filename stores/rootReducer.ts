import { GlobalReducer } from './global/global'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  GlobalReducer: GlobalReducer,
})
