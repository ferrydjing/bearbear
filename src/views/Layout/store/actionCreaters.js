import React from 'react'
import { fromJS } from 'immutable'
import { Link } from 'react-router-dom'
import * as constants from './constants'
import { Menu } from 'antd'
const { SubMenu } = Menu

const setOpenKeys = (key) => ({
  type: constants.SET_OPEN_KEYS,
  value: fromJS(key)
})

export const setSelectedKeys = (key) => ({
  type: constants.SET_SELECTED_KEYS,
  value: fromJS([key])
})

export const setOenKeys = (key) => {
  let arr = key.split('/').map((item) => `/${item}`)
  arr = arr.slice(1, arr.length)
  return setOpenKeys(arr.length > 1 ? [arr[0]] : [])
}

export const setCollapse = (collapse) => {
  return {
    type: constants.SET_COLLAPSE,
    value: collapse
  }
}

export const onOpenChange = (openKeys) => {
  return (dispatch) => {
    dispatch(setOpenKeys(openKeys))
  }
}

export const renderSubMenuItem = ({ path: key, title, icon, subs }) => (
  <SubMenu key={key} icon={icon} title={title}>
    {subs.map((item) => renderMenuItem(item))}
  </SubMenu>
)

export const renderMenuItem = ({ path: key, title, icon }) => (
  <Menu.Item key={key}>
    <Link to={key}>
      {icon}
      <span>{title}</span>
    </Link>
  </Menu.Item>
)
