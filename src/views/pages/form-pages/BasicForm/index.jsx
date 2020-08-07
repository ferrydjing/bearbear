import React, { useState } from 'react'
import {
  Form,
  Input,
  Button,
  Radio,
  Checkbox,
  Select,
  Spin,
  notification
} from 'antd'
import { log } from '@ferrydjing/utils'
import { UserAgreement } from '_c'
import * as Styled from './style'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 }
}
const rules = {
  role: [
    {
      required: true,
      message: '必选'
    }
  ],
  email: [
    {
      required: true,
      message: '必填'
    },
    {
      pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: '请输入邮箱地址'
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
      message: '必选'
    }
  ]
}

const hobbyList = [
  {
    txt: '篮球',
    value: 'backetball'
  },
  {
    txt: '足球',
    value: 'football'
  },
  {
    txt: '写作',
    value: 'writting'
  },
  {
    txt: '阅读',
    value: 'reading'
  }
]

const BasicForm = (props) => {
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const [form] = Form.useForm()

  const save = (values) => {
    log(values)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      notification.success({
        message: '操作成功'
      })
    }, 2000)
  }

  return (
    <Styled.Wrap>
      <h1>基础表单</h1>
      <Spin spinning={loading}>
        <Form {...layout} form={form} onFinish={save}>
          <Form.Item
            label='角色'
            name='role'
            rules={rules.role}
            initialValue={1}
          >
            <Radio.Group>
              <Radio value={0}>管理员</Radio>
              <Radio value={1}>游客</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label='邮箱' name='email' rules={rules.email}>
            <Input placeholder='请输入邮箱' />
          </Form.Item>
          <Form.Item label='密码' name='password' rules={rules.password}>
            <Input.Password placeholder='请输入密码' />
          </Form.Item>
          <Form.Item
            label='确认密码'
            name='confirm_password'
            rules={rules.confirm_password}
          >
            <Input.Password placeholder='请确认密码' />
          </Form.Item>
          <Form.Item label='国籍' name='nation' rules={rules.nation}>
            <Select placeholder='请选择国籍'>
              <Select.Option value='china'>中国</Select.Option>
              <Select.Option value='usa'>美国</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='hobby'
            label='爱好'
            rules={rules.hobby}
            initialValue={[]}
          >
            <Checkbox.Group>
              {hobbyList.map((item) => (
                <Checkbox key={item.value} value={item.value}>
                  {item.txt}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </Form.Item>
          <Form.Item
            name='agree'
            valuePropName='checked'
            rules={rules.agree}
            wrapperCol={{ offset: 4, span: 16 }}
          >
            <Checkbox.Group>
              <Checkbox>
                我已阅读并同意
                <Button
                  type='link'
                  size='small'
                  style={{ padding: 0 }}
                  onClick={() => {
                    setVisible(true)
                  }}
                >
                  《BearBear用户协议》
                </Button>
              </Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              确定
            </Button>
          </Form.Item>
        </Form>
      </Spin>
      <UserAgreement visible={visible} setVisible={setVisible} />
    </Styled.Wrap>
  )
}

export default BasicForm
