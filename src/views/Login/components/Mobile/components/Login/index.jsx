import React from 'react'
import styled from 'styled-components'
import { Form, Button, Input, message } from 'antd'
import useLogin from '../../../../hook/useLogin'
const rem = (px) => {
  return px / 100 + 'rem'
}

const Wrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: ${rem(650)};
`

const LoginMobile = (props) => {
  const { save, rules, form, setType, defaultVal } = useLogin(props)

  return (
    <Wrap>
      <div className='c-mobile-login__to-register'>
        <span
          onClick={() => {
            setType('register')
          }}
        >
          注册
        </span>
      </div>
      <h1>欢迎登录BearBear</h1>
      <Form form={form} onFinish={save}>
        <Form.Item
          name='username'
          rules={rules.username}
          className='mobile-item'
          initialValue={defaultVal.username}
        >
          <Input
            allowClear
            size='large'
            bordered={false}
            placeholder='用户名'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={rules.password}
          className='mobile-item'
          initialValue={defaultVal.password}
        >
          <Input.Password
            allowClear
            size='large'
            bordered={false}
            placeholder='密码'
          />
        </Form.Item>

        <Form.Item>
          <Button
            block
            size='large'
            type='primary'
            htmlType='submit'
            className='save-btn'
          >
            登录
          </Button>
          <Button
            type='text'
            block
            className='forgot-btn'
            onClick={() => {
              message.destroy()
              message.info('暂未开放')
            }}
          >
            忘记密码
          </Button>
        </Form.Item>
      </Form>
    </Wrap>
  )
}

export default LoginMobile
