import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Menu } from 'antd'
import { useLocation } from 'react-router-dom'
import { AsideWrap, LogoWrap, DrawerWrap } from '../styled'
import { Icon } from '@/components'
import * as actionCreaters from '../store/actionCreaters'

const Aside = (props) => {
  const location = useLocation()
  const { collapse, menu, openKeys, selectedKeys, isMobile } = useSelector(
    (state) => {
      return {
        isMobile: state.getIn(['base', 'isMobile']),
        collapse: state.getIn(['layout', 'collapse']),
        menu: state.getIn(['layout', 'menu']).toJS(),
        openKeys: state.getIn(['layout', 'openKeys']).toJS(),
        selectedKeys: state.getIn(['layout', 'selectedKeys']).toJS()
      }
    },
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      const { pathname } = location
      dispatch(actionCreaters.setOenKeys(pathname))
      dispatch(actionCreaters.setSelectedKeys(pathname))
    }, 100)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  const menuClick = ({ key }) => {
    dispatch(actionCreaters.setSelectedKeys(key))
    dispatch(actionCreaters.setOenKeys(key))
    if (isMobile) {
      dispatch(actionCreaters.setCollapse(false))
    }
  }

  const onOpenChange = (key) => {
    dispatch(actionCreaters.onOpenChange(key))
  }

  const menuShow = () => (
    <AsideWrap collapsed={collapse && !isMobile} width='208'>
      <LogoWrap>
        <Icon style={{ fontSize: 32, color: '#fff' }} type='bear' />{' '}
        {collapse && !isMobile ? '' : <span>BearBear</span>}
      </LogoWrap>
      <Menu
        theme='dark'
        mode='inline'
        style={{ marginTop: 20 }}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={menuClick}
      >
        {menu.map((item) =>
          item.subs && item.subs.length > 0
            ? actionCreaters.renderSubMenuItem(item)
            : actionCreaters.renderMenuItem(item)
        )}
      </Menu>
    </AsideWrap>
  )

  return isMobile ? (
    <DrawerWrap
      visible={collapse}
      placement='left'
      width='208'
      closable={false}
      onClose={() => {
        dispatch(actionCreaters.setCollapse(false))
      }}
    >
      {menuShow()}
    </DrawerWrap>
  ) : (
    menuShow()
  )
}

export default memo(Aside)
