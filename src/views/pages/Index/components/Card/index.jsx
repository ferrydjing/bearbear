/**
 * @desc 首页卡片（待优化,echarts以及卡片）
 *
 */

import React, { memo, useEffect, useState } from 'react'
import { Tooltip } from 'antd'
import {
  QuestionCircleOutlined,
  CaretUpFilled,
  CaretDownFilled
} from '@ant-design/icons'
import { CardWrap, CardItem, CardBody } from './styled'

const Card = (props) => {
  useEffect(() => {}, [])

  return (
    <CardWrap>
      <CardItem className='card-item'>
        <CardBody>
          <p>
            总销售额
            <Tooltip title='指标说明'>
              <QuestionCircleOutlined></QuestionCircleOutlined>
            </Tooltip>
          </p>
          <h2>¥ 126,560</h2>
          <div className='content'>
            周同比<span style={{ marginLeft: 8 }}>12%</span>
            <CaretUpFilled
              style={{ fontSize: 20, color: 'red', transform: 'scale(0.5)' }}
            ></CaretUpFilled>
            <span style={{ marginLeft: 10 }}>日同比</span>
            <span style={{ marginLeft: 8 }}>12%</span>
            <CaretDownFilled
              style={{ fontSize: 20, color: 'green', transform: 'scale(0.5)' }}
            ></CaretDownFilled>
          </div>
          <div className='info'>
            日销售额<span>￥12,423</span>
          </div>
        </CardBody>
      </CardItem>
      <CardItem className='card-item'>
        <CardBody>
          <p>
            访问量
            <Tooltip title='指标说明'>
              <QuestionCircleOutlined></QuestionCircleOutlined>
            </Tooltip>
          </p>
          <h2>9,846</h2>
          <div className='content' id='line'></div>
          <div className='info'>
            日访问量<span>12,423</span>
          </div>
        </CardBody>
      </CardItem>
      <CardItem className='card-item'>
        <CardBody>
          <p>
            支付笔数
            <Tooltip title='指标说明'>
              <QuestionCircleOutlined></QuestionCircleOutlined>
            </Tooltip>
          </p>
          <h2>6,560</h2>
          <div className='content'></div>
          <div className='info'>
            转化率<span>60%</span>
          </div>
        </CardBody>
      </CardItem>
      <CardItem className='card-item'>
        <CardBody>
          <p>
            运营活动效果
            <Tooltip title='指标说明'>
              <QuestionCircleOutlined></QuestionCircleOutlined>
            </Tooltip>
          </p>
          <h2>78%</h2>
          <div className='content'></div>
          <div className='info'>
            日销售额<span>￥12,423</span>
          </div>
        </CardBody>
      </CardItem>
    </CardWrap>
  )
}

export default memo(Card)
