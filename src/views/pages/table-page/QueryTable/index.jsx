import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { FerryTable } from '_c'
import * as Styled from './style'

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

        <FerryTable
          columns={columns}
          url='http://rap2.taobao.org:38080/app/mock/248654/demo-list'
        ></FerryTable>
      </Styled.Content>
    </Styled.Wrap>
  )
}

export default QueryTable
