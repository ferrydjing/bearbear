import React, { useState } from 'react'
import { Spin } from 'antd'
import * as Styled from './style'
import { Login, Register } from './components'

const list = [
  {
    txt: '登录',
    type: 'login'
  },
  {
    txt: '注册',
    type: 'register'
  }
]

const Normal = (props) => {
  const [type, setType] = useState('login')
  const [loading, setLoading] = useState(false)

  return (
    <Styled.Wrap>
      <Spin spinning={loading}>
        <Styled.Header>
          {list.map((item) => (
            <div
              className={type === item.type ? 'active item' : 'item'}
              key={item.type}
              onClick={() => {
                setType(item.type)
              }}
            >
              {item.txt}
            </div>
          ))}
        </Styled.Header>
        {type === 'login' ? (
          <Login setLoading={setLoading} />
        ) : (
          <Register setLoading={setLoading} />
        )}
      </Spin>
    </Styled.Wrap>
  )
}

export default Normal
