import { fromJS } from 'immutable'
import * as constants from './constants'

import routes from '@/routers'

const defaulMenu = routes

const defaultObj = {
  menu: defaulMenu,
  selectedKeys: [],
  openKeys: [],
  collapse: false
}

const defaultState = fromJS(defaultObj)

const reducer = (state = defaultState, { type, value }) => {
  switch (type) {
    case constants.SET_COLLAPSE:
      return state.set('collapse', value)
    case constants.SET_OPEN_KEYS:
      return state.set('openKeys', value)
    case constants.SET_SELECTED_KEYS:
      return state.set('selectedKeys', value)
    default:
      return state
  }
}

export default reducer
