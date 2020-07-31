// import loadable from '@/utils/loadable'
import React, { lazy } from 'react'
import {
  HomeFilled,
  AppstoreFilled,
  ExclamationCircleFilled,
  LayoutFilled
} from '@ant-design/icons'

const Index = lazy(() =>
  import(/*webpackChunkName: 'index' */ '@/views/pages/Index')
)

const About = lazy(() =>
  import(/*webpackChunkName: 'layout' */ '@/views/pages/About')
)

const Button = lazy(() =>
  import(/*webpackChunkName: 'layout' */ '@/views/pages/general/Button')
)
const Icon = lazy(() =>
  import(/*webpackChunkName: 'layout' */ '@/views/pages/general/Icon')
)

// const Table = lazy(() =>
//   import(/*webpackChunkName: 'layout' */ '@/views/pages/Table')
// )

export const DefaultLayout = lazy(() =>
  import(/* webpackChunkName: 'index' */ '../views/Layout')
)

export const NotFound = lazy(() =>
  import(/* webpackChunkName: '404' */ '../views/404')
)

export const Login = lazy(() =>
  import(/* webpackChunkName: 'login' */ '../views/Login')
)

const routes = [
  {
    path: '/index',
    exact: true,
    name: 'Index',
    component: Index,
    title: '首页',
    icon: <HomeFilled />
  },
  {
    path: '/general',
    title: '通用',
    icon: <AppstoreFilled />,
    subs: [
      {
        path: '/general/button',
        exact: true,
        name: 'Button',
        component: Button,
        title: '按钮',
        icon: ''
      },
      {
        path: '/general/icon',
        exact: true,
        name: 'Icon',
        component: Icon,
        title: '图标',
        icon: ''
      }
    ]
  },
  {
    path: '/tablePage',
    title: '列表页',
    icon: <AppstoreFilled />,
    subs: []
  },

  {
    path: '/about',
    exact: true,
    name: 'About',
    component: About,
    title: '关于',
    icon: <ExclamationCircleFilled />
  }
]

export default routes
