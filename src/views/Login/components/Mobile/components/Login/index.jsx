import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { log } from '@ferrydjing/utils'
import { Form, Button, Input, notification, message } from 'antd'

const rem = (px) => {
  return px / 100 + 'rem'
}

const Wrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: ${rem(650)};
`

const LoginMobile = (props) => {
  const { setType, setLoading } = props
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
      notification.success({ message: '登录成功' })
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
    ]
  }

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
        >
          <Input allowClear size='large' bordered={false} placeholder='密码' />
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
