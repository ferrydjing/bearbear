import React from 'react'
import { Form, Button, Input } from 'antd'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 }
}

const TableForm = (props) => {
  const { onCancel, onConfirm } = props

  const save = () => {
    onConfirm()
  }

  return (
    <Form {...layout}>
      <Form.Item label='姓名' name='name'>
        <Input />
      </Form.Item>
      <Form.Item label='年龄' name='age'>
        <Input />
      </Form.Item>
      <Form.Item label='地址' name='address'>
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button onClick={onCancel} style={{ marginRight: 10 }}>
          取消
        </Button>
        <Button type='primary' onClick={save}>
          确定
        </Button>
      </Form.Item>
    </Form>
  )
}

export default TableForm
