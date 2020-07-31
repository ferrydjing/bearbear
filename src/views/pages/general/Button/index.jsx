import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { PageInfo } from '_c'
import {
  ButtonPageWrap,
  ButtonPageContanier,
  ContainerItem,
  Item
} from './styled'
import * as actionCreaters from './store/actionCreaters'

const PageButton = (props) => {
  const { loading } = useSelector(
    (state) => ({
      loading: state.getIn(['button', 'loading'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  const loadingChange = (value) => {
    dispatch(actionCreaters.setBtnLoading(value))
    setTimeout(() => {
      dispatch(actionCreaters.setBtnLoading(false))
    }, 2000)
  }

  return (
    <ButtonPageWrap>
      <PageInfo title='Button 按钮'>
        <p>按钮用于开始一个即时操作。</p>
      </PageInfo>
      <ButtonPageContanier>
        <ContainerItem>
          <Item>
            <Button>Default</Button>
            <Button type='primary'>Primary</Button>
            <Button danger type='primary'>
              Danger
            </Button>
            <Button type='dashed'>Dashed</Button>
            <Button type='text'>text</Button>
            <Button type='link'>Link</Button>
          </Item>

          <Item>
            <Button loading>Loading</Button>
            <Button
              type='primary'
              loading={loading}
              onClick={() => {
                loadingChange(true)
              }}
            >
              click me
            </Button>

            <Button
              type='primary'
              loading={loading}
              icon={<SearchOutlined />}
              onClick={() => {
                loadingChange(true)
              }}
            >
              click me
            </Button>
            <Button
              type='primary'
              loading={loading}
              icon={<SearchOutlined />}
              onClick={() => {
                loadingChange(true)
              }}
            />
          </Item>

          <Item>
            <Button shape='round'>Round</Button>
            <Button shape='round' size='small' icon={<SearchOutlined />} />
            <Button shape='round' icon={<SearchOutlined />} />
            <Button shape='round' size='large' icon={<SearchOutlined />} />
          </Item>
        </ContainerItem>
        <ContainerItem>
          <Item>
            <Button
              shape='circle'
              type='primary'
              icon={<SearchOutlined />}
            ></Button>
            <Button shape='circle' type='primary'>
              A
            </Button>
            <Button type='primary' icon={<SearchOutlined />}>
              Search
            </Button>
            <Button shape='circle' icon={<SearchOutlined />}></Button>
            <Button icon={<SearchOutlined />}>Search</Button>
          </Item>
          <Item className='mt'>
            <Button block>default</Button>
            <Button block type='primary'>
              primary
            </Button>
            <Button block danger type='primary'>
              Danger
            </Button>
            <Button block type='link'>
              Link
            </Button>
          </Item>
        </ContainerItem>
      </ButtonPageContanier>
    </ButtonPageWrap>
  )
}

export default memo(PageButton)
