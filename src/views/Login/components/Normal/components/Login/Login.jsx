import React from 'react'
import { Form, Button, Input, message } from 'antd'
import * as Styled from './style'
import useLogin from '../../../../hook/useLogin'

const Login = (props) => {
  const { save, rules, form, defaultVal } = useLogin(props)

  return (
    <Styled.Wrap>
      <Form form={form} onFinish={save}>
        <Form.Item
          name='username'
          rules={rules.username}
          initialValue={defaultVal.username}
        >
          <Input size='large' placeholder='用户名' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={rules.password}
          initialValue={defaultVal.password}
        >
          <Input.Password size='large' placeholder='密码' />
        </Form.Item>
        <div style={{ textAlign: 'right' }}>
          <Button
            type='text'
            size='small'
            onClick={() => {
              message.destroy()
              message.info('暂未开放')
            }}
          >
            忘记密码
          </Button>
        </div>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='save-btn'
            block
            size='large'
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </Styled.Wrap>
  )
}

export default Login
