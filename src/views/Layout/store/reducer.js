import React from 'react'
import { fromJS } from 'immutable'
import * as constants from './constants'
import {
  HomeFilled,
  AppstoreFilled,
  ExclamationCircleFilled,
  LayoutFilled
} from '@ant-design/icons'

const defaulMenu = [
  {
    key: '/index',
    title: '首页',
    icon: <HomeFilled />
  },
  {
    key: '/general',
    title: '通用',
    icon: <AppstoreFilled />,
    subs: [
      { key: '/general/button', title: '按钮', icon: '' },
      { key: '/general/icon', title: '图标', icon: '' }
    ]
  },
  {
    key: '/display',
    title: '展示',
    icon: <LayoutFilled />,
    subs: [{ key: '/display/table', title: '表格', icon: '' }]
  },
  {
    key: '/about',
    title: '关于',
    icon: <ExclamationCircleFilled />
  }
]

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
