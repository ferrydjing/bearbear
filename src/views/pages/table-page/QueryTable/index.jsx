import React, { useRef, useEffect, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Form, Input, Button, Modal } from 'antd'
import { PlusOutlined, RedoOutlined } from '@ant-design/icons'
import { FerryTable } from '_c'
import * as Styled from './style'
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

const QueryTable = (props) => {
  const { isMobile } = useSelector(
    (state) => ({
      isMobile: state.getIn(['base', 'isMobile'])
    }),
    shallowEqual
  )

  const [title] = useState('新增')
  const [visible, setVisible] = useState(false)

  const tableRef = useRef(null)

  useEffect(() => {}, [])

  return (
    <Styled.Wrap>
      <Styled.Header>
        <Form className={{ 'header-form': true, 'not-flex': isMobile }}>
          <div className='item-wrap'>
            <Form.Item label='规则名称'>
              <Input placeholder='请输入'></Input>
            </Form.Item>
          </div>
          <div className='item-wrap'>
            <Form.Item label='描述'>
              <Input placeholder='请输入'></Input>
            </Form.Item>
          </div>
          <div className='item-wrap'>
            <Form.Item label='服务调用次数'>
              <Input placeholder='请输入'></Input>
            </Form.Item>
          </div>
          <div className='item-wrap'>
            <Form.Item label='状态'>
              <Input placeholder='请输入'></Input>
            </Form.Item>
          </div>
          <div className='item-wrap'>
            <Form.Item className='btn-wrap'>
              <Button>重置</Button>
              <Button type='primary'>查询</Button>
            </Form.Item>
          </div>
        </Form>
      </Styled.Header>
      <Styled.Content>
        <div className='header'>
          <div className='left'>查询表格</div>
          <div className='right'>
            <Button
              type='primary'
              icon={<PlusOutlined />}
              onClick={() => {
                setVisible(true)
              }}
            >
              新建
            </Button>
            <Button
              type='primary'
              icon={<RedoOutlined />}
              onClick={() => {
                tableRef.current.refresh()
              }}
            >
              刷新
            </Button>
          </div>
        </div>

        <FerryTable
          columns={columns}
          ref={tableRef}
          checked
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

export default QueryTable
