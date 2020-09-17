import React, { memo, Suspense, useEffect } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import fp from 'lodash/fp'
import { DefaultLayout, NotFound, Login } from './routers'
import * as actionCreaters from './store/base/actionCreaters'
import { PageLoading } from '_c'

const App = () => {
  const dispatch = useDispatch()
  const { isMobile, screenWidth, screenHeight } = useSelector(
    (state) => ({
      isMobile: state.getIn(['base', 'isMobile']),
      screenWidth: state.getIn(['base', 'screenWidth']),
      screenHeight: state.getIn(['base', 'screenHeight'])
    }),
    shallowEqual
  )

  const setBasicInfo = () => {
    // eslint-disable-next-line no-mixed-operators
    if (isMobile !== document.body.clientWidth < 768) {
      dispatch(actionCreaters.setIsMobile(document.body.clientWidth < 768))
    }
    if (screenWidth !== document.documentElement.clientWidth) {
      dispatch(
        actionCreaters.setScreenWidth(document.documentElement.clientWidth)
      )
    }

    if (screenHeight !== document.documentElement.clientHeight) {
      dispatch(
        actionCreaters.setScreenHeight(document.documentElement.clientHeight)
      )
    }
  }
  const resizeFn = fp.throttle(300, () => {
    setBasicInfo()
  })

  useEffect(() => {
    resizeFn()
    window.addEventListener('resize', resizeFn, false)
    return () => {
      window.removeEventListener('resize', resizeFn)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenHeight, screenWidth, isMobile])

  return (
    <Suspense fallback={<PageLoading />}>
      <Router>
        <Switch>
          <Route path='/' exact render={() => <Redirect to='/login' />} />
          <Route path='/login' component={Login} />
          <Route path='/404' component={NotFound} />
          <Route component={DefaultLayout} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default memo(App)
