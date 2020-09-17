import React, { useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Skeleton } from 'antd'
const { Button } = Skeleton

const Loading = () => {
  const { isMobile } = useSelector(
    (state) => ({
      isMobile: state.getIn(['base', 'isMobile'])
    }),
    shallowEqual
  )
  useEffect(() => {
    NProgress.start()
    return () => {
      NProgress.done()
    }
  }, [])
  return (
    <div style={{ display: 'flex' }}>
      {isMobile ? null : (
        <Button
          style={{ height: '100vh', width: 208, marginRigt: 20 }}
          active
        ></Button>
      )}
      <Skeleton
        active
        paragraph={{ rows: 10 }}
        className='loading-skeleton'
      ></Skeleton>
    </div>
  )
}

export default Loading
