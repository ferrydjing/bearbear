import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Layout, BackTop } from 'antd'
import { Aside, Content } from './components'
import routes from '@/routers'

const LayoutContainer = (props) => {
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
