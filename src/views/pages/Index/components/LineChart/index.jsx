import React from 'react'
import { CardWrap } from '../../styled'
import { Echarts } from '_c'

const LineChart = (props) => {
  return (
    <CardWrap>
      <Echarts.Line className='echarts-line' {...props} />
    </CardWrap>
  )
}

export default LineChart
