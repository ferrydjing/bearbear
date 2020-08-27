import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Normal, Mobile } from './components'
import { notification } from 'antd'
import * as Styled from './style'

const Login = (props) => {
  const { isMobile } = useSelector(
    (state) => ({
      isMobile: state.getIn(['base', 'isMobile'])
    }),
    shallowEqual
  )

  useEffect(() => {
    notification.info({
      message: '提示',
      description: `
        用户名： admin
        密码： 123456
      `,
      duration: 0
    })

    return () => {
      notification.destroy()
    }
  }, [])

  return <Styled.Wrap>{isMobile ? <Mobile /> : <Normal />}</Styled.Wrap>
}

export default memo(Login)
