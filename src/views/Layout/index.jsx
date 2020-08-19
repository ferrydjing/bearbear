import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Layout, BackTop } from 'antd'
import { Aside, Content } from './components'
import routes from '@/routers'
import * as baseActionCreaters from '@/store/base/actionCreaters'

const LayoutContainer = (props) => {
  // const { location } = props
  const location = useLocation()
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
        <TransitionGroup className={'router-wrapper'}>
          <CSSTransition
            key={location.pathname}
            appear={true}
            classNames={'fade'}
            timeout={300}
            unmountOnExit={true}
          >
            <Switch location={location}>
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
          </CSSTransition>
        </TransitionGroup>
      </Content>
    </Layout>
  )
}

export default memo(LayoutContainer)
