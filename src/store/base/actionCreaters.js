import fp from 'lodash/fp'
import { store } from '@ferrydjing/utils'
import { fromJS } from 'immutable'
import { log } from '@ferrydjing/utils'
import * as constants from './constants'
import routes from '@/routers'
let routesNew = []
routes.forEach((item) => {
  if (item.subs) {
    routesNew.push(...item.subs)
  } else {
    routesNew.push(item)
  }
})

export const setScreenWidth = (width) => ({
  type: constants.SET_SCREEN_WIDTH,
  value: width
})

export const setScreenHeight = (height) => ({
  type: constants.SET_SCREEN_HEIGHT,
  value: height
})

export const setIsMobile = (isMobile) => {
  return {
    type: constants.SET_IS_MOBILE,
    value: isMobile
  }
}

export const setMenuActive = (value) => ({
  type: constants.SET_MENU_ACTIVE,
  value
})

export const setTabsPanes = (value) => ({
  type: constants.SET_MENU_TABS,
  value: fromJS(value)
})

export const setMenuTabsPanes = (key) => {
  return (dispatch, getState) => {
    const state = getState()
    const panes = state.getIn(['base', 'panes']).toJS()
    let item = fp.find((item) => item.path === key, routesNew)
    if (item) {
      item = {
        title: item.title,
        key: item.path
      }
      let newPanes = fp.flowRight(fp.uniqBy('key'), (arr) => [...arr, item])(
        panes
      )
      dispatch(setTabsPanes(newPanes))
      log(newPanes)
      store.session.set('_tabsViews', newPanes, true)
      dispatch(setMenuActive(key))
    }
  }
}
