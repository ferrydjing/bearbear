import React, { useState, useEffect } from 'react'
import { Table, Button } from 'antd'
import { InfoCircleFilled } from '@ant-design/icons'
import * as styled from './styled'
import * as http from '@/api'

const FerryTable = (props) => {
  const { checked, url } = props
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [data, setData] = useState({
    count: 0,
    page: 1,
    list: []
  })
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState({
    row: 10,
    page: 1
  })

  const onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    setSelectedRowKeys(selectedRowKeys)
  }

  const rowSelection = checked
    ? {
        selectedRowKeys,
        onChange: onSelectChange
      }
    : null

  const showTotal = (total) => `总共${total}项`

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchData = async (options = {}) => {
    setLoading(true)
    const res = await http.get({
      url,
      data: options.data || query
    })
    setLoading(false)
    setData(res)
  }

  const onTableChange = (pagination, filters, sorter, extra) => {
    console.log(pagination, filters, sorter, extra)
    let obj = {}
    if (extra.action === 'paginate') {
      obj = {
        page: pagination.current,
        row: pagination.pageSize
      }
      setQuery(obj)
    }
    setTimeout(() => {
      fetchData({
        data: obj
      })
    }, 0)
  }

  return (
    <styled.Wrap>
      {checked ? (
        <div className='selection'>
          <InfoCircleFilled />
          已选择<span className='select-item'>{selectedRowKeys.length}</span>项
          <Button
            type='link'
            onClick={() => {
              setSelectedRowKeys([])
            }}
          >
            清空
          </Button>
        </div>
      ) : null}
      <Table
        rowSelection={rowSelection}
        {...props}
        loading={loading}
        dataSource={data.list}
        rowKey={(row) => row.id || row._id || row.key}
        onChange={onTableChange}
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          current: query.page,
          pageSize: query.row,
          total: data.count,
          showTotal
        }}
      />
    </styled.Wrap>
  )
}

export default FerryTable
