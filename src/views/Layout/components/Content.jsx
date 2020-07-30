import React, { memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GithubFilled
} from '@ant-design/icons'
import Avatar from './components/Avatar'
import {
  ContentWrap,
  HeaderWrap,
  Main,
  CollapsedWrap,
  GithubWrap
} from '../styled'
import * as actionCreaters from '../store/actionCreaters'

const Content = (props) => {
  const { location } = props
  const { isMobile, collapse } = useSelector(
    (state) => ({
      isMobile: state.getIn(['base', 'isMobile']),
      collapse: state.getIn(['layout', 'collapse'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const { pathname } = location
  return (
    <ContentWrap style={{ marginLeft: isMobile ? 0 : collapse ? 80 : 208 }}>
      <HeaderWrap style={{ left: isMobile ? 0 : collapse ? 80 : 208 }}>
        <CollapsedWrap
          onClick={() => dispatch(actionCreaters.setCollapse(!collapse))}
        >
          {collapse || isMobile ? (
            <MenuUnfoldOutlined style={{ fontSize: 22 }} />
          ) : (
            <MenuFoldOutlined style={{ fontSize: 22 }} />
          )}
        </CollapsedWrap>
        <GithubWrap>
          <GithubFilled style={{ fontSize: 20, marginLeft: 'auto' }} />
        </GithubWrap>
        <Avatar />
      </HeaderWrap>
      <Main style={{ padding: pathname === '/index' ? '24px 12px' : 24 }}>
        {props.children}
      </Main>
    </ContentWrap>
  )
}

export default withRouter(memo(Content))
