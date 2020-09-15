import React, { useState } from 'react'
import { useForm } from '@/hook'
import { Form, Button, Input, Spin } from 'antd'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 }
}

const TableForm = (props) => {
  const { onCancel, loading, save, form } = useForm({
    ...props,
    url: '//rap2.taobao.org:38080/app/mock/248654'
  })
  const [defaultVal] = useState({
    name: '',
    age: '',
    address: ''
  })

  const rules = {
    name: [
      {
        required: true,
        message: '必填'
      }
    ],
    age: [
      {
        required: true,
        message: '必填'
      },
      {
        pattern: /^((1[8-9])|(2[0-9])|(3[0-9])|(4[0-9])|(5[0-9])|60)$/,
        message: '请输入18-60'
      }
    ],
    address: [
      {
        required: true,
        message: '必填'
      }
    ]
  }

  return (
    <Spin tip='加载中' spinning={loading}>
      <Form {...layout} form={form} onFinish={save}>
        <Form.Item
          label='姓名'
          name='name'
          rules={rules.name}
          initialValue={defaultVal.name}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='年龄'
          name='age'
          rules={rules.age}
          initialValue={defaultVal.age}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='地址'
          name='address'
          rules={rules.address}
          initialValue={defaultVal.address}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button onClick={onCancel} style={{ marginRight: 10 }}>
            取消
          </Button>
          <Button type='primary' htmlType='submit'>
            确定
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  )
}

export default TableForm
