import React, { useRef, useState } from 'react'
import * as Styled from './style'
import { Button, Input, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { FerryTable } from '_c'
import TableForm from './components/TableForm'

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
  }
]

const StandardTable = (props) => {
  const tableRef = useRef(null)
  const [title] = useState('新增')
  const [visible, setVisible] = useState(false)
  return (
    <Styled.Wrap>
      <Styled.Content>
        <div className='header'>
          <div className='left'>查询表格</div>
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
