import React from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Tabs } from 'antd'
import fp from 'lodash/fp'
import * as Styled from './style'
import * as baseActionCreaters from '@/store/base/actionCreaters'

const { TabPane } = Tabs

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
  const onChange = (avtiveKey) => {}
  const onEdit = (targetKey, action) => {
    if (action === 'remove') {
      if (menuActive !== targetKey) {
        let arr = fp.filter((item) => item.key !== targetKey, panes)
        dispatch(baseActionCreaters.setTabsPanes(arr))
      }
    }
  }
  const onTabClick = (key) => {
    if (key !== menuActive) {
      history.push(key)
    }
  }

  return (
    <Styled.Wrap>
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={menuActive}
        type='editable-card'
        onEdit={onEdit}
        onTabClick={onTabClick}
      >
        {panes.map((pane) => (
          <TabPane tab={pane.title} key={pane.key}>
            {pane.content}
          </TabPane>
        ))}
      </Tabs>
    </Styled.Wrap>
  )
}

export default FerryTabs
