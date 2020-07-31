// import loadable from '@/utils/loadable'
import React, { lazy } from 'react'
import {
  HomeFilled,
  AppstoreFilled,
  ExclamationCircleFilled,
  LayoutFilled,
  FormOutlined
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

const BasicForm = lazy(() =>
  import(
    /*webpackChunkName: 'form-pages' */ '@/views/pages/form-pages/BasicForm'
  )
)

const StepForm = lazy(() =>
  import(
    /*webpackChunkName: 'form-pages' */ '@/views/pages/form-pages/StepForm'
  )
)

const QueryTable = lazy(() =>
  import(
    /*webpackChunkName: 'table-pages' */ '@/views/pages/table-page/QueryTable'
  )
)
const StandardTable = lazy(() =>
  import(
    /*webpackChunkName: 'table-pages' */ '@/views/pages/table-page/StandardTable'
  )
)

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
    path: '/form-pages',
    title: '表单页',
    icon: <FormOutlined />,
    subs: [
      {
        path: '/form-pages/basic-table',
        exact: true,
        name: 'BasicForm',
        component: BasicForm,
        title: '基础表单',
        icon: ''
      },
      {
        path: '/form-pages/step-table',
        exact: true,
        name: 'StepForm',
        component: StepForm,
        title: '分布表单',
        icon: ''
      }
    ]
  },
  {
    path: '/tablePage',
    title: '列表页',
    icon: <LayoutFilled />,
    subs: [
      {
        path: '/tablePage/query-table',
        exact: true,
        name: 'QueryTable',
        component: QueryTable,
        title: '查询表格',
        icon: ''
      },
      {
        path: '/tablePage/standard-table',
        exact: true,
        name: 'StandardTable',
        component: StandardTable,
        title: '标准表格',
        icon: ''
      }
    ]
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
