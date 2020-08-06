import { fromJS } from 'immutable'
import { log, store } from '@ferrydjing/utils'
import * as constants from './constants'

let panes = [
  {
    key: '/index',
    title: '首页'
  }
]
try {
  if (store.session.get('_tabsViews')) {
    panes = store.session.get('_tabsViews')
  }
} catch (error) {
  log(error)
}

const defaultObj = {
  isMobile: false,
  screenWidth: 0,
  screenHeight: 0,
  panes,
  menuActive: '/index'
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
    case constants.SET_MENU_TABS:
      return state.set('panes', value)
    case constants.SET_MENU_ACTIVE:
      return state.set('menuActive', value)

    default:
      return state
  }
}

export default reducer
