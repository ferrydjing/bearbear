import React, { memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import fp from 'lodash/fp'
import dayjs from 'dayjs'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GithubFilled
} from '@ant-design/icons'
import Avatar from './components/Avatar'
import { FerryTabs } from '_c'
import {
  ContentWrap,
  HeaderWrap,
  HeaderContent,
  Main,
  CollapsedWrap,
  GithubWrap,
  Footer
} from '../styled'
import * as actionCreaters from '../store/actionCreaters'

const Content = (props) => {
  const { location, history } = props
  const { isMobile, collapse, menu } = useSelector(
    (state) => ({
      isMobile: state.getIn(['base', 'isMobile']),
      collapse: state.getIn(['layout', 'collapse']),
      menu: state.getIn(['layout', 'menu']).toJS()
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const { pathname } = location
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
      let obj = fp.find((cur) => cur.path === item, menu)
      if (!obj) {
        for (let i = 0; i < menu.length; i++) {
          if (menu[i].subs) {
            let cur = fp.find(
              (cur) => cur.path.indexOf(item) !== -1,
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
    return pathname === '/index' || isMobile ? (
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
    <ContentWrap style={{ marginLeft: isMobile ? 0 : collapse ? 80 : 208 }}>
      <HeaderWrap style={{ left: isMobile ? 0 : collapse ? 80 : 208 }}>
        <HeaderContent>
          <CollapsedWrap
            onClick={() => dispatch(actionCreaters.setCollapse(!collapse))}
          >
            {collapse || isMobile ? (
              <MenuUnfoldOutlined style={{ fontSize: 22 }} />
            ) : (
              <MenuFoldOutlined style={{ fontSize: 22 }} />
            )}
          </CollapsedWrap>
          {renderBreadcrumb(location)}
          <GithubWrap>
            <GithubFilled style={{ fontSize: 20, marginLeft: 'auto' }} />
          </GithubWrap>
          <Avatar />
        </HeaderContent>
        <FerryTabs history={history}></FerryTabs>
      </HeaderWrap>
      <Main
        style={{
          padding: pathname === '/index' ? '24px 12px' : 24
        }}
      >
        {props.children}
        <Footer>
          BearBear ©{dayjs().format('YYYY')} Created by ferrydjing@outlook.com
        </Footer>
      </Main>
    </ContentWrap>
  )
}

export default withRouter(memo(Content))
