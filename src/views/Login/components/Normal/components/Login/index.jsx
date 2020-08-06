import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Button, Input, notification, message } from 'antd'
import { log } from '@ferrydjing/utils'
import * as Styled from './style'

const Login = (props) => {
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
    <Styled.Wrap>
      <Form form={form} onFinish={save}>
        <Form.Item name='username' rules={rules.username}>
          <Input size='large' placeholder='用户名' />
        </Form.Item>
        <Form.Item name='password' rules={rules.password}>
          <Input size='large' placeholder='密码' />
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

export default withRouter(Login)
