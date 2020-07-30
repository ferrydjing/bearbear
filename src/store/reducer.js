import { combineReducers } from 'redux-immutable'
import { reducer as BaseReducer } from './base'
import { reducer as LayoutReducer } from '../views/Layout/store'

export default combineReducers({
  base: BaseReducer,
  layout: LayoutReducer
})
