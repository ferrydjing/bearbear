import React, { useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Form, Input, Button, Table } from 'antd'
import { PlusOutlined, InfoCircleFilled } from '@ant-design/icons'
import * as Styled from './style'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  })
}

const QueryTable = (props) => {
  const { isMobile } = useSelector(
    (state) => ({
      isMobile: state.getIn(['base', 'isMobile'])
    }),
    shallowEqual
  )

  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    setSelectedRowKeys(selectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  const showTotal = (total) => `总共${total}项`

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
            <Button type='primary' icon={<PlusOutlined />}>
              新建
            </Button>
          </div>
        </div>
        <div className='selection'>
          <InfoCircleFilled />
          已选择<span className='select-item'>{selectedRowKeys.length}</span>项
          <Button
            type='link'
            onClick={() => {
              setSelectedRowKeys([])
            }}
          >
            清空
          </Button>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={{
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal
          }}
        />
      </Styled.Content>
    </Styled.Wrap>
  )
}

export default QueryTable
