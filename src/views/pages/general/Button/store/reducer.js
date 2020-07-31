import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultObj = fromJS({
  loading: false
})

export default (state = defaultObj, { type, value }) => {
  switch (type) {
    case constants.SET_BTN_LOADING:
      return state.set('loading', value)
    default:
      return state
  }
}
