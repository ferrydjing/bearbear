import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { log } from '@ferrydjing/utils'
import { Form, Button, Input, notification, Checkbox } from 'antd'
import { UserAgreement } from '_c'
import styled from 'styled-components'

const rem = (px) => {
  return px / 100 + 'rem'
}

const Wrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: ${rem(650)};
`

const RegisterMobile = (props) => {
  const { setType, setLoading } = props
  const [visible, setVisible] = useState(false)
  const history = useHistory()
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
