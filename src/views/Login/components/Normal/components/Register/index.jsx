import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Button, Input, notification, Checkbox } from 'antd'
import { log } from '@ferrydjing/utils'
import { UserAgreement } from '_c'
import * as Styled from './style'

const Register = (props) => {
  const [visible, setVisible] = useState(false)
  const { setLoading, history } = props
  const [form] = Form.useForm()
  const [status, setStatus] = useState(0)

  const save = async (values) => {
    setLoading(true)
    log(values)
    setTimeout(() => {
      setLoading(false)
      setStatus(1)
    }, 2000)
  }

  useEffect(() => {
    if (status === 1) {
      setStatus(0)
      notification.success({ message: '注册成功' })
      history.push('/index')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  const rules = {
    username: [
      {
        required: true,
        message: '必填'
      },
      {
        pattern: /^[A-Za-z0-9~!@#$%^&*_.-]{2,20}$/,
        message: '请输入2-20位英文数字或特殊字符'
      }
    ],
    password: [
      {
        required: true,
        message: '必填'
      },
      {
        pattern: /^[A-Za-z0-9~!@#$%^&*_.-]{6,20}$/,
        message: '请输入6-20位英文数字或特殊字符'
      }
    ],
    confirm_password: [
      {
        required: true,
        message: '必填'
      },
      ({ getFieldValue }) => ({
        validator(rule, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve()
          }

          return Promise.reject('两次输入的密码不一致')
        }
      })
    ],
    agree: [
      {
        required: true,
        message: '请同意用户协议'
      }
    ]
  }
  return (
    <Styled.Wrap>
      <Form form={form} onFinish={save}>
        <Form.Item name='username' rules={rules.username}>
          <Input size='large' placeholder='请输入用户名' />
        </Form.Item>
        <Form.Item name='password' rules={rules.password}>
          <Input size='large' type='password' placeholder='请输入密码' />
        </Form.Item>
        <Form.Item name='confirm_password' rules={rules.confirm_password}>
          <Input size='large' type='password' placeholder='请确认密码' />
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

export default withRouter(Register)
