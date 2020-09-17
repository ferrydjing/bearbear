import React from 'react'
import { Form, Button, Input, Checkbox } from 'antd'
import { UserAgreement } from '_c'
import * as Styled from './style'
import useRegister from '../../../../hook/useRegister'

const Register = (props) => {
  const { save, rules, form, visible, setVisible } = useRegister(props)
  return (
    <Styled.Wrap>
      <Form form={form} onFinish={save}>
        <Form.Item name='username' rules={rules.username}>
          <Input size='large' placeholder='请输入用户名' />
        </Form.Item>
        <Form.Item name='password' rules={rules.password}>
          <Input.Password size='large' placeholder='请输入密码' />
        </Form.Item>
        <Form.Item name='confirm_password' rules={rules.confirm_password}>
          <Input.Password size='large' placeholder='请确认密码' />
        </Form.Item>
        <Form.Item name='code' rules={rules.code}>
          <Input size='large' placeholder='请输入邀请码' />
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
            className='save-btn'
            block
            size='large'
          >
            注册
          </Button>
        </Form.Item>
      </Form>

      <UserAgreement visible={visible} setVisible={setVisible} />
    </Styled.Wrap>
  )
}

export default Register
