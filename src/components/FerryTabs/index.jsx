import React from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import fp from 'lodash/fp'
import { CloseOutlined } from '@ant-design/icons'
import * as Styled from './style'
import * as baseActionCreaters from '@/store/base/actionCreaters'

const FerryTabs = (props) => {
  const { history } = props
  const dispatch = useDispatch()
  const { panes, menuActive } = useSelector(
    (state) => ({
      panes: state.getIn(['base', 'panes']).toJS(),
      menuActive: state.getIn(['base', 'menuActive'])
    }),
    shallowEqual
  )
  const onRemove = (targetKey) => {
    if (menuActive !== targetKey) {
      let arr = fp.filter((item) => item.key !== targetKey, panes)
      dispatch(baseActionCreaters.setTabsPanes(arr))
    } else {
      let arr = fp.filter((item) => item.key !== targetKey, panes)
      dispatch(baseActionCreaters.setTabsPanes(arr))
      history.push(arr[arr.length - 1].key)
    }
  }
  const onTabClick = (key) => {
    if (key !== menuActive) {
      history.push(key)
    }
  }

  return (
    <Styled.Wrap>
      <div className='scroll'>
        {panes.map((item) => {
          return (
            <div
              className={`item ${item.key === menuActive ? 'active' : ''}`}
              key={item.key}
              onClick={() => {
                onTabClick(item.key)
              }}
            >
              {item.title}{' '}
              {item.key !== '/index' ? (
                <CloseOutlined
                  onClick={(e) => {
                    e.stopPropagation()
                    onRemove(item.key)
                  }}
                />
              ) : null}
            </div>
          )
        })}
      </div>
    </Styled.Wrap>
  )
}

export default FerryTabs
