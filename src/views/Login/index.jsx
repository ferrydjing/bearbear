import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Normal, Mobile } from './components'
import * as Styled from './style'

const Login = (props) => {
  const { isMobile } = useSelector(
    (state) => ({
      isMobile: state.getIn(['base', 'isMobile'])
    }),
    shallowEqual
  )

  return <Styled.Wrap>{isMobile ? <Mobile /> : <Normal />}</Styled.Wrap>
}

export default memo(Login)
