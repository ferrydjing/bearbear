import React, { useRef, useState } from 'react'
import * as Styled from './style'
import { log } from '@ferrydjing/utils'
import { Button, Input, Modal, Space } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { FerryTable } from '_c'
import TableForm from './components/TableForm'

const StandardTable = (props) => {
  const tableRef = useRef(null)
  const [title, setTitle] = useState('新增')
  const [visible, setVisible] = useState(false)
  const [id, setId] = useState(null)
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name'
    },
    {
      title: '年龄',
      dataIndex: 'age'
    },
    {
      title: '地址',
      dataIndex: 'address'
    },
    {
      title: '操作',
      render: (text, record) => {
        return (
          <Space>
            <Button
              size='small'
              type='primary'
              onClick={() => {
                modifyHandle(record)
              }}
            >
              修改
            </Button>
            <Button size='small'>删除</Button>
          </Space>
        )
      }
    }
  ]

  const modifyHandle = (data) => {
    log(data)
    setId(data.id)
    setTitle('修改')
    setVisible(true)
  }

  return (
    <Styled.Wrap>
      <Styled.Content>
        <div className='header'>
          <div className='left'>标准表格</div>
          <div className='right'>
            <Input placeholder='请输入'></Input>
          </div>
        </div>
        <Button
          type='dashed'
          block
          icon={<PlusOutlined />}
          className='add'
          onClick={() => {
            setId(null)
            setTitle('新增')
            setVisible(true)
          }}
        >
          添加
        </Button>
        <FerryTable
          columns={columns}
          ref={tableRef}
          url='//rap2.taobao.org:38080/app/mock/248654/demo-list'
        ></FerryTable>
      </Styled.Content>
      <Modal
        title={title}
        visible={visible}
        footer={null}
        width={750}
        onCancel={() => {
          setVisible(false)
        }}
      >
        {visible ? (
          <TableForm
            id={id}
            onCancel={() => {
              setVisible(false)
            }}
            onConfirm={() => {
              setVisible(false)
              tableRef.current.refresh()
            }}
          ></TableForm>
        ) : null}
      </Modal>
    </Styled.Wrap>
  )
}

export default StandardTable
