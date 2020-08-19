import React, { useState } from 'react'
import { Spin } from 'antd'
import * as Styled from './style'
import { LoginMobile, RegisterMobile } from './components'

const Mobile = (props) => {
  const [type, setType] = useState('login')
  const [loading, setLoading] = useState(false)
  return (
    <Styled.Wrap>
      <Spin spinning={loading}>
        {type === 'login' ? (
          <LoginMobile setLoading={setLoading} setType={setType}></LoginMobile>
        ) : (
          <RegisterMobile
            setLoading={setLoading}
            setType={setType}
          ></RegisterMobile>
        )}
      </Spin>
    </Styled.Wrap>
  )
}

export default Mobile
