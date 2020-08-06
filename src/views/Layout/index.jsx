import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Layout, BackTop } from 'antd'
import { Aside, Content } from './components'
import routes from '@/routers'
import * as baseActionCreaters from '@/store/base/actionCreaters'

const LayoutContainer = (props) => {
  const { location } = props
  const dispatch = useDispatch()
  let routesNew = []
  routes.forEach((item) => {
    if (item.subs) {
      routesNew.push(...item.subs)
    } else {
      routesNew.push(item)
    }
  })
  const { isMobile } = useSelector((state) => {
    return {
      isMobile: state.getIn(['base', 'isMobile'])
    }
  }, shallowEqual)

  useEffect(() => {
    dispatch(baseActionCreaters.setMenuTabsPanes(location.pathname))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <Layout style={{ overflow: 'hidden' }}>
      <BackTop />
      <Aside style={{ display: isMobile ? 'none' : 'block' }}></Aside>
      <Content>
        <Switch>
          {routesNew.map((Item) => {
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
