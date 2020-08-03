import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Form, Input, Button } from 'antd'
import * as Styled from './style'

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
    </Styled.Wrap>
  )
}

export default QueryTable
