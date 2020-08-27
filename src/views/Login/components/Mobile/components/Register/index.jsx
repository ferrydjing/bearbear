import React from 'react'
import { Form, Button, Input, Checkbox } from 'antd'
import { UserAgreement } from '_c'
import styled from 'styled-components'
import useRegister from '../../../../hook/useRegister'

const rem = (px) => {
  return px / 100 + 'rem'
}

const Wrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: ${rem(650)};
`

const RegisterMobile = (props) => {
  const { save, rules, form, visible, setVisible, setType } = useRegister(props)

  return (
    <Wrap>
      <div className='c-mobile-login__to-register'>
        <span
          onClick={() => {
            setType('login')
          }}
        >
          登录
        </span>
      </div>
      <h1>账号注册</h1>
      <Form form={form} onFinish={save}>
        <Form.Item
          name='username'
          rules={rules.username}
          className='mobile-item'
        >
          <Input
            allowClear
            size='large'
            bordered={false}
            placeholder='请输入用户名'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={rules.password}
          className='mobile-item'
        >
          <Input
            allowClear
            size='large'
            bordered={false}
            type='password'
            placeholder='请输入密码'
          />
        </Form.Item>
        <Form.Item
          name='confirm_password'
          rules={rules.confirm_password}
          className='mobile-item'
        >
          <Input
            allowClear
            size='large'
            bordered={false}
            type='password'
            placeholder='请确认密码'
          />
        </Form.Item>
        <Form.Item name='code' rules={rules.code} className='mobile-item'>
          <Input
            allowClear
            size='large'
            bordered={false}
            placeholder='请输入邀请码'
          />
        </Form.Item>
        <Form.Item name='agree' valuePropName='checked' rules={rules.agree}>
          <Checkbox>
            我已阅读并同意
            <Button
              type='link'
              size='small'
              style={{ padding: 0 }}
              value={true}
              onClick={() => {
                setVisible(true)
              }}
            >
              《BearBear用户协议》
            </Button>
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='save-btn-register'
            block
            size='large'
          >
            注册
          </Button>
        </Form.Item>
      </Form>
      <UserAgreement visible={visible} setVisible={setVisible} />
    </Wrap>
  )
}

export default RegisterMobile
