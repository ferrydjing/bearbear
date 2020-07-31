import { combineReducers } from 'redux-immutable'
import { reducer as BaseReducer } from './base'
import { reducer as LayoutReducer } from '../views/Layout/store'
import { reducer as ButtonReducer } from '../views/pages/general/Button/store'

export default combineReducers({
  base: BaseReducer,
  layout: LayoutReducer,
  button: ButtonReducer
})
