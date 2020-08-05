import React, { useEffect, useState } from 'react'
import { Form, Button, Input, Spin, notification } from 'antd'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 }
}

const TableForm = (props) => {
  const { onCancel, onConfirm } = props
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(0)
  const [form] = Form.useForm()

  const save = async (values) => {
    setLoading(true)
    // eslint-disable-next-line no-undef
    _ferrydjing.log(values)
    setTimeout(() => {
      setLoading(false)
      setStatus(1)
    }, 2000)
  }

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

  useEffect(() => {
    if (status === 1) {
      setStatus(0)
      onConfirm()
      notification.success({ message: '新增成功' })
    }
  }, [onConfirm, status])

  return (
    <Spin tip='加载中' spinning={loading}>
      <Form {...layout} form={form} onFinish={save}>
        <Form.Item label='姓名' name='name' rules={rules.name}>
          <Input />
        </Form.Item>
        <Form.Item label='年龄' name='age' rules={rules.age}>
          <Input />
        </Form.Item>
        <Form.Item label='地址' name='address' rules={rules.address}>
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
