import { useState, useEffect } from 'react'
import { log } from '@ferrydjing/utils'
import { message, notification, Form } from 'antd'
import { useHistory } from 'react-router-dom'

const useLogin = (props) => {
  const { setLoading, setType } = props
  const history = useHistory()
  const [form] = Form.useForm()
  const [status, setStatus] = useState(0)
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
    ]
  })

  const save = async (values) => {
    setLoading(true)
    log(values)
    if (values.username === 'admin' && values.password === '123456') {
      setTimeout(() => {
        setLoading(false)
        setStatus(1)
      }, 2000)
    } else {
      setLoading(false)
      message.warning('用户名密码错误')
    }
  }

  useEffect(() => {
    if (status === 1) {
      setStatus(0)
      notification.success({ message: '登录成功' })
      history.push('/index')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  return { save, rules, form, setType }
}

export default useLogin
