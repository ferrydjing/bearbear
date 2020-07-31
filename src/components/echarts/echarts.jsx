import React, { useEffect, useRef, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { assignDeep } from '@/utils'

const Echarts = (props) => {
  const { options = {}, commonOption, style, className } = props
  const { screenWidth, screenHeight } = useSelector(
    (state) => ({
      screenWidth: state.getIn(['base', 'screenWidth']),
      screenHeight: state.getIn(['base', 'screenHeight'])
    }),
    shallowEqual
  )
  const echartContainer = useRef(null)
  const [myChart, setMyChart] = useState(null)

  const init = () => {
    // eslint-disable-next-line no-undef
    let cc = echarts.init(echartContainer.current)
    cc.setOption(assignDeep(true, {}, commonOption, options))
    setMyChart(cc)
  }

  // 初始化
  useEffect(() => {
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 页面resize重新渲染
  useEffect(() => {
    if (myChart) {
      myChart.resize()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenWidth, screenHeight])

  // 参数更改重新渲染
  useEffect(() => {
    if (myChart) {
      myChart.setOption(assignDeep(true, {}, commonOption, options))
    } else {
      init()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, commonOption])

  return <div ref={echartContainer} style={style} className={className}></div>
}

export default Echarts
