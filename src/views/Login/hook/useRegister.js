import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, notification } from 'antd'
import { log } from '@ferrydjing/utils'

const useRegister = (props) => {
  const [visible, setVisible] = useState(false)
  const [rules] = useState({
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
  })
  const { setLoading, setType } = props
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

  return {
    save,
    rules,
    form,
    visible,
    setVisible,
    setType
  }
}

export default useRegister
