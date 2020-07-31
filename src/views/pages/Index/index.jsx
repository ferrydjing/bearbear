import React, { memo, useState, useEffect } from 'react'
import { IndexWrap, IndexContainer } from './styled'
import { Card, LineChart } from './components'

const Index = (props) => {
  const [options, setOptions] = useState({
    xAxis: {
      data: []
    },
    series: []
  })

  useEffect(() => {
    setOptions({
      ...options,
      xAxis: {
        data: [
          '2020-07-01',
          '2020-07-02',
          '2020-07-03',
          '2020-07-04',
          '2020-07-05',
          '2020-07-06',
          '2020-07-07'
        ]
      },
      series: [
        {
          data: [11, 22, 33, 43, 52, 12, 54]
        }
      ]
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <IndexWrap>
      <Card />
      <IndexContainer>
        <LineChart options={options} />
      </IndexContainer>
    </IndexWrap>
  )
}

export default memo(Index)
