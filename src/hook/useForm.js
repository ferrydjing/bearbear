import { useEffect, useState } from 'react'
import { log } from '@ferrydjing/utils'
import * as http from '@/api'
import { Form, notification } from 'antd'

const useForm = (props) => {
  const { onCancel, onConfirm, id, url: baseUrl } = props
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
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
    const fetchData = async ({ url, data } = {}) => {
      try {
        const res = await http.get({
          url,
          data
        })
        setLoading(false)
        form.setFieldsValue(res)
      } catch (error) {
        setLoading(false)
      }
    }
    if (id) {
      setLoading(true)
      fetchData({
        url: baseUrl + '/deme-detail',
        data: {
          id
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    if (status === 1) {
      setStatus(0)
      onConfirm()
      notification.success({ message: id ? '修改成功' : '新增成功' })
    }
  }, [id, onConfirm, status])

  return {
    onCancel,
    onConfirm,
    form,
    save,
    loading
  }
}

export default useForm
