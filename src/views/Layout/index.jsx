import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom'
import { Layout, BackTop, Breadcrumb } from 'antd'
import fp from 'lodash/fp'
import { Aside, Content } from './components'
import routes from '@/routers'
import * as actionCreaters from './store/actionCreaters'

const LayoutContainer = (props) => {
  const { location } = props
  const dispatch = useDispatch()
  const { isMobile, menu } = useSelector((state) => {
    return {
      isMobile: state.getIn(['base', 'isMobile']),
      menu: state.getIn(['layout', 'menu']).toJS()
    }
  }, shallowEqual)

  const menuClick = ({ key }) => {
    dispatch(actionCreaters.setSelectedKeys(key))
    dispatch(actionCreaters.setOenKeys(key))
  }

  const renderBreadcrumb = ({ pathname }) => {
    let arr = pathname.split('/').map((item) => `/${item}`)
    arr = arr.slice(1, arr.length)
    if (arr[0] === '/index') {
      arr = []
    }
    arr = arr.map((item) => {
      let obj = fp.find((cur) => cur.key === item, menu)
      if (!obj) {
        for (let i = 0; i < menu.length; i++) {
          if (menu[i].subs) {
            let cur = fp.find(
              (cur) => cur.key.indexOf(item) !== -1,
              menu[i].subs
            )
            if (cur) {
              obj = cur
              break
            }
          }
        }
      }
      return { key: item, txt: obj ? obj.title : '' }
    })
    return pathname === '/index' ? (
      ''
    ) : (
      <Breadcrumb style={{ marginBottom: 20 }} computedmatch={undefined}>
        <Breadcrumb.Item>
          <Link
            to='/index'
            onClick={() => {
              menuClick({ key: '/index' })
            }}
          >
            首页
          </Link>
        </Breadcrumb.Item>
        {arr.map((item) => (
          <Breadcrumb.Item key={item.key}>{item.txt}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    )
  }
  return (
    <Layout style={{ overflow: 'hidden' }}>
      <BackTop />
      <Aside style={{ display: isMobile ? 'none' : 'block' }}></Aside>
      <Content>
        {renderBreadcrumb(location)}
        <Switch>
          {routes.map((Item) => {
            return (
              <Route
                key={Item.path}
                path={Item.path}
                exact={Item.exact}
                render={(props) => <Item.component {...props} />}
              ></Route>
            )
          })}
          <Redirect to='/404' {...props} />
        </Switch>
      </Content>
    </Layout>
  )
}

export default withRouter(memo(LayoutContainer))
