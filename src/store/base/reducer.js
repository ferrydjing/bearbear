import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultObj = {
  isMobile: false,
  screenWidth: 0,
  screenHeight: 0
}

const defaultState = fromJS(defaultObj)

const reducer = (state = defaultState, { type, value }) => {
  switch (type) {
    case constants.SET_IS_MOBILE:
      return state.set('isMobile', value)
    case constants.SET_SCREEN_WIDTH:
      return state.set('screenWidth', value)
    case constants.SET_SCREEN_HEIGHT:
      return state.set('screenHeight', value)
    default:
      return state
  }
}

export default reducer
