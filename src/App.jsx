import React, { memo, Suspense, useEffect } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import fp from 'lodash/fp'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { DefaultLayout, NotFound, Login } from './routers'
import * as actionCreaters from './store/base/actionCreaters'

const Loading = () => {
  useEffect(() => {
    NProgress.start()
    return () => {
      NProgress.done()
    }
  }, [])
  return <div />
}

const App = () => {
  const dispatch = useDispatch()

  const setBasicInfo = () => {
    dispatch(actionCreaters.setIsMobile(document.body.clientWidth < 768))
    dispatch(
      actionCreaters.setScreenWidth(document.documentElement.clientWidth)
    )
    dispatch(
      actionCreaters.setScreenHeight(document.documentElement.clientHeight)
    )
    // if (document.documentElement.clientWidth <= 1000 && collapse !== true) {
    //   changeCollapse(true)
    // } else if (
    //   document.documentElement.clientWidth > 1000 &&
    //   collapse !== false
    // ) {
    //   changeCollapse(false)
    // }
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
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route path='/' exact render={() => <Redirect to='/index' />} />
          <Route path='/login' component={Login} />
          <Route path='/404' component={NotFound} />
          <Route component={DefaultLayout} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default memo(App)
